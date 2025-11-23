import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative w-48 h-16 mb-4">
              <Image
                src="/logo.png"
                alt="Hasar Park"
                fill
                className="object-contain object-left"
              />
            </div>
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
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2
           19.8 19.8 0 0 1-8.6-3.1
           19.5 19.5 0 0 1-6-6
           19.8 19.8 0 0 1-3.1-8.6
           A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7
           c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9
           a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4
           c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
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
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hasar Park. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}