
// ===== FILE: src/components/ui/ContactForm.tsx =====

'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackFormSubmit } from '@/lib/analytics';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track the form submission
      trackFormSubmit('contact_form');

      // Construct WhatsApp Message
      const messageText = `*Yeni İletişim Formu Mesajı*\n\n` +
        `👤 *İsim:* ${formData.name}\n` +
        `📞 *Telefon:* ${formData.phone}\n` +
        `📧 *E-posta:* ${formData.email || 'Belirtilmedi'}\n` +
        `🚗 *Hizmet:* ${formData.service}\n` +
        `📝 *Mesaj:* ${formData.message || 'Belirtilmedi'}`;

      const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(messageText)}`;

      // Simulate brief loading for UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Show success message
      setSubmitStatus('success');

      // Redirect to WhatsApp
      window.location.href = whatsappUrl;

      // Reset form (optional, as we are redirecting)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-semibold mb-2 text-sm text-gray-700">
          İsim Soyisim *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-semibold mb-2 text-sm text-gray-700">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition"
          placeholder="0530 344 40 97"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold mb-2 text-sm text-gray-700">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition"
          placeholder="ornek@email.com"
        />
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block font-semibold mb-2 text-sm text-gray-700">
          Hizmet Türü *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition"
        >
          <option value="">Seçiniz...</option>
          <option value="kazali">Kazalı Araç Alımı</option>
          <option value="hasarli">Hasarlı Araç Alımı</option>
          <option value="pert">Pert Araç Alımı</option>
          <option value="hurda">Hurda Araç Alımı</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-semibold mb-2 text-sm text-gray-700">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition resize-none"
          placeholder="Aracınız hakkında detaylı bilgi verin..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Gönderiliyor...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span>Gönder</span>
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl font-medium text-center">
          Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-100 text-red-700 p-4 rounded-xl font-medium text-center">
          Bir hata oluştu. Lütfen direkt {siteConfig.phoneDisplay} numarasından bizi arayın.
        </div>
      )}

      {/* Quick Call Option */}
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-gray-600 mb-4">
          Hızlı görüşme için hemen arayın:
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
          </svg>
          {siteConfig.phoneDisplay}
        </a>
      </div>
    </form>
  );
}