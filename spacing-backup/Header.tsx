'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllCities } from '@/data/cities';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cities = getAllCities();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handlePhoneClick = (loc: string) => {
    trackPhoneClick(loc);
    trackCTAClick('Phone Call', loc);
  };
  const handleWhatsAppClick = (loc: string) => {
    trackWhatsAppClick(loc);
    trackCTAClick('WhatsApp', loc);
  };

  // shared responsive font for center nav (fluid like AnkaraPERT)
  const navText =
    'font-extrabold leading-none tracking-wide ' +
    '[font-size:clamp(12px,1.05vw,14px)] text-white hover:text-lime-400 transition';

const HeaderSpacing = {
  header: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900",
  topBanner: "bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900",
  topBannerContent: "container mx-auto flex items-center justify-center gap-sm py-xs text-xs font-bold",
  
  mainBar: "bg-gray-900 border-b border-gray-800",
  container: "container mx-auto",
  navGrid: "grid grid-cols-[auto_1fr_auto] items-center h-16 gap-md",
  
  // Logo
  logoWrapper: "flex items-center gap-sm",
  logoBox: "w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center font-black text-white text-lg",
  
  // Navigation
  navMenu: "hidden lg:block justify-self-center w-full",
  navItems: "mx-auto grid grid-cols-6 place-items-center w-full max-w-[960px] gap-lg",
  
  // CTA Buttons
  ctaContainer: "flex items-center justify-self-end gap-md",
  ctaButton: "bg-lime-400 text-gray-900 rounded-sharp px-button-x py-button-y text-base font-black hover:bg-lime-300 transition flex items-center gap-sm",
  
  // Mobile menu
  mobileMenuButton: "lg:hidden text-white p-sm",
  mobileMenu: "lg:hidden pb-lg pt-md border-t border-gray-700",
};


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-gray-900'
      }`}
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 py-2 text-xs font-bold">
            <span className="animate-pulse">🔥</span>
            <span className="hidden sm:inline">HEMEN ARAYIN - ANINDA TEKLİF ALIN</span>
            <span className="sm:hidden">HEMEN ARAYIN</span>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => handlePhoneClick('header-top-banner')}
              className="underline hover:no-underline transition"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          {/* 3 columns: logo | center-nav | right-ctas */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 gap-sm md:gap-md xl:gap-md">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center font-black text-white text-lg">
                PA
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-sm md:text-base text-white leading-none">
                  PREMIUM AUTO
                </div>
                <div className="text-[10px] text-lime-400 font-bold tracking-wider">
                  ARAÇ ALIM UZMANI
                </div>
              </div>
            </Link>

            {/* Center: perfectly centered, fixed max width, equal columns */}
            <div className="hidden lg:block justify-self-center w-full">
              <nav
                className="
                  mx-auto
                  grid grid-cols-6 place-items-center
                  w-full max-w-[880px] xl:max-w-[960px] 2xl:max-w-[1040px]
                  gap-x-[clamp(12px,2vw,40px)]
                "
              >
                {/* 1 */}
                <Link href="/" className={navText}>
                  Ana Sayfa
                </Link>

                {/* 2: Hizmetler */}
                <div className="relative group">
                  <button className={`${navText} flex items-center gap-1`}>
                    Hizmetler
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* absolutely positioned -> does NOT affect spacing */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {siteConfig.services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/${s.slug}`}
                        className="block px-5 py-3 hover:bg-gray-50 border-l-4 border-transparent hover:border-purple-600 transition"
                      >
                        <div className="flex items-center gap-sm">
                          <span className="text-xl">{s.icon}</span>
                          <div>
                            <div className="font-bold text-gray-900 text-xs">{s.title}</div>
                            <div className="text-[10px] text-gray-600">{s.shortDesc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3: Şehirler */}
                <div className="relative group">
                  <button className={`${navText} flex items-center gap-1`}>
                    Şehirler
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-96 overflow-y-auto z-50">
                    <div className="p-3 bg-purple-600 text-white font-bold text-xs">Hizmet Verdiğimiz Şehirler</div>
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {cities.map((c) => (
                        <Link
                          key={c.id}
                          href={`/sehirler/${c.slug}`}
                          className="px-3 py-2 hover:bg-gray-50 border-l-2 border-transparent hover:border-lime-400 transition font-medium text-gray-700 hover:text-purple-600 text-xs"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/sehirler"
                      className="block p-3 bg-gray-50 text-center font-bold text-purple-600 hover:bg-gray-100 transition border-t text-xs"
                    >
                      Tüm Şehirler →
                    </Link>
                  </div>
                </div>

                {/* 4–6 plain links */}
                <Link href="/blog" className={navText}>
                  Bilgiler
                </Link>
                <Link href="/hakkimizda" className={navText}>
                  Hakkımızda
                </Link>
                <Link href="/iletisim" className={navText}>
                  İletişim
                </Link>
              </nav>
            </div>

            {/* Right: CTAs (fluid) + mobile burger */}
            <div className="flex items-center justify-self-end gap-[clamp(12px,1.5vw,24px)]">
              <div className="hidden lg:flex items-center gap-[clamp(12px,1.5vw,24px)]">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Merhaba, aracım için teklif almak istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={() => handleWhatsAppClick('header-desktop')}
                  className="
                    bg-whatsapp text-white rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2
                    px-[clamp(16px,1.8vw,24px)] py-[clamp(10px,1.1vw,14px)]
                    [font-size:clamp(12px,1vw,14px)] font-extrabold tracking-wide
                  "
                  aria-label="WhatsApp ile yazın"
                >
                  <svg className="w-[clamp(16px,1.1vw,20px)] h-[clamp(16px,1.1vw,20px)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  WhatsApp
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => handlePhoneClick('header-desktop')}
                  className="
                    bg-lime-400 text-gray-900 rounded-xl hover:bg-lime-300 transition flex items-center gap-2 shadow-lg hover:shadow-xl
                    px-[clamp(18px,2vw,28px)] py-[clamp(10px,1.1vw,14px)]
                    [font-size:clamp(12px,1vw,14px)] font-black tracking-wider
                  "
                  aria-label="Hemen ara"
                >
                  <svg className="w-[clamp(16px,1.1vw,20px)] h-[clamp(16px,1.1vw,20px)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Hemen Ara
                </a>
              </div>

              {/* Mobile Burger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu (unchanged aside from rounded buttons) */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 pt-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-md">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-lime-400 transition font-bold text-sm tracking-wide uppercase">
                  Ana Sayfa
                </Link>

                <div className="space-y-xs">
                  <div className="text-lime-400 font-bold text-xs tracking-wider uppercase mb-sm">HİZMETLER</div>
                  {siteConfig.services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${s.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-lime-400 transition pl-4 py-2 text-sm"
                    >
                      <span className="mr-2">{s.icon}</span>
                      {s.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-xs">
                  <div className="text-lime-400 font-bold text-xs tracking-wider uppercase mb-sm">ŞEHİRLER</div>
                  {cities.slice(0, 5).map((c) => (
                    <Link
                      key={c.id}
                      href={`/sehirler/${c.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-lime-400 transition pl-4 py-2 text-sm"
                    >
                      {c.name}
                    </Link>
                  ))}
                  <Link
                    href="/sehirler"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lime-400 hover:text-lime-300 transition pl-4 py-2 font-bold text-sm"
                  >
                    Tüm Şehirler →
                  </Link>
                </div>

                <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-lime-400 transition font-bold text-sm tracking-wide uppercase">
                  Bilgiler
                </Link>
                <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-lime-400 transition font-bold text-sm tracking-wide uppercase">
                  Hakkımızda
                </Link>
                <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-lime-400 transition font-bold text-sm tracking-wide uppercase">
                  İletişim
                </Link>

                <div className="flex flex-col gap-sm pt-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, aracım için teklif almak istiyorum.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { handleWhatsAppClick('header-mobile'); setIsMenuOpen(false); }}
                    className="bg-whatsapp text-white py-3 font-bold text-center hover:bg-opacity-90 transition flex items-center justify-center gap-2 text-sm rounded-md"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    WHATSAPP
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    onClick={() => { handlePhoneClick('header-mobile'); setIsMenuOpen(false); }}
                    className="bg-lime-400 text-gray-900 py-3 font-black text-center hover:bg-lime-300 transition flex items-center justify-center gap-2 text-sm rounded-md"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    HEMEN ARA: {siteConfig.phoneDisplay}
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
