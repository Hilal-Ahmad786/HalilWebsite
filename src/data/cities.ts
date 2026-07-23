export interface CityData {
  id: string;
  slug: string;
  name: string;
  region: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  ogUrl: string;

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

    metaTitle: 'İstanbul Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'İstanbul\'da kazalı, hasarlı, pert ve hurda araç alımı. Kadıköy ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['istanbul hasarlı araç alan', 'istanbul kazalı araç alan', 'istanbul pert araç alan', 'istanbul hurda araç alımı', 'istanbul araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/istanbul',
    ogUrl: 'https://www.hasarpark.com/sehirler/istanbul',

    hero: {
      badge: '🏙️ İSTANBUL ARAÇ ALIM',
      title: 'İstanbul\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'İstanbul\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 34 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Anadolu ve Avrupa Yakası bölgesinde Kadıköy, Beşiktaş, Bağcılar, Pendik, Beylikdüzü başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile İstanbul\'da güvenle satın.',
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
      responseTime: '30 dakika içinde',
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

    metaTitle: 'Ankara Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Ankara\'da kazalı, hasarlı, pert ve hurda araç alımı. Çankaya ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['ankara hasarlı araç alan', 'ankara kazalı araç alan', 'ankara pert araç alan', 'ankara hurda araç alımı', 'ankara araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/ankara',
    ogUrl: 'https://www.hasarpark.com/sehirler/ankara',

    hero: {
      badge: '🏛️ ANKARA HASARLI ARAÇ ALIM',
      title: 'Ankara\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Ankara\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 06 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Çankaya, Keçiören, Etimesgut, Sincan, Mamak başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Ankara\'da güvenle satın.',
      ctaPhoneText: 'Hemen Ara',
      ctaWhatsappText: 'Whatsapp',
      customPhone: '05345809315',
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
      responseTime: '30 dakika içinde',
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

    metaTitle: 'İzmir Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'İzmir\'de kazalı, hasarlı, pert ve hurda araç alımı. Konak ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['izmir hasarlı araç alan', 'izmir kazalı araç alan', 'izmir pert araç alan', 'izmir hurda araç alımı', 'izmir araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/izmir',
    ogUrl: 'https://www.hasarpark.com/sehirler/izmir',

    hero: {
      badge: '🌊 İZMİR ARAÇ ALIM',
      title: 'İzmir\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'İzmir\'de kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 35 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Ege bölgesinde Konak, Karşıyaka, Bornova, Buca, Kemalpaşa başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile İzmir\'de güvenle satın.',
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
      responseTime: '30 dakika içinde',
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

    metaTitle: 'Bursa Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Bursa\'da kazalı, hasarlı, pert ve hurda araç alımı. Osmangazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['bursa hasarlı araç alan', 'bursa kazalı araç alan', 'bursa pert araç alan', 'bursa hurda araç alımı', 'bursa araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/bursa',
    ogUrl: 'https://www.hasarpark.com/sehirler/bursa',

    hero: {
      badge: '🏔️ BURSA ARAÇ ALIM',
      title: 'Bursa\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Bursa\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 16 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Marmara bölgesinde Osmangazi, Nilüfer, Yıldırım, İnegöl, Gemlik başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Bursa\'da güvenle satın.',
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
      responseTime: '30 dakika içinde',
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

    metaTitle: 'Antalya Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Antalya\'da kazalı, hasarlı, pert ve hurda araç alımı. Muratpaşa ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['antalya hasarlı araç alan', 'antalya kazalı araç alan', 'antalya pert araç alan', 'antalya hurda araç alımı', 'antalya araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/antalya',
    ogUrl: 'https://www.hasarpark.com/sehirler/antalya',

    hero: {
      badge: '☀️ ANTALYA ARAÇ ALIM',
      title: 'Antalya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Antalya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 07 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Muratpaşa, Kepez, Konyaaltı, Alanya, Manavgat başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Antalya\'da güvenle satın.',
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
      responseTime: '30 dakika içinde',
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
        title: 'Antalya\'da Güçlü Teklif',
        description: 'Bölgede rekabetçi fiyat teklifi.',
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

    metaTitle: 'Adana Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Adana\'da kazalı, hasarlı, pert ve hurda araç alımı. Seyhan ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['adana hasarlı araç alan', 'adana kazalı araç alan', 'adana pert araç alan', 'adana hurda araç alımı', 'adana araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/adana',
    ogUrl: 'https://www.hasarpark.com/sehirler/adana',

    hero: {
      badge: '🌶️ ADANA ARAÇ ALIM',
      title: 'Adana\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Adana\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 01 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Seyhan, Yüreğir, Çukurova, Ceyhan başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Adana\'da güvenle satın.',
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
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Konya Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Konya\'da kazalı, hasarlı, pert ve hurda araç alımı. Selçuklu ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['konya hasarlı araç alan', 'konya kazalı araç alan', 'konya pert araç alan', 'konya hurda araç alımı', 'konya araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/konya',
    ogUrl: 'https://www.hasarpark.com/sehirler/konya',
    hero: {
      badge: '🌾 KONYA ARAÇ ALIM',
      title: 'Konya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'İl sınırları Kulu\'dan Seydişehir\'e, Akşehir\'den Ereğli\'ye uzanan Konya\'da aracınız nerede olursa olsun ekibimiz ücretsiz çekiciyle kapınıza geliyor. Tarım ve sanayinin iç içe geçtiği bu geniş coğrafyada 42 plakalı kazalı, hasarlı, pert veya hurda aracınız için WhatsApp\'tan fotoğraf göndermeniz yeterli; 30 dakika içinde rekabetçi teklifinizi iletiyoruz. Selçuklu, Meram ve Karatay merkez olmak üzere tüm ilçelerde aynı gün ekspertiz planlıyoruz. Noter onaylı devir ve anında ödemeyle Konya\'da araç satmak artık uzun pazarlıklar gerektirmiyor.',
      image: '/images/cities/konya.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.3 Milyon',
      coverage: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir', 'Çumra', 'Seydişehir', 'Ilgın', 'Kulu'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Selçuklu kazalı araç alımı',
        description: 'Konya\'nın en kalabalık ilçesi Selçuklu\'da kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, uygun görülen teklif sonrası çekici ve noter sürecini beklemeden başlatıyoruz.',
      },
      {
        title: 'Meram ve Karatay\'da hızlı hizmet',
        description: 'Merkez ilçeler Meram ve Karatay\'da adresinize kısa sürede ulaşıyor, pert veya hurda aracınız için evrak hazırlığından ödemeye kadar tüm adımları tek seferde tamamlıyoruz.',
      },
      {
        title: 'Ereğli ve Akşehir\'e çekici',
        description: 'Merkeze uzak Ereğli, Akşehir ve Beyşehir gibi ilçelerde de çekici hizmetimiz ücretsizdir; mesafe, aracınıza verdiğimiz teklifi hiçbir şekilde düşürmez.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Geniş Coğrafyada Ücretsiz Çekici',
        description: 'Konya\'nın geniş il sınırları içinde Kulu\'dan Seydişehir\'e kadar tüm ilçelerden aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '⚡',
        title: 'Fotoğrafla 30 Dakikada Teklif',
        description: 'WhatsApp üzerinden gönderdiğiniz fotoğraflarla aracınız yerinden oynamadan değerlendirilir, yarım saat içinde net teklif alırsınız.',
      },
      {
        icon: '📄',
        title: 'Konya Noterlerinde Kolay Devir',
        description: 'Selçuklu, Meram veya Karatay\'da size en yakın noterde devri birlikte tamamlıyor, ödemeyi aynı anda yapıyoruz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Konya\'nın Ereğli ilçesinden aracımı alır mısınız?',
        answer: 'Evet, Ereğli dahil Konya\'nın tüm ilçelerinden araç alıyoruz. Ereğli merkeze yaklaşık 150 km uzaklıkta olsa da çekici hizmetimiz tamamen ücretsizdir ve bu mesafe teklifimizi etkilemez. Fotoğrafları WhatsApp\'tan gönderdiğinizde 30 dakika içinde ön teklif verir, anlaştığımızda aynı gün veya ertesi gün aracı adresinizden teslim alırız.',
      },
      {
        question: 'Konya\'da noter işlemleri nasıl yürüyor?',
        answer: 'Devir işlemini Konya\'da size en yakın noterde gerçekleştiriyoruz; Selçuklu, Meram ve Karatay\'daki noterler en sık çalıştığımız yerlerdir. Randevuyu biz ayarlıyor, satış sözleşmesi imzalanırken ödemenizi banka havalesiyle eş zamanlı yapıyoruz. Ruhsat ve kimliğinizle gelmeniz yeterli; diğer evrak hazırlığını ekibimiz üstlenir ve işlem genellikle yarım saatte biter.',
      },
      {
        question: 'Motoru çalışmayan veya yürümez durumdaki aracı Konya\'dan alıyor musunuz?',
        answer: 'Evet, aracın çalışır durumda olması gerekmez. Kaza sonrası yürümez hale gelmiş, motor veya şanzıman arızalı, uzun süre park halinde kalmış ya da hurda belgeli araçları da değerlendiriyoruz. Konya genelinde kendi çekicimizle aracı bulunduğu yerden alıyoruz; sizin herhangi bir nakliye masrafı ödemeniz gerekmiyor.',
      },
      {
        question: 'Konya\'da hafta sonu araç satışı yapabilir miyim?',
        answer: 'WhatsApp hattımız hafta sonu dahil her gün açıktır; fotoğraf gönderip teklif alabilir, çekici planlaması yapabilirsiniz. Noterler cumartesi ve pazar kapalı olduğu için devir işlemi ilk iş gününe randevulanır, ancak aracın teslim alınması ve fiyatta anlaşma hafta sonu tamamlanabilir. Böylece pazartesi sabahına yalnızca imza ve ödeme kalır.',
      },
    ],
  },

  'gaziantep': {
    id: 'gaziantep',
    slug: 'gaziantep',
    name: 'Gaziantep',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Gaziantep Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Gaziantep\'te kazalı, hasarlı, pert ve hurda araç alımı. Şahinbey ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['gaziantep hasarlı araç alan', 'gaziantep kazalı araç alan', 'gaziantep pert araç alan', 'gaziantep hurda araç alımı', 'gaziantep araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/gaziantep',
    ogUrl: 'https://www.hasarpark.com/sehirler/gaziantep',
    hero: {
      badge: '🏰 GAZİANTEP ARAÇ ALIM',
      title: 'Gaziantep\'te Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Sanayisi ve organize sanayi bölgeleriyle Güneydoğu\'nun üretim merkezi olan Gaziantep\'te yoğun ticari trafik, kaza ve hasar riskini de beraberinde getiriyor. 27 plakalı kazalı, hasarlı, pert veya hurda aracınız için Şahinbey ve Şehitkamil başta olmak üzere Nizip\'ten İslahiye\'ye kadar tüm ilçelere ücretsiz çekici gönderiyoruz. Aracınızın fotoğraflarını WhatsApp\'tan iletin; 30 dakika içinde piyasa koşullarında güçlü bir teklif hazırlayalım. Noter devri ve eş zamanlı ödeme ile satış çoğu zaman aynı gün tamamlanır.',
      image: '/images/cities/gaziantep.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Nurdağı', 'Araban', 'Oğuzeli', 'Yavuzeli', 'Karkamış'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Şahinbey hasarlı araç alımı',
        description: 'Gaziantep\'in merkez ilçesi Şahinbey\'de hasarlı ve kazalı araçlar için aynı gün yerinde değerlendirme yapıyor, anlaşma sonrası çekici ve noter adımlarını beklemeden başlatıyoruz.',
      },
      {
        title: 'Şehitkamil\'de yerinde ekspertiz',
        description: 'Şehitkamil\'in tüm mahallelerinde pert ve hurda araçlar dahil her durumdaki aracı adresinizde inceliyor, fotoğrafla verdiğimiz ön teklifi yerinde netleştiriyoruz.',
      },
      {
        title: 'Nizip ve İslahiye\'ye çekici',
        description: 'Nizip, İslahiye, Nurdağı ve Oğuzeli gibi ilçelerden de ücretsiz çekiciyle araç alıyoruz; merkez dışındaki adresler için ek ücret talep etmiyoruz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Ticari Araçlar Dahil Alım',
        description: 'Gaziantep\'in yoğun ticari trafiğinde hasar alan kamyonet, panelvan ve binek araçları ayrım yapmadan değerlendiriyor, çekiciyle ücretsiz teslim alıyoruz.',
      },
      {
        icon: '⚡',
        title: 'OSB ve Sanayiye Hızlı Ulaşım',
        description: 'Organize sanayi bölgeleri ve şehir merkezindeki adreslere kısa sürede ulaşıyor, ekspertizi aracınızın bulunduğu yerde tamamlıyoruz.',
      },
      {
        icon: '💰',
        title: 'Eş Zamanlı Ödeme',
        description: 'Gaziantep\'te noter satışı sırasında bedeli banka hesabınıza anında aktarıyoruz; ödeme beklemeden işlemi bitirirsiniz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Gaziantep\'te aynı gün ödeme alabilir miyim?',
        answer: 'Evet. Sabah saatlerinde fotoğraflarınızı gönderirseniz teklif, ekspertiz ve noter randevusu genellikle aynı güne sığar. Noterde satış sözleşmesi imzalanırken bedeli banka hesabınıza havale ediyoruz; ödeme satıştan sonraki günlere sarkmadan tamamlanır. Nakit akışınızı planlayabilmeniz için havale dekontunu işlem anında sizinle paylaşıyoruz.',
      },
      {
        question: 'Nurdağı veya Araban gibi uzak ilçelerden araç alıyor musunuz?',
        answer: 'Alıyoruz. Gaziantep\'in tüm ilçeleri hizmet alanımız içinde; Nurdağı, Araban ve Yavuzeli gibi merkeze uzak noktalara da ücretsiz çekici gönderiyoruz. Uzaklık ne teklif tutarını ne de işlem süresini olumsuz etkiler. Telefonla konum paylaşmanız yeterli; çekici ekibimiz sizinle saat vererek koordine olur.',
      },
      {
        question: 'Hasar kaydı yüksek ya da pert kayıtlı aracı Gaziantep\'te satabilir miyim?',
        answer: 'Evet, hasar kaydının yüksekliği veya pert kaydı alım için engel değildir. Sigorta şirketinden pert raporu bulunan, ağır hasar kayıtlı ya da onarımı ekonomik olmayan araçları da değerlendiriyoruz. Teklif; marka, model, yıl ve hasarın kapsamına göre şeffaf biçimde hesaplanır ve tarafınıza yazılı olarak iletilir.',
      },
      {
        question: 'Gaziantep\'te ticari aracımı da alır mısınız?',
        answer: 'Binek araçların yanı sıra kamyonet, minibüs ve panelvan gibi hafif ticari araçları da alıyoruz. Gaziantep\'in sanayi ve lojistik yoğunluğu nedeniyle ticari araç talebi bölgede canlıdır; bu da size piyasa koşullarında güçlü bir teklif olarak yansır. Aracın ruhsat bilgilerini ve fotoğraflarını göndermeniz değerlendirme için yeterlidir.',
      },
    ],
  },

  'mersin': {
    id: 'mersin',
    slug: 'mersin',
    name: 'Mersin',
    region: 'Akdeniz',
    metaTitle: 'Mersin Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Mersin\'de kazalı, hasarlı, pert ve hurda araç alımı. Yenişehir ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['mersin hasarlı araç alan', 'mersin kazalı araç alan', 'mersin pert araç alan', 'mersin hurda araç alımı', 'mersin araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/mersin',
    ogUrl: 'https://www.hasarpark.com/sehirler/mersin',
    hero: {
      badge: '🍊 MERSİN ARAÇ ALIM',
      title: 'Mersin\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Akdeniz\'in önemli liman kenti Mersin\'de kazalı ya da hasarlı bir araca sahipseniz süreci sizin için basitleştiriyoruz: fotoğrafları WhatsApp\'tan gönderin, 30 dakika içinde teklifinizi alın. 33 plakalı pert ve hurda araçlar dahil her durumdaki aracı değerinde alıyor, Akdeniz ve Yenişehir\'den Tarsus, Silifke ve Anamur\'a kadar uzanan sahil hattının tamamına ücretsiz çekici gönderiyoruz. Devir işlemi noterde güvence altında tamamlanır; ödemeniz sözleşme imzalanırken banka hesabınıza geçer ve dekontu anında görürsünüz.',
      image: '/images/cities/mersin.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.9 Milyon',
      coverage: ['Akdeniz', 'Yenişehir', 'Toroslar', 'Mezitli', 'Tarsus', 'Erdemli', 'Silifke', 'Anamur', 'Mut'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Akdeniz ve Yenişehir\'de araç alımı',
        description: 'Şehir merkezini oluşturan Akdeniz ve Yenişehir ilçelerinde kazalı, hasarlı ve pert araçlar için yerinde inceleme yapıyor, anlaşılan tutarı noter devriyle eş zamanlı ödüyoruz.',
      },
      {
        title: 'Tarsus\'ta hızlı hizmet',
        description: 'Otoyol bağlantısı sayesinde Tarsus\'a kısa sürede ulaşıyoruz; kaza sonrası yolda kalan araçlar için çekici planlamasını aynı gün yapıyor, evrak sürecini merkezle aynı hızda yürütüyoruz.',
      },
      {
        title: 'Silifke ve Anamur\'a ücretsiz çekici',
        description: 'Merkeze uzak Silifke, Anamur ve Erdemli hattında da çekici hizmetimiz ücretsizdir; mesafe nedeniyle teklif tutarından herhangi bir kesinti yapılmaz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Sahil Hattı Boyunca Çekici',
        description: 'Anamur\'dan Tarsus\'a uzanan geniş sahil şeridinde aracınız nerede kaldıysa ücretsiz çekiciyle teslim alıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Liman Kentinde Hızlı İşlem',
        description: 'Mersin merkezdeki adreslere kısa sürede ulaşıyor, ekspertiz ve teklifi çoğu zaman aynı gün içinde sonuçlandırıyoruz.',
      },
      {
        icon: '📄',
        title: 'Noter Sürecini Biz Yönetiyoruz',
        description: 'Mersin\'de randevu, satış sözleşmesi ve devir evraklarını ekibimiz hazırlıyor; siz yalnızca imza için noterde bulunuyorsunuz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Mersin\'de hurda araç için çekici ücreti var mı?',
        answer: 'Hayır, hurda dahil aldığımız her araç için çekici hizmetimiz tamamen ücretsizdir. Araç yürür durumda olmasa bile Mersin\'in tüm ilçelerinden kendi çekicimizle teslim alıyoruz. Çekici masrafı, ekspertiz ücreti ya da evrak gideri adı altında sizden hiçbir ödeme talep edilmez; anlaşılan teklif tutarı neyse hesabınıza o geçer.',
      },
      {
        question: 'Anamur veya Silifke\'den aracımı almanız ne kadar sürer?',
        answer: 'Merkez ilçelerde genellikle aynı gün içinde adresinizdeyiz. Anamur ve Silifke gibi merkeze uzak sahil ilçelerinde ise çekici planlamasına göre aynı gün ya da ertesi gün teslim alım yapıyoruz. Teklif aşaması mesafeden bağımsızdır; fotoğraflarınızı gönderdikten sonra 30 dakika içinde fiyatınızı öğrenirsiniz.',
      },
      {
        question: 'Mersin\'de sel veya su hasarı almış aracı alıyor musunuz?',
        answer: 'Evet, su ve sel hasarlı araçlar da alım kapsamımızdadır. Elektrik aksamı zarar görmüş, motoru su yutmuş veya sigorta tarafından pert ilan edilmiş araçları durumuna göre değerlendiriyoruz. Fotoğrafların yanına hasarın kısa bir açıklamasını eklerseniz teklifimiz daha isabetli olur; nihai tutar yerinde ekspertizle netleşir.',
      },
      {
        question: 'Mersin\'de satış için hangi belgeler gerekiyor?',
        answer: 'Araç ruhsatı ve kimliğiniz temel belgelerdir; araç şirket üzerine kayıtlıysa imza sirküleri ve vergi levhası da istenir. Varsa hasar veya pert raporunu iletmeniz değerlendirmeyi hızlandırır. Noter randevusunu biz alıyor, satış sözleşmesini hazırlatıyoruz; işlem sırasında ödeme banka havalesiyle aynı anda yapılır.',
      },
    ],
  },

  'kayseri': {
    id: 'kayseri',
    slug: 'kayseri',
    name: 'Kayseri',
    region: 'İç Anadolu',
    metaTitle: 'Kayseri Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Kayseri\'de kazalı, hasarlı, pert ve hurda araç alımı. Melikgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['kayseri hasarlı araç alan', 'kayseri kazalı araç alan', 'kayseri pert araç alan', 'kayseri hurda araç alımı', 'kayseri araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/kayseri',
    ogUrl: 'https://www.hasarpark.com/sehirler/kayseri',
    hero: {
      badge: '🗻 KAYSERİ ARAÇ ALIM',
      title: 'Kayseri\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Sanayi kenti Kayseri\'de aracınızı satmak için günlerce alıcı aramanıza gerek yok. Melikgazi, Kocasinan ve Talas başta olmak üzere 38 plakalı kazalı, hasarlı, pert ve hurda araçları tüm ilçelerden ücretsiz çekiciyle alıyoruz. Organize sanayi bölgesiyle ticaretin merkezi olan şehirde ekspertiz ekibimiz adresinize geliyor; WhatsApp\'tan göndereceğiniz fotoğraflarla 30 dakika içinde rekabetçi teklifinizi öğreniyorsunuz. Noter devri tamamlandığı anda ödemeniz banka hesabınızda oluyor; süreç çoğu satışta tek iş gününe sığıyor.',
      image: '/images/cities/kayseri.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.4 Milyon',
      coverage: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi', 'Yahyalı', 'Bünyan', 'İncesu', 'Hacılar', 'Tomarza'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Melikgazi kazalı araç alımı',
        description: 'Kayseri\'nin merkezi Melikgazi\'de kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, uygun bulunan teklifin ardından çekici ve devir sürecini hemen başlatıyoruz.',
      },
      {
        title: 'Kocasinan ve Talas\'ta hizmet',
        description: 'Kocasinan\'ın sanayi bölgelerinden Talas\'ın yerleşim alanlarına kadar her adrese ulaşıyor, pert ve hurda araçlarda evrak takibini ekibimiz üstleniyor.',
      },
      {
        title: 'Develi ve Yahyalı\'dan alım',
        description: 'Merkeze uzak Develi, Yahyalı ve İncesu gibi ilçelerde de çekici hizmetimiz ücretsizdir; verdiğimiz teklif tutarı mesafeden etkilenmez.',
      },
    ],
    features: [
      {
        icon: '⚡',
        title: 'Sanayi Kentinde Seri İşlem',
        description: 'Kayseri OSB çevresi ve merkez ilçelerde ekspertizden noter devrine kadar tüm adımları çoğunlukla tek günde topluyoruz.',
      },
      {
        icon: '🚚',
        title: 'İlçelere Ücretsiz Çekici',
        description: 'Develi, Yahyalı ve Bünyan dahil Kayseri\'nin her ilçesinden aracınızı ek ücret almadan çekiyoruz.',
      },
      {
        icon: '💰',
        title: 'Değerinde Alım',
        description: 'Marka, model ve hasar durumuna göre piyasa koşullarında yüksek fiyat hedefleyen şeffaf bir teklif sunuyoruz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Kayseri\'de teklif verdikten sonra ne kadar sürede araç alınıyor?',
        answer: 'Fotoğraflarla verdiğimiz ön teklifi kabul ettiğinizde merkez ilçelerde çoğunlukla aynı gün, dış ilçelerde en geç ertesi gün aracınızı teslim alıyoruz. Noter randevusunun uygunluğuna göre devir ve ödeme de aynı güne planlanabilir. Acil satış ihtiyacınız varsa bunu belirtmeniz yeterli; program buna göre önceliklendirilir.',
      },
      {
        question: 'Bünyan veya İncesu\'dan hurda aracımı alır mısınız?',
        answer: 'Evet, Bünyan, İncesu ve Kayseri\'nin diğer tüm ilçelerinden hurda araç alıyoruz. Uzun süredir yerinden hareket etmemiş, muayenesi geçmiş veya tescili silinecek araçlar için de çekici ücretsizdir. Hurda belgeli araçlarda tescil işlemlerinin nasıl yürüyeceğini ekibimiz size adım adım anlatır ve süreci birlikte tamamlarız.',
      },
      {
        question: 'Kayseri\'de noter devri nasıl ilerliyor?',
        answer: 'Anlaşma sağlandıktan sonra Melikgazi veya Kocasinan\'da size uygun bir noterden randevu alıyoruz. Satış sözleşmesi imzalanırken bedel banka hesabınıza havale edilir; dekont anında elinizde olur. Ruhsat ve kimlikle gelmeniz yeterlidir; borç sorgusu ve evrak kontrolü gibi hazırlıkları önceden biz yaptığımız için noterdeki süreniz genellikle yarım saati geçmez.',
      },
      {
        question: 'Hangi durumdaki araçları Kayseri\'de alıyorsunuz?',
        answer: 'Kazalı, kaporta hasarlı, mekanik arızalı, pert raporlu ve hurda belgeli araçların tamamı alım kapsamımızdadır. Aracın çalışması ya da yürür durumda olması gerekmez; dolu hasarı almış veya motoru arızalı araçlar da değerlendirilir. Kayseri\'de her marka ve model için hasar durumuna göre ayrı hesaplanan yazılı teklif sunuyoruz.',
      },
    ],
  },

  'eskisehir': {
    id: 'eskisehir',
    slug: 'eskisehir',
    name: 'Eskişehir',
    region: 'İç Anadolu',
    metaTitle: 'Eskişehir Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Eskişehir\'de kazalı, hasarlı, pert ve hurda araç alımı. Odunpazarı ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['eskişehir hasarlı araç alan', 'eskişehir kazalı araç alan', 'eskişehir pert araç alan', 'eskişehir hurda araç alımı', 'eskişehir araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/eskisehir',
    ogUrl: 'https://www.hasarpark.com/sehirler/eskisehir',
    hero: {
      badge: '🌉 ESKİŞEHİR ARAÇ ALIM',
      title: 'Eskişehir\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Öğrenci nüfusu ve raylı sistemiyle modern bir üniversite şehri olan Eskişehir\'de hasarlı aracınızla uğraşmak zorunda değilsiniz. Odunpazarı ve Tepebaşı merkez olmak üzere Sivrihisar, Çifteler ve Mahmudiye\'ye kadar 26 plakalı kazalı, pert ve hurda araçları yerinden alıyoruz. Önce WhatsApp\'a birkaç fotoğraf gönderiyorsunuz; 30 dakika içinde teklifiniz hazır oluyor. Anlaşırsak çekici ücretsiz geliyor, devir noterde yapılıyor ve ödemeniz imza anında banka hesabınıza aktarılıyor. Süreç boyunca tüm evrak takibi ekibimizde kalıyor.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '900 Bin',
      coverage: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar', 'Çifteler', 'Mahmudiye', 'Alpu', 'Beylikova', 'Seyitgazi'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Odunpazarı hasarlı araç alımı',
        description: 'Tarihi Odunpazarı ve çevresindeki mahallelerde kazalı, hasarlı ve pert araçlar için aynı gün yerinde değerlendirme yapıyor, çekici ve noter sürecini beklemeden başlatıyoruz.',
      },
      {
        title: 'Tepebaşı\'nda yerinde ekspertiz',
        description: 'Üniversite kampüslerinin bulunduğu Tepebaşı\'nda adresinize gelerek aracı inceliyor, fotoğrafla verilen ön teklifi yerinde kesinleştiriyor ve ödeme planını netleştiriyoruz.',
      },
      {
        title: 'Sivrihisar ve Çifteler\'den alım',
        description: 'Sivrihisar, Çifteler ve Mahmudiye gibi ilçelerden de ücretsiz çekiciyle araç topluyoruz; merkez dışı adresler için ek ücret ya da fiyat kesintisi uygulanmaz.',
      },
    ],
    features: [
      {
        icon: '⚡',
        title: 'Kompakt Şehirde Hızlı Ulaşım',
        description: 'Eskişehir\'in derli toplu şehir yapısı sayesinde Odunpazarı ve Tepebaşı\'ndaki adreslere kısa sürede ulaşıp ekspertizi yerinde bitiriyoruz.',
      },
      {
        icon: '🚚',
        title: 'Çekici Masrafı Yok',
        description: 'Kaza sonrası yolda kalan ya da otoparkta bekleyen aracınızı Eskişehir genelinde ücretsiz çekiciyle teslim alıyoruz.',
      },
      {
        icon: '💰',
        title: 'Şeffaf ve Rekabetçi Teklif',
        description: 'Öğrencisinden esnafına herkese aynı ilke: hasar durumuna göre net hesaplanan, pazarlıkla yormayan güçlü teklif.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Eskişehir\'de araç satışı için süreç nasıl işliyor?',
        answer: 'Önce WhatsApp\'tan aracın fotoğraflarını ve hasar bilgisini gönderiyorsunuz; 30 dakika içinde ön teklifimizi iletiyoruz. Kabul ederseniz ekibimiz adresinize gelir, aracı yerinde inceler ve tutar netleşir. Ardından noter randevusu alınır, devirle eş zamanlı olarak ödeme hesabınıza havale edilir. Tüm süreç çoğu zaman tek gün içinde tamamlanır.',
      },
      {
        question: 'Sivrihisar\'dan aracımı almaya gelir misiniz?',
        answer: 'Evet, Sivrihisar dahil Eskişehir\'in tüm ilçelerine gidiyoruz. Ankara-Eskişehir karayolu üzerindeki konumu sayesinde Sivrihisar\'a ulaşımımız hızlıdır; çekici genellikle aynı gün içinde adresinizde olur. Uzak ilçede olmanız ne çekici ücreti doğurur ne de teklif tutarınızı düşürür. Konum paylaşmanız planlama için yeterlidir.',
      },
      {
        question: 'Eskişehir\'de hafta sonu da hizmet veriyor musunuz?',
        answer: 'Evet, WhatsApp hattımız ve çekici ekibimiz hafta sonu da çalışır. Cumartesi ve pazar günleri fotoğraf gönderip teklif alabilir, aracın teslimini tamamlayabilirsiniz. Noterler hafta içi çalıştığı için devir ve ödeme pazartesi ilk randevuya bırakılır; dilerseniz tüm evrakı hafta sonundan hazırlayıp pazartesi işlemi dakikalar içinde bitiririz.',
      },
      {
        question: 'Muayenesi geçmiş veya trafikten çekilmiş aracı alıyor musunuz?',
        answer: 'Alıyoruz. Muayene süresi dolmuş, trafikten çekme belgesi bulunan ya da uzun süredir park halinde olan araçlar da değerlendirme kapsamımızdadır. Bu tür araçlarda tescil durumuna göre izlenecek yol farklılaşabilir; ekibimiz Eskişehir\'deki ilgili işlemleri sizin adınıza takip eder ve satışın hangi adımlarla tamamlanacağını baştan yazılı olarak bildirir.',
      },
    ],
  },

  'diyarbakir': {
    id: 'diyarbakir',
    slug: 'diyarbakir',
    name: 'Diyarbakır',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Diyarbakır Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Diyarbakır\'da kazalı, hasarlı, pert ve hurda araç alımı. Bağlar ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['diyarbakır hasarlı araç alan', 'diyarbakır kazalı araç alan', 'diyarbakır pert araç alan', 'diyarbakır hurda araç alımı', 'diyarbakır araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/diyarbakir',
    ogUrl: 'https://www.hasarpark.com/sehirler/diyarbakir',
    hero: {
      badge: '🏯 DİYARBAKIR ARAÇ ALIM',
      title: 'Diyarbakır\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Güneydoğu\'nun en büyük şehirlerinden Diyarbakır\'da 21 plakalı aracınız kaza mı geçirdi, pert mi çıktı? Bağlar, Kayapınar, Yenişehir ve Sur merkez ilçelerinin yanı sıra Bismil, Ergani ve Silvan\'a kadar tüm bölgeden ücretsiz çekiciyle araç alıyoruz. WhatsApp\'tan göndereceğiniz birkaç fotoğraf, 30 dakika içinde önünüze net bir teklif gelmesi için yeterli. Satış noterde güvenceye alınır, ödemeniz devirle aynı anda banka hesabınıza geçer; hurda araçlarda da aynı hızlı süreç uygulanır.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.8 Milyon',
      coverage: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur', 'Bismil', 'Ergani', 'Silvan', 'Çınar', 'Çermik'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Bağlar ve Kayapınar\'da araç alımı',
        description: 'Şehrin en yoğun ilçeleri Bağlar ve Kayapınar\'da kazalı, hasarlı ve pert araçlar için aynı gün adresinize geliyor, ekspertiz sonrası süreci hemen başlatıyoruz.',
      },
      {
        title: 'Yenişehir ve Sur\'da hizmet',
        description: 'Yenişehir\'in iş merkezlerinden tarihi Sur içine kadar her adreste yerinde inceleme yapıyor, dar sokaklarda dahi uygun çekici çözümleri sunuyoruz.',
      },
      {
        title: 'Bismil ve Ergani\'den alım',
        description: 'Bismil, Ergani ve Silvan gibi ilçelerden de ücretsiz çekiciyle araç topluyoruz; ilçe mesafesi teklif tutarınızı hiçbir şekilde azaltmaz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Bölge Geneline Çekici',
        description: 'Diyarbakır merkezden Bismil ve Silvan\'a kadar aracınızı bulunduğu noktadan ücretsiz çekiyoruz; yürümez araçlar sorun değil.',
      },
      {
        icon: '⚡',
        title: '30 Dakikada Ön Teklif',
        description: 'Fotoğraf ve hasar bilgisiyle Diyarbakır\'daki aracınız için yarım saat içinde net bir ön fiyat iletiyoruz.',
      },
      {
        icon: '📄',
        title: 'Noterde Güvenli Devir',
        description: 'Satış sözleşmesi Diyarbakır\'da noter huzurunda imzalanır; ödeme aynı anda havaleyle yapıldığı için iki taraf da güvendedir.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Diyarbakır\'da aracımı ne kadar sürede alırsınız?',
        answer: 'Merkez ilçelerde, yani Bağlar, Kayapınar, Yenişehir ve Sur\'da genellikle aynı gün içinde adresinize ulaşıyoruz. Bismil ve Ergani gibi ilçelerde çekici planlaması aynı gün veya ertesi güne yapılır. Teklif tarafı çok daha hızlıdır: fotoğrafları gönderdikten sonra 30 dakika içinde fiyatınızı öğrenir, karar süreniz boyunca teklif geçerliliğini korur.',
      },
      {
        question: 'Silvan veya Ergani\'den araç almak için ek ücret istiyor musunuz?',
        answer: 'Hayır, hiçbir ilçe için ek ücret talep etmiyoruz. Silvan, Ergani, Bismil ve Diyarbakır\'ın diğer ilçelerinden yapılan alımlarda çekici, ekspertiz ve evrak masrafları tamamen bize aittir. Anlaştığımız teklif tutarı kesintisiz şekilde hesabınıza havale edilir; mesafe ya da yakıt gideri gerekçesiyle fiyat düşürülmez.',
      },
      {
        question: 'Diyarbakır\'da pert kaydı olan aracın satışı nasıl yapılıyor?',
        answer: 'Pert kayıtlı araçlarda önce sigorta şirketinin düzenlediği pert raporunu ve aracın son durumunu gösteren fotoğrafları alıyoruz. Teklif bu belgeler üzerinden hesaplanır. Anlaşma sonrası devir yine noterde yapılır; pert kaydı satışa engel değildir, yalnızca fiyatlamayı etkiler. Tescil ve kayıt işlemlerinde ekibimiz size yol gösterir.',
      },
      {
        question: 'Hangi marka ve yaştaki araçları Diyarbakır\'da alıyorsunuz?',
        answer: 'Marka, model ve yaş sınırlamamız yok. Yeni sayılabilecek kazalı araçlardan 20 yaşını aşmış hurda araçlara kadar geniş bir yelpazede alım yapıyoruz. Dizel, benzinli, LPG\'li veya hibrit fark etmez; ticari kamyonet ve minibüsler de değerlendirilir. Her araç için hasar ve piyasa durumuna göre ayrı teklif hazırlanır.',
      },
    ],
  },

  'samsun': {
    id: 'samsun',
    slug: 'samsun',
    name: 'Samsun',
    region: 'Karadeniz',
    metaTitle: 'Samsun Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Samsun\'da kazalı, hasarlı, pert ve hurda araç alımı. İlkadım ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['samsun hasarlı araç alan', 'samsun kazalı araç alan', 'samsun pert araç alan', 'samsun hurda araç alımı', 'samsun araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/samsun',
    ogUrl: 'https://www.hasarpark.com/sehirler/samsun',
    hero: {
      badge: '🚢 SAMSUN ARAÇ ALIM',
      title: 'Samsun\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Karadeniz\'in en büyük şehri Samsun\'da hasarlı araç satmak, doğru muhatabı bulunca yarım günlük iştir. İlkadım, Atakum ve Canik\'ten Bafra ve Çarşamba ovalarına kadar 55 plakalı kazalı, pert ve hurda araçları adresinden ücretsiz çekiciyle alıyoruz. Yapmanız gereken tek şey aracın fotoğraflarını WhatsApp\'tan iletmek; 30 dakika içinde piyasa koşullarına göre hazırlanmış teklifinizi görürsünüz. Noter devri ve eş zamanlı havaleyle satış güvenle tamamlanır; nemli iklimin yıprattığı araçlar da değerlendirme kapsamındadır.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.3 Milyon',
      coverage: ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba', 'Terme', 'Vezirköprü', 'Havza'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'İlkadım ve Canik\'te araç alımı',
        description: 'Şehir merkezini oluşturan İlkadım ve Canik\'te kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, anlaşma sonrası çekici ve noter adımlarını hızla tamamlıyoruz.',
      },
      {
        title: 'Atakum\'da hızlı hizmet',
        description: 'Samsun\'un hızla büyüyen ilçesi Atakum\'da site otoparklarından cadde üstüne kadar her adresten araç alıyor, pert ve hurda işlemlerinde evrak takibini üstleniyoruz.',
      },
      {
        title: 'Bafra ve Çarşamba\'dan alım',
        description: 'Bafra, Çarşamba, Terme ve Vezirköprü gibi ilçelerden de ücretsiz çekiciyle alım yapıyoruz; ilçe mesafesi verilen teklife hiçbir şekilde yansıtılmaz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Sahilden Ovaya Çekici',
        description: 'Atakum sahilinden Bafra ve Çarşamba\'ya kadar Samsun\'un her noktasından aracınızı ücretsiz çekiyoruz.',
      },
      {
        icon: '⚡',
        title: 'Yarım Saatte Teklif',
        description: 'Fotoğraflarınız ulaştıktan sonra 30 dakika içinde Samsun\'daki aracınız için net ön teklif iletiyoruz.',
      },
      {
        icon: '💰',
        title: 'Havale ile Anında Ödeme',
        description: 'Noterde imza atıldığı anda satış bedeli banka hesabınıza geçer; elden ödeme riskiyle uğraşmazsınız.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Samsun\'da Vezirköprü gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Vezirköprü, Havza ve Terme dahil Samsun\'un tüm ilçelerine gidiyoruz. Merkeze yaklaşık 115 km uzaklıktaki Vezirköprü için bile çekici hizmetimiz ücretsizdir ve teklif tutarı mesafeden etkilenmez. Konumunuzu paylaştığınızda çekici ekibi sizinle saat planlaması yapar; alım genellikle aynı gün ya da ertesi gün gerçekleşir.',
      },
      {
        question: 'Samsun\'da aracımın parasını ne zaman alırım?',
        answer: 'Ödeme, noterdeki devir işlemiyle eş zamanlı yapılır. Satış sözleşmesi imzalanırken tutar banka hesabınıza havale edilir ve dekontu anında görürsünüz. Ödemenin tamamı tek seferde yapılır; senet, vade ya da parça parça ödeme gibi uygulamalarımız yoktur. Hesabınıza geçen tutar, üzerinde anlaştığımız teklifin aynısıdır.',
      },
      {
        question: 'Karadeniz ikliminde paslanmış ya da yıpranmış aracı alır mısınız?',
        answer: 'Evet. Nemli iklim nedeniyle korozyona uğramış, kaportası yıpranmış ya da uzun süre açıkta kalmış araçlar da alım kapsamımızdadır. Pas durumu teklif hesabında dikkate alınır ancak satışa engel oluşturmaz. Motor çalışmasa bile aracı çekiciyle alıyoruz; fotoğraflarda paslı bölgeleri göstermeniz değerlendirmeyi hızlandırır.',
      },
      {
        question: 'Samsun\'da noter işlemi hangi ilçede yapılıyor?',
        answer: 'Size en uygun noterde işlem yapabiliyoruz; çoğunlukla İlkadım ve Atakum\'daki noterler tercih edilir. Randevuyu ekibimiz alır, araç sorgusu ve satış sözleşmesi hazırlığı önceden tamamlanır. Sizin yalnızca ruhsat ve kimliğinizle imza saatinde hazır olmanız yeterlidir; işlem genellikle yarım saat içinde biter.',
      },
    ],
  },

  'denizli': {
    id: 'denizli',
    slug: 'denizli',
    name: 'Denizli',
    region: 'Ege',
    metaTitle: 'Denizli Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Denizli\'de kazalı, hasarlı, pert ve hurda araç alımı. Pamukkale ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['denizli hasarlı araç alan', 'denizli kazalı araç alan', 'denizli pert araç alan', 'denizli hurda araç alımı', 'denizli araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/denizli',
    ogUrl: 'https://www.hasarpark.com/sehirler/denizli',
    hero: {
      badge: '🐓 DENİZLİ ARAÇ ALIM',
      title: 'Denizli\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Tekstil sanayisiyle Ege\'nin üretim üslerinden biri olan Denizli\'de aracınızı satmak için oto pazarlarında dolaşmanıza gerek yok. 20 plakalı kazalı, hasarlı, pert ve hurda araçları Pamukkale ile Merkezefendi başta olmak üzere Çivril, Tavas ve Acıpayam\'a kadar tüm ilçelerden ücretsiz çekiciyle alıyoruz. Fotoğrafları WhatsApp\'tan iletin, 30 dakika içinde rekabetçi teklifinizi alın; noter devri ve anında havaleyle işlem çoğu zaman aynı gün biter. Ticari araçlar ve sanayi esnafının elindeki hasarlı araçlar da alım kapsamındadır.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1 Milyon',
      coverage: ['Pamukkale', 'Merkezefendi', 'Honaz', 'Çivril', 'Tavas', 'Acıpayam', 'Sarayköy', 'Buldan'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Pamukkale ilçesinde araç alımı',
        description: 'Üniversite ve turizm bölgesini kapsayan Pamukkale ilçesinde kazalı ve hasarlı araçlar için aynı gün yerinde inceleme yapıyor, anlaşma sonrası çekiciyi hemen yönlendiriyoruz.',
      },
      {
        title: 'Merkezefendi\'de hızlı hizmet',
        description: 'Sanayi sitelerinin yoğunlaştığı Merkezefendi\'de esnafın ve servislerin elinde kalan hasarlı araçları da alıyor, evrak ve devir sürecini ekibimizle yürütüyoruz.',
      },
      {
        title: 'Çivril ve Tavas\'tan alım',
        description: 'Çivril, Tavas, Acıpayam ve Honaz gibi ilçelerden ücretsiz çekiciyle araç topluyoruz; mesafe ne olursa olsun teklif tutarında kesinti yapılmaz.',
      },
    ],
    features: [
      {
        icon: '⚡',
        title: 'Aynı Gün Sonuç',
        description: 'Denizli merkezde ekspertiz, noter ve ödemeyi çoğu satışta tek güne sığdırıyoruz; işinizden fazla zaman çalmıyoruz.',
      },
      {
        icon: '🚚',
        title: 'İlçelere Ücretsiz Çekici',
        description: 'Çivril\'den Acıpayam\'a kadar Denizli\'nin her ilçesinden yürümez araçları dahi ek ücret almadan çekiyoruz.',
      },
      {
        icon: '💰',
        title: 'Rekabetçi Teklif',
        description: 'Tekstil kenti Denizli\'de ticari ve binek araçlar için piyasa koşullarında yüksek fiyat hedefleyen şeffaf değerleme yapıyoruz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Denizli\'de hafta sonu araç teslimi yapabilir miyim?',
        answer: 'Evet, çekici ekibimiz cumartesi ve pazar günleri de çalışır; hafta sonu fotoğraf gönderip teklif alabilir ve aracın teslimini tamamlayabilirsiniz. Noter devri resmi çalışma günlerinde yapıldığından ödeme ve imza pazartesiye planlanır. Evrak hazırlığını hafta sonundan bitirdiğimiz için pazartesi noterdeki işlem birkaç dakikanızı alır.',
      },
      {
        question: 'Honaz\'da kaza yaptım, aracı yoldan alır mısınız?',
        answer: 'Alırız. Honaz ve çevresi, Denizli-Antalya karayolu üzerindeki konumu nedeniyle sık çalıştığımız bölgelerdendir. Kaza sonrası yol kenarında ya da otoparkta bekleyen aracınız için konum paylaşmanız yeterli; çekicimiz aracı bulunduğu noktadan ücretsiz alır. Fotoğraflar üzerinden teklifinizi aynı gün netleştirir, devir planını birlikte yaparız.',
      },
      {
        question: 'Denizli\'de hurda belgeli aracın işlemleri nasıl yürüyor?',
        answer: 'Hurda belgeli veya hurdaya ayrılacak araçlarda tescil kaydının durumuna göre süreç değişir; ekibimiz hangi adımların gerektiğini baştan açıklar. Aracı çekiciyle ücretsiz teslim alır, gerekli belgelerin hazırlanmasında size eşlik ederiz. Ödeme, evrakların tamamlandığı anda havaleyle yapılır; hurda araçlarda da gizli kesinti uygulanmaz.',
      },
      {
        question: 'Ticari minibüs veya kamyonetimi Denizli\'de satabilir miyim?',
        answer: 'Evet, binek araçların yanında hafif ticari araçlar da alıyoruz. Denizli\'nin tekstil ve nakliye hareketliliği içinde yıpranan kamyonet, panelvan ve minibüsler için hasar durumuna göre ayrı değerleme yapıyoruz. Aracın ruhsat fotoğrafı, kilometre bilgisi ve hasar fotoğraflarını göndermeniz teklif almanız için yeterlidir.',
      },
    ],
  },

  'sanliurfa': {
    id: 'sanliurfa',
    slug: 'sanliurfa',
    name: 'Şanlıurfa',
    region: 'Güneydoğu Anadolu',
    metaTitle: 'Şanlıurfa Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Şanlıurfa\'da kazalı, hasarlı, pert ve hurda araç alımı. Haliliye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['şanlıurfa hasarlı araç alan', 'şanlıurfa kazalı araç alan', 'şanlıurfa pert araç alan', 'şanlıurfa hurda araç alımı', 'şanlıurfa araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/sanliurfa',
    ogUrl: 'https://www.hasarpark.com/sehirler/sanliurfa',
    hero: {
      badge: '🕌 ŞANLIURFA ARAÇ ALIM',
      title: 'Şanlıurfa\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'GAP bölgesinin merkezi Şanlıurfa\'da tarım araçlarından binek otomobillere uzanan yoğun trafik, hasarlı araç sahiplerini hızlı çözüm arayışına yönlendiriyor. Biz de 63 plakalı kazalı, hasarlı, pert ve hurda araçları Haliliye, Eyyübiye ve Karaköprü başta olmak üzere Siverek\'ten Birecik\'e kadar tüm ilçelerden ücretsiz çekiciyle alıyoruz. Aracın fotoğraflarını WhatsApp\'tan gönderin; 30 dakika içinde değerinde alım esasına dayalı teklifinizi iletelim. Noter devri sırasında ödemeniz eş zamanlı olarak banka hesabınıza geçer.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir', 'Suruç', 'Birecik', 'Akçakale', 'Bozova'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Haliliye ve Eyyübiye\'de araç alımı',
        description: 'Merkez ilçeler Haliliye ve Eyyübiye\'de kazalı, hasarlı ve pert araçlara aynı gün yerinde ekspertiz yapıyor, anlaşılan tutarı noter devriyle birlikte ödüyoruz.',
      },
      {
        title: 'Karaköprü\'de hızlı hizmet',
        description: 'Yeni yerleşimin hızla büyüdüğü Karaköprü\'de site içi otoparklar dahil her adresten araç alıyor, çekici planlamasını aynı gün içinde yapıyoruz.',
      },
      {
        title: 'Siverek ve Viranşehir\'den alım',
        description: 'Merkeze uzak Siverek, Viranşehir ve Suruç hattında da çekici hizmetimiz ücretsizdir; mesafe gerekçesiyle teklif tutarından kesinti yapılmaz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Geniş İlçe Ağına Çekici',
        description: 'Siverek, Viranşehir ve Birecik dahil Şanlıurfa\'nın uzak ilçelerinden bile aracınızı ücretsiz çekiciyle teslim alıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Fotoğrafla Hızlı Değerleme',
        description: 'WhatsApp\'a göndereceğiniz fotoğraflar ve kısa hasar açıklamasıyla 30 dakika içinde ön teklifinizi hazırlıyoruz.',
      },
      {
        icon: '📄',
        title: 'Evrak Takibi Bizden',
        description: 'Şanlıurfa\'da noter randevusu, araç sorgusu ve satış sözleşmesi hazırlığını ekibimiz yürütür; siz yalnızca imzaya gelirsiniz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Siverek\'ten aracımı almanız mümkün mü?',
        answer: 'Evet, Siverek dahil Şanlıurfa\'nın tüm ilçelerinden araç alıyoruz. Merkeze yaklaşık 100 km uzaklıktaki Siverek\'e çekicimiz ücretsiz gelir; alım çoğunlukla aynı gün, yoğun dönemlerde ertesi gün gerçekleşir. Fotoğraflarla teklifinizi önceden netleştirdiğimiz için çekici geldiğinde yalnızca teslim ve evrak aşaması kalır.',
      },
      {
        question: 'Şanlıurfa\'da araç satarken hangi masraflar bana ait?',
        answer: 'Çekici, ekspertiz ve değerlendirme için sizden hiçbir ücret alınmaz. Anlaştığımız teklif tutarı kesinti olmadan banka hesabınıza havale edilir. Noter randevusu ve evrak hazırlığı ekibimiz tarafından organize edilir; satıcı olarak tek yapmanız gereken ruhsat ve kimliğinizle imza saatinde noterde hazır bulunmaktır.',
      },
      {
        question: 'Tarlada veya şantiyede duran hasarlı aracı alıyor musunuz?',
        answer: 'Evet, aracın bulunduğu yerin önemi yok. GAP bölgesindeki tarım arazilerinde, şantiyelerde ya da köy yerleşimlerinde bekleyen araçları da yerinden alıyoruz. Kepçe hasarı, devrilme veya uzun süre açıkta kalma gibi durumlar satışa engel değildir. Konum paylaşmanız yeterli; çekici ekibimiz araca uygun ekipmanla gelir.',
      },
      {
        question: 'Şanlıurfa\'da pert aracın fiyatı neye göre belirleniyor?',
        answer: 'Pert araçlarda fiyat; aracın markası, model yılı, pert raporundaki hasar kapsamı ve sağlam kalan parçaların değeri üzerinden hesaplanır. Fotoğraflar ve rapor bize ulaştığında 30 dakika içinde ön teklif verilir, yerinde ekspertizle tutar kesinleşir. Değerlendirme şeffaftır; teklifin hangi kalemlerden oluştuğunu talep ederseniz açıklarız.',
      },
    ],
  },

  'malatya': {
    id: 'malatya',
    slug: 'malatya',
    name: 'Malatya',
    region: 'Doğu Anadolu',
    metaTitle: 'Malatya Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Malatya\'da kazalı, hasarlı, pert ve hurda araç alımı. Battalgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['malatya hasarlı araç alan', 'malatya kazalı araç alan', 'malatya pert araç alan', 'malatya hurda araç alımı', 'malatya araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/malatya',
    ogUrl: 'https://www.hasarpark.com/sehirler/malatya',
    hero: {
      badge: '🍑 MALATYA ARAÇ ALIM',
      title: 'Malatya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Doğu Anadolu\'nun ticaret kapılarından Malatya\'da hasarlı aracınız elinizde kalmasın. Battalgazi ve Yeşilyurt merkez ilçelerinden Doğanşehir, Akçadağ ve Darende\'ye kadar 44 plakalı kazalı, pert ve hurda araçları ücretsiz çekiciyle adresinden alıyoruz. Süreç basit: fotoğrafları WhatsApp\'tan gönderirsiniz, 30 dakika içinde teklifiniz gelir, anlaşınca çekici yola çıkar. Devir noterde güvence altına alınır; ödemeniz imza anında banka hesabınıza aktarılır ve dekont anında elinizde olur.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '800 Bin',
      coverage: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir', 'Akçadağ', 'Darende', 'Hekimhan', 'Arapgir', 'Pütürge'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Battalgazi\'de araç alımı',
        description: 'Tarihi merkez Battalgazi\'de kazalı ve hasarlı araçlar için aynı gün adresinize gelerek ekspertiz yapıyor, uygun görülen teklifin ardından çekici ve noter sürecini başlatıyoruz.',
      },
      {
        title: 'Yeşilyurt\'ta yerinde ekspertiz',
        description: 'Malatya\'nın en kalabalık ilçesi Yeşilyurt\'ta site otoparklarından sanayi bölgelerine kadar her adreste inceleme yapıyor, pert ve hurda evraklarını ekibimiz takip ediyor.',
      },
      {
        title: 'Doğanşehir ve Darende\'den alım',
        description: 'Doğanşehir, Akçadağ ve Darende gibi merkeze uzak ilçelerde de çekici ücretsizdir; mesafe, aracınıza verilen teklif tutarını etkilemez.',
      },
    ],
    features: [
      {
        icon: '⚡',
        title: 'Hızlı Teklif, Net Süreç',
        description: 'Malatya\'daki aracınız için fotoğraf üzerinden 30 dakikada ön teklif, yerinde ekspertizle aynı gün kesin fiyat.',
      },
      {
        icon: '🚚',
        title: 'Her İlçeden Ücretsiz Çekici',
        description: 'Darende\'den Doğanşehir\'e kadar Malatya\'nın tüm ilçelerinde çekici hizmeti tamamen ücretsizdir.',
      },
      {
        icon: '💰',
        title: 'Kesintisiz Ödeme',
        description: 'Anlaşılan tutar noter devriyle eş zamanlı, herhangi bir kesinti yapılmadan hesabınıza havale edilir.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Malatya\'da deprem hasarı görmüş aracı alıyor musunuz?',
        answer: 'Evet, üzerine yapı malzemesi düşmüş, enkaz etkisiyle hasar almış ya da uzun süre kullanılamamış araçlar da alım kapsamımızdadır. Bu tür araçlarda hasar tespitini yerinde yapıyor, sigorta veya hasar kaydı varsa belgeleri de değerlendirmeye katıyoruz. Aracın güncel fotoğraflarını göndermeniz ön teklif için yeterlidir.',
      },
      {
        question: 'Darende\'den aracımı ne kadar sürede alırsınız?',
        answer: 'Darende merkeze yaklaşık 110 km uzaklıktadır; çekici planlamasını genellikle aynı gün, en geç ertesi gün yapıyoruz. Teklif aşaması mesafeden bağımsız işler: fotoğraflarınızı gönderdikten sonra 30 dakika içinde fiyatınızı öğrenirsiniz. Uzak ilçe alımlarında da çekici ücretsizdir ve teklif tutarında değişiklik olmaz.',
      },
      {
        question: 'Malatya\'da noter devri için neye ihtiyacım var?',
        answer: 'Ruhsatınız ve kimliğiniz yeterlidir; araç üzerinde rehin ya da haciz varsa önceden bildirmeniz süreci hızlandırır. Noter randevusunu Battalgazi veya Yeşilyurt\'taki uygun bir noterden ekibimiz alır, satış sözleşmesi hazır şekilde sizi bekler. İmza sırasında ödeme havaleyle yapılır ve dekont anında paylaşılır.',
      },
      {
        question: 'Çalışmayan, yürümez durumdaki aracımı da alır mısınız?',
        answer: 'Evet. Motoru çalışmayan, şanzımanı arızalı, kaza sonrası hareket edemeyen veya aküsü dahi olmayan araçları kendi çekicimizle yerinden alıyoruz. Aracın yürür durumda olmaması teklif almanıza engel değildir; yalnızca hasar kapsamı fiyata yansır. Malatya genelinde bu hizmet için ek ücret talep edilmez.',
      },
    ],
  },

  'kahramanmaras': {
    id: 'kahramanmaras',
    slug: 'kahramanmaras',
    name: 'Kahramanmaraş',
    region: 'Akdeniz',
    metaTitle: 'Kahramanmaraş Araç Alımı | 30 DK Teklif - Hasar Park',
    metaDescription: 'Kahramanmaraş\'ta kazalı, hasarlı, pert ve hurda araç alımı. Onikişubat ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['kahramanmaraş hasarlı araç alan', 'kahramanmaraş kazalı araç alan', 'kahramanmaraş pert araç alan', 'kahramanmaraş hurda araç alımı', 'kahramanmaraş araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/kahramanmaras',
    ogUrl: 'https://www.hasarpark.com/sehirler/kahramanmaras',
    hero: {
      badge: '🍦 KAHRAMANMARAŞ ARAÇ ALIM',
      title: 'Kahramanmaraş\'ta Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kahramanmaraş\'ta hasarlı aracınız için alıcı aramak zorunda değilsiniz; alıcı ayağınıza geliyor. Onikişubat ve Dulkadiroğlu merkezden Elbistan, Afşin ve Pazarcık\'a uzanan geniş bir alanda 46 plakalı kazalı, hasarlı, pert ve hurda araçları ücretsiz çekiciyle topluyoruz. WhatsApp\'tan göndereceğiniz fotoğraflarla 30 dakika içinde güçlü bir teklif alırsınız. Satış, noter huzurunda imzalanan sözleşmeyle tamamlanır ve ödemeniz aynı dakikalarda banka hesabınıza ulaşır; evrak takibi baştan sona ekibimizdedir.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['Dulkadiroğlu', 'Onikişubat', 'Elbistan', 'Afşin', 'Pazarcık', 'Türkoğlu', 'Göksun', 'Andırın'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Onikişubat\'ta araç alımı',
        description: 'Kahramanmaraş\'ın en büyük ilçesi Onikişubat\'ta kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, anlaşma sonrası çekici ve noter adımlarını hızla ilerletiyoruz.',
      },
      {
        title: 'Dulkadiroğlu\'nda hizmet',
        description: 'Dulkadiroğlu\'nun merkez mahalleleri ve sanayi bölgelerinde pert ve hurda araçlar dahil her durumda alım yapıyor, evrak hazırlığını ekibimiz üstleniyor.',
      },
      {
        title: 'Elbistan ve Afşin\'den alım',
        description: 'Merkeze uzak Elbistan, Afşin, Pazarcık ve Türkoğlu\'ndan da ücretsiz çekiciyle araç alıyoruz; uzaklık teklif tutarını düşürmez.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Elbistan Ovasına Kadar Çekici',
        description: 'Merkezden Elbistan ve Afşin\'e uzanan hat dahil Kahramanmaraş\'ın tüm ilçelerinden ücretsiz çekiciyle araç alıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Yerinde Hızlı Ekspertiz',
        description: 'Onikişubat ve Dulkadiroğlu\'nda adresinize kısa sürede ulaşıp aracın durumunu yerinde değerlendiriyoruz.',
      },
      {
        icon: '💰',
        title: 'Şeffaf Fiyatlama',
        description: 'Teklifimiz marka, model ve hasar kapsamına göre hesaplanır; sonradan değişen rakamlarla karşılaşmazsınız.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Elbistan\'dan aracımı satmak istiyorum, gelir misiniz?',
        answer: 'Geliriz. Elbistan, merkeze uzaklığına rağmen düzenli hizmet verdiğimiz ilçelerdendir; Afşin ve çevresiyle birlikte planlama yaparak çekiciyi genellikle aynı gün yönlendiririz. Çekici ücretsizdir, teklif tutarı mesafeden etkilenmez. Fotoğrafları önceden gönderirseniz fiyatta anlaşmış olarak yalnızca teslim ve evrak aşamasını tamamlarız.',
      },
      {
        question: 'Kahramanmaraş\'ta hasar kaydı olan aracın satışı sorun olur mu?',
        answer: 'Olmaz. Hasar kaydı, pert kaydı veya yüksek tramer tutarı satışa engel değildir; yalnızca fiyat hesabına girer. Kayıtları gizlemenize gerek yok; tam tersine, tramer sorgusunu birlikte yapıp teklifi bu gerçek veriler üzerinden netleştiriyoruz. Böylece noterde sürpriz yaşanmaz ve işlem tek seferde tamamlanır.',
      },
      {
        question: 'Deprem sonrası hasar gören aracımı değerlendirir misiniz?',
        answer: 'Evet, deprem kaynaklı hasar almış araçlar da alım kapsamımızdadır. Üzerine enkaz düşen, camları kırılan veya uzun süre hareketsiz kalan araçların durumunu yerinde tespit ediyor, sigorta süreci varsa belgelerinizi değerlendirmeye dahil ediyoruz. Aracınızın güncel fotoğraflarını göndermeniz ön teklif için yeterlidir.',
      },
      {
        question: 'Kahramanmaraş\'ta işlemler toplam ne kadar sürüyor?',
        answer: 'Fotoğraf gönderiminden ödemeye kadar tüm süreç, noter randevusunun uygunluğuna bağlı olarak çoğunlukla bir iş günü içinde tamamlanır. Teklif 30 dakikada verilir, ekspertiz ve çekici aynı gün planlanır. Elbistan gibi uzak ilçelerde teslim alma ertesi güne sarkabilir; ödeme her durumda devirle eş zamanlıdır.',
      },
    ],
  },

  'erzurum': {
    id: 'erzurum',
    slug: 'erzurum',
    name: 'Erzurum',
    region: 'Doğu Anadolu',
    metaTitle: 'Erzurum Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Erzurum\'da kazalı, hasarlı, pert ve hurda araç alımı. Yakutiye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['erzurum hasarlı araç alan', 'erzurum kazalı araç alan', 'erzurum pert araç alan', 'erzurum hurda araç alımı', 'erzurum araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/erzurum',
    ogUrl: 'https://www.hasarpark.com/sehirler/erzurum',
    hero: {
      badge: '⛷️ ERZURUM ARAÇ ALIM',
      title: 'Erzurum\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Sert kış koşullarının hüküm sürdüğü Erzurum\'da buzlanma ve tipiye bağlı kazalar hasarlı araç sayısını artırıyor; biz de bu araçlara alıcı olarak kapınıza geliyoruz. Yakutiye, Palandöken ve Aziziye başta olmak üzere Horasan, Oltu ve Pasinler\'e kadar 25 plakalı kazalı, pert ve hurda araçları ücretsiz çekiciyle alıyoruz. WhatsApp\'tan fotoğraf gönderin, 30 dakika içinde rekabetçi teklifinizi alın; noter devri ve eş zamanlı ödemeyle satışı çoğunlukla aynı gün bitirin.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '750 Bin',
      coverage: ['Yakutiye', 'Palandöken', 'Aziziye', 'Horasan', 'Oltu', 'Pasinler', 'Tortum', 'Hınıs'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'Yakutiye\'de araç alımı',
        description: 'Şehir merkezini oluşturan Yakutiye\'de kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, anlaşma sonrasında çekici ve noter işlemlerini hızla tamamlıyoruz.',
      },
      {
        title: 'Palandöken ve Aziziye\'de hizmet',
        description: 'Palandöken\'in yerleşim bölgeleri ile Aziziye\'nin gelişen mahallelerinde her adresten araç alıyor, kış aylarında çekici planlamasını hava koşullarına göre önceden yapıyoruz.',
      },
      {
        title: 'Horasan ve Oltu\'dan alım',
        description: 'Horasan, Oltu ve Pasinler gibi ilçelerden de ücretsiz çekiciyle araç topluyoruz; yol mesafesi verdiğimiz teklif tutarına yansıtılmaz.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Kış Şartlarında Çekici',
        description: 'Karlı ve buzlu yollarda kalan araçlar için Erzurum genelinde kış şartlarına uygun çekici hizmetini ücretsiz sağlıyoruz.',
      },
      {
        icon: '⚡',
        title: 'Soğukta Bekletmeyen Süreç',
        description: 'Fotoğrafla 30 dakikada teklif veriyor, ekspertiz ve teslim planını aynı gün içinde netleştiriyoruz.',
      },
      {
        icon: '💰',
        title: 'Değerinde Alım',
        description: 'Buzlanma kazası, dolu hasarı veya model yaşı fark etmeksizin her aracı gerçek piyasa verileriyle fiyatlandırıyoruz.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Erzurum\'da kışın buzlanma kazası geçirdim, aracı yerinden alır mısınız?',
        answer: 'Alırız. Kar ve buz nedeniyle yolda, şarampolde ya da otoparkta kalan araçlar için kış şartlarına uygun çekici gönderiyoruz. Konumunuzu paylaştığınızda ekibimiz hava ve yol durumuna göre en kısa teslim planını çıkarır. Çekici ücretsizdir; kazanın oluş şekli teklif almanıza engel oluşturmaz.',
      },
      {
        question: 'Oltu veya Horasan gibi ilçelerden alım yapıyor musunuz?',
        answer: 'Evet, Erzurum\'un tüm ilçeleri hizmet alanımızdadır. Oltu, Horasan, Pasinler ve çevre ilçelerden yapılan alımlarda çekici ücretsizdir; kış aylarında yol koşullarına göre teslim tarihi birlikte planlanır. Teklif tarafında gecikme olmaz: fotoğraflar ulaştıktan sonra 30 dakika içinde fiyatınız hazırdır.',
      },
      {
        question: 'Motoru soğuktan zarar görmüş veya çalışmayan aracı alıyor musunuz?',
        answer: 'Evet, donma nedeniyle motor bloğu çatlamış, aküsü bitmiş ya da uzun süredir çalıştırılmamış araçlar da alım kapsamımızdadır. Aracın çalışır durumda olması gerekmez; çekicimiz aracı bulunduğu yerden yükleyerek alır. Hasarın niteliğini fotoğraf ve kısa açıklamayla iletmeniz, teklifin isabetli olması için yeterlidir.',
      },
      {
        question: 'Erzurum\'da ödeme ve noter işlemi nasıl tamamlanıyor?',
        answer: 'Anlaşma sonrası Yakutiye veya Palandöken\'de size uygun bir noterden randevu alınır; satış sözleşmesi ve sorgular önceden hazırlanır. İmza sırasında satış bedeli banka hesabınıza havale edilir, dekontu anında görürsünüz. Ruhsat ve kimlikle gelmeniz yeterlidir; işlemin tamamı genellikle yarım saat sürer.',
      },
    ],
  },

  'van': {
    id: 'van',
    slug: 'van',
    name: 'Van',
    region: 'Doğu Anadolu',
    metaTitle: 'Van Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Van\'da kazalı, hasarlı, pert ve hurda araç alımı. İpekyolu ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['van hasarlı araç alan', 'van kazalı araç alan', 'van pert araç alan', 'van hurda araç alımı', 'van araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/van',
    ogUrl: 'https://www.hasarpark.com/sehirler/van',
    hero: {
      badge: '🌊 VAN ARAÇ ALIM',
      title: 'Van\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Doğu\'nun ticaret ve ulaşım merkezi Van\'da hasarlı aracınıza alıcı bulmak artık günler almıyor. İpekyolu, Tuşba ve Edremit merkez ilçelerinin yanı sıra Erciş, Özalp ve Çaldıran\'a kadar 65 plakalı kazalı, hasarlı, pert ve hurda araçları ücretsiz çekiciyle yerinden alıyoruz. Tek yapmanız gereken WhatsApp\'tan fotoğraf göndermek; 30 dakika içinde teklifiniz hazır olur. Noter devri sırasında ödemeniz banka hesabınıza eş zamanlı aktarılır, süreç güvenle ve tek seferde kapanır.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['İpekyolu', 'Tuşba', 'Edremit', 'Erciş', 'Özalp', 'Çaldıran', 'Gevaş', 'Muradiye'],
      responseTime: '30 dakika içinde',
    },
    districtDetails: [
      {
        title: 'İpekyolu\'nda araç alımı',
        description: 'Van\'ın merkezi İpekyolu\'nda kazalı ve hasarlı araçlar için aynı gün yerinde ekspertiz yapıyor, anlaşılan tutarı noter devriyle eş zamanlı ödüyoruz.',
      },
      {
        title: 'Tuşba ve Edremit\'te hizmet',
        description: 'Tuşba\'nın üniversite bölgesinden Edremit\'in sahil mahallelerine kadar her adrese ulaşıyor, pert ve hurda araç evraklarının takibini ekibimiz yapıyor.',
      },
      {
        title: 'Erciş ve Çaldıran\'dan alım',
        description: 'Erciş, Özalp ve Çaldıran gibi merkeze uzak ilçelerde de çekici hizmetimiz ücretsizdir; mesafe teklif tutarını değiştirmez.',
      },
    ],
    features: [
      {
        icon: '🚚',
        title: 'Göl Çevresinde Çekici',
        description: 'Van Gölü çevresindeki yerleşimlerden Erciş\'e kadar tüm ilçelerde ücretsiz çekiciyle araç teslim alıyoruz.',
      },
      {
        icon: '⚡',
        title: '30 Dakikada Teklif',
        description: 'Van\'daki aracınızın fotoğrafları bize ulaştıktan sonra yarım saat içinde net ön teklifinizi iletiyoruz.',
      },
      {
        icon: '📄',
        title: 'Noter Güvencesi',
        description: 'Satış Van\'da noter huzurunda sözleşmeyle yapılır; devir ve ödeme aynı anda gerçekleşir, iki taraf da güvendedir.',
      },
    ],
    testimonials: [],
    faqs: [
      {
        question: 'Van\'ın Erciş ilçesinden aracımı alır mısınız?',
        answer: 'Alırız. Erciş, merkeze yaklaşık 95 km uzaklıkta olmasına rağmen düzenli hizmet verdiğimiz ilçelerdendir. Çekici planlaması genellikle aynı gün, kış aylarında yol durumuna göre ertesi gün yapılır. Çekici ücretsizdir ve teklif tutarınız mesafe nedeniyle azalmaz; fotoğraflarla fiyatı önceden netleştiririz.',
      },
      {
        question: 'Van\'da aracın parasını elden mi havale ile mi alıyorum?',
        answer: 'Ödemeyi banka havalesiyle yapıyoruz; tutar, noterde satış sözleşmesi imzalanırken hesabınıza geçer ve dekontu anında görürsünüz. Havale yöntemi hem sizin hem bizim için kayıt altına alınmış güvenli bir işlem sağlar. Tutarın tamamı tek seferde ödenir; vade veya parçalı ödeme uygulamamız yoktur.',
      },
      {
        question: 'Kışın Çaldıran veya Özalp\'tan araç almanız mümkün mü?',
        answer: 'Mümkün. Çaldıran ve Özalp gibi yüksek rakımlı ilçelerde kış koşulları ağır seyredebildiğinden çekici planlamasını hava ve yol durumuna göre birlikte yaparız. Teklif tarafı mevsimden etkilenmez; fotoğraflar ulaştığında 30 dakika içinde fiyatınızı öğrenirsiniz. Uygun ilk pencerede aracınız ücretsiz çekiciyle teslim alınır.',
      },
      {
        question: 'Van\'da hangi durumdaki araçları satın alıyorsunuz?',
        answer: 'Kazalı, kaporta veya mekanik hasarlı, pert raporlu, hurda belgeli ve yürümez durumdaki araçların tümünü değerlendiriyoruz. Marka, model ve yaş sınırı yoktur; ticari kamyonet ve minibüsler de alınır. Her araç için hasar kapsamı ve piyasa verilerine göre hesaplanan yazılı teklif sunar, kararınızı beklerken fiyatı sabit tutarız.',
      },
    ],
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

// NOTE: no /sehirler/[city]/[service] routes exist — do not generate such URLs
// (a helper here used to produce 76 would-be-404 links; removed intentionally).