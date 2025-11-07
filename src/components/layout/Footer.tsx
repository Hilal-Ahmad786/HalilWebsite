import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center font-black text-2xl mb-4">
              PA
            </div>
            <h3 className="text-2xl font-black mb-3">PREMIUM AUTO</h3>
            <p className="text-gray-400">
              Türkiye'nin en güvenilir araç alım merkezi
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-4 text-lime-400">HİZMETLER</h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-lime-400 transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-4 text-lime-400">HIZLI LİNKLER</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-lime-400 transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-lime-400 transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-lg mb-4 text-lime-400">İLETİŞİM</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-400 hover:text-lime-400 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-lime-400 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Premium Auto. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}