'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import TrustBadges from '@/components/ui/TrustBadges';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

// Popular cities for footer links
const popularCities = [
  { name: 'İstanbul', slug: 'istanbul' },
  { name: 'Ankara', slug: 'ankara' },
  { name: 'İzmir', slug: 'izmir' },
  { name: 'Bursa', slug: 'bursa' },
  { name: 'Antalya', slug: 'antalya' },
  { name: 'Konya', slug: 'konya' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-20 md:pb-0">
      {/* Trust Badges Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-10">
          <TrustBadges variant="dark" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Social */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="block relative w-44 h-14">
              <Image
                src="/logo.png"
                alt="Hasar Park"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Türkiye'nin en güvenilir hasarlı, kazalı ve pert araç alım merkezi.
              7+ yıllık tecrübe, 100.000+ mutlu müşteri ile 7/24 hizmetinizdeyiz.
            </p>

            {/* Contact Info Quick */}
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneClick('footer-brand')}
                className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <PhoneIcon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">7/24 Çağrı Merkezi</div>
                  <div className="font-semibold">{siteConfig.phoneDisplay}</div>
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              )}

              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-600 hover:to-pink-500 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              )}

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer-social-icon')}
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Hizmetlerimiz">
            <h4 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full" />
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    title={service.title}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kurumsal & Hızlı Linkler */}
          <nav aria-label="Kurumsal">
            <h4 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full" />
              Kurumsal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" title="Ana Sayfa" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" title="Hakkımızda" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" title="Bilgi Merkezi" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  Bilgi Merkezi
                </Link>
              </li>
              <li>
                <Link href="/sehirler" title="Hizmet Bölgeleri" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  Hizmet Bölgeleri
                </Link>
              </li>
              <li>
                <Link href="/iletisim" title="İletişim" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" title="Site Haritası" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                  <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                  Site Haritası
                </Link>
              </li>
            </ul>
          </nav>

          {/* Popular Cities */}
          <nav aria-label="Popüler Şehirler">
            <h4 className="font-semibold text-base mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full" />
              Popüler Şehirler
            </h4>
            <ul className="space-y-3">
              {popularCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/sehirler/${city.slug}`}
                    title={`${city.name} Araç Alımı`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" strokeWidth={2} />
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sehirler"
                  title="Tüm Şehirler"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  Tüm Şehirler
                  <ArrowRightIcon className="w-4 h-4" strokeWidth={2} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Çalışma Saatleri</div>
                <div className="text-sm text-white">7/24 Açık</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Hizmet Bölgesi</div>
                <div className="text-sm text-white">81 İl, Tüm Türkiye</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-gray-500">Güvenli Ödeme</div>
                <div className="text-sm text-white">256-bit SSL Şifreleme</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-6 py-6">
          <div className="grid gap-4 text-center lg:grid-cols-3 lg:items-center">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
            </p>
            <a
              href="https://paksoft.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center group"
            >
              <span className="text-gray-500 mr-2 group-hover:text-emerald-400 transition-colors text-xs">Geliştiren</span>
              <div className="flex items-center text-emerald-500 group-hover:text-emerald-400 transition-colors">
                {/* Custom Crescent Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -rotate-12">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                </svg>
                <span className="font-bold text-sm tracking-wide ml-0.5">PakSoft</span>
              </div>
            </a>
            <nav aria-label="Yasal Linkler" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-500 lg:flex-nowrap lg:justify-end lg:whitespace-nowrap">
              <Link href="/gizlilik-politikasi" title="Gizlilik Politikası" className="hover:text-emerald-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" title="Kullanım Şartları" className="hover:text-emerald-400 transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cerez-politikasi" title="Çerez Politikası" className="hover:text-emerald-400 transition-colors">
                Çerez Politikası
              </Link>
              <Link href="/kvkk" title="KVKK Aydınlatma Metni" className="hover:text-emerald-400 transition-colors">
                KVKK
              </Link>
              <Link href="/sitemap.xml" title="Site Haritası" className="hover:text-emerald-400 transition-colors">
                Site Haritası
              </Link>
            </nav>
          </div>
        </div>
      </div>

    </footer>
  );
}
