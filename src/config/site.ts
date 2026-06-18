// src/config/site.ts
export const siteConfig = {
  name: 'Hasar Park',
  description: 'Kazalı, Hasarlı, Pert ve Hurda Araç Alımında Türkiye\'nin En Güvenilir ve En Yüksek Fiyat Veren Merkezi. 7+ Yıl Tecrübe, 100.000+ Mutlu Müşteri.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hasarpark.com',

  // CRITICAL: Main conversion points for Hasar Park
  phone: process.env.NEXT_PUBLIC_PHONE || '+905345809315',
  phoneDisplay: '+90 534 580 93 15',
  phoneClean: '05345809315', // For tracking logic
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905345809315',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@hasarpark.com',

  // Business hours
  businessHours: {
    weekday: '09:00 - 22:00',
    weekend: '09:00 - 20:00',
    display: '7/24 Hizmet',
  },

  // Social media
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/hasarpark',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/hasarpark',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
  },

  // Services
  services: [
    {
      id: 'kazali',
      title: 'Kazalı Araç Alımı',
      slug: 'kazali-arac-alim',
      icon: '🚗',
      shortDesc: 'Kaza geçirmiş tüm araçlar',
      color: 'lime',
    },
    {
      id: 'hasarli',
      title: 'Hasarlı Araç Alımı',
      slug: 'hasarli-arac-alim',
      icon: '🔧',
      shortDesc: 'Mekanik ve kaporta hasarlı',
      color: 'purple',
    },
    {
      id: 'pert',
      title: 'Pert Araç Alımı',
      slug: 'pert-arac-alim',
      icon: '⚠️',
      shortDesc: 'Sigorta pert raporlu',
      color: 'fuchsia',
    },
    {
      id: 'hurda',
      title: 'Hurda Araç Alımı',
      slug: 'hurda-arac-alim',
      icon: '♻️',
      shortDesc: 'Hurda belgeli araçlar',
      color: 'lime',
    },
  ],

  // Key features for homepage
  features: [
    {
      icon: '⚡',
      title: 'Anında Değerleme',
      description: '30 dakika içinde fiyat teklifi',
    },
    {
      icon: '💰',
      title: 'En Yüksek Fiyat',
      description: 'Piyasanın en iyi teklifini garantiliyoruz',
    },
    {
      icon: '🚚',
      title: 'Ücretsiz Çekici',
      description: 'Aracınızı yerinden alırız',
    },
    {
      icon: '📄',
      title: 'Tüm Evraklar Bizden',
      description: 'Noter ve tescil işlemleri dahil',
    },
    {
      icon: '💳',
      title: 'Anında Ödeme',
      description: 'Nakit veya EFT ile hızlı ödeme',
    },
    {
      icon: '🏆',
      title: '7+ Yıl Tecrübe',
      description: '100.000+ mutlu müşteri',
    },
  ],

  // Process steps
  process: [
    {
      number: 1,
      icon: '📞',
      title: 'BİZİ ARAYIN',
      description: 'Telefon veya WhatsApp ile ulaşın, aracınızı anlatan',
    },
    {
      number: 2,
      icon: '📸',
      title: 'FOTOĞRAF GÖNDERİN',
      description: 'WhatsApp üzerinden araç fotoğrafları paylaşın',
    },
    {
      number: 3,
      icon: '💵',
      title: 'TEKLİF ALIN',
      description: '30 dakika içinde en yüksek fiyat teklifini alın',
    },
    {
      number: 4,
      icon: '✅',
      title: 'HEMEN SATIN',
      description: 'Anında değerleme, noter işlemi ve nakit ödeme',
    },
  ],

  // Stats for homepage
  stats: [
    {
      value: '7+',
      label: 'YIL TECRÜBE',
      color: 'lime',
    },
    {
      value: '100K+',
      label: 'MUTLU MÜŞTERİ',
      color: 'purple',
    },
    {
      value: '24/7',
      label: 'CANLI DESTEK',
      color: 'fuchsia',
    },
    {
      value: '%100',
      label: 'GARANTİ',
      color: 'lime',
    },
  ],

  // Coverage cities
  cities: [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana',
    'Konya', 'Gaziantep', 'Mersin', 'Kayseri', 'Eskişehir', 'Diyarbakır',
    'Samsun', 'Denizli', 'Şanlıurfa', 'Malatya', 'Kahramanmaraş',
    'Erzurum', 'Van', 'Kocaeli', 'Manisa', 'Balıkesir',
  ],

  // SEO keywords
  keywords: [
    'kazalı araç alan',
    'hasarlı araç alan',
    'pert araç alan',
    'hurda araç alan',
    'kazalı araç satmak',
    'hasarlı araç satmak',
    'pert araç satmak',
    'hurda araç satmak',
    'araç alım',
    'en yüksek fiyat',
    'anında ödeme',
    'hasar park',
  ],

  // Conversion tracking
  tracking: {
    enableGTM: true,
    enableGA4: true,
    enableGoogleAds: false, // Changed to false so GTM handles it
    enableFacebookPixel: true,
    enablePhoneTracking: true,
    enableWhatsAppTracking: true,
  },
};

export type SiteConfig = typeof siteConfig;
