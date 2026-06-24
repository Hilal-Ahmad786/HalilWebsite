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
  canonical: string;
  ogUrl: string;

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

  // Common mistakes section
  commonMistakes: Array<{
    mistake: string;
    tip: string;
  }>;

  // Customer stories
  customerStories: Array<{
    name: string;
    city: string;
    vehicleType: string;
    story: string;
    result: string;
  }>;

  // Content sections
  content: {
    whatWeAccept: string[];
    pricing: {
      title: string;
      description: string;
      factors: string[];
      byVehicleType: Array<{ type: string; priceRange: string }>;
    };
    whyChooseUs: string[];
    relatedServices: Array<{ title: string; slug: string; description: string }>;
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

    metaTitle: 'Kazalı Araç Alımı | 30 Dakikada Teklif - Hasar Park',
    metaDescription: 'Kaza geçirmiş araçlarınızı 30 dakikada değerlendiriyoruz. En yüksek fiyat garantisi, ücretsiz çekici, noter işlemleri dahil. Anında ödeme, 7/24 hizmet.',
    keywords: [
      'kazalı araç alan',
      'kazalı araç alımı',
      'kazalı araba alan',
      'kaza yapmış araç alan',
      'kazalı oto alan',
      'kazalı araç satmak',
    ],
    canonical: 'https://www.hasarpark.com/kazali-arac-alim',
    ogUrl: 'https://www.hasarpark.com/kazali-arac-alim',

    hero: {
      badge: '🚗 KAZALI ARAÇ ALIMI',
      title: 'Kazalı Aracınız',
      titleHighlight: 'En Yüksek Fiyata',
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
        description: '5+ yıl kazalı araç alım satım tecrübesi.',
      },
    ],

    faqs: [
      {
        question: 'Kazalı araç alımında nasıl bir süreç işliyor?',
        answer: 'Kazalı araç alım sürecimiz 4 adımda tamamlanır. İlk adımda bizi arayarak veya WhatsApp üzerinden iletişime geçerek aracınız hakkında temel bilgileri paylaşıyorsunuz. İkinci adımda birkaç fotoğraf gönderiyorsunuz; ön, arka, yan ve hasar bölgelerini net şekilde gösteren fotoğraflar yeterli. Üçüncü adımda uzman ekibimiz 30 dakika içinde size en yüksek fiyat teklifini sunuyor. Teklifi kabul etmeniz halinde dördüncü adımda ücretsiz çekici ile aracınızı istediğiniz lokasyondan alıyor, noter işlemlerini tamamlıyor ve anında ödeme yapıyoruz. Tüm süreç çoğunlukla aynı gün içinde tamamlanır; sizi bekleten bir süreç yok.',
      },
      {
        question: 'Hangi tür kazalı araçları alıyorsunuz?',
        answer: 'Hasar türü veya boyutundan bağımsız olarak tüm kazalı araçları alıyoruz. Ön çarpma, yan çarpma, arkadan çarpma, devrilme ve takla atmış araçların tamamı alım kapsamımızdadır. Motor hasarlı, şanzıman hasarlı, diferansiyel hasarlı, kaporta hasarlı, hava yastığı patlamış ve şasi hasarlı araçlar da değerlendiriyoruz. Sürülemez durumda, hareket edemeyen veya yangın geçirmiş araçlar için de ücretsiz çekici ile yerinden alım yapıyoruz. 5+ yıllık tecrübemizle karşılaşmadığımız hasar türü neredeyse kalmamıştır.',
      },
      {
        question: 'Kazalı araç için ne kadar ödeme yapıyorsunuz?',
        answer: 'Kazalı araç fiyatı birçok faktöre bağlı olarak değişir: aracın markası, modeli, üretim yılı, kilometresi, hasar türü ve boyutu, onarılabilir parçaların değeri ve güncel piyasa talebi bunların başında gelir. Genel bir kural olarak kazalı araçlar, sağlam piyasa değerinin %50-80\'i arasında fiyatlanır; ancak bu oran hasarın ciddiyetine göre farklılık gösterir. Biz piyasa araştırması yaparak rakiplerimizin üzerinde fiyat teklifi sunmayı taahhüt ediyoruz. Size adil ve şeffaf bir fiyat veriyoruz; gizli kesinti veya sürpriz düşüş yaşamazsınız.',
      },
      {
        question: 'Trafik kazası raporu gerekli mi?',
        answer: 'Kaza raporu satış sürecini kolaylaştırır ve bazı durumlarda daha iyi fiyat almanızı sağlayabilir; ancak zorunlu değildir. Trafik kazası tutanağı, alkol raporu veya bilirkişi raporu olmasa dahi aracınızı yerinde değerlendirip size teklif verebiliriz. Raporunuz varsa mutlaka paylaşın, çünkü belgelenmiş hasar bilgisi süreci hızlandırır. Rapor yoksa ekibimiz yerinde inceleme yaparak bağımsız bir değerlendirme gerçekleştirir. Tüm evrak işlemlerinde de size rehberlik ediyoruz.',
      },
      {
        question: 'Çok hasarlı araçları da alıyor musunuz?',
        answer: 'Evet, hasar derecesi ne olursa olsun tüm kazalı araçları alıyoruz. Tamamen ezilmiş, motor bloğu çökmüş, şasi hasarlı veya yangın geçirmiş araçlar dahil olmak üzere her koşuldaki aracı değerlendiriyoruz. Ağır hasarlı araçlarda bile kullanılabilir parçalar, metal değeri ve sigorta tazminatları fiyatlandırmada rol oynar. Üstelik sürülemez veya hareket edemeyen araçlar için tüm Türkiye\'ye ücretsiz çekici hizmetimiz mevcuttur. "Aracım çok hasarlı, alamazlar" düşüncesiyle vazgeçmeyin; bizi arayın ve gerçek teklifi görün.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Sadece tek bir alıcıdan teklif almak',
        tip: 'En az 2-3 alıcıdan teklif alın. Hasar Park olarak piyasanın en yüksek teklifini sunduğumuzu garanti ediyoruz, ancak karşılaştırma yapmanız haklı bir tercih.',
      },
      {
        mistake: 'Kaza fotoğrafı çekmemek',
        tip: 'Kazadan hemen sonra çok sayıda fotoğraf çekin. Hasar bölgelerini, plakayı ve genel görünümü belgeleyen fotoğraflar değerlendirmeyi hızlandırır ve daha adil fiyat almanızı sağlar.',
      },
      {
        mistake: 'Sigortaya başvurmadan araç satmak',
        tip: 'Önce sigorta şirketinizle görüşün ve kasko/zorunlu trafik sigortası kapsamını öğrenin. Sigorta tazminatı aldıktan sonra araç satışı yapmanız daha avantajlı olabilir.',
      },
      {
        mistake: 'Aracı onarıma verdikten sonra satmaya çalışmak',
        tip: 'Kazalı aracı tamir ettirip satmak çoğu zaman ekonomik değildir. Tamir maliyeti çıktıktan sonra kazancınız minimal olabilir. Doğrudan Hasar Park\'a satış yaparak tamir masrafından kurtulun.',
      },
    ],

    customerStories: [
      {
        name: 'Mehmet K.',
        city: 'İstanbul',
        vehicleType: 'Kazalı Volkswagen Golf',
        story: 'Araç kaza yaptıktan sonra ne yapacağımı bilemedim. Sigorta şirketi düşük teklif verdi, galericiler görmek bile istemedi.',
        result: 'Hasar Park\'ı aradım, 25 dakika içinde teklif geldi ve aynı gün aracımı teslim ederek param hesabımda oldu.',
      },
      {
        name: 'Ayşe D.',
        city: 'Ankara',
        vehicleType: 'Ön Hasar Honda Civic',
        story: 'Ön tampon ve kaput tamamen ezilmişti. Tamir teklifi aldım, çok yüksekti. Aracı satmayı düşündüm ama fiyat konusunda endişeliydim.',
        result: 'Hasar Park\'ın verdiği fiyat beklentimin üzerindeydi. Ücretsiz çekici geldi, evrakları onlar halletti, 3 saatte her şey bitti.',
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
        byVehicleType: [
          { type: 'Ekonomik Otomobil (Fiat, Hyundai, Renault)', priceRange: '30.000 - 150.000 ₺' },
          { type: 'Orta Segment (Toyota, Honda, VW)', priceRange: '80.000 - 300.000 ₺' },
          { type: 'Üst Segment (BMW, Mercedes, Audi)', priceRange: '150.000 - 600.000 ₺' },
          { type: 'SUV & Crossover', priceRange: '100.000 - 500.000 ₺' },
          { type: 'Ticari Araç (Minibüs, Kamyonet)', priceRange: '50.000 - 250.000 ₺' },
        ],
      },
      whyChooseUs: [
        'Türkiye\'nin en yüksek kazalı araç fiyatlarını veriyoruz',
        '5+ yıl kazalı araç alım satım tecrübesi',
        'Her marka ve model için profesyonel değerlendirme',
        'Şeffaf ve güvenilir işlem süreci',
        'Tüm Türkiye\'de ücretsiz çekici hizmeti',
        'Noter işlemleri ve evrakları bizden',
      ],
      relatedServices: [
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik veya kaporta hasarlı araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu çıkmış araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Kullanım ömrünü tamamlamış araçlarınız için' },
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

    metaTitle: 'Hasarlı Araç Alımı | Kaporta & Motor Hasarlı Alan',
    metaDescription: 'Motor, şanzıman ve kaporta hasarlı araçları alıyoruz. Detaylı ekspertiz, adil fiyat, ücretsiz çekici. Tüm evraklar bizden, anında ödeme garantisi.',
    keywords: [
      'hasarlı araç alan',
      'hasarlı araç alımı',
      'mekanik hasarlı araç',
      'kaporta hasarlı araç',
      'motor hasarlı araç alan',
      'hasarlı oto alan',
    ],
    canonical: 'https://www.hasarpark.com/hasarli-arac-alim',
    ogUrl: 'https://www.hasarpark.com/hasarli-arac-alim',

    hero: {
      badge: '🔧 HASARLI ARAÇ ALIMI',
      title: 'Hasarlı Aracınız',
      titleHighlight: 'Anında Nakde',
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
        answer: 'Motor hasarlı, şanzıman hasarlı, kaporta hasarlı, elektrik sistemi hasarlı, fren sistemi arızalı, süspansiyon hasarlı, diferansiyel hasarlı ve tüm mekanik hasarlı araçları alıyoruz. Tek bir parçası arızalı araçtan kapsamlı çoklu hasara kadar her durumu değerlendiriyoruz. Aracın çalışıp çalışmaması da fark etmez; hareket edemeyen araçlarınızı ücretsiz çekici ile istediğiniz noktadan teslim alıyoruz. 5 yılı aşkın tecrübemizle hangi hasar türü olursa olsun size adil ve en yüksek fiyatı sunuyoruz.',
      },
      {
        question: 'Motor arızalı araç için de alım yapıyor musunuz?',
        answer: 'Evet, motor arızalı veya motor hasarlı tüm araçlar için alım yapıyoruz. Motor hasarı; silindir kapağı çatlağı, motor blok çatlağı, turbo arızası, yakıt pompası sorunu veya komple motor değişimi gerektiren durum olabilir — hepsini değerlendiriyoruz. Motor hasarının boyutu fiyatı etkiler; ancak aracın diğer parçalarının durumu, marka ve model değeri de hesaba katılır. Çalışmayan, çekici gerektiren araçlarınızı bulunduğu yerden ücretsiz alıyoruz. Motor hasarı olan araçlar için de piyasanın en yüksek teklifini vermeyi garanti ediyoruz.',
      },
      {
        question: 'Hasarlı araç fiyatı nasıl belirleniyor?',
        answer: 'Hasarlı araç fiyatı; aracın genel durumu, hasarın türü ve boyutu, tamir maliyeti, yedek parça değeri, aracın yaşı ve kilometresi ile anlık piyasa talebine göre belirlenir. Örneğin kaporta hasarı olan ama motoru sağlam bir araç, motor hasarlı bir araca göre daha yüksek değer taşıyabilir. Değerlendirmemizde bu faktörlerin tümünü göz önünde bulunduruyoruz. Ayrıca değiştirilebilir parçalar, hurda metal değeri ve orijinal aksam fiyatları da hesaba katılır. Size şeffaf ve gerekçeli bir fiyat sunuyoruz; pazarlık ya da sürpriz düşüş yaşamazsınız.',
      },
      {
        question: 'Araç çalışmıyorsa da alıyor musunuz?',
        answer: 'Evet, kesinlikle alıyoruz. Çalışmayan, hareket edemeyen, kendi gücüyle sürülemeyen araçlar bizim uzmanlık alanımızda. Aracınız garajda, sokakta veya servis istasyonunda olabilir — fark etmez. Tüm Türkiye\'ye ücretsiz çekici hizmetimizle aracınızı bulunduğunuz yerden teslim alıyoruz. Çekici gelirken bir gün önce randevu almanız yeterli; çoğu zaman aynı gün hizmet verebiliyoruz. Araç çalışmadığı için endişelenmeyin, bu durum değerlendirmemizi veya ödeme yapma kararlılığımızı değiştirmiyor.',
      },
      {
        question: 'Ekspertiz ücreti var mı?',
        answer: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir. Uzman ekibimiz aracınızı yerinde inceleyerek detaylı değerlendirme yapar; bunun için herhangi bir ücret talep etmiyoruz. Araç teslim edilmesinden önce size tüm değerlendirme sonuçlarını ve gerekçeli fiyat teklifini sunuyoruz. Teklifi beğenmezseniz herhangi bir yükümlülük altında kalmıyorsunuz. Ücretsiz ekspertiz hizmetimiz Türkiye genelinde geçerlidir ve randevu ile hızlıca organize edilebilir.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Mekanik arızayı kendiniz tamir ettirmeye çalışmak',
        tip: 'Hasarlı araç tamiri çoğunlukla aracın piyasa değerini aşar. Tamir ettirmeden önce Hasar Park\'tan ücretsiz değerlendirme alın; tamir maliyeti ile satış fiyatını karşılaştırın.',
      },
      {
        mistake: 'Hasarı gizlemeye çalışmak',
        tip: 'Alıcılar hasarı fark eder ve bu güven kaybına neden olur. Hasar Park olarak tüm hasar türlerini kabul ediyoruz; dürüst bilgi paylaşımı süreci hızlandırır.',
      },
      {
        mistake: 'Aracı uzun süre bekletmek',
        tip: 'Hasarlı araçlar bekledikçe değer kaybeder; pas, nem ve ek arızalar fiyatı düşürür. En kısa sürede değerlendirme yaptırmak daha yüksek fiyat almanızı sağlar.',
      },
    ],

    customerStories: [
      {
        name: 'Kadir S.',
        city: 'İzmir',
        vehicleType: 'Motor Hasarlı Ford Focus',
        story: 'Motoru tamamen yandı, tamir teklifi aracın değerini geçiyordu. Kimse bakacak değil dedi.',
        result: 'Hasar Park motor hasarına rağmen beklediğimin üzerinde fiyat verdi. Çekici geldi, evrak halloldu, aynı gün param geldi.',
      },
      {
        name: 'Fatma Y.',
        city: 'Bursa',
        vehicleType: 'Şanzıman Hasarlı Renault Megane',
        story: 'Otomatik vites arızası yüzünden araç hareket etmiyordu. Serviste 3 ay bekledi, tamir masrafı çok yüksekti.',
        result: 'Hasar Park\'ı aradım, fotoğraf gönderdim. 20 dakikada teklif geldi, ertesi gün aracım alındı ve param yattı.',
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
        byVehicleType: [
          { type: 'Kaporta Hasarlı Araç', priceRange: 'Piyasa değerinin %60-80\'i' },
          { type: 'Motor Hasarlı Araç', priceRange: 'Piyasa değerinin %40-65\'i' },
          { type: 'Şanzıman Hasarlı Araç', priceRange: 'Piyasa değerinin %45-70\'i' },
          { type: 'Elektrik Arızalı Araç', priceRange: 'Piyasa değerinin %50-75\'i' },
          { type: 'Çalışmayan Araç', priceRange: 'Hasar türüne göre özel değerlendirme' },
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
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza geçirmiş araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu çıkmış araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Kullanım ömrünü tamamlamış araçlarınız için' },
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

    metaTitle: 'Pert Araç Alımı | Sigorta Pert Raporlu Alan',
    metaDescription: 'Sigorta pert raporlu araçlar için özel değerlendirme. 5+ yıl tecrübe, en yüksek fiyat, hızlı işlem. Yasal süreç, ücretsiz çekici, anında ödeme.',
    keywords: [
      'pert araç alan',
      'pert araç alımı',
      'pert kayıtlı araç alan',
      'sigorta pertli araç',
      'pert oto alan',
      'pert araç satmak',
    ],
    canonical: 'https://www.hasarpark.com/pert-arac-alim',
    ogUrl: 'https://www.hasarpark.com/pert-arac-alim',

    hero: {
      badge: '⚠️ PERT ARAÇ ALIMI',
      title: 'Pert Aracınız',
      titleHighlight: 'Değerinde Satın',
      subtitle: 'Sigorta pert raporu çıkmış araçlar için özel değerlendirme. En yüksek fiyat ve güvenli işlem garantisi.',
      image: '/images/pert-arac.png',
    },

    features: [
      {
        icon: '📋',
        title: 'Pert Raporu Uzmanı',
        description: 'Pert raporu olan araçlarda 5+ yıl tecrübe.',
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
        answer: 'Pert araç, sigorta şirketi tarafından ekonomik olarak onarılamaz şeklinde nitelendirilen ve "pert raporu" düzenlenen araçtır. Türk sigorta mevzuatına göre bir aracın tamir maliyeti, rayiç değerinin belirli bir oranını (genellikle %60-70\'ini) aştığında sigorta şirketi pert kararı verebilir. Pert kararı verilen araç için sigorta şirketi sahibine tazminat öder ve aracı teslim alır ya da sahibi aracı elinde tutarak sigorta tazminatının bir kısmını alır. Pert raporlu araç satılabilir ve alınabilir; yasal bir engel yoktur. Hasar Park olarak pert araçlara özel değerlendirme yapıyor ve en yüksek fiyatı sunuyoruz.',
      },
      {
        question: 'Pert raporlu araç satılır mı?',
        answer: 'Evet, pert raporlu araçlar Türkiye\'de yasal olarak satılabilir ve alınabilir. Pert raporu bir araç satış engeli oluşturmaz; aksine araç için özel bir statü tanımlar. Satış işlemi noterde gerçekleştirilir ve pert bilgisi resmi kayıtlara geçer. Alıcı bu durumdan haberdar olarak işlem yapar. Hasar Park olarak pert araç alımında 5 yılı aşkın tecrübemizle tüm yasal süreçleri sizin adınıza yürütüyoruz. Pert raporunuz olsun ya da olmasın, sigorta sürecinin hangi aşamasında olduğunuzdan bağımsız olarak aracınızı değerlendiriyor ve en yüksek teklifi sunuyoruz.',
      },
      {
        question: 'Pert aracın değeri ne kadardır?',
        answer: 'Pert aracın piyasa değeri birçok faktöre bağlıdır: aracın markası, modeli, üretim yılı, orijinal piyasa değeri, hasarın boyutu, kullanılabilir parçaların durumu ve sigorta ödeme tutarı bunların başında gelir. Genel olarak pert araçlar sağlam piyasa değerinin %25-55\'i arasında fiyatlanır. Ancak hasar küçük ve parçaların büyük kısmı kullanılabilir durumdaysa bu oran %50-65\'e kadar çıkabilir. Lüks veya nadir araçlarda yedek parça değeri yüksek olduğundan fiyat oranı da yükselebilir. Bizi arayarak ücretsiz değerlendirme yapın; sizi şaşırtacak bir teklif alabileceğinizi göreceksiniz.',
      },
      {
        question: 'Pert işlemi ne kadar sürer?',
        answer: 'Pert aracın alım satım işlemi genellikle 24-48 saat içinde tamamlanır. İlk aşamada fotoğraf üzerinden değerlendirme yaparak teklifi 30-60 dakika içinde sunuyoruz. Teklifi kabul etmeniz halinde aynı gün veya ertesi gün ücretsiz çekiciyle aracı teslim alıyoruz. Evrakların hazır olması (araç ruhsatı, pert raporu, kimlik) durumunda noter işlemi 1-2 saat içinde tamamlanır. Noterin ardından anında ödeme yapılır. Evraklarınız eksikse tamamlanması için rehberlik ediyoruz. Tüm süreci mümkün olduğunca hızlı tutmak önceliğimizdir.',
      },
      {
        question: 'Hangi evraklar gerekli?',
        answer: 'Pert araç satışı için gerekli belgeler: araç ruhsatı (aslı), pert raporu (sigorta şirketinden), kimlik belgesi (nüfus cüzdanı veya pasaport), sigorta poliçesi ve varsa araç muayene belgesi. Sigorta şirketi aracı teslim almışsa ek bir devir belgesi gerekebilir; bu durumda sizi bilgilendiriyor ve süreci yönetiyoruz. Eksik evrak olması durumunda nasıl tamamlanacağı konusunda ücretsiz rehberlik yapıyoruz. Bürokratik işlemlerin tamamını sizin adınıza takip ediyor, noter ve tescil işlemlerini hallediyoruz.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Sigorta şirketinin teklifini sorgulamadan kabul etmek',
        tip: 'Sigorta tazminatı her zaman en yüksek değer olmayabilir. Önce Hasar Park\'tan bağımsız değerlendirme alın; bazen aracı kendiniz satmak sigorta tazminatından daha karlı olabilir.',
      },
      {
        mistake: 'Pert belgesini almadan satış yapmaya çalışmak',
        tip: 'Pert belgesi olmadan yapılan satışlar ileride hukuki sorun yaratabilir. Sigorta şirketinden resmi pert raporunu mutlaka alın.',
      },
      {
        mistake: 'Pert aracı düşük fiyata satmak',
        tip: 'Pek çok araç sahibi pert raporlu araçların değersiz olduğunu düşünerek çok düşük fiyatlara satmaktadır. Hasar Park\'ı arayın; gerçek piyasa değerini öğrenin.',
      },
    ],

    customerStories: [
      {
        name: 'Ali R.',
        city: 'Ankara',
        vehicleType: 'Sigorta Pert Toyota Corolla',
        story: 'Sigorta şirketi pert kararı verdi ve düşük tazminat teklif etti. Aracı kendim satmayı düşündüm ama nereden başlayacağımı bilemedim.',
        result: 'Hasar Park ile görüştüm. Tüm yasal süreci onlar yönetti, sigorta teklifinden %35 daha fazla para aldım.',
      },
      {
        name: 'Selin K.',
        city: 'İzmir',
        vehicleType: 'Kasko Pert Audi A3',
        story: 'Lüks araç olduğu için pert sonrası ne yapacağımı bilemedim. Pek çok alıcı gerçek değerinin çok altında teklif verdi.',
        result: 'Hasar Park yedek parça değerini de hesaba katarak oldukça yüksek bir teklif sundu. Çok memnun kaldım.',
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
        byVehicleType: [
          { type: 'Küçük Segment (Polo, Clio, Corsa)', priceRange: 'Piyasa değerinin %25-50\'si' },
          { type: 'Orta Segment (Corolla, Focus, Golf)', priceRange: 'Piyasa değerinin %30-55\'i' },
          { type: 'Üst Segment (BMW, Mercedes, Audi)', priceRange: 'Piyasa değerinin %35-60\'ı' },
          { type: 'Hafif Hasar Pert', priceRange: 'Piyasa değerinin %45-65\'i' },
          { type: 'Yangın/Su Hasarı Pert', priceRange: 'Özel değerlendirme gerektirir' },
        ],
      },
      whyChooseUs: [
        'Pert araç alımında 5+ yıl tecrübe',
        'En yüksek pert araç fiyatları',
        'Tüm yasal işlemler bizden',
        'Hızlı değerlendirme ve ödeme',
        'Güvenli ve şeffaf işlem',
        'Ücretsiz çekici hizmeti',
      ],
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza geçirmiş araçlarınız için' },
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik veya kaporta hasarlı araçlarınız için' },
        { title: 'Hurda Araç Alımı', slug: 'hurda-arac-alim', description: 'Kullanım ömrünü tamamlamış araçlarınız için' },
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
    metaDescription: 'Hurda belgeli araçları kilo bazında en yüksek fiyata alıyoruz. Resmi belgeli işlem, çevre dostu geri dönüşüm. Ücretsiz çekici, anında ödeme.',
    keywords: [
      'hurda araç alan',
      'hurda araç alımı',
      'hurda belgeli araç',
      'hurdaya araç satmak',
      'hurda oto alan',
      'hurda araba alan',
    ],
    canonical: 'https://www.hasarpark.com/hurda-arac-alim',
    ogUrl: 'https://www.hasarpark.com/hurda-arac-alim',

    hero: {
      badge: '♻️ HURDA ARAÇ ALIMI',
      title: 'Hurda Aracınız',
      titleHighlight: 'Çevreci Çözüm',
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
        answer: 'Hurda araç işlemi birkaç basit adımdan oluşur. Önce bizi arayarak veya WhatsApp ile iletişime geçerek aracınızın marka, model ve durumu hakkında bilgi veriyorsunuz. Ardından ücretsiz çekici hizmetimizle aracınız teslim alınır. Teslim noktasında aracınız tartılır, kilo bazında fiyat hesaplanır ve size sunulur. Anlaşma sağlanması durumunda hurda belgesi düzenlenir; bu belgeyle araç trafikten tescilden silinir ve MTV gibi vergi yükümlülükleri sona erer. Son adımda anında nakit veya EFT ile ödeme yapılır. Tüm süreç çoğunlukla aynı gün içinde tamamlanır.',
      },
      {
        question: 'Hurda araç kilosu ne kadar?',
        answer: 'Hurda araç kilo fiyatı, günlük hurda demir piyasa fiyatlarına bağlı olarak değişkenlik gösterir. Piyasa koşullarına göre kilogram başına ortalama 8-18 TL arasında fiyat oluşmaktadır; ancak bu rakam piyasaya göre farklılık gösterebilir. Güncel hurda fiyatı için bizi arayın, anında bilgi veriyoruz. Ortalama bir otomobil 800-1.200 kg arasındadır; SUV ve hafif ticari araçlar 1.200-1.800 kg\'a kadar çıkabilir. Ayrıca alüminyum parçalar, motor bloğu gibi değerli metaller ayrıca değerlendirilerek toplam fiyatı artırabilir.',
      },
      {
        question: 'Hangi araçlar hurdaya ayrılabilir?',
        answer: 'Kullanım ömrünü tamamlamış veya artık ekonomik olarak işletilemeyecek durumdaki tüm araçlar hurdaya ayrılabilir. Bu kapsamda; çok hasarlı ve onarımı ekonomik olmayan araçlar, motor veya şanzıman arızası nedeniyle çalışmayan araçlar, sigorta pert raporu çıkmış araçlar, Araç Muayene İstasyonundan (TÜVTÜRK) sürekli ret alan araçlar ve MTV borcu birikmiş araçlar hurdaya ayrılabilir. Araç çalışıyor olsa bile sahibi hurda yapmayı tercih edebilir; herhangi bir zorunluluk yoktur.',
      },
      {
        question: 'Hurda belgesi ne işe yarar?',
        answer: 'Hurda belgesi birçok önemli avantaj sağlar. En önemli faydası, aracın trafikten tescilinin silinmesiyle birlikte yıllık Motorlu Taşıtlar Vergisi (MTV) ve diğer vergi yükümlülüklerinin tamamen sona ermesidir. Ayrıca araç muayene zorunluluğu, trafik sigortası yenileme ve plaka yenileme yükümlülükleri de kalkar. Bunun yanı sıra hurda belgesi, bazı teşvik programları kapsamında yeni araç alımında indirim veya destek sağlayabilir. Yasal açıdan araç artık kayıt dışı sayılır ve tüm sorumluluklar sona erer.',
      },
      {
        question: 'Hurda işlemi ne kadar sürer?',
        answer: 'Hurda araç işlemi oldukça hızlıdır ve genellikle aynı gün tamamlanır. Çekici geldiğinde araç teslim alınır, tartım ve değerlendirme 30-60 dakika içinde yapılır. Hurda belgesi düzenlenmesi de çoğunlukla aynı gün tamamlanır; ancak Trafik Tescil Müdürlüğü işlemleri bulunduğunuz şehre ve yoğunluğa göre 1-2 gün sürebilir. Noterde tescil silme işlemi yapıldıktan hemen sonra ödeme gerçekleştirilir. Evraklarınız hazır ve eksiksizse tüm süreç sabah başlayıp öğleden önce tamamlanabilir.',
      },
    ],

    commonMistakes: [
      {
        mistake: 'Aracı sokakta veya boş arazide terk etmek',
        tip: 'Hurda araç olsa bile hukuki sorumluluk sahibine aittir. Ceza ve harç ödemekten kaçınmak için resmi hurda işlemi yaptırın.',
      },
      {
        mistake: 'Lisanssız hurda alıcılarla çalışmak',
        tip: 'Resmi belgesi olmayan hurda alıcıları size yasal sorun çıkarabilir. Hasar Park resmi izinli ve belgeli bir hurda işletmesidir.',
      },
      {
        mistake: 'Hurda fiyatını sorgulamadan kabul etmek',
        tip: 'Hurda fiyatı tartıya ve piyasa fiyatına göre belirlenir. Değerli metal parçalar ayrıca değer taşır. Hasar Park şeffaf tartım ve fiyatlandırma yapar.',
      },
    ],

    customerStories: [
      {
        name: 'Hasan M.',
        city: 'Konya',
        vehicleType: '2005 Model Tofaş',
        story: '18 yıllık araç artık muayeneden geçmiyordu, MTV borcu birikti. Ne yapacağımı bilemedim.',
        result: 'Hasar Park geldi, aracı tartı ile değerlendirdi, hurda belgesi halletti ve aynı gün param geldi. Harika hizmet.',
      },
      {
        name: 'Zeynep A.',
        city: 'Gaziantep',
        vehicleType: 'Kazalı ve Hareketsiz Opel Vectra',
        story: 'Araç hem kazalı hem de motoru arızalıydı. Kimse bakmak istemedi.',
        result: 'Hasar Park her durumu değerlendiriyor. Ücretsiz çekici geldi, kilo başı en yüksek fiyatı verdiler.',
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
        byVehicleType: [
          { type: 'Küçük Otomobil (700-900 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Orta Sınıf Otomobil (900-1200 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'SUV / Crossover (1200-1800 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Hafif Ticari (1500-2500 kg)', priceRange: 'Güncel kilo fiyatı × ağırlık' },
          { type: 'Değerli Parçalı Araç', priceRange: 'Kilo fiyatı + parça değeri' },
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
      relatedServices: [
        { title: 'Kazalı Araç Alımı', slug: 'kazali-arac-alim', description: 'Kaza geçirmiş araçlarınız için' },
        { title: 'Hasarlı Araç Alımı', slug: 'hasarli-arac-alim', description: 'Mekanik veya kaporta hasarlı araçlarınız için' },
        { title: 'Pert Araç Alımı', slug: 'pert-arac-alim', description: 'Sigorta pert raporu çıkmış araçlarınız için' },
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
