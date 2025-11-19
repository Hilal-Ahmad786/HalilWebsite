
// ===== FILE: src/app/iletisim/page.tsx =====

import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim - Premium Auto | Bize Ulaşın',
  description: 'Premium Auto ile iletişime geçin. Kazalı, hasarlı, pert ve hurda araç alımı için hemen arayın. 7/24 müşteri hizmetleri.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-section-y pt-32">
        <div className="container mx-auto relative z-10 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 py-3 mb-lg border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">İLETİŞİM</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-md">
            BİZE
            <span className="block text-lime-400">ULAŞIN</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            7/24 müşteri hizmetleri ile her zaman yanınızdayız
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-section-y bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-md mb-xl">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-lime-400 text-gray-900 p-card text-center hover:bg-lime-300 transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-md transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div className="text-sm font-bold mb-sm uppercase tracking-wider">TELEFON</div>
              <div className="text-3xl font-black">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2">7/24 Destek</div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-success-green text-white p-card text-center hover:bg-success-green-dark transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-md transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div className="text-sm font-bold mb-sm uppercase tracking-wider">WHATSAPP</div>
              <div className="text-3xl font-black">{siteConfig.phoneDisplay}</div>
              <div className="text-sm mt-2">Hızlı Mesaj</div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-purple-600 text-white p-card text-center hover:bg-purple-700 transition group"
            >
              <svg className="w-16 h-16 mx-auto mb-md transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div className="text-sm font-bold mb-sm uppercase tracking-wider">E-POSTA</div>
              <div className="text-xl font-black break-all">{siteConfig.email}</div>
              <div className="text-sm mt-2">24 Saat İçinde Yanıt</div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-card md:p-12 border-l-4 border-lime-400">
              <h2 className="text-4xl font-black mb-lg text-gray-900 text-center">
                İLETİŞİM FORMU
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-section-y bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black mb-lg">
            HİZMET SAATLERİMİZ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-md max-w-4xl mx-auto">
            <div>
              <div className="text-5xl mb-sm">📞</div>
              <div className="font-bold text-lg mb-sm">Telefon Destek</div>
              <div className="text-lime-400 text-2xl font-black">7/24</div>
            </div>
            
            <div>
              <div className="text-5xl mb-sm">💬</div>
              <div className="font-bold text-lg mb-sm">WhatsApp</div>
              <div className="text-lime-400 text-2xl font-black">7/24</div>
            </div>
            
            <div>
              <div className="text-5xl mb-sm">📧</div>
              <div className="font-bold text-lg mb-sm">E-posta</div>
              <div className="text-lime-400 text-2xl font-black">24 Saat</div>
            </div>
          </div>

          <p className="mt-lg text-xl">
            Hafta sonu ve resmi tatillerde de hizmetinizdeyiz!
          </p>
        </div>
      </section>
    </div>
  );
}