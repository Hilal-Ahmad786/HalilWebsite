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
  };
  
  // Service availability
  services: {
    kazali: boolean;
    hasarli: boolean;
    pert: boolean;
    hurda: boolean;
  };
  
  // City-specific info
  cityInfo: {
    population: string;
    coverage: string[];
    responseTime: string;
    localOffice?: string;
  };
  
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
    
    metaTitle: 'İstanbul Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Premium Auto',
    metaDescription: 'İstanbul\'da kazalı, hasarlı, pert ve hurda araç alımı. Anadolu ve Avrupa yakası hizmet. 30 dakikada teklif, ücretsiz çekici. 0 (555) 123 45 67',
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
    
    metaTitle: 'Ankara Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Premium Auto',
    metaDescription: 'Ankara\'da kazalı, hasarlı, pert ve hurda araç alımı. Çankaya, Keçiören, Yenimahalle tüm ilçelere hizmet. 30 dakikada teklif. 0 (555) 123 45 67',
    keywords: [
      'ankara kazalı araç alan',
      'ankara hasarlı araç alan',
      'ankara pert araç alan',
      'ankara hurda araç alan',
      'çankaya araç alım',
      'keçiören araç alım',
      'yenimahalle araç alım',
      'mamak araç alım',
    ],
    
    hero: {
      badge: '🏛️ ANKARA ARAÇ ALIM',
      title: 'ANKARA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Ankara\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde ücretsiz ekspertiz.',
    },
    
    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },
    
    cityInfo: {
      population: '5.7 Milyon',
      coverage: [
        'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
        'Sincan', 'Gölbaşı', 'Pursaklar', 'Altındağ', 'Kahramankazan',
        'Çubuk', 'Polatlı', 'Beypazarı', 'Elmadağ', 'Akyurt',
        'Kalecik', 'Haymana', 'Şereflikoçhisar', 'Kızılcahamam', 'Ayaş',
        'Güdül', 'Çamlıdere', 'Nallıhan', 'Bala', 'Evren'
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Çankaya Merkez Ofis',
    },
    
    features: [
      {
        icon: '🚗',
        title: 'Tüm İlçelere Hizmet',
        description: '25 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: '⚡',
        title: '1 Saat İçinde Teklif',
        description: 'Ankara\'da en hızlı değerlendirme.',
      },
      {
        icon: '💰',
        title: 'Ankara\'nın En İyi Fiyatı',
        description: 'Başkentte en yüksek araç alım fiyatları.',
      },
      {
        icon: '🚚',
        title: 'Ücretsiz Çekici',
        description: 'Ankara geneli ücretsiz çekme.',
      },
      {
        icon: '📄',
        title: 'Merkez Noter',
        description: 'Kızılay noterlerinde hızlı işlem.',
      },
      {
        icon: '🏢',
        title: 'Merkezi Konum',
        description: 'Çankaya ofisimizden tüm Ankara\'ya ulaşım.',
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
        question: 'Ankara\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Ankara\'nın 25 ilçesine hizmet veriyoruz. Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut başta olmak üzere tüm merkez ve çevre ilçelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'Ankara\'da ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde 1 saat içinde, dış ilçelerde 2 saat içinde ekspertiz ekibimiz adresinize ulaşır.',
      },
      {
        question: 'Ankara\'da hangi noterde işlem yapıyorsunuz?',
        answer: 'Genellikle Kızılay bölgesindeki noterlerle çalışıyoruz. İsteğinize göre size yakın noterde de işlem yapabiliriz.',
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
    
    metaTitle: 'İzmir Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Premium Auto',
    metaDescription: 'İzmir\'de kazalı, hasarlı, pert ve hurda araç alımı. Konak, Karşıyaka, Bornova tüm ilçelere hizmet. Anında değerlendirme. 0 (555) 123 45 67',
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