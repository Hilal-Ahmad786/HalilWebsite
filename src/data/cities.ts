export interface CityData {
  id: string;
  slug: string;
  name: string;
  region: string;

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
    ctaPhoneText?: string;
    ctaWhatsappText?: string;
    customPhone?: string;
    image?: string;
  };

  // Service availability & details
  services: {
    kazali: boolean;
    hasarli: boolean;
    pert: boolean;
    hurda: boolean;
  };

  // Custom content for service cards (for explicit keywords)
  servicesDetail?: {
    kazali?: { title: string; description: string };
    hasarli?: { title: string; description: string };
    pert?: { title: string; description: string };
    hurda?: { title: string; description: string };
  };

  // City-specific info
  cityInfo: {
    population: string;
    coverage: string[];
    responseTime: string;
    localOffice?: string;
  };

  // Detailed District Info (for H3 blocks)
  districtDetails?: Array<{
    title: string;
    description: string;
  }>;

  // Features for this city
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Testimonials
  testimonials: Array<{
    name: string;
    district: string;
    rating: number;
    text: string;
    service: string;
  }>;

  // FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const citiesData: Record<string, CityData> = {
  'istanbul': {
    id: 'istanbul',
    slug: 'istanbul',
    name: 'İstanbul',
    region: 'Marmara',

    metaTitle: 'İstanbul Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'İstanbul\'da kazalı, hasarlı, pert ve hurda araç alımı. Anadolu ve Avrupa yakası hizmet. 30 dakikada teklif, ücretsiz çekici.',
    keywords: [
      'istanbul kazalı araç alan',
      'istanbul hasarlı araç alan',
      'istanbul pert araç alan',
      'istanbul hurda araç alan',
      'anadolu yakası araç alım',
      'avrupa yakası araç alım',
      'kadıköy araç alım',
      'beyoğlu araç alım',
      'üsküdar araç alım',
    ],

    hero: {
      badge: '🏙️ İSTANBUL ARAÇ ALIM',
      title: 'İSTANBUL\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Anadolu ve Avrupa Yakası\'nda kazalı, hasarlı, pert ve hurda araç alımı. 2 saat içinde ücretsiz ekspertiz ve teklif.',
      image: '/images/cities/istanbul.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '15+ Milyon',
      coverage: [
        'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Beyoğlu', 'Şişli',
        'Kartal', 'Maltepe', 'Pendik', 'Ataşehir', 'Ümraniye',
        'Bakırköy', 'Zeytinburnu', 'Fatih', 'Beylikdüzü', 'Esenyurt',
        'Başakşehir', 'Sultangazi', 'Sarıyer', 'Beykoz', 'Çekmeköy',
        'Sancaktepe', 'Sultanbeyli', 'Arnavutköy', 'Küçükçekmece', 'Bahçelievler',
        'Bağcılar', 'Gaziosmanpaşa', 'Esenler', 'Güngören', 'Kağıthane',
        'Bayrampaşa', 'Eyüpsultan', 'Büyükçekmece', 'Çatalca', 'Silivri',
        'Tuzla', 'Şile', 'Adalar', 'Avcılar', 'Sultangazi'
      ],
      responseTime: '2 saat içinde',
      localOffice: 'Kadıköy & Beylikdüzü Ofislerimiz',
    },

    features: [
      {
        icon: '🚗',
        title: 'Her İlçeye Hizmet',
        description: '39 ilçede ücretsiz çekici ve ekspertiz hizmeti.',
      },
      {
        icon: '⚡',
        title: '2 Saat İçinde Teklif',
        description: 'İstanbul trafiğine rağmen hızlı değerlendirme.',
      },
      {
        icon: '🏢',
        title: 'Lokal Ofisler',
        description: 'Anadolu ve Avrupa yakası ofislerimizle yakınınızdayız.',
      },
      {
        icon: '💰',
        title: 'İstanbul\'un En Yüksek Fiyatı',
        description: 'Piyasa araştırması ile en iyi teklifi veriyoruz.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Tüm ilçelerden ücretsiz araç çekme hizmeti.',
      },
      {
        icon: '📄',
        title: 'Noter İşlemleri',
        description: 'İstanbul\'daki tüm noterlerle çalışıyoruz.',
      },
    ],

    testimonials: [
      {
        name: 'Mehmet K.',
        district: 'Kadıköy',
        rating: 5,
        text: 'Kadıköy\'den kazalı aracımı aldılar. 2 saat içinde geldiler, aynı gün ödemeyi yaptılar. İstanbul trafiğine rağmen çok hızlılar.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Ayşe D.',
        district: 'Beylikdüzü',
        rating: 5,
        text: 'Avrupa yakasında en yüksek fiyatı veren firma. Başka yerlerle kıyasladım, gerçekten en iyisi.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Can Y.',
        district: 'Ümraniye',
        rating: 5,
        text: 'Pert aracım için tüm evrakları hallettiler. Noter işlemlerini bile onlar yaptı. Çok profesyonel ekip.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İstanbul\'un hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İstanbul\'un tüm 39 ilçesine hizmet veriyoruz. Anadolu yakası ve Avrupa yakası olmak üzere her bölgede ücretsiz çekici ve ekspertiz hizmetimiz mevcuttur.',
      },
      {
        question: 'İstanbul trafiğinde ne kadar sürede gelirsiniz?',
        answer: 'İstanbul trafiğini göz önünde bulundurarak ortalama 2-3 saat içinde ekspertiz ekibimiz adresinize ulaşır. Acil durumlar için öncelik tanıyoruz.',
      },
      {
        question: 'Boğaz köprüsü geçişi için ücret alıyor musunuz?',
        answer: 'Hayır, köprü geçiş ücretleri dahil tüm çekici hizmetimiz tamamen ücretsizdir.',
      },
      {
        question: 'İstanbul\'da hangi noterlerde işlem yapıyorsunuz?',
        answer: 'İstanbul\'daki tüm noterlerle çalışıyoruz. Size en yakın noterde işlemlerinizi gerçekleştirebiliriz.',
      },
      {
        question: 'İstanbul\'da kaç ofissiniz var?',
        answer: 'Kadıköy\'de Anadolu yakası ofisimiz ve Beylikdüzü\'nde Avrupa yakası ofisimiz bulunmaktadır. Her iki ofisten de tüm İstanbul\'a hizmet veriyoruz.',
      },
    ],
  },

  'ankara': {
    id: 'ankara',
    slug: 'ankara',
    name: 'Ankara',
    region: 'İç Anadolu',

    metaTitle: 'Ankara Hasarlı Kazalı Pert Hurda Araç Alan | 30 DK Teklif | Hasar Park',
    metaDescription: 'Ankara’da hasarlı/kazalı/pert/hurda araç alımı. 30 dk teklif, ücretsiz çekici, hızlı noter işlemi, anında ödeme. Çankaya-Keçiören-Etimesgut tüm ilçeler.',
    keywords: [
      'ankara hasarlı araç alan',
      'ankara kazalı araç alan',
      'ankara pert araç alan',
      'ankara hurda araç alan',
      'ankara araç alım satım',
      'ankara hasarlı araç firmaları',
      'ankara pert araç yerleri',
      'çankaya hasarlı araç',
      'keçiören hasarlı araç',
      'etimesgut hasarlı araç'
    ],

    hero: {
      badge: '🏛️ ANKARA HASARLI ARAÇ ALIM',
      title: 'Ankara Hasarlı, Kazalı,',
      titleHighlight: 'Pert & Hurda Araç Alan',
      subtitle: 'Hasarlı araç alım satım Ankara genelinde hızlı yürür. Fotoğraf gönderin, 30 dk içinde teklif alın. Ücretsiz çekici + noter + anında ödeme.',
      ctaPhoneText: 'Hemen Ara',
      ctaWhatsappText: 'Whatsapp',
      customPhone: '05303444097',
      image: '/images/cities/ankara.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    servicesDetail: {
      hasarli: {
        title: 'Ankara Hasarlı Araç Alan',
        description: 'Ankara hasarlı araç alan ekibimiz, kaporta/mekanik fark etmeksizin aracı yerinde görür. Hasarlı araç alan firmalar Ankara içinde şeffaf fiyat + ücretsiz çekici + noter süreç.'
      },
      kazali: {
        title: 'Ankara Kazalı Araç Alan',
        description: 'Kazalı araç alan Ankara için fotoğrafa göre ön fiyat, ekspertiz sonrası net teklif. Kazalı araç alan yerler Ankara arayanlara Çankaya-Keçiören-Etimesgut aynı gün hizmet.'
      },
      pert: {
        title: 'Ankara Pert Araç Alan',
        description: 'Pert araç alan Ankara için pert raporuna göre özel değerlendirme, yasal süreç bizden.'
      },
      hurda: {
        title: 'Ankara Hurda Araç Alan',
        description: 'Hurda araç alan Ankara ekibi hurda belgeli araçlarda ücretsiz çekici + hızlı işlem.'
      }
    },

    cityInfo: {
      population: '5.7 Milyon',
      coverage: [
        'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
        'Sincan', 'Gölbaşı', 'Pursaklar', 'Altındağ', 'Kahramankazan',
        'Çubuk', 'Polatlı', 'Beypazarı', 'Elmadağ', 'Akyurt'
      ],
      responseTime: '30 dk içinde',
      localOffice: 'Çankaya Merkez Ofis',
    },

    districtDetails: [
      {
        title: 'Çankaya hasarlı araç alan',
        description: 'Merkez ofise yakın bölgede 1 saat içinde ekspertiz.'
      },
      {
        title: 'Keçiören hasarlı araç alan',
        description: 'Ücretsiz çekici ile adresten alım.'
      },
      {
        title: 'Etimesgut hasarlı araç alan',
        description: 'Aynı gün noter ve ödeme.'
      }
    ],

    features: [
      {
        icon: '⚡',
        title: '30 dk Teklif',
        description: 'Ankara\'da en hızlı değerlendirme.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Ankara geneli ücretsiz çekme.',
      },
      {
        icon: '💰',
        title: 'Noterde Anında Ödeme',
        description: 'Güvenli ve hızlı para transferi.',
      },
    ],

    testimonials: [
      {
        name: 'Ali R.',
        district: 'Çankaya',
        rating: 5,
        text: 'Çankaya\'da ofisleri var, çok hızlı geldiler. Kızılay\'da noterde işlemleri hallettik, aynı gün ödeme aldım.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Zeynep M.',
        district: 'Keçiören',
        rating: 5,
        text: 'Keçiören\'e kadar geldiler, aracı aldılar. Ankara\'da en yüksek fiyatı veren firma.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Burak S.',
        district: 'Yenimahalle',
        rating: 5,
        text: 'Yenimahalle\'de hurdaya çıkardım aracımı. Tüm işlemleri onlar halletti, çok memnunum.',
        service: 'Hurda Araç',
      },
    ],

    faqs: [
      {
        question: 'Hasarlı araç alım satım Ankara için hangi evraklar lazım?',
        answer: 'Ruhsat, kimlik ve (varsa) hasar geçmişi belgeleri yeterlidir. Noter satışı için ruhsat sahibi bizzat gelmelidir.',
      },
      {
        question: 'Hasarlı araç alan firmalar Ankara fiyatı neye göre belirler?',
        answer: 'Aracın marka/modeli, hasar durumu, değişen parçalar ve piyasa değerine göre şeffaf fiyatlandırma yapılır.',
      },
      {
        question: 'Hasarlı araç alan yerler Ankara içinde aynı gün gelir misiniz?',
        answer: 'Evet, Ankara içi tüm ilçelere aynı gün içerisinde, genellikle 1-2 saat içinde geliyoruz.',
      },
      {
        question: 'Keçiören/Etimesgut’ta çekici ücretsiz mi?',
        answer: 'Evet, Keçiören, Etimesgut ve Ankara\'nın tüm ilçelerinde çekici hizmetimiz tamamen ücretsizdir.',
      },
      {
        question: 'Sincan, Polatlı gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Ankara\'nın tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Uzaklık fiyatı etkilemez.',
      },
    ],
  },

  'izmir': {
    id: 'izmir',
    slug: 'izmir',
    name: 'İzmir',
    region: 'Ege',

    metaTitle: 'İzmir Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'İzmir\'de kazalı, hasarlı, pert ve hurda araç alımı. Konak, Karşıyaka, Bornova tüm ilçelere hizmet. Anında değerlendirme.',
    keywords: [
      'izmir kazalı araç alan',
      'izmir hasarlı araç alan',
      'izmir pert araç alan',
      'izmir hurda araç alan',
      'konak araç alım',
      'karşıyaka araç alım',
      'bornova araç alım',
      'buca araç alım',
    ],

    hero: {
      badge: '🌊 İZMİR ARAÇ ALIM',
      title: 'İZMİR\'DE ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'İzmir\'in tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. Sahil şeridinden Kemalpaşa\'ya kadar hizmet.',
      image: '/images/cities/izmir.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '4.4 Milyon',
      coverage: [
        'Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli',
        'Balçova', 'Gaziemir', 'Narlıdere', 'Bayraklı', 'Karabağlar',
        'Güzelbahçe', 'Menderes', 'Foça', 'Aliağa', 'Menemen',
        'Urla', 'Çeşme', 'Karaburun', 'Selçuk', 'Tire',
        'Torbalı', 'Ödemiş', 'Bergama', 'Kemalpaşa', 'Kınık',
        'Kiraz', 'Beydağ', 'Dikili', 'Seferihisar', 'Bayındır'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Konak & Karşıyaka Ofisleri',
    },

    features: [
      {
        icon: '🌊',
        title: 'Sahil Şeridi Hizmeti',
        description: 'Karşıyaka\'dan Çeşme\'ye kadar her yerde.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Ekspertiz',
        description: '1 saat içinde uzman değerlendirme.',
      },
      {
        icon: '💰',
        title: 'Ege\'nin En İyi Fiyatı',
        description: 'İzmir\'de en yüksek araç alım fiyatları.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'İzmir geneli ücretsiz taşıma.',
      },
      {
        icon: '📄',
        title: 'Konak Noter',
        description: 'Alsancak noterlerinde işlem.',
      },
      {
        icon: '🏢',
        title: 'İki Yakada Ofis',
        description: 'Konak ve Karşıyaka ofislerimiz.',
      },
    ],

    testimonials: [
      {
        name: 'Cem A.',
        district: 'Karşıyaka',
        rating: 5,
        text: 'Karşıyaka ofisinden hemen geldiler. İzmir\'de böyle güvenilir firma bulmak zor. Teşekkürler.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Selin K.',
        district: 'Bornova',
        rating: 5,
        text: 'Bornova\'da hasarlı aracımı sattım. Piyasayı araştırmışlar, gerçekten en yüksek fiyatı verdiler.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Murat T.',
        district: 'Konak',
        rating: 5,
        text: 'Alsancak\'ta noterde işlemleri yaptık. Aynı gün ödemeyi aldım. İzmir\'de en iyisi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İzmir\'in hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İzmir\'in 30 ilçesine hizmet veriyoruz. Konak, Karşıyaka, Bornova merkez ilçelerin yanı sıra Çeşme, Urla, Menemen gibi dış ilçelere de ücretsiz hizmet sunuyoruz.',
      },
      {
        question: 'İzmir\'de ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde (Konak, Karşıyaka, Bornova, Buca) 1 saat içinde, dış ilçelerde 2-3 saat içinde adresinize varırız.',
      },
      {
        question: 'Çeşme, Urla gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, İzmir\'in tüm ilçelerine ücretsiz çekici hizmetimiz mevcuttur. Mesafe fark etmeksizin hizmet veriyoruz.',
      },
      {
        question: 'İzmir\'de hangi noterlerde işlem yapıyorsunuz?',
        answer: 'Genellikle Alsancak ve Konak bölgesindeki noterlerle çalışıyoruz. Talep üzerine size yakın noterde işlem yapabiliriz.',
      },
    ],
  },

  'bursa': {
    id: 'bursa',
    slug: 'bursa',
    name: 'Bursa',
    region: 'Marmara',

    metaTitle: 'Bursa Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Bursa\'da kazalı, hasarlı, pert ve hurda araç alımı. Osmangazi, Nilüfer, Yıldırım tüm ilçelere hizmet. 1 saatte nakit ödeme.',
    keywords: [
      'bursa kazalı araç alan',
      'bursa hasarlı araç alan',
      'bursa pert araç alan',
      'bursa hurda araç alan',
      'osmangazi araç alım',
      'nilüfer araç alım',
      'yıldırım araç alım',
      'mudanya araç alım',
    ],

    hero: {
      badge: '🏔️ BURSA ARAÇ ALIM',
      title: 'BURSA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Bursa\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. Yerinde ekspertiz ve anında ödeme.',
      image: '/images/cities/bursa.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '3.1 Milyon',
      coverage: [
        'Osmangazi', 'Nilüfer', 'Yıldırım', 'Gemlik', 'İnegöl',
        'Mudanya', 'Gürsu', 'Kestel', 'Yenişehir', 'Mustafakemalpaşa',
        'Karacabey', 'Orhangazi', 'İznik', 'Keles', 'Orhaneli',
        'Harmancık', 'Büyükorhan'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Nilüfer & Osmangazi Ofisleri',
    },

    features: [
      {
        icon: '🏔️',
        title: 'Tüm Bursa\'ya Hizmet',
        description: 'Merkez ve çevre ilçelerin tamamına hizmet.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Ekspertiz',
        description: '1 saat içinde uzman ekibimiz yanınızda.',
      },
      {
        icon: '💰',
        title: 'Bursa\'nın En İyi Fiyatı',
        description: 'Piyasa değerinin üzerinde teklifler.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Bursa geneli ücretsiz araç çekimi.',
      },
      {
        icon: '📄',
        title: 'Hızlı Noter',
        description: 'Tüm noterlerde anında devir işlemi.',
      },
      {
        icon: '🏢',
        title: 'Yerel Ofisler',
        description: 'Nilüfer ve Osmangazi ofislerimiz.',
      },
    ],

    testimonials: [
      {
        name: 'Ahmet Y.',
        district: 'Nilüfer',
        rating: 5,
        text: 'Nilüfer\'de kaza yapan aracımı değerinde aldılar. Çok memnun kaldım.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Seda B.',
        district: 'Osmangazi',
        rating: 5,
        text: 'Osmangazi\'de pert aracımı sattım. İşlemler çok hızlıydı.',
        service: 'Pert Araç',
      },
      {
        name: 'Kemal T.',
        district: 'İnegöl',
        rating: 5,
        text: 'İnegöl\'e kadar geldiler, hiç beklemedim. Teşekkürler.',
        service: 'Hasarlı Araç',
      },
    ],

    faqs: [
      {
        question: 'Bursa\'nın hangi ilçelerine geliyorsunuz?',
        answer: 'Bursa\'nın tüm 17 ilçesine hizmet veriyoruz. Merkez ilçeler ve İnegöl, Gemlik gibi dış ilçeler dahildir.',
      },
      {
        question: 'Bursa\'da ödeme nasıl oluyor?',
        answer: 'Noter satışı ile eş zamanlı olarak banka hesabınıza nakit transfer yapıyoruz.',
      },
    ],
  },

  'antalya': {
    id: 'antalya',
    slug: 'antalya',
    name: 'Antalya',
    region: 'Akdeniz',

    metaTitle: 'Antalya Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Antalya\'da kazalı, hasarlı, pert ve hurda araç alımı. Muratpaşa, Kepez, Konyaaltı, Alanya tüm ilçelere hizmet.',
    keywords: [
      'antalya kazalı araç alan',
      'antalya hasarlı araç alan',
      'antalya pert araç alan',
      'antalya hurda araç alan',
      'muratpaşa araç alım',
      'kepez araç alım',
      'konyaaltı araç alım',
      'alanya araç alım',
    ],

    hero: {
      badge: '☀️ ANTALYA ARAÇ ALIM',
      title: 'ANTALYA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Antalya ve ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. Turizm sezonu fark etmeksizin 7/24 hizmet.',
      image: '/images/cities/antalya.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '2.6 Milyon',
      coverage: [
        'Muratpaşa', 'Kepez', 'Konyaaltı', 'Alanya', 'Manavgat',
        'Serik', 'Aksu', 'Döşemealtı', 'Kemer', 'Kumluca',
        'Finike', 'Kaş', 'Korkuteli', 'Gazipaşa', 'Elmalı',
        'Demre', 'Akseki', 'Gündoğmuş', 'İbradı'
      ],
      responseTime: '1-2 saat içinde',
      localOffice: 'Muratpaşa & Alanya Ofisleri',
    },

    features: [
      {
        icon: '☀️',
        title: 'Tüm Antalya\'ya Hizmet',
        description: 'Kaş\'tan Gazipaşa\'ya kadar hizmet.',
      },
      {
        icon: '⚡',
        title: 'Hızlı Değerleme',
        description: 'Uzman ekibimizle hızlı fiyat teklifi.',
      },
      {
        icon: '💰',
        title: 'Antalya\'nın En İyi Fiyatı',
        description: 'Bölgedeki en yüksek fiyat garantisi.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Tüm ilçelerden ücretsiz araç alımı.',
      },
      {
        icon: '📄',
        title: 'Kolay Devir',
        description: 'Noter işlemleri tarafımızca yapılır.',
      },
      {
        icon: '🏢',
        title: 'Merkezi Ofisler',
        description: 'Muratpaşa ve Alanya şubelerimiz.',
      },
    ],

    testimonials: [
      {
        name: 'Hakan Ç.',
        district: 'Muratpaşa',
        rating: 5,
        text: 'Muratpaşa\'da aracımı sattım. Çok ilgililer, fiyat konusunda da yardımcı oldular.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Merve K.',
        district: 'Alanya',
        rating: 5,
        text: 'Alanya\'da tatilde kaza yaptım, aracı gelip aldılar. Çok büyük yükten kurtardılar.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Serdar A.',
        district: 'Konyaaltı',
        rating: 5,
        text: 'Konyaaltı\'nda pert aracımı en iyi fiyata sattım. Tavsiye ederim.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Antalya\'nın turistik ilçelerine geliyor musunuz?',
        answer: 'Evet, Kemer, Alanya, Kaş gibi tüm turistik ilçelere hizmet veriyoruz.',
      },
      {
        question: 'Antalya dışına da hizmetiniz var mı?',
        answer: 'Evet, çevre illere de (Burdur, Isparta) hizmet vermekteyiz.',
      },
    ],
  },

  'adana': {
    id: 'adana',
    slug: 'adana',
    name: 'Adana',
    region: 'Akdeniz',

    metaTitle: 'Adana Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Adana\'da kazalı, hasarlı, pert ve hurda araç alımı. Seyhan, Yüreğir, Çukurova tüm ilçelere hizmet. Anında nakit.',
    keywords: [
      'adana kazalı araç alan',
      'adana hasarlı araç alan',
      'adana pert araç alan',
      'adana hurda araç alan',
      'seyhan araç alım',
      'yüreğir araç alım',
      'çukurova araç alım',
      'sarıçam araç alım',
    ],

    hero: {
      badge: '🌶️ ADANA ARAÇ ALIM',
      title: 'ADANA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Adana ve çevresinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde adresinizdeyiz.',
      image: '/images/cities/adana.png',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '2.2 Milyon',
      coverage: [
        'Seyhan', 'Yüreğir', 'Çukurova', 'Sarıçam', 'Ceyhan',
        'Kozan', 'İmamoğlu', 'Karataş', 'Karaisalı', 'Pozantı',
        'Yumurtalık', 'Tufanbeyli', 'Feke', 'Aladağ', 'Saimbeyli'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Seyhan Merkez Ofis',
    },

    features: [
      {
        icon: '🌶️',
        title: 'Tüm Adana\'ya Hizmet',
        description: 'Merkez ve taşra ilçelerin tamamı.',
      },
      {
        icon: '⚡',
        title: 'Hızlı İşlem',
        description: '1 saat içinde ekspertiz ve teklif.',
      },
      {
        icon: '💰',
        title: 'Adana\'nın En İyi Fiyatı',
        description: 'Bölge piyasasının üzerinde rakamlar.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Adana içi ücretsiz çekici hizmeti.',
      },
      {
        icon: '📄',
        title: 'Güvenilir Devir',
        description: 'Noter huzurunda güvenli satış.',
      },
      {
        icon: '🏢',
        title: 'Merkezi Konum',
        description: 'Seyhan ofisimizle hizmetinizdeyiz.',
      },
    ],

    testimonials: [
      {
        name: 'Murat D.',
        district: 'Seyhan',
        rating: 5,
        text: 'Seyhan\'da kaza yapan aracımı hemen gelip aldılar. Ödemeyi peşin yaptılar.',
        service: 'Kazalı Araç',
      },
      {
        name: 'Ayşe T.',
        district: 'Çukurova',
        rating: 5,
        text: 'Çukurova\'da hasarlı aracım için en iyi fiyatı verdiler. Memnun kaldım.',
        service: 'Hasarlı Araç',
      },
      {
        name: 'Mehmet K.',
        district: 'Ceyhan',
        rating: 5,
        text: 'Ceyhan\'a kadar geldiler. Hizmet kalitesi çok iyi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Adana\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Adana\'nın 15 ilçesinin tamamına hizmet veriyoruz.',
      },
      {
        question: 'Adana\'da ekspertiz ücretli mi?',
        answer: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir.',
      },
    ],
  },

  'konya': {
    id: 'konya',
    slug: 'konya',
    name: 'Konya',
    region: 'İç Anadolu',
    metaTitle: 'Konya Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Konya\'da kazalı, hasarlı, pert ve hurda araç alımı. Selçuklu, Meram, Karatay tüm ilçelere hizmet.',
    keywords: ['konya kazalı araç', 'konya hasarlı araç', 'konya pert araç', 'selçuklu araç alım'],
    hero: {
      badge: '🌾 KONYA ARAÇ ALIM',
      title: 'KONYA\'DA ARACINIZ',
      titleHighlight: 'DEĞERİNDE ALINIR',
      subtitle: 'Konya ve ilçelerinde her türlü hasarlı araç alımı.',
      image: '/images/cities/konya.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.3 Milyon',
      coverage: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Selçuklu Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'gaziantep': {
    id: 'gaziantep',
    slug: 'gaziantep',
    name: 'Gaziantep',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Gaziantep Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Gaziantep\'te kazalı, hasarlı, pert araç alımı. Şehitkamil, Şahinbey tüm ilçeler.',
    keywords: ['gaziantep kazalı araç', 'gaziantep hasarlı araç', 'şehitkamil araç alım'],
    hero: {
      badge: '🏰 GAZİANTEP ARAÇ ALIM',
      title: 'GAZİANTEP\'TE ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Gaziantep genelinde hasarlı araçlarınızı yerinde alıyoruz.',
      image: '/images/cities/gaziantep.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Şehitkamil', 'Şahinbey', 'Nizip', 'İslahiye'],
      responseTime: '1 saat içinde',
      localOffice: 'Şehitkamil Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'mersin': {
    id: 'mersin',
    slug: 'mersin',
    name: 'Mersin',
    region: 'Akdeniz',
    metaTitle: 'Mersin Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Mersin\'de kazalı, hasarlı, pert araç alımı. Yenişehir, Mezitli, Tarsus tüm ilçeler.',
    keywords: ['mersin kazalı araç', 'mersin hasarlı araç', 'tarsus araç alım'],
    hero: {
      badge: '🍊 MERSİN ARAÇ ALIM',
      title: 'MERSİN\'DE ARACINIZ',
      titleHighlight: 'DEĞERİNDE SATILSIN',
      subtitle: 'Mersin ve ilçelerinde hasarlı araç alım hizmeti.',
      image: '/images/cities/mersin.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.9 Milyon',
      coverage: ['Yenişehir', 'Mezitli', 'Akdeniz', 'Toroslar', 'Tarsus', 'Erdemli'],
      responseTime: '1-2 saat içinde',
      localOffice: 'Yenişehir Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'kayseri': {
    id: 'kayseri',
    slug: 'kayseri',
    name: 'Kayseri',
    region: 'İç Anadolu',
    metaTitle: 'Kayseri Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Kayseri\'de kazalı, hasarlı, pert araç alımı. Melikgazi, Kocasinan, Talas.',
    keywords: ['kayseri kazalı araç', 'kayseri hasarlı araç', 'melikgazi araç alım'],
    hero: {
      badge: '🗻 KAYSERİ ARAÇ ALIM',
      title: 'KAYSERİ\'DE ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Kayseri ve çevresinde hasarlı araçlarınızı değerlendiriyoruz.',
      image: '/images/cities/kayseri.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.4 Milyon',
      coverage: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi'],
      responseTime: '1 saat içinde',
      localOffice: 'Melikgazi Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'eskisehir': {
    id: 'eskisehir',
    slug: 'eskisehir',
    name: 'Eskişehir',
    region: 'İç Anadolu',
    metaTitle: 'Eskişehir Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Eskişehir\'de kazalı, hasarlı, pert araç alımı. Odunpazarı, Tepebaşı.',
    keywords: ['eskişehir kazalı araç', 'eskişehir hasarlı araç', 'odunpazarı araç alım'],
    hero: {
      badge: '🌉 ESKİŞEHİR ARAÇ ALIM',
      title: 'ESKİŞEHİR\'DE ARACINIZ',
      titleHighlight: 'DEĞERİNDE ALINIR',
      subtitle: 'Eskişehir genelinde hasarlı araç alım hizmeti.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '900 Bin',
      coverage: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar'],
      responseTime: '1 saat içinde',
      localOffice: 'Odunpazarı Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'diyarbakir': {
    id: 'diyarbakir',
    slug: 'diyarbakir',
    name: 'Diyarbakır',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Diyarbakır Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Diyarbakır\'da kazalı, hasarlı, pert araç alımı. Bağlar, Kayapınar, Yenişehir.',
    keywords: ['diyarbakır kazalı araç', 'diyarbakır hasarlı araç', 'bağlar araç alım'],
    hero: {
      badge: '🏯 DİYARBAKIR ARAÇ ALIM',
      title: 'DİYARBAKIR\'DA ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Diyarbakır ve ilçelerinde hasarlı araç alımı.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.8 Milyon',
      coverage: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur'],
      responseTime: '1 saat içinde',
      localOffice: 'Kayapınar Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'samsun': {
    id: 'samsun',
    slug: 'samsun',
    name: 'Samsun',
    region: 'Karadeniz',
    metaTitle: 'Samsun Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Samsun\'da kazalı, hasarlı, pert araç alımı. İlkadım, Atakum, Canik.',
    keywords: ['samsun kazalı araç', 'samsun hasarlı araç', 'atakum araç alım'],
    hero: {
      badge: '🚢 SAMSUN ARAÇ ALIM',
      title: 'SAMSUN\'DA ARACINIZ',
      titleHighlight: 'DEĞERİNDE SATILSIN',
      subtitle: 'Samsun ve Karadeniz bölgesinde hasarlı araç alımı.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.3 Milyon',
      coverage: ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'],
      responseTime: '1 saat içinde',
      localOffice: 'Atakum Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'denizli': {
    id: 'denizli',
    slug: 'denizli',
    name: 'Denizli',
    region: 'Ege',
    metaTitle: 'Denizli Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Denizli\'de kazalı, hasarlı, pert araç alımı. Pamukkale, Merkezefendi.',
    keywords: ['denizli kazalı araç', 'denizli hasarlı araç', 'pamukkale araç alım'],
    hero: {
      badge: '🐓 DENİZLİ ARAÇ ALIM',
      title: 'DENİZLİ\'DE ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Denizli ve çevresinde hasarlı araçlarınızı alıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1 Milyon',
      coverage: ['Pamukkale', 'Merkezefendi', 'Çivril', 'Acıpayam'],
      responseTime: '1 saat içinde',
      localOffice: 'Pamukkale Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'sanliurfa': {
    id: 'sanliurfa',
    slug: 'sanliurfa',
    name: 'Şanlıurfa',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Şanlıurfa Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Şanlıurfa\'da kazalı, hasarlı, pert araç alımı. Haliliye, Eyyübiye, Karaköprü.',
    keywords: ['şanlıurfa kazalı araç', 'urfa hasarlı araç', 'haliliye araç alım'],
    hero: {
      badge: '🕌 ŞANLIURFA ARAÇ ALIM',
      title: 'ŞANLIURFA\'DA ARACINIZ',
      titleHighlight: 'DEĞERİNDE ALINIR',
      subtitle: 'Şanlıurfa ve ilçelerinde hasarlı araç alım hizmeti.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Haliliye Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'malatya': {
    id: 'malatya',
    slug: 'malatya',
    name: 'Malatya',
    region: 'Doğu Anadolu',
    metaTitle: 'Malatya Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Malatya\'da kazalı, hasarlı, pert araç alımı. Battalgazi, Yeşilyurt.',
    keywords: ['malatya kazalı araç', 'malatya hasarlı araç', 'battalgazi araç alım'],
    hero: {
      badge: '🍑 MALATYA ARAÇ ALIM',
      title: 'MALATYA\'DA ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Malatya genelinde hasarlı araç alımı.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '800 Bin',
      coverage: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir'],
      responseTime: '1 saat içinde',
      localOffice: 'Battalgazi Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'kahramanmaras': {
    id: 'kahramanmaras',
    slug: 'kahramanmaras',
    name: 'Kahramanmaraş',
    region: 'Akdeniz',
    metaTitle: 'Kahramanmaraş Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Kahramanmaraş\'ta kazalı, hasarlı, pert araç alımı. Onikişubat, Dulkadiroğlu.',
    keywords: ['kahramanmaraş kazalı araç', 'maraş hasarlı araç', 'onikişubat araç alım'],
    hero: {
      badge: '🍦 KAHRAMANMARAŞ ARAÇ ALIM',
      title: 'MARAŞ\'TA ARACINIZ',
      titleHighlight: 'DEĞERİNDE SATILSIN',
      subtitle: 'Kahramanmaraş ve ilçelerinde hasarlı araç alımı.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['Onikişubat', 'Dulkadiroğlu', 'Elbistan', 'Afşin'],
      responseTime: '1 saat içinde',
      localOffice: 'Onikişubat Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'erzurum': {
    id: 'erzurum',
    slug: 'erzurum',
    name: 'Erzurum',
    region: 'Doğu Anadolu',
    metaTitle: 'Erzurum Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Erzurum\'da kazalı, hasarlı, pert araç alımı. Yakutiye, Palandöken, Aziziye.',
    keywords: ['erzurum kazalı araç', 'erzurum hasarlı araç', 'yakutiye araç alım'],
    hero: {
      badge: '⛷️ ERZURUM ARAÇ ALIM',
      title: 'ERZURUM\'DA ARACINIZ',
      titleHighlight: 'NAKİT ALINIR',
      subtitle: 'Erzurum ve çevresinde hasarlı araçlarınızı alıyoruz.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '750 Bin',
      coverage: ['Yakutiye', 'Palandöken', 'Aziziye', 'Horasan', 'Oltu'],
      responseTime: '1 saat içinde',
      localOffice: 'Yakutiye Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  },

  'van': {
    id: 'van',
    slug: 'van',
    name: 'Van',
    region: 'Doğu Anadolu',
    metaTitle: 'Van Kazalı, Hasarlı, Pert Araç Alımı | Hasar Park',
    metaDescription: 'Van\'da kazalı, hasarlı, pert araç alımı. İpekyolu, Tuşba, Edremit.',
    keywords: ['van kazalı araç', 'van hasarlı araç', 'ipekyolu araç alım'],
    hero: {
      badge: '🌊 VAN ARAÇ ALIM',
      title: 'VAN\'DA ARACINIZ',
      titleHighlight: 'DEĞERİNDE ALINIR',
      subtitle: 'Van ve ilçelerinde hasarlı araç alım hizmeti.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['İpekyolu', 'Tuşba', 'Edremit', 'Erciş'],
      responseTime: '1 saat içinde',
      localOffice: 'İpekyolu Ofis',
    },
    features: [],
    testimonials: [],
    faqs: [],
  }
};

// Helper functions
export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData[slug];
};

export const getAllCities = (): CityData[] => {
  return Object.values(citiesData);
};

export const getCitySlugs = (): string[] => {
  return Object.keys(citiesData);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return Object.values(citiesData).filter(city => city.region === region);
};

// Generate city-service combination URLs
export const generateCityServiceUrls = () => {
  const cities = getAllCities();
  const services = ['kazali', 'hasarli', 'pert', 'hurda'];

  const urls: Array<{ city: string; service: string; url: string }> = [];

  cities.forEach(city => {
    services.forEach(service => {
      if (city.services[service as keyof typeof city.services]) {
        urls.push({
          city: city.name,
          service,
          url: `/sehirler/${city.slug}/${service}-arac-alim`,
        });
      }
    });
  });

  return urls;
};