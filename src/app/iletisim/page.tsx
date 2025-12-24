'use client';

// ===== FILE: src/app/iletisim/page.tsx =====

import { siteConfig } from '@/config/site';
import ContactForm from '@/components/ui/ContactForm';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">İLETİŞİM</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6">
            BİZE
            <span className="block text-lime-400">ULAŞIN</span>
          </h1>

          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            7/24 müşteri hizmetleri ile her zaman yanınızdayız
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackPhoneClick('contact-page')}
              className="bg-lime-400 text-gray-900 p-8 text-center hover:bg-lime-300 transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
              </svg>
              <div className="text-sm font-bold mb-2 uppercase tracking-wider">TELEFON</div>
              <div className="text-3xl font-black">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2">7/24 Destek</div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact-page')}
              className="bg-success-green text-white p-8 text-center hover:bg-success-green-dark transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div className="text-sm font-bold mb-2 uppercase tracking-wider">WHATSAPP</div>
              <div className="text-3xl font-black">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2">Hızlı Mesaj</div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-purple-600 text-white p-8 text-center hover:bg-purple-700 transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div className="text-sm font-bold mb-2 uppercase tracking-wider">E-POSTA</div>
              <div className="text-xl font-black break-all">{siteConfig.email}</div>
              <div className="text-sm mt-2">24 Saat İçinde Yanıt</div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-lime-400">
              <h2 className="text-4xl font-black mb-8 text-gray-900 text-center">
                İLETİŞİM FORMU
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-8">
            HİZMET SAATLERİMİZ
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl mb-3">📞</div>
              <div className="font-bold text-lg mb-2">Telefon Destek</div>
              <div className="text-lime-400 text-2xl font-black">7/24</div>
            </div>

            <div>
              <div className="text-5xl mb-3">💬</div>
              <div className="font-bold text-lg mb-2">WhatsApp</div>
              <div className="text-lime-400 text-2xl font-black">7/24</div>
            </div>

            <div>
              <div className="text-5xl mb-3">📧</div>
              <div className="font-bold text-lg mb-2">E-posta</div>
              <div className="text-lime-400 text-2xl font-black">24 Saat</div>
            </div>
          </div>

          <p className="mt-8 text-xl">
            Hafta sonu ve resmi tatillerde de hizmetinizdeyiz!
          </p>
        </div>
      </section>
    </div>
  );
}