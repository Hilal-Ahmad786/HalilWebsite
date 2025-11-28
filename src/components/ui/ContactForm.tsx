
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

      // Here you would normally send to your backend/API
      // For now, just simulate success after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-bold mb-2 text-sm uppercase tracking-wide text-gray-900">
          İsim Soyisim *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-bold mb-2 text-sm uppercase tracking-wide text-gray-900">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition"
          placeholder="0530 344 40 97"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-bold mb-2 text-sm uppercase tracking-wide text-gray-900">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition"
          placeholder="ornek@email.com"
        />
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="service" className="block font-bold mb-2 text-sm uppercase tracking-wide text-gray-900">
          Hizmet Türü *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition bg-white"
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
        <label htmlFor="message" className="block font-bold mb-2 text-sm uppercase tracking-wide text-gray-900">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 focus:border-purple-600 focus:outline-none transition resize-none"
          placeholder="Aracınız hakkında detaylı bilgi verin..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-lime-400 text-gray-900 px-8 py-4 font-black text-lg hover:bg-lime-300 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            GÖNDERİLİYOR...
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            GÖNDER
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-lime-400 text-gray-900 p-4 font-bold text-center">
          ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500 text-white p-4 font-bold text-center">
          ❌ Bir hata oluştu. Lütfen direkt {siteConfig.phoneDisplay} numarasından bizi arayın.
        </div>
      )}

      {/* Quick Call Option */}
      <div className="text-center pt-4 border-t-2 border-gray-200">
        <p className="text-gray-700 mb-4 font-bold">
          Hızlı görüşme için hemen arayın:
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 font-black hover:bg-purple-700 transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
          </svg>
          {siteConfig.phoneDisplay}
        </a>
      </div>
    </form>
  );
}