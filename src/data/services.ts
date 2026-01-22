export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: 'lime' | 'purple' | 'fuchsia';

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];



  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    image: string;
  };

  // Features
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Process (optional override)
  customProcess?: Array<{
    number: number;
    icon: string;
    title: string;
    description: string;
  }>;

  // FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;

  // Content sections
  content: {
    whatWeAccept: string[];
    pricing: {
      title: string;
      description: string;
      factors: string[];
    };
    whyChooseUs: string[];
  };
}

export const servicesData: Record<string, ServiceData> = {
  'kazali-arac-alim': {
    id: 'kazali',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    shortTitle: 'Kazalı Araç',
    icon: '🚗',
    color: 'lime',

    metaTitle: 'Kazalı Araç Alımı | Anında Değerlendirme & En Yüksek Fiyat - Hasar Park',
    metaDescription: 'Kazalı araç mı satmak istiyorsunuz? Hasar Park ile 30 dakikada teklif alın, en yüksek fiyat garantisi. Ücretsiz çekici, anında ödeme.',
    keywords: [
      'kazalı araç alan',
      'kazalı araç satmak',
      'kazalı araç alım',
      'kazalı oto alan',
      'kaza geçirmiş araç',
      'kazalı araç satan yerler',
    ],

    hero: {
      badge: '🚗 KAZALI ARAÇ ALIMI',
      title: 'KAZALI ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Kaza geçirmiş her türlü araç için anında değerlendirme. 30 dakikada teklif, ücretsiz çekici, anında ödeme.',
      image: '/images/kazali-arac.png',
    },

    features: [
      {
        icon: '⚡',
        title: '30 Dakikada Teklif',
        description: 'Aracınızın fotoğraflarını gönderin, 30 dakika içinde en yüksek teklifi alın.',
      },
      {
        icon: '💰',
        title: 'En Yüksek Fiyat',
        description: 'Piyasa araştırması ile kazalı aracınız için en iyi fiyatı garantiliyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Kazalı aracınızı bulunduğu yerden ücretsiz olarak alırız.',
      },
      {
        icon: '📄',
        title: 'Tüm Evraklar Bizden',
        description: 'Noter ve tescil işlemlerini biz hallederiz.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'İşlem tamamlandıktan sonra hemen nakit veya EFT ile ödeme.',
      },
      {
        icon: '🏆',
        title: 'Tecrübeli Ekip',
        description: '20+ yıl kazalı araç alım satım tecrübesi.',
      },
    ],

    faqs: [
      {
        question: 'Kazalı araç alımında nasıl bir süreç işliyor?',
        answer: 'Önce bizi arayarak aracınız hakkında bilgi veriyorsunuz. Sonra fotoğrafları WhatsApp üzerinden gönderiyorsunuz. 30 dakika içinde size en yüksek fiyat teklifini sunuyoruz. Teklifi kabul ederseniz, ücretsiz çekici ile aracınızı alıyor ve noter işlemlerini tamamladıktan sonra anında ödeme yapıyoruz.',
      },
      {
        question: 'Hangi tür kazalı araçları alıyorsunuz?',
        answer: 'Ön çarpma, yan çarpma, devrilme, arkadan çarpma gibi her türlü kaza geçirmiş aracı alıyoruz. Motor hasarlı, şanzıman hasarlı veya kaporta hasarlı tüm araçlar için değerlendirme yapıyoruz.',
      },
      {
        question: 'Kazalı araç için ne kadar ödeme yapıyorsunuz?',
        answer: 'Fiyat aracın markası, modeli, yılı ve hasar durumuna göre değişir. Piyasa araştırması yaparak size en yüksek fiyatı garantiliyoruz. Ortalama olarak piyasa değerinin %60-80\'ini ödüyoruz.',
      },
      {
        question: 'Trafik kazası raporu gerekli mi?',
        answer: 'Kaza raporu olması işlemi kolaylaştırır ancak zorunlu değildir. Raporunuz yoksa da aracınızı yerinde değerlendirip teklif verebiliriz.',
      },
      {
        question: 'Çok hasarlı araçları da alıyor musunuz?',
        answer: 'Evet, hasar derecesi ne olursa olsun tüm kazalı araçları alıyoruz. Sürülemez durumda olan araçlar için de ücretsiz çekici hizmetimiz mevcuttur.',
      },
    ],

    content: {
      whatWeAccept: [
        'Ön çarpma hasarlı araçlar',
        'Yan çarpma hasarlı araçlar',
        'Arka çarpma hasarlı araçlar',
        'Devrilmiş araçlar',
        'Motor hasarlı araçlar',
        'Şanzıman hasarlı araçlar',
        'Kaporta hasarlı araçlar',
        'Hava yastığı patlamış araçlar',
      ],
      pricing: {
        title: 'Kazalı Araç Fiyatlandırması',
        description: 'Fiyat belirlerken dikkate aldığımız faktörler:',
        factors: [
          'Aracın markası ve modeli',
          'Model yılı ve kilometre',
          'Hasarın boyutu ve türü',
          'Onarılabilir parçaların değeri',
          'Piyasa talebi',
          'Yedek parça değeri',
        ],
      },
      whyChooseUs: [
        'Türkiye\'nin en yüksek kazalı araç fiyatlarını veriyoruz',
        '20+ yıl kazalı araç alım satım tecrübesi',
        'Her marka ve model için profesyonel değerlendirme',
        'Şeffaf ve güvenilir işlem süreci',
        'Tüm Türkiye\'de ücretsiz çekici hizmeti',
        'Noter işlemleri ve evrakları bizden',
      ],
    },
  },

  'hasarli-arac-alim': {
    id: 'hasarli',
    slug: 'hasarli-arac-alim',
    title: 'Hasarlı Araç Alımı',
    shortTitle: 'Hasarlı Araç',
    icon: '🔧',
    color: 'purple',

    metaTitle: 'Hasarlı Araç Alımı | Mekanik & Kaporta Hasarlı Araç Alan - Hasar Park',
    metaDescription: 'Hasarlı aracınızı en yüksek fiyata satın. Mekanik, kaporta, motor hasarlı tüm araçlar için anında teklif. Ücretsiz ekspertiz.',
    keywords: [
      'hasarlı araç alan',
      'hasarlı araç satmak',
      'mekanik hasarlı araç',
      'kaporta hasarlı araç',
      'motor hasarlı araç',
    ],

    hero: {
      badge: '🔧 HASARLI ARAÇ ALIMI',
      title: 'HASARLI ARACINIZ',
      titleHighlight: 'ANINDA NAKDE',
      subtitle: 'Mekanik, kaporta veya motor hasarlı tüm araçlar için profesyonel değerlendirme ve en yüksek fiyat.',
      image: '/images/hasarli-arac.png',
    },

    features: [
      {
        icon: '🔍',
        title: 'Detaylı Ekspertiz',
        description: 'Uzman ekibimiz aracınızı detaylı şekilde değerlendirir.',
      },
      {
        icon: '💰',
        title: 'Adil Fiyat',
        description: 'Hasar durumuna göre en adil fiyatı sunuyoruz.',
      },
      {
        icon: '⚙️',
        title: 'Tüm Hasar Türleri',
        description: 'Motor, şanzıman, kaporta her türlü hasarı kabul ediyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Taşıma',
        description: 'Hasarlı aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '📋',
        title: 'Kolay İşlem',
        description: 'Tüm evrak ve işlemler bizden.',
      },
      {
        icon: '💳',
        title: 'Hızlı Ödeme',
        description: 'Anında nakit veya EFT ile ödeme.',
      },
    ],

    faqs: [
      {
        question: 'Hangi tür hasarlı araçları alıyorsunuz?',
        answer: 'Motor hasarlı, şanzıman hasarlı, kaporta hasarlı, elektrik sistemi hasarlı ve tüm mekanik hasarlı araçları alıyoruz.',
      },
      {
        question: 'Motor arızalı araç için de alım yapıyor musunuz?',
        answer: 'Evet, motor arızalı veya motor hasarlı tüm araçlar için alım yapıyoruz. Motor durumu ne olursa olsun değerlendirme yapabiliyoruz.',
      },
      {
        question: 'Hasarlı araç fiyatı nasıl belirleniyor?',
        answer: 'Aracın genel durumu, hasarın türü ve boyutu, tamir maliyeti, yedek parça değeri gibi faktörlere göre piyasa araştırması yaparak en yüksek fiyatı belirliyoruz.',
      },
      {
        question: 'Araç çalışmıyorsa da alıyor musunuz?',
        answer: 'Evet, çalışmayan araçları da alıyoruz. Ücretsiz çekici hizmetimizle aracınızı bulunduğu yerden alırız.',
      },
      {
        question: 'Ekspertiz ücreti var mı?',
        answer: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir.',
      },
    ],

    content: {
      whatWeAccept: [
        'Motor hasarlı araçlar',
        'Şanzıman hasarlı araçlar',
        'Kaporta hasarlı araçlar',
        'Elektrik sistemi arızalı araçlar',
        'Fren sistemi arızalı araçlar',
        'Süspansiyon hasarlı araçlar',
        'Diferansiyel hasarlı araçlar',
        'Çalışmayan araçlar',
      ],
      pricing: {
        title: 'Hasarlı Araç Değerlendirmesi',
        description: 'Değerlendirmede dikkate aldığımız noktalar:',
        factors: [
          'Hasarın türü (motor, şanzıman, kaporta)',
          'Tamir edilebilirlik durumu',
          'Yedek parça değeri',
          'Aracın yaşı ve kilometresi',
          'Piyasa talebi',
          'Kullanılabilir parça sayısı',
        ],
      },
      whyChooseUs: [
        'Tüm hasar türleri için profesyonel değerlendirme',
        'En yüksek fiyat garantisi',
        'Ücretsiz ekspertiz ve çekici hizmeti',
        'Hızlı ve güvenli işlem',
        'Şeffaf fiyatlandırma',
        'Anında ödeme',
      ],
    },
  },

  'pert-arac-alim': {
    id: 'pert',
    slug: 'pert-arac-alim',
    title: 'Pert Araç Alımı',
    shortTitle: 'Pert Araç',
    icon: '⚠️',
    color: 'fuchsia',

    metaTitle: 'Pert Araç Alımı | Sigorta Pert Raporlu Araç Alan - Hasar Park',
    metaDescription: 'Pert raporlu aracınızı en yüksek fiyata satın. Sigorta pert çıkmış araçlar için özel değerlendirme. Anında ödeme.',
    keywords: [
      'pert araç alan',
      'pert araç satmak',
      'pert raporu',
      'sigorta pert',
      'kasko pert',
    ],

    hero: {
      badge: '⚠️ PERT ARAÇ ALIMI',
      title: 'PERT ARACINIZ',
      titleHighlight: 'DEĞERİNDE SATIN',
      subtitle: 'Sigorta pert raporu çıkmış araçlar için özel değerlendirme. En yüksek fiyat ve güvenli işlem garantisi.',
      image: '/images/pert-arac.png',
    },

    features: [
      {
        icon: '📋',
        title: 'Pert Raporu Uzmanı',
        description: 'Pert raporu olan araçlarda 20+ yıl tecrübe.',
      },
      {
        icon: '💰',
        title: 'Özel Değerlendirme',
        description: 'Pert araçlar için özel fiyatlandırma sistemimiz var.',
      },
      {
        icon: '🔒',
        title: 'Yasal Süreç',
        description: 'Tüm yasal işlemler ve evraklar bizden.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Pert aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '⚡',
        title: 'Hızlı İşlem',
        description: 'Pert işlemleri 24 saat içinde tamamlanır.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'Noter sonrası hemen ödeme alırsınız.',
      },
    ],

    faqs: [
      {
        question: 'Pert araç nedir?',
        answer: 'Pert araç, sigorta şirketi tarafından ekonomik onarımsız olarak değerlendirilen ve pert raporu çıkarılan araçlardır. Tamir maliyeti aracın değerinin belirli bir oranını geçtiğinde pert raporu düzenlenir.',
      },
      {
        question: 'Pert raporlu araç satılır mı?',
        answer: 'Evet, pert raporlu araçlar satılabilir. Biz pert araç alımında uzmanız ve en yüksek fiyatı veriyoruz.',
      },
      {
        question: 'Pert aracın değeri ne kadardır?',
        answer: 'Pert aracın değeri, aracın piyasa değeri, hasar durumu ve kullanılabilir parça değerine göre belirlenir. Genellikle piyasa değerinin %30-50\'si civarında fiyatlar oluşur.',
      },
      {
        question: 'Pert işlemi ne kadar sürer?',
        answer: 'Pert aracın alım satım işlemi genellikle 24-48 saat içinde tamamlanır. Evraklar hazır olduğunda işlemler daha hızlı ilerler.',
      },
      {
        question: 'Hangi evraklar gerekli?',
        answer: 'Araç ruhsatı, pert raporu, kimlik fotokopisi ve noter işlemleri için gereken standart evraklar yeterlidir.',
      },
    ],

    content: {
      whatWeAccept: [
        'Kasko pert raporlu araçlar',
        'Trafik sigortası pert raporlu araçlar',
        'Toplam hasar pert',
        'Kısmi hasar pert',
        'Yangın hasarı pert',
        'Su basması pert',
        'Tüm pert türleri',
      ],
      pricing: {
        title: 'Pert Araç Fiyatlandırması',
        description: 'Pert araç değerini etkileyen faktörler:',
        factors: [
          'Aracın piyasa değeri',
          'Pert raporundaki hasar oranı',
          'Kullanılabilir parça değeri',
          'Aracın markası ve modeli',
          'Model yılı',
          'Sigorta ödeme durumu',
        ],
      },
      whyChooseUs: [
        'Pert araç alımında 20+ yıl tecrübe',
        'En yüksek pert araç fiyatları',
        'Tüm yasal işlemler bizden',
        'Hızlı değerlendirme ve ödeme',
        'Güvenli ve şeffaf işlem',
        'Ücretsiz çekici hizmeti',
      ],
    },
  },

  'hurda-arac-alim': {
    id: 'hurda',
    slug: 'hurda-arac-alim',
    title: 'Hurda Araç Alımı',
    shortTitle: 'Hurda Araç',
    icon: '♻️',
    color: 'lime',

    metaTitle: 'Hurda Araç Alımı | Hurda Belgesi & En İyi Fiyat - Hasar Park',
    metaDescription: 'Hurda aracınızı resmi belgeli alıyoruz. Hurda belgesi işlemleri, en yüksek kilo fiyatı. Çevre dostu geri dönüşüm.',
    keywords: [
      'hurda araç alan',
      'hurda araç satmak',
      'hurda belgesi',
      'hurda araç fiyatı',
      'araç hurdaya çıkarma',
    ],

    hero: {
      badge: '♻️ HURDA ARAÇ ALIMI',
      title: 'HURDA ARACINIZ',
      titleHighlight: 'ÇEVRECİ ÇÖZÜM',
      subtitle: 'Kullanım ömrünü tamamlamış araçlar için resmi belgeli hurda işlemi. En yüksek kilo fiyatı ve çevre dostu geri dönüşüm.',
      image: '/images/hurda-arac.png',
    },

    features: [
      {
        icon: '📋',
        title: 'Resmi Belgeli',
        description: 'Yasal izinli hurda araç işletmesi belgeli hizmet.',
      },
      {
        icon: '♻️',
        title: 'Çevre Dostu',
        description: 'Çevreye duyarlı geri dönüşüm süreçleri.',
      },
      {
        icon: '⚖️',
        title: 'Kilo Bazlı',
        description: 'En yüksek kilo fiyatı ile alım yapıyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Hurda aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '📄',
        title: 'Hurda Belgesi',
        description: 'Tüm hurda belgesi işlemleri bizden.',
      },
      {
        icon: '💳',
        title: 'Anında Ödeme',
        description: 'Tartı sonrası hemen ödeme yapıyoruz.',
      },
    ],

    faqs: [
      {
        question: 'Hurda araç işlemi nasıl yapılır?',
        answer: 'Aracınızı getirip tartıyoruz, kilo bazında fiyat belirliyoruz. Hurda belgesi düzenleniyor ve anında ödeme yapıyoruz. Tüm işlemler aynı gün içinde tamamlanır.',
      },
      {
        question: 'Hurda araç kilosu ne kadar?',
        answer: 'Hurda araç kilo fiyatı günlük hurda demir fiyatlarına göre değişir. Güncel fiyat için bizi arayabilirsiniz. Ortalama bir araç 800-1200 kg arasındadır.',
      },
      {
        question: 'Hangi araçlar hurdaya ayrılabilir?',
        answer: 'Kullanım ömrünü tamamlamış, ekonomik onarımsız, çok hasarlı veya pert raporlu tüm araçlar hurdaya ayrılabilir.',
      },
      {
        question: 'Hurda belgesi ne işe yarar?',
        answer: 'Hurda belgesi ile aracın trafikten tescili silinir, MTV ve vergi yükümlülüğü sona erer. Yasal olarak araç artık mevcut değildir.',
      },
      {
        question: 'Hurda işlemi ne kadar sürer?',
        answer: 'Hurda araç işlemi genellikle aynı gün içinde tamamlanır. Tartı, belge ve ödeme 2-3 saat içinde yapılır.',
      },
    ],

    content: {
      whatWeAccept: [
        'Kullanım ömrü bitmiş araçlar',
        'Çok hasarlı araçlar',
        'Çalışmayan araçlar',
        'Hurda belgesi çıkacak araçlar',
        'MTV borcu olan araçlar',
        'Tüm marka ve modeller',
      ],
      pricing: {
        title: 'Hurda Araç Değerlemesi',
        description: 'Hurda fiyatını etkileyen faktörler:',
        factors: [
          'Aracın ağırlığı (kilo)',
          'Günlük hurda demir fiyatı',
          'Kullanılabilir parça değeri',
          'Alüminyum ve metal oranı',
          'Aracın genel durumu',
        ],
      },
      whyChooseUs: [
        'Resmi belgeli hurda araç işletmesi',
        'En yüksek kilo fiyatı garantisi',
        'Çevre dostu geri dönüşüm',
        'Tüm evrak ve işlemler bizden',
        'Aynı gün ödeme',
        'Ücretsiz çekici hizmeti',
      ],
    },
  },
};

// Helper functions
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData[slug];
};

export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData);
};

export const getServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};