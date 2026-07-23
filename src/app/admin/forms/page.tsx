import { redirect } from "next/navigation";
import { and, desc, gte, lt, sql } from "drizzle-orm";
import { isDbConfigured, requireDb } from "@/db";
import { formSubmissions } from "@/db/schema";
import { isAdminAuthed } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// robots.txt disallows /admin/ from crawling, but disallowed URLs can still be
// indexed URL-only — the meta tag keeps them out of the index entirely.
export const metadata = { robots: { index: false, follow: false } };

const FORM_LABELS: Record<string, string> = {
  quote_form: "Teklif Formu",
  quick_contact_form: "Hızlı İletişim",
  contact_form: "İletişim Formu",
};

const CONTACT_LABELS: Record<string, string> = {
  phone: "Telefon",
  whatsapp: "WhatsApp",
  email: "E-posta",
};

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Istanbul",
});

type SP = { period?: string; from?: string; to?: string };

/** Türkiye (UTC+3, no DST) is fixed — build day boundaries with a +03:00 offset. */
function resolveRange(sp: SP) {
  const now = new Date();
  const istToday = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(now);
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
    const to = new Date(new Date(`${sp.to}T00:00:00+03:00`).getTime() + 86400000);
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

export default async function AdminFormsPage({
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
            Form taleplerini görüntülemek için sunucu ortam değişkeni{" "}
            <code className="rounded bg-surface-alt px-1 py-0.5 font-mono">DATABASE_URL</code>{" "}
            tanımlanmalıdır.
          </p>
        </div>
      </main>
    );
  }

  const sp = await searchParams;
  const range = resolveRange(sp);
  const db = requireDb();
  const where = and(
    gte(formSubmissions.createdAt, range.from),
    lt(formSubmissions.createdAt, range.to),
  );

  const [rows, agg] = await Promise.all([
    db.select().from(formSubmissions).where(where).orderBy(desc(formSubmissions.createdAt)).limit(200),
    db
      .select({ total: sql<number>`count(*)::int` })
      .from(formSubmissions)
      .where(where),
  ]);

  const total = Number(agg[0]?.total ?? 0);
  const fromAds = rows.filter((r) => r.gclid).length;

  const presetHref = (key: string) =>
    key === "custom"
      ? `/admin/forms?period=custom&from=${range.fromStr}&to=${range.toStr}`
      : `/admin/forms?period=${key}`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">Form Talepleri</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Seçili dönem: {range.label} · Türkiye saati ·{" "}
            <a href="/admin/clicks" className="font-semibold text-brand-green-dark underline">
              Tıklama Raporu →
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

      {/* Summary */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Toplam talep</p>
          <p className="mt-1 text-3xl font-bold text-ink">{total}</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Reklamdan gelen</p>
          <p className="mt-1 text-3xl font-bold text-ink">{fromAds}</p>
          <p className="mt-1 text-xs text-ink-muted">gclid ile eşleşen</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5 text-center">
          <p className="text-sm text-ink-soft">Gösterilen</p>
          <p className="mt-1 text-3xl font-bold text-ink">{rows.length}</p>
          <p className="mt-1 text-xs text-ink-muted">son 200 kayıt</p>
        </div>
      </div>

      {/* Lead cards */}
      <h2 className="mt-8 text-lg font-bold text-ink">Talepler</h2>
      {rows.length === 0 ? (
        <div className="mt-3 rounded-card border border-line bg-surface p-8 text-center text-sm text-ink-soft">
          Bu dönemde form talebi yok. Form gönderimleri bu özellik yayına alındıktan sonra burada birikir.
        </div>
      ) : (
        <div className="mt-3 space-y-4">
          {rows.map((r) => {
            const vehicle = [r.brand, r.model, r.year, r.fuel].filter(Boolean).join(" · ");
            return (
              <div key={r.id} className="rounded-card border border-line bg-surface p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-bold text-ink">{r.name}</p>
                    <a href={`tel:${r.phone}`} className="text-[15px] font-semibold text-brand-green-dark">
                      {r.phone}
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-brand-green-soft px-2.5 py-1 font-semibold text-brand-green-dark">
                      {FORM_LABELS[r.formName] ?? r.formName}
                    </span>
                    {r.gclid && (
                      <span className="rounded-full bg-brand-purple-soft px-2.5 py-1 font-semibold text-brand-purple">
                        Google Ads
                      </span>
                    )}
                    {r.utmSource && !r.gclid && (
                      <span className="rounded-full bg-surface-alt px-2.5 py-1 font-medium text-ink-soft">
                        {r.utmSource}
                      </span>
                    )}
                    <span className="text-ink-muted">{dateFmt.format(r.createdAt)}</span>
                  </div>
                </div>
                <div className="mt-3 grid gap-2 text-[13.5px] text-ink-soft sm:grid-cols-2">
                  {r.service && <p><span className="font-semibold text-ink">Araç türü:</span> {r.service}</p>}
                  {vehicle && <p><span className="font-semibold text-ink">Araç:</span> {vehicle}</p>}
                  {r.contactMethod && (
                    <p><span className="font-semibold text-ink">İletişim tercihi:</span> {CONTACT_LABELS[r.contactMethod] ?? r.contactMethod}</p>
                  )}
                  {r.pageUrl && <p><span className="font-semibold text-ink">Sayfa:</span> {r.pageUrl}</p>}
                  {r.utmCampaign && <p><span className="font-semibold text-ink">Kampanya:</span> {r.utmCampaign}</p>}
                </div>
                {r.damage && (
                  <p className="mt-2 rounded-lg bg-surface-alt p-3 text-[13.5px] text-ink-soft">
                    <span className="font-semibold text-ink">Hasar:</span> {r.damage}
                  </p>
                )}
                {r.message && (
                  <p className="mt-2 rounded-lg bg-surface-alt p-3 text-[13.5px] text-ink-soft">
                    <span className="font-semibold text-ink">Mesaj:</span> {r.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
