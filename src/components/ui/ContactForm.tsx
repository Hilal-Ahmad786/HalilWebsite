'use client';

import { useState } from 'react';
import { Phone, Send, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackFormSubmit } from '@/lib/analytics';
import { cn } from '@/lib/cn';

const inputClass =
  'h-12 w-full rounded-[10px] border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-ink-muted ' +
  'transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25';
const labelClass = 'mb-1.5 block text-[13px] font-semibold text-ink';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      trackFormSubmit('contact_form');
      // No backend — submissions are delivered to WhatsApp.
      const messageText =
        `*Yeni İletişim Formu Mesajı*\n\n` +
        `👤 *İsim:* ${formData.name}\n` +
        `📞 *Telefon:* ${formData.phone}\n` +
        `📧 *E-posta:* ${formData.email || 'Belirtilmedi'}\n` +
        `🚗 *Hizmet:* ${formData.service}\n` +
        `📝 *Mesaj:* ${formData.message || 'Belirtilmedi'}`;
      const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(messageText)}`;
      await new Promise((r) => setTimeout(r, 600));
      setSubmitStatus('success');
      window.location.href = whatsappUrl;
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>İsim Soyisim *</label>
          <input id="cf-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adınız ve soyadınız" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>Telefon *</label>
          <input id="cf-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="05XX XXX XX XX" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>E-posta</label>
          <input id="cf-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-service" className={labelClass}>Hizmet Türü *</label>
          <select id="cf-service" name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
            <option value="">Seçiniz...</option>
            <option value="Kazalı Araç Alımı">Kazalı Araç Alımı</option>
            <option value="Hasarlı Araç Alımı">Hasarlı Araç Alımı</option>
            <option value="Pert Araç Alımı">Pert Araç Alımı</option>
            <option value="Hurda Araç Alımı">Hurda Araç Alımı</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>Mesajınız</label>
        <textarea id="cf-message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Aracınız hakkında detaylı bilgi verin..." className={cn(inputClass, 'h-auto min-h-[110px] py-3 resize-none')} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[11px] bg-gradient-to-br from-brand-green to-brand-green-dark text-[16px] font-bold text-white shadow-soft transition hover:brightness-[1.05] disabled:opacity-60"
      >
        {isSubmitting ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Gönderiliyor...</>
        ) : (
          <><Send className="h-5 w-5" /> WhatsApp ile Gönder</>
        )}
      </button>

      {submitStatus === 'success' && (
        <p className="rounded-lg bg-brand-green-soft px-3 py-2 text-center text-[13.5px] font-medium text-brand-green-dark" role="status">
          Mesajınız WhatsApp üzerinden iletiliyor. Sohbeti tamamlayarak gönderin.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-center text-[13.5px] font-medium text-danger" role="alert">
          Bir hata oluştu. Lütfen direkt {siteConfig.phoneDisplay} numarasından bizi arayın.
        </p>
      )}

      <div className="border-t border-line pt-4 text-center">
        <p className="mb-3 text-[14px] text-ink-soft">Hızlı görüşme için hemen arayın:</p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-2 rounded-[11px] bg-navy-900 px-5 py-3 text-[14.5px] font-bold text-white transition hover:bg-navy-800"
        >
          <Phone className="h-5 w-5" aria-hidden="true" /> {siteConfig.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
