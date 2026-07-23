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
      subtitle: 'Konya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 42 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Selçuklu, Meram, Karatay, Ereğli başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Konya\'da güvenle satın.',
      image: '/images/cities/konya.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.3 Milyon',
      coverage: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Gaziantep Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Gaziantep\'te kazalı, hasarlı, pert ve hurda araç alımı. Şahinbey ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['gaziantep hasarlı araç alan', 'gaziantep kazalı araç alan', 'gaziantep pert araç alan', 'gaziantep hurda araç alımı', 'gaziantep araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/gaziantep',
    ogUrl: 'https://www.hasarpark.com/sehirler/gaziantep',
    hero: {
      badge: '🏰 GAZİANTEP ARAÇ ALIM',
      title: 'Gaziantep\'te Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Gaziantep\'te kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 27 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Şahinbey, Şehitkamil, Nizip başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Gaziantep\'te güvenle satın.',
      image: '/images/cities/gaziantep.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Şehitkamil', 'Şahinbey', 'Nizip', 'İslahiye'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Mersin Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Mersin\'de kazalı, hasarlı, pert ve hurda araç alımı. Yenişehir ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['mersin hasarlı araç alan', 'mersin kazalı araç alan', 'mersin pert araç alan', 'mersin hurda araç alımı', 'mersin araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/mersin',
    ogUrl: 'https://www.hasarpark.com/sehirler/mersin',
    hero: {
      badge: '🍊 MERSİN ARAÇ ALIM',
      title: 'Mersin\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Mersin\'de kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 33 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Yenişehir, Toroslar, Akdeniz, Tarsus başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Mersin\'de güvenle satın.',
      image: '/images/cities/mersin.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.9 Milyon',
      coverage: ['Yenişehir', 'Mezitli', 'Akdeniz', 'Toroslar', 'Tarsus', 'Erdemli'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Kayseri Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Kayseri\'de kazalı, hasarlı, pert ve hurda araç alımı. Melikgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['kayseri hasarlı araç alan', 'kayseri kazalı araç alan', 'kayseri pert araç alan', 'kayseri hurda araç alımı', 'kayseri araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/kayseri',
    ogUrl: 'https://www.hasarpark.com/sehirler/kayseri',
    hero: {
      badge: '🗻 KAYSERİ ARAÇ ALIM',
      title: 'Kayseri\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kayseri\'de kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 38 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Melikgazi, Kocasinan, Talas başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Kayseri\'de güvenle satın.',
      image: '/images/cities/kayseri.png',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.4 Milyon',
      coverage: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Eskişehir Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Eskişehir\'de kazalı, hasarlı, pert ve hurda araç alımı. Odunpazarı ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['eskişehir hasarlı araç alan', 'eskişehir kazalı araç alan', 'eskişehir pert araç alan', 'eskişehir hurda araç alımı', 'eskişehir araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/eskisehir',
    ogUrl: 'https://www.hasarpark.com/sehirler/eskisehir',
    hero: {
      badge: '🌉 ESKİŞEHİR ARAÇ ALIM',
      title: 'Eskişehir\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Eskişehir\'de kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 26 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. İç Anadolu bölgesinde Odunpazarı, Tepebaşı başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Eskişehir\'de güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '900 Bin',
      coverage: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Diyarbakır Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Diyarbakır\'da kazalı, hasarlı, pert ve hurda araç alımı. Bağlar ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['diyarbakır hasarlı araç alan', 'diyarbakır kazalı araç alan', 'diyarbakır pert araç alan', 'diyarbakır hurda araç alımı', 'diyarbakır araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/diyarbakir',
    ogUrl: 'https://www.hasarpark.com/sehirler/diyarbakir',
    hero: {
      badge: '🏯 DİYARBAKIR ARAÇ ALIM',
      title: 'Diyarbakır\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Diyarbakır\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 21 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Bağlar, Kayapınar, Yenişehir, Sur başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Diyarbakır\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.8 Milyon',
      coverage: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Samsun Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Samsun\'da kazalı, hasarlı, pert ve hurda araç alımı. İlkadım ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['samsun hasarlı araç alan', 'samsun kazalı araç alan', 'samsun pert araç alan', 'samsun hurda araç alımı', 'samsun araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/samsun',
    ogUrl: 'https://www.hasarpark.com/sehirler/samsun',
    hero: {
      badge: '🚢 SAMSUN ARAÇ ALIM',
      title: 'Samsun\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Samsun\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 55 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Karadeniz bölgesinde İlkadım, Atakum, Canik başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Samsun\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.3 Milyon',
      coverage: ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Denizli Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Denizli\'de kazalı, hasarlı, pert ve hurda araç alımı. Pamukkale ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['denizli hasarlı araç alan', 'denizli kazalı araç alan', 'denizli pert araç alan', 'denizli hurda araç alımı', 'denizli araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/denizli',
    ogUrl: 'https://www.hasarpark.com/sehirler/denizli',
    hero: {
      badge: '🐓 DENİZLİ ARAÇ ALIM',
      title: 'Denizli\'de Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Denizli\'de kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 20 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Ege bölgesinde Pamukkale, Merkezefendi başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Denizli\'de güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1 Milyon',
      coverage: ['Pamukkale', 'Merkezefendi', 'Çivril', 'Acıpayam'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Şanlıurfa Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Şanlıurfa\'da kazalı, hasarlı, pert ve hurda araç alımı. Haliliye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['şanlıurfa hasarlı araç alan', 'şanlıurfa kazalı araç alan', 'şanlıurfa pert araç alan', 'şanlıurfa hurda araç alımı', 'şanlıurfa araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/sanliurfa',
    ogUrl: 'https://www.hasarpark.com/sehirler/sanliurfa',
    hero: {
      badge: '🕌 ŞANLIURFA ARAÇ ALIM',
      title: 'Şanlıurfa\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Şanlıurfa\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 63 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Güneydoğu bölgesinde Haliliye, Eyyübiye, Karaköprü başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Şanlıurfa\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '2.1 Milyon',
      coverage: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Siverek', 'Viranşehir'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Malatya Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Malatya\'da kazalı, hasarlı, pert ve hurda araç alımı. Battalgazi ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['malatya hasarlı araç alan', 'malatya kazalı araç alan', 'malatya pert araç alan', 'malatya hurda araç alımı', 'malatya araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/malatya',
    ogUrl: 'https://www.hasarpark.com/sehirler/malatya',
    hero: {
      badge: '🍑 MALATYA ARAÇ ALIM',
      title: 'Malatya\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Malatya\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 44 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde Battalgazi, Yeşilyurt başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Malatya\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '800 Bin',
      coverage: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Kahramanmaraş Araç Alımı | 30 DK Teklif - Hasar Park',
    metaDescription: 'Kahramanmaraş\'ta kazalı, hasarlı, pert ve hurda araç alımı. Onikişubat ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['kahramanmaraş hasarlı araç alan', 'kahramanmaraş kazalı araç alan', 'kahramanmaraş pert araç alan', 'kahramanmaraş hurda araç alımı', 'kahramanmaraş araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/kahramanmaras',
    ogUrl: 'https://www.hasarpark.com/sehirler/kahramanmaras',
    hero: {
      badge: '🍦 KAHRAMANMARAŞ ARAÇ ALIM',
      title: 'Kahramanmaraş\'ta Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Kahramanmaraş\'ta kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 46 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Akdeniz bölgesinde Onikişubat, Dulkadiroğlu başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Kahramanmaraş\'ta güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['Onikişubat', 'Dulkadiroğlu', 'Elbistan', 'Afşin'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Erzurum Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Erzurum\'da kazalı, hasarlı, pert ve hurda araç alımı. Yakutiye ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['erzurum hasarlı araç alan', 'erzurum kazalı araç alan', 'erzurum pert araç alan', 'erzurum hurda araç alımı', 'erzurum araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/erzurum',
    ogUrl: 'https://www.hasarpark.com/sehirler/erzurum',
    hero: {
      badge: '⛷️ ERZURUM ARAÇ ALIM',
      title: 'Erzurum\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Erzurum\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 25 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde Yakutiye, Palandöken, Aziziye başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Erzurum\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '750 Bin',
      coverage: ['Yakutiye', 'Palandöken', 'Aziziye', 'Horasan', 'Oltu'],
      responseTime: '30 dakika içinde',
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
    metaTitle: 'Van Hasarlı Kazalı Pert Hurda Araç Alımı | Hasar Park',
    metaDescription: 'Van\'da kazalı, hasarlı, pert ve hurda araç alımı. İpekyolu ve tüm ilçelere 30 dakikada teklif, ücretsiz çekici, anında nakit ödeme.',
    keywords: ['van hasarlı araç alan', 'van kazalı araç alan', 'van pert araç alan', 'van hurda araç alımı', 'van araç satmak'],
    canonical: 'https://www.hasarpark.com/sehirler/van',
    ogUrl: 'https://www.hasarpark.com/sehirler/van',
    hero: {
      badge: '🌊 VAN ARAÇ ALIM',
      title: 'Van\'da Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
      subtitle: 'Van\'da kazalı, hasarlı, pert ve hurda aracınızı satmak için doğru adrestesiniz. 65 plakalı araçları marka ve model fark etmeksizin değerinde alıyoruz. Doğu Anadolu bölgesinde İpekyolu, Tuşba, Edremit başta olmak üzere tüm ilçelere ücretsiz çekici ile geliyoruz. Fotoğraf gönderin, 30 dakika içinde ücretsiz ekspertiz ve en yüksek fiyat teklifini alın. Noter güvenceli işlem ve anında nakit ödeme ile Van\'da güvenle satın.',
    },
    services: { kazali: true, hasarli: true, pert: true, hurda: true },
    cityInfo: {
      population: '1.1 Milyon',
      coverage: ['İpekyolu', 'Tuşba', 'Edremit', 'Erciş'],
      responseTime: '30 dakika içinde',
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

// NOTE: no /sehirler/[city]/[service] routes exist — do not generate such URLs
// (a helper here used to produce 76 would-be-404 links; removed intentionally).