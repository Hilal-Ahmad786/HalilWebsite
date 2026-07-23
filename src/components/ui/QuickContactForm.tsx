'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackFormSubmit, submitLead } from '@/lib/analytics';

interface QuickContactFormProps {
  variant?: 'light' | 'dark';
  title?: string;
}

export default function QuickContactForm({ variant = 'light', title = 'Hızlı Teklif Alın' }: QuickContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    brand: '',
    year: '',
    damage: '',
    contactMethod: 'phone',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDark = variant === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      trackFormSubmit('quick_contact_form');
      // Persist the lead server-side so it's readable in /admin/forms
      submitLead({
        formName: 'quick_contact_form',
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        brand: formData.brand,
        year: formData.year,
        damage: formData.damage,
        contactMethod: formData.contactMethod,
      });

      const messageText = `*Araç Teklif Talebi*\n\n` +
        `👤 *İsim:* ${formData.name}\n` +
        `📞 *Telefon:* ${formData.phone}\n` +
        `🚗 *Hizmet:* ${formData.service}\n` +
        (formData.brand ? `🏷️ *Marka/Model:* ${formData.brand}\n` : '') +
        (formData.year ? `📅 *Yıl:* ${formData.year}\n` : '') +
        (formData.damage ? `⚠️ *Hasar Açıklaması:* ${formData.damage}\n` : '') +
        `📬 *İletişim Tercihi:* ${formData.contactMethod === 'phone' ? 'Telefon' : formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'E-posta'}`;

      const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(messageText)}`;

      await new Promise(resolve => setTimeout(resolve, 500));
      window.open(whatsappUrl, '_blank');

      setFormData({ name: '', phone: '', service: '', brand: '', year: '', damage: '', contactMethod: 'phone' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
    isDark
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
  }`;

  return (
    <div className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg border border-gray-100'}`}>
      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınız Soyadınız"
              className={inputClass}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Telefon Numaranız"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Araç Türü Seçin</option>
            <option value="Kazalı Araç">Kazalı Araç</option>
            <option value="Hasarlı Araç">Hasarlı Araç</option>
            <option value="Pert Araç">Pert Araç</option>
            <option value="Hurda Araç">Hurda Araç</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Marka & Model (ör: BMW 3 Serisi)"
              className={inputClass}
            />
          </div>
          <div>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Model Yılı (ör: 2019)"
              maxLength={4}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <textarea
            name="damage"
            value={formData.damage}
            onChange={handleChange}
            placeholder="Hasar Açıklaması (ör: Sol ön çarpma, motor çalışmıyor)"
            rows={2}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            İletişim Tercihi
          </label>
          <div className="flex gap-3">
            {[
              { value: 'phone', label: 'Telefon' },
              { value: 'whatsapp', label: 'WhatsApp' },
              { value: 'email', label: 'E-posta' },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value={opt.value}
                  checked={formData.contactMethod === opt.value}
                  onChange={handleChange}
                  className="accent-emerald-500"
                />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Teklif Al</span>
            </>
          )}
        </button>
      </form>

      <p className={`text-xs text-center mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Bilgileriniz gizli tutulur ve sadece size ulaşmak için kullanılır.
      </p>
    </div>
  );
}
