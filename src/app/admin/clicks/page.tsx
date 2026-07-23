import { redirect } from "next/navigation";
import { and, desc, eq, gte, lt, inArray, isNotNull, sql } from "drizzle-orm";
import { isDbConfigured, requireDb } from "@/db";
import { clickEvents } from "@/db/schema";
import { isAdminAuthed } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// robots.txt disallows /admin/ from crawling, but disallowed URLs can still be
// indexed URL-only — the meta tag keeps them out of the index entirely.
export const metadata = { robots: { index: false, follow: false } };

const EVENTS = ["phone_click", "whatsapp_click", "form_submit", "quote_click", "chat_open"] as const;

const LABELS: Record<string, string> = {
  phone_click: "Telefon",
  whatsapp_click: "WhatsApp",
  form_submit: "Form",
  quote_click: "Teklif",
  chat_open: "Sohbet",
};

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Europe/Istanbul",
});

/** Distinct colors so the same IP is instantly recognizable across rows. */
const IP_COLORS = [
  "#0ea5e9", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6",
  "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#84cc16",
];

type SP = { period?: string; from?: string; to?: string };

/** Türkiye (UTC+3, no DST) is fixed — build day boundaries with a +03:00 offset. */
function resolveRange(sp: SP) {
  const now = new Date();
  const istToday = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(now); // YYYY-MM-DD
  const todayStart = new Date(`${istToday}T00:00:00+03:00`);
  const period = sp.period ?? "30d";

  if (period === "today") return { period, from: todayStart, to: now, label: "Bugün", fromStr: istToday, toStr: istToday };
  if (period === "yesterday") {
    const y = new Date(todayStart.getTime() - 86400000);
    const yStr = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(y);
    return { period, from: y, to: todayStart, label: "Dün", fromStr: yStr, toStr: yStr };
  }
  if (period === "custom" && sp.from && sp.to) {
    const from = new Date(`${sp.from}T00:00:00+03:00`);
    const to = new Date(new Date(`${sp.to}T00:00:00+03:00`).getTime() + 86400000); // include the whole "to" day
    if (!Number.isNaN(from.getTime()) && !Number.isNaN(to.getTime()) && from < to) {
      return { period, from, to, label: `${sp.from} – ${sp.to}`, fromStr: sp.from, toStr: sp.to };
    }
  }
  const days = period === "7d" ? 7 : period === "90d" ? 90 : 30;
  return {
    period: period === "7d" || period === "90d" ? period : "30d",
    from: new Date(now.getTime() - days * 86400000),
    to: now,
    label: `Son ${days} gün`,
    fromStr: istToday,
    toStr: istToday,
  };
}

const PRESETS: { key: string; label: string }[] = [
  { key: "today", label: "Bugün" },
  { key: "yesterday", label: "Dün" },
  { key: "7d", label: "7 Gün" },
  { key: "30d", label: "30 Gün" },
  { key: "90d", label: "90 Gün" },
];

