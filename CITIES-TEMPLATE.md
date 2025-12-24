# 🇹🇷 Turkey Cities - Quick Add Template

## 📍 Major Cities to Add (Priority Order)

### Tier 1 - Metropolitan Cities (Done ✅)
- [x] İstanbul
- [x] Ankara  
- [x] İzmir

### Tier 2 - Large Cities (High Priority)
- [ ] Bursa
- [ ] Antalya
- [ ] Adana
- [ ] Konya
- [ ] Gaziantep

### Tier 3 - Medium Cities
- [ ] Mersin
- [ ] Kayseri
- [ ] Eskişehir
- [ ] Diyarbakır
- [ ] Samsun
- [ ] Denizli
- [ ] Şanlıurfa
- [ ] Adapazarı/Sakarya
- [ ] Malatya
- [ ] Kahramanmaraş

---

## 🚀 Quick Template (Copy & Modify)

```typescript
'CITYSLUG': {
  id: 'CITYSLUG',
  slug: 'CITYSLUG',
  name: 'CITYNAME',
  region: 'REGION', // Marmara, Ege, Akdeniz, İç Anadolu, Karadeniz, Doğu Anadolu, Güneydoğu Anadolu
  
  metaTitle: 'CITYNAME Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Hasar Park',
  metaDescription: 'CITYNAME\'da kazalı, hasarlı, pert ve hurda araç alımı. [Major districts] hizmet. 30 dakikada teklif.',
  keywords: [
    'CITYSLUG kazalı araç alan',
    'CITYSLUG hasarlı araç alan',
    'CITYSLUG pert araç alan',
    'CITYSLUG hurda araç alan',
    'DISTRICT1 araç alım',
    'DISTRICT2 araç alım',
  ],
  
  hero: {
    badge: '🏛️ CITYNAME ARAÇ ALIM',
    title: 'CITYNAME\'DA ARACINIZ',
    titleHighlight: 'EN YÜKSEK FİYATA',
    subtitle: 'CITYNAME\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. [X] saat içinde ücretsiz ekspertiz.',
  },
  
  services: {
    kazali: true,
    hasarli: true,
    pert: true,
    hurda: true,
  },
  
  cityInfo: {
    population: 'X Milyon',
    coverage: [
      'District1', 'District2', 'District3', 'District4', 'District5',
      // Add all districts
    ],
    responseTime: 'X saat içinde',
    localOffice: 'DISTRICT Merkez Ofis', // Optional
  },
  
  features: [
    {
      icon: '🚗',
      title: 'Tüm İlçelere Hizmet',
      description: 'XX ilçede hızlı ve ücretsiz hizmet.',
    },
    {
      icon: '⚡',
      title: 'X Saat İçinde Teklif',
      description: 'CITYNAME\'da en hızlı değerlendirme.',
    },
    {
      icon: '💰',
      title: 'CITYNAME\'nın En İyi Fiyatı',
      description: 'Şehrin en yüksek araç alım fiyatları.',
    },
    {
      icon: '🚚',
      title: 'Ücretsiz Çekici',
      description: 'CITYNAME geneli ücretsiz taşıma.',
    },
    {
      icon: '📄',
      title: 'Noter İşlemleri',
      description: 'Merkez noterlerinde hızlı işlem.',
    },
    {
      icon: '🏢',
      title: 'Lokal Ofis',
      description: 'CITYNAME ofisimizden tüm şehre ulaşım.',
    },
  ],
  
  testimonials: [
    {
      name: 'Mehmet K.',
      district: 'DISTRICT1',
      rating: 5,
      text: 'DISTRICT1\'de kazalı aracımı aldılar. Çok hızlı ve profesyonel hizmet.',
      service: 'Kazalı Araç',
    },
    {
      name: 'Ayşe D.',
      district: 'DISTRICT2',
      rating: 5,
      text: 'CITYNAME\'da en yüksek fiyatı veren firma. Çok memnun kaldım.',
      service: 'Hasarlı Araç',
    },
    {
      name: 'Can Y.',
      district: 'DISTRICT3',
      rating: 5,
      text: 'Tüm evrakları hallettiler. CITYNAME\'da en iyisi.',
      service: 'Pert Araç',
    },
  ],
  
  faqs: [
    {
      question: 'CITYNAME\'nın hangi ilçelerine hizmet veriyorsunuz?',
      answer: 'CITYNAME\'nın XX ilçesine hizmet veriyoruz. [List major districts] başta olmak üzere tüm merkez ve çevre ilçelere ücretsiz çekici hizmetimiz var.',
    },
    {
      question: 'CITYNAME\'da ne kadar sürede gelirsiniz?',
      answer: 'Merkez ilçelerde X saat içinde, dış ilçelerde X-X saat içinde ekspertiz ekibimiz adresinize ulaşır.',
    },
    {
      question: 'CITYNAME\'da hangi noterde işlem yapıyorsunuz?',
      answer: 'Genellikle [central area] bölgesindeki noterlerle çalışıyoruz. İsteğinize göre size yakın noterde de işlem yapabiliriz.',
    },
    {
      question: '[Distant district] gibi uzak ilçelere de geliyor musunuz?',
      answer: 'Evet, CITYNAME\'nın tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Uzaklık fiyatı etkilemez.',
    },
  ],
},
```

---

## 🌍 Turkey Regions

### Marmara
İstanbul, Bursa, Kocaeli, Sakarya, Edirne, Tekirdağ, Kırklareli, Balıkesir, Çanakkale, Yalova, Bilecik

### Ege
İzmir, Manisa, Aydın, Denizli, Muğla, Uşak, Kütahya, Afyonkarahisar

### Akdeniz (Mediterranean)
Antalya, Adana, Mersin, Hatay, Kahramanmaraş, Osmaniye, Isparta, Burdur

### İç Anadolu (Central Anatolia)
Ankara, Konya, Kayseri, Eskişehir, Sivas, Aksaray, Niğde, Nevşehir, Kırıkkale, Kırşehir, Karaman, Yozgat, Çankırı

### Karadeniz (Black Sea)
Samsun, Trabzon, Ordu, Giresun, Rize, Amasya, Tokat, Çorum, Kastamonu, Sinop, Zonguldak, Bartın, Karabük, Düzce, Bolu, Artvin, Gümüşhane, Bayburt

### Doğu Anadolu (Eastern Anatolia)
Erzurum, Van, Elâzığ, Malatya, Erzincan, Ağrı, Muş, Bingöl, Tunceli, Bitlis, Kars, Iğdır, Ardahan, Hakkâri

### Güneydoğu Anadolu (Southeastern Anatolia)
Gaziantep, Şanlıurfa, Diyarbakır, Mardin, Batman, Adıyaman, Kilis, Siirt, Şırnak

---

## 📊 City Data Reference

### Population Tiers
- **5M+**: İstanbul (15M), Ankara (5.7M), İzmir (4.4M)
- **2-3M**: Bursa (3.1M), Antalya (2.6M), Adana (2.3M), Konya (2.3M)
- **1-2M**: Gaziantep (2.1M), Şanlıurfa (2.1M), Mersin (1.9M), Kocaeli (1.9M)
- **500K-1M**: Kayseri, Eskişehir, Diyarbakır, Samsun, Adapazarı, Denizli, Hatay

### Response Time Guidelines
- **Metropolitan (5M+)**: 2-3 hours (due to traffic)
- **Large Cities (2-3M)**: 1-2 hours
- **Medium Cities (1-2M)**: 1 hour
- **Smaller Cities**: 30-60 minutes

### Icon Suggestions by City
- 🏙️ **İstanbul**: Metropolitan, bridges
- 🏛️ **Ankara**: Capital, government
- 🌊 **İzmir**: Coastal, Aegean
- 🏔️ **Bursa**: Mountains (Uludağ)
- 🏖️ **Antalya**: Beach, tourism
- 🌾 **Adana**: Agriculture
- 🏺 **Konya**: Historical, Mevlana
- 🌶️ **Gaziantep**: Culinary
- 🌊 **Mersin**: Port city

---

## ✅ Checklist for Each City

When adding a new city, ensure:

- [ ] Correct population data
- [ ] All major districts listed
- [ ] Response time realistic
- [ ] 3 testimonials with different districts
- [ ] 4+ FAQs specific to the city
- [ ] 6 features
- [ ] City-specific keywords
- [ ] Proper emoji/icon
- [ ] Region classification correct
- [ ] Local office name (if applicable)
- [ ] Test the page works: `/sehirler/CITYSLUG`

---

## 🚀 Batch Adding Cities

To add multiple cities efficiently:

1. **Copy template** above for each city
2. **Research each city**: Population, major districts, geography
3. **Customize content**: Make each city feel unique
4. **Use local keywords**: Research Google Trends for the city
5. **Add all at once** to `src/data/cities.ts`
6. **Test each page** works correctly

---

## 📝 District Research Links

- **Wikipedia**: `https://tr.wikipedia.org/wiki/CITYNAME`
- **Google Maps**: For district names
- **Nufusu.com**: `https://www.nufusu.com/il/CITYNAME-nufusu`
- **Yerelnet**: `https://www.yerelnet.org.tr/il/CITYNAME`

---

## 🎯 SEO Keywords by City Type

### Coastal Cities (İzmir, Antalya, Mersin)
- [city] sahil araç alım
- [city] marina araç satmak
- [city] turizm bölgesi araç

### Industrial Cities (Bursa, Kocaeli, Adana)
- [city] sanayi bölgesi araç
- [city] fabrika araç alım
- [city] endüstri araç satmak

### Capital/Government (Ankara)
- ankara merkez araç alım
- başkent araç satmak
- kızılay araç alım

### Historical Cities (Konya, Gaziantep)
- [city] merkez araç alım
- [city] tarihi kent araç

---

Happy city adding! 🎉