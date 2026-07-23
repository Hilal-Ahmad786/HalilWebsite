'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, X, ShieldCheck, Clock, BadgeCheck, Send, Loader2, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackFormSubmit, trackPhoneClick, submitLead } from '@/lib/analytics';
import Container from '@/components/shared/Container';
import { cn } from '@/lib/cn';

const MAX_FILES = 6;
const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const ACCEPTED = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

interface Preview {
  id: string;
  name: string;
  url: string;
}

const inputClass =
  'h-12 w-full rounded-[10px] border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-ink-muted ' +
  'transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25';

export default function QuoteFormSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    fuel: '',
    damage: '',
    contactMethod: 'phone',
  });
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const next: Preview[] = [];
    Array.from(files).forEach((file) => {
      if (!ACCEPTED.includes(file.type) || file.size > MAX_SIZE) return;
      next.push({ id: `${file.name}-${file.size}-${file.lastModified}`, name: file.name, url: URL.createObjectURL(file) });
    });
    setPreviews((prev) => [...prev, ...next].slice(0, MAX_FILES));
  };

  const removePreview = (id: string) =>
    setPreviews((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((p) => p.id !== id);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      trackFormSubmit('quote_form');
      // Persist the lead server-side so it's readable in /admin/forms
      submitLead({
        formName: 'quote_form',
        name: form.name,
        phone: form.phone,
        brand: form.brand,
        model: form.model,
        year: form.year,
        fuel: form.fuel,
        damage: form.damage,
        contactMethod: form.contactMethod,
      });
      const contact =
        form.contactMethod === 'whatsapp' ? 'WhatsApp' : form.contactMethod === 'email' ? 'E-posta' : 'Telefon';
      const msg =
        `*Araç Teklif Talebi*\n\n` +
        `👤 İsim: ${form.name}\n` +
        `📞 Telefon: ${form.phone}\n` +
        (form.brand ? `🚗 Marka: ${form.brand}\n` : '') +
        (form.model ? `🔧 Model: ${form.model}\n` : '') +
        (form.year ? `📅 Yıl: ${form.year}\n` : '') +
        (form.fuel ? `⛽ Yakıt: ${form.fuel}\n` : '') +
        (form.damage ? `⚠️ Hasar: ${form.damage}\n` : '') +
        `📬 İletişim Tercihi: ${contact}` +
        (previews.length ? `\n📸 ${previews.length} fotoğraf WhatsApp üzerinden gönderilecek.` : '');

      await new Promise((r) => setTimeout(r, 400));
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
      setDone(true);
      setForm({ name: '', phone: '', brand: '', model: '', year: '', fuel: '', damage: '', contactMethod: 'phone' });
      previews.forEach((p) => URL.revokeObjectURL(p.url));
      setPreviews([]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section bg-surface-purple">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="grid lg:grid-cols-[320px_1fr]">
            {/* Info / pitch column */}
            <aside className="relative flex flex-col gap-6 overflow-hidden border-b border-line bg-navy-900 p-7 text-white lg:border-b-0 lg:border-r lg:p-8">
              {/* accent glows */}
              <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-green/15 blur-3xl" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-brand-purple/10 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-7 bg-brand-purple/70" aria-hidden="true" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-purple">Teklif Formu</span>
                </div>
                <h2 className="mt-4 text-[24px] font-extrabold leading-[1.2] text-white">
                  Aracınız için <span className="text-brand-green">hızlı teklif</span> alın
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                  Aracınızın bilgilerini paylaşın, 30 dakika içinde en iyi teklifi sizinle paylaşalım.
                </p>
              </div>

              <ul className="relative space-y-2.5">
                {[
                  { icon: Clock, t: '30 dakikada ön teklif', d: 'Fotoğraf ve bilgilerle hızlı değerlendirme.' },
                  { icon: ShieldCheck, t: 'Bilgileriniz gizli tutulur', d: 'Verileriniz sadece teklif için kullanılır.' },
                  { icon: BadgeCheck, t: 'Ücretsiz ekspertiz ve çekici', d: 'Yerinde değerleme, masrafsız çekici.' },
                ].map(({ icon: Icon, t, d }) => (
                  <li key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14px] font-bold text-white">{t}</span>
                      <span className="block text-[12.5px] leading-snug text-white/55">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Trust stats */}
              <div className="relative grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="text-[20px] font-extrabold leading-none text-brand-green">5+</p>
                  <p className="mt-1 text-[12px] text-white/55">Yıl Tecrübe</p>
                </div>
                <div>
                  <p className="text-[20px] font-extrabold leading-none text-brand-green">10.000+</p>
                  <p className="mt-1 text-[12px] text-white/55">Mutlu Müşteri</p>
                </div>
              </div>

              {/* Phone CTA pinned to the bottom — fills the column */}
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneClick('quote-form-aside')}
                className="relative mt-auto flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-brand-green/40 hover:bg-white/10"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] text-white/60">Acele mi? Hemen arayın</span>
                  <span className="block text-[16px] font-extrabold text-white">{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </aside>

            {/* Form */}
            {/* Native validation gates onSubmit — tracking only fires for valid submissions */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Adınız Soyadınız" htmlFor="q-name">
                  <input id="q-name" name="name" required value={form.name} onChange={update} placeholder="Ad Soyad" className={inputClass} />
                </Field>
                <Field label="Telefon Numaranız" htmlFor="q-phone">
                  <input id="q-phone" name="phone" type="tel" required value={form.phone} onChange={update} placeholder="05XX XXX XX XX" className={inputClass} />
                </Field>
                <Field label="Araç Markası" htmlFor="q-brand">
                  <input id="q-brand" name="brand" value={form.brand} onChange={update} placeholder="Örn. BMW" className={inputClass} />
                </Field>
                <Field label="Araç Modeli" htmlFor="q-model">
                  <input id="q-model" name="model" value={form.model} onChange={update} placeholder="Örn. 3 Serisi" className={inputClass} />
                </Field>
                <Field label="Model Yılı" htmlFor="q-year">
                  <input id="q-year" name="year" inputMode="numeric" maxLength={4} value={form.year} onChange={update} placeholder="Örn. 2019" className={inputClass} />
                </Field>
                <Field label="Yakıt Tipi" htmlFor="q-fuel">
                  <select id="q-fuel" name="fuel" value={form.fuel} onChange={update} className={inputClass}>
                    <option value="">Seçin</option>
                    <option>Benzin</option>
                    <option>Dizel</option>
                    <option>LPG</option>
                    <option>Hibrit</option>
                    <option>Elektrik</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Hasar Açıklaması" htmlFor="q-damage">
                  <textarea id="q-damage" name="damage" value={form.damage} onChange={update} rows={3} placeholder="Örn. Sol ön çarpma, motor çalışmıyor" className={cn(inputClass, 'h-auto min-h-[96px] py-3 resize-none')} />
                </Field>
              </div>

              {/* Photo upload */}
              <div className="mt-4">
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">Araç Fotoğrafları</label>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full flex-col items-center justify-center gap-2 rounded-[12px] border-2 border-dashed border-brand-purple/40 bg-brand-purple-soft/40 px-4 py-6 text-center transition-colors hover:border-brand-purple"
                >
                  <Upload className="h-6 w-6 text-brand-purple" aria-hidden="true" />
                  <span className="text-[14px] font-semibold text-ink">Fotoğraf yükleyin veya sürükleyin</span>
                  <span className="text-[12px] text-ink-muted">JPG, PNG, WebP · en fazla {MAX_FILES} dosya · 8MB</span>
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept={ACCEPTED.join(',')}
                  multiple
                  className="sr-only"
                  aria-label="Araç fotoğrafları yükle"
                  onChange={(e) => addFiles(e.target.files)}
                />
                {previews.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {previews.map((p) => (
                      <li key={p.id} className="relative h-16 w-16 overflow-hidden rounded-lg border border-line">
                        <Image src={p.url} alt={p.name} fill className="object-cover" unoptimized />
                        <button
                          type="button"
                          onClick={() => removePreview(p.id)}
                          aria-label={`${p.name} kaldır`}
                          className="absolute right-0.5 top-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy-900/80 text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Contact preference */}
              <fieldset className="mt-4">
                <legend className="mb-1.5 text-[13px] font-semibold text-ink">İletişim Tercihi</legend>
                <div className="flex flex-wrap gap-4">
                  {[
                    { v: 'phone', l: 'Telefon' },
                    { v: 'whatsapp', l: 'WhatsApp' },
                    { v: 'email', l: 'E-posta' },
                  ].map((o) => (
                    <label key={o.v} className="flex cursor-pointer items-center gap-2 text-[14px] text-ink-soft">
                      <input type="radio" name="contactMethod" value={o.v} checked={form.contactMethod === o.v} onChange={update} className="accent-brand-purple" />
                      {o.l}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[11px] bg-gradient-to-br from-brand-green to-brand-green-dark text-[16px] font-bold text-white shadow-soft transition hover:brightness-[1.05] disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Teklif Al
                  </>
                )}
              </button>

              {done && (
                <p className="mt-3 rounded-lg bg-brand-green-soft px-3 py-2 text-center text-[13px] font-medium text-brand-green-dark" role="status">
                  Talebiniz WhatsApp üzerinden iletildi. Fotoğrafları sohbete ekleyebilirsiniz.
                </p>
              )}
              <p className="mt-3 text-center text-[12px] text-ink-muted">
                Bilgileriniz gizli tutulur ve sadece teklif amacıyla kullanılır.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