export default async function AdminClicksPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  if (!(await isAdminAuthed())) redirect("/admin/login");

  if (!isDbConfigured) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-card border border-line bg-surface p-8 text-center">
          <h1 className="text-xl font-bold text-ink">Veritabanı yapılandırılmamış</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Tıklama raporunu görüntülemek için sunucu ortam değişkeni{" "}
            <code className="rounded bg-surface-alt px-1 py-0.5 font-mono">
              DATABASE_URL
            </code>{" "}
            tanımlanmalıdır.
          </p>
        </div>
      </main>
    );
  }

  const sp = await searchParams;
  const range = resolveRange(sp);
  const db = requireDb();
  const baseWhere = and(
    inArray(clickEvents.name, [...EVENTS]),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const visitWhere = and(
    eq(clickEvents.name, "page_view"),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const [byName, agg, ipGroups, rows, visitAgg] = await Promise.all([
    db
      .select({ name: clickEvents.name, c: sql<number>`count(*)::int` })
      .from(clickEvents)
      .where(baseWhere)
      .groupBy(clickEvents.name),
    db
      .select({
        total: sql<number>`count(*)::int`,
        uniqueIps: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(baseWhere),
    db
      .select({ ip: clickEvents.ipHash, c: sql<number>`count(*)::int` })
      .from(clickEvents)
      .where(and(baseWhere, isNotNull(clickEvents.ipHash)))
      .groupBy(clickEvents.ipHash)
      .orderBy(desc(sql`count(*)`)),
    db.select().from(clickEvents).where(baseWhere).orderBy(desc(clickEvents.occurredAt)).limit(200),
    db
      .select({
        visits: sql<number>`count(*)::int`,
        visitors: sql<number>`count(distinct ${clickEvents.sessionId})::int`,
        ips: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(visitWhere),
  ]);

  const visits = Number(visitAgg[0]?.visits ?? 0);
  const visitVisitors = Number(visitAgg[0]?.visitors ?? 0);
  const visitIps = Number(visitAgg[0]?.ips ?? 0);

  const counts: Record<string, number> = {};
  for (const ev of EVENTS) counts[ev] = 0;
  for (const r of byName) counts[r.name] = Number(r.c);

  const total = Number(agg[0]?.total ?? 0);
  const uniqueIps = Number(agg[0]?.uniqueIps ?? 0);
  const repeatIps = ipGroups.filter((g) => Number(g.c) > 1).length;

  // Map each distinct IP hash to a stable label/color/count (busiest = #1).
  const ipInfo = new Map<string, { label: string; color: string; count: number }>();
  ipGroups.forEach((g, i) => {
    if (!g.ip) return;
    ipInfo.set(g.ip, { label: `IP #${i + 1}`, color: IP_COLORS[i % IP_COLORS.length], count: Number(g.c) });
  });

  const presetHref = (key: string) =>
    key === "custom"
      ? `/admin/clicks?period=custom&from=${range.fromStr}&to=${range.toStr}`
      : `/admin/clicks?period=${key}`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">Tıklama Raporu</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Seçili dönem: {range.label} · Türkiye saati ·{" "}
            <a href="/admin/forms" className="font-semibold text-brand-green-dark underline">
              Form Talepleri →
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <a
              key={p.key}
              href={presetHref(p.key)}
              className={`rounded-btn px-3 py-1.5 text-sm font-medium transition ${
                p.key === range.period
                  ? "bg-brand-green text-white"
                  : "border border-line bg-surface text-ink-soft hover:border-brand-green"
              }`}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* Custom date range */}
      <form method="get" className="mt-6 flex flex-wrap items-end gap-3 rounded-card border border-line bg-surface p-5">
        <input type="hidden" name="period" value="custom" />
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-soft">Başlangıç</label>
          <input type="date" name="from" defaultValue={range.fromStr} className="rounded-btn border border-line bg-surface px-3 py-2 text-sm text-ink" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-soft">Bitiş</label>
          <input type="date" name="to" defaultValue={range.toStr} className="rounded-btn border border-line bg-surface px-3 py-2 text-sm text-ink" />
        </div>
        <button type="submit" className="rounded-btn bg-brand-green px-5 py-2 text-sm font-semibold text-white">
          Tarih aralığını uygula
        </button>
      </form>

      {/* Visit summary (everyone — including people who don't call/form) */}
      <h2 className="mt-8 text-lg font-bold text-ink">Ziyaret Özeti</h2>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Toplam ziyaret</p>
          <p className="mt-1 text-3xl font-bold text-ink">{visits}</p>
          <p className="mt-1 text-xs text-ink-muted">sayfa görüntüleme</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Benzersiz ziyaretçi</p>
          <p className="mt-1 text-3xl font-bold text-ink">{visitVisitors}</p>
          <p className="mt-1 text-xs text-ink-muted">farklı oturum</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Benzersiz IP</p>
          <p className="mt-1 text-3xl font-bold text-ink">{visitIps}</p>
          <p className="mt-1 text-xs text-ink-muted">farklı IP adresi</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-soft">
        Siteyi ziyaret eden herkes sayılır (arama/form yapmasa bile).{" "}
        {visits > 0
          ? `Bu dönemde ${visits} ziyaretin ${total} tanesi bir butona tıklamayla sonuçlandı (≈%${Math.round(
              (total / visits) * 100,
            )} dönüşüm).`
          : "Ziyaret verisi bu özellik yayına alındıktan sonraki ziyaretler için birikir."}
      </p>

      {/* KPI cards */}
      <h2 className="mt-8 text-lg font-bold text-ink">Buton Tıklamaları</h2>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {EVENTS.map((ev) => (
          <div key={ev} className="rounded-card border border-line bg-surface p-5">
            <p className="text-sm text-ink-soft">{LABELS[ev]}</p>
            <p className="mt-1 text-3xl font-bold text-ink">{counts[ev]}</p>
          </div>
        ))}
      </div>

      {/* IP signal */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-line bg-surface p-5">
          <p className="text-sm text-ink-soft">Toplam tıklama</p>
          <p className="mt-1 text-3xl font-bold text-ink">{total}</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <p className="text-sm text-ink-soft">Farklı IP</p>
          <p className="mt-1 text-3xl font-bold text-ink">{uniqueIps}</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <p className="text-sm text-ink-soft">Tekrar eden IP</p>
          <p className="mt-1 text-3xl font-bold text-ink">{repeatIps}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        Her farklı IP&apos;ye bir renk/numara verilir. Aynı renk = büyük olasılıkla aynı kişi/cihaz;
        farklı renkler = farklı ziyaretçiler. IP&apos;ler gizlilik için geri döndürülemez şekilde
        özetlenir (ham IP saklanmaz).
      </p>

      {/* Recent clicks table */}
      <div className="mt-6 overflow-hidden rounded-card border border-line bg-surface">
        <div className="border-b border-line px-5 py-4">
          <h2 className="font-semibold text-ink">Son Tıklamalar</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-alt text-ink-soft">
              <tr>
                <th className="px-5 py-3 font-medium">Zaman</th>
                <th className="px-5 py-3 font-medium">Buton</th>
                <th className="px-5 py-3 font-medium">Yer</th>
                <th className="px-5 py-3 font-medium">Sayfa</th>
                <th className="px-5 py-3 font-medium">IP</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-ink-muted">
                    Bu aralıkta tıklama kaydı yok.
                  </td>
                </tr>
              ) : (
                rows.map((r) => {
                  const info = r.ipHash ? ipInfo.get(r.ipHash) : undefined;
                  return (
                    <tr key={r.id} className="border-t border-line">
                      <td className="px-5 py-3 text-ink">{dateFmt.format(r.occurredAt)}</td>
                      <td className="px-5 py-3 text-ink">{LABELS[r.name] ?? r.name}</td>
                      <td className="px-5 py-3 text-ink-soft">{r.location ?? "—"}</td>
                      <td className="px-5 py-3 text-ink-soft">{r.pageUrl ?? "—"}</td>
                      <td className="px-5 py-3">
                        {info ? (
                          <span
                            title={`${info.count} tıklama bu IP'den`}
                            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                            style={{ backgroundColor: info.color }}
                          >
                            {info.label}
                            {info.count > 1 && <span className="opacity-80">×{info.count}</span>}
                          </span>
                        ) : (
                          <span className="text-xs text-ink-muted">IP yok</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
