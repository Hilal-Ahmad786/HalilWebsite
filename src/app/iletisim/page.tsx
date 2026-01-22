'use client';

// ===== FILE: src/app/iletisim/page.tsx =====

import { siteConfig } from '@/config/site';
import ContactForm from '@/components/ui/ContactForm';
import TrustBadges from '@/components/ui/TrustBadges';
import SocialProof from '@/components/ui/SocialProof';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';

export default function ContactPage() {
  const contactStats = [
    { value: '7/24', label: 'Kesintisiz Destek' },
    { value: '30dk', label: 'Ortalama Yanıt' },
    { value: '81 İl', label: 'Hizmet Bölgesi' },
    { value: '%100', label: 'Memnuniyet' },
  ];

  return (
    <div className="contact-page">
      {/* Hero - Matching Homepage Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-indigo-900/80 to-gray-800 pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-indigo-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-8 rounded-full">
                <span className="font-semibold text-sm tracking-wide">İLETİŞİM</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Bize
                <span className="block text-emerald-400">Ulaşın</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-xl">
                7/24 müşteri hizmetleri ile her zaman yanınızdayız.
                Hemen arayın, anında teklif alın!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => trackPhoneClick('contact-hero')}
                  className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-5 font-semibold text-xl rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all flex items-center justify-center gap-4 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
                >
                  <PhoneIcon className="w-7 h-7" strokeWidth={2} />
                  <span>Hemen Ara</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact-hero')}
                  className="bg-[#25D366] text-white px-8 py-5 font-semibold text-xl rounded-2xl hover:bg-[#1da851] transition-all flex items-center justify-center gap-4 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-7 h-7" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Phone Number Display */}
              <div className="flex items-center gap-4 text-orange-400">
                <PhoneIcon className="w-7 h-7" strokeWidth={2} />
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => trackPhoneClick('contact-hero-number')}
                  className="text-2xl md:text-3xl font-bold hover:text-orange-300 transition"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {contactStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-2 border border-white/10"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <SocialProof variant="dark" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-emerald-400/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <TrustBadges variant="light" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackPhoneClick('contact-page')}
              className="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-8 rounded-2xl text-center hover:from-orange-600 hover:to-amber-600 transition group shadow-lg"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-8 h-8" strokeWidth={2} />
              </div>
              <div className="text-sm font-medium mb-2 opacity-90">Telefon</div>
              <div className="text-2xl font-bold">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2 opacity-75">7/24 Destek</div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact-page')}
              className="bg-[#25D366] text-white p-8 rounded-2xl text-center hover:bg-[#20bd5a] transition group shadow-lg"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-8 h-8" />
              </div>
              <div className="text-sm font-medium mb-2 opacity-90">WhatsApp</div>
              <div className="text-2xl font-bold">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2 opacity-75">Hızlı Mesaj</div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-indigo-600 text-white p-8 rounded-2xl text-center hover:bg-indigo-700 transition group shadow-lg"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-sm font-medium mb-2 opacity-90">E-Posta</div>
              <div className="text-lg font-bold break-all">{siteConfig.email}</div>
              <div className="text-sm mt-2 opacity-75">24 Saat İçinde Yanıt</div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-4 rounded-full">
                  <span className="font-bold text-sm tracking-wide">İLETİŞİM FORMU</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Bize Mesaj Gönderin
                </h2>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 px-6 py-3 mb-8 rounded-full backdrop-blur-sm">
            <span className="font-bold text-sm tracking-wide">HİZMET SAATLERİMİZ</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Her Zaman Yanınızdayız
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-14 h-14 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">📞</div>
              <div className="font-medium mb-2">Telefon Destek</div>
              <div className="text-emerald-400 text-2xl font-bold">7/24</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-14 h-14 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">💬</div>
              <div className="font-medium mb-2">WhatsApp</div>
              <div className="text-emerald-400 text-2xl font-bold">7/24</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-14 h-14 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">📧</div>
              <div className="font-medium mb-2">E-posta</div>
              <div className="text-emerald-400 text-2xl font-bold">24 Saat</div>
            </div>
          </div>

          <p className="mt-10 text-lg opacity-90">
            Hafta sonu ve resmi tatillerde de hizmetinizdeyiz!
          </p>
        </div>
      </section>
    </div>
  );
}