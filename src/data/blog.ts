export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'kazali-arac-satarken-nelere-dikkat-edilmeli',
    title: 'Kazalı Araç Satarken Nelere Dikkat Edilmeli?',
    excerpt: 'Kazalı aracınızı satmadan önce bilmeniz gereken tüm detaylar ve en yüksek fiyat alma yöntemleri.',
    content: `
<h2>Kazalı Araç Satışında Bilmeniz Gerekenler</h2>
<p>Kazalı bir aracı satmak stresli bir süreç gibi görünebilir, ancak doğru adımları izlerseniz en yüksek fiyatı alabilirsiniz. Bu rehberde kazalı araç satışında dikkat etmeniz gereken tüm ayrıntıları ele alıyoruz.</p>

<h3>1. Aracın Hasar Durumunu Realistik Şekilde Değerlendirin</h3>
<p>İlk adım, aracınızın hasar durumunu tarafsız bir gözle değerlendirmektir. Büyük hasarlar fiyatı önemli ölçüde etkiler; ancak küçük hasarlar için de adil bir değer alabilirsiniz. Hasar türünü (kaporta, motor, şanzıman, hava yastığı) doğru tespit etmek, hem alıcıya dürüst bilgi vermenizi hem de gerçekçi bir fiyat beklentisi oluşturmanızı sağlar.</p>

<h3>2. Trafik Kazası Raporu Alın</h3>
<p>Kaza raporu, alıcıların güvenini artırır ve satış sürecini hızlandırır. Kaza yerine trafik polisi çağrıldıysa mutlaka tutanak alın. Alkolsüz ve belgelenmiş bir kaza, aracın değerini korumasına yardımcı olur.</p>

<h3>3. Kapsamlı Fotoğraf Belgelemesi Yapın</h3>
<p>Kazadan hemen sonra detaylı fotoğraf çekin: hasarlı bölgelerin yakın çekimleri, araç genelinin dört yönden görüntüleri, motor kaputu altı ve plakanın net fotoğrafı. Bu belgeler hem sigorta sürecinde hem de satış aşamasında değerlidir.</p>

<h3>4. Sigorta Sürecini Tamamlayın</h3>
<p>Araç kaskonuz varsa sigorta şirketiyle görüşün. Sigorta tazminatı aldıktan sonra aracı satmak daha karlı olabilir. Sigorta pert kararı verdiyse pert belgesiyle birlikte araç satışı yapabilirsiniz.</p>

<h3>5. Birden Fazla Alıcıdan Teklif Alın</h3>
<p>Sadece tek bir alıcıyla görüşmek genellikle en yüksek fiyatı almanızı engeller. Hasar Park gibi profesyonel alıcılar piyasa araştırması yaparak adil ve rekabetçi teklifler sunar.</p>

<h3>6. Gerekli Evrakları Hazırlayın</h3>
<ul>
  <li>Araç ruhsatı (aslı)</li>
  <li>Trafik kazası tutanağı</li>
  <li>Kimlik belgesi</li>
  <li>Sigorta poliçesi ve varsa kasko belgesi</li>
  <li>Araç muayene belgesi</li>
</ul>

<h2>En Yüksek Fiyatı Nasıl Alırsınız?</h2>
<p>Birden fazla alıcıdan teklif alın ve karşılaştırın. Hasar Park, 5+ yıllık tecrübesiyle piyasa araştırması yaparak size her zaman en yüksek teklifi sunar. Üstelik ücretsiz çekici, noter işlemi ve anında ödeme ile süreç tamamen zahmetsizdir.</p>

<h2>Kazalı Araç Satışında Yapılan Yaygın Hatalar</h2>
<p>En yaygın hata, aracı tamir ettirdikten sonra satmaya çalışmaktır. Çoğu zaman tamir maliyeti aracın piyasa değerini aşar ve bu yaklaşım ekonomik açıdan mantıklı değildir. İkinci yaygın hata ise sadece tanıdıklara satmaya çalışmak; profesyonel alıcılar genellikle çok daha iyi fiyat teklifleri sunar.</p>
    `,
    image: '/images/blog/kazali-arac-satis-rehberi.png',
    category: 'Rehber',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-05',
    readTime: '6 dk',
    tags: ['kazalı araç', 'araç satış', 'ipuçları'],
    metaTitle: 'Kazalı Araç Satarken Dikkat Edilecekler | Hasar Park Blog',
    metaDescription: 'Kazalı aracınızı en yüksek fiyata satmak için bilmeniz gereken tüm detaylar. Profesyonel ipuçları ve öneriler.',
  },
  {
    id: '2',
    slug: 'pert-raporu-nedir',
    title: 'Pert Raporu Nedir? Nasıl Alınır?',
    excerpt: 'Pert raporu hakkında merak ettiğiniz her şey ve pert raporlu araç satışı süreçleri.',
    content: `
<h2>Pert Raporu Nedir?</h2>
<p>Pert raporu, sigorta şirketinin bir aracı ekonomik olarak onarılamaz olarak değerlendirmesi sonucu düzenlenen resmi belgedir. "Pert" kelimesi Türkçede "işe yaramaz hale gelmiş" anlamına gelir ve araç sigortacılığında özel bir anlam taşır.</p>

<h3>Pert Raporu Ne Zaman Düzenlenir?</h3>
<p>Sigorta mevzuatına göre bir aracın tamir maliyeti, aracın rayiç (piyasa) değerinin belirli bir oranını aştığında — genellikle %60-70'ini — sigorta şirketi pert kararı verebilir. Bu karar sigorta şirketinin içinde bulunduğu koşullara, aracın yaşına ve hasar durumuna göre değişebilir.</p>

<h3>Pert Raporu Türleri</h3>
<ul>
  <li><strong>Tam Hasar Pert:</strong> Araç tamamen kullanılamaz hale gelmiştir.</li>
  <li><strong>Kısmi Hasar Pert:</strong> Araç tamamen yok olmamış; ancak ekonomik onarım sınırını geçmiştir.</li>
  <li><strong>Hırsızlık Pert:</strong> Çalınan araç belirli süre içinde bulunamazsa pert işlemi yapılır.</li>
  <li><strong>Su Baskını / Yangın Pert:</strong> Doğal afet ya da yangın nedeniyle oluşan hasarlarda düzenlenir.</li>
</ul>

<h3>Pert Raporlu Araç Satılır mı?</h3>
<p>Evet! Pert raporlu araçlar Türkiye'de yasal olarak satılabilir ve alınabilir. Araç sahibi pert kararını kabul edip tazminatı aldıktan sonra aracı sigorta şirketine devredebilir; ya da tazminatın bir kısmını alarak aracı kendisi elinde tutabilir ve dilediğine satabilir. Hasar Park olarak pert araçlar için özel değerlendirme yapıyor, en yüksek fiyatı sunuyoruz.</p>

<h3>Gerekli Evraklar</h3>
<ul>
  <li>Pert raporu (sigorta şirketinden alınan resmi belge)</li>
  <li>Araç ruhsatı (aslı)</li>
  <li>Sigorta poliçesi</li>
  <li>Kimlik belgesi</li>
  <li>Varsa kaza tutanağı</li>
</ul>

<h2>Pert Araç Sahibi Ne Yapmalı?</h2>
<p>Sigorta şirketinin teklifini sorgulamadan kabul etmeden önce bağımsız bir değerlendirme yaptırın. Hasar Park'ı arayın; sigorta teklifinin üzerinde bir fiyat alıp alamayacağınızı öğrenin. Çoğu zaman aracı kendiniz satmak sigorta tazminatından daha kazançlı olabilir.</p>
    `,
    image: '/images/blog/pert-raporu-belgesi.png',
    category: 'Bilgi',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-01-03',
    readTime: '5 dk',
    tags: ['pert raporu', 'sigorta', 'yasal süreç'],
    metaTitle: 'Pert Raporu Nedir, Nasıl Alınır? | Hasar Park',
    metaDescription: 'Pert raporu hakkında tüm detaylar. Pert raporlu araç satışı ve alımı konusunda bilmeniz gerekenler.',
  },
  {
    id: '3',
    slug: 'hurda-arac-teslim-sureci',
    title: 'Hurda Araç Teslim Süreci Nasıl İşler?',
    excerpt: 'Hurda aracınızı nasıl teslim edersiniz? Adım adım süreç ve püf noktaları.',
    content: `
<h2>Hurda Araç Teslim Sürecinde Yapmanız Gerekenler</h2>
<p>Hurda aracınızı teslim etmek düşündüğünüzden çok daha kolay! Hasar Park ile tüm süreci aynı gün tamamlayabilirsiniz.</p>

<h3>Adım 1: Bizi Arayın veya WhatsApp'tan Yazın</h3>
<p>İlk adım basit: +90 534 580 93 15 numaralı telefondan bizi arayın ya da WhatsApp üzerinden mesaj gönderin. Aracınızın markası, modeli, yılı ve genel durumu hakkında bilgi verin. Fotoğraf göndermeniz değerlendirmeyi hızlandırır.</p>

<h3>Adım 2: Ücretsiz Çekici Hizmeti</h3>
<p>Anlaşma sağlandıktan sonra tüm Türkiye'ye ücretsiz çekici gönderiyoruz. Araç çalışmıyor olsa bile fark etmez; çekici hizmetimiz her koşulda geçerlidir. Randevu saatini size uygun şekilde planlıyoruz.</p>

<h3>Adım 3: Tartım ve Değerlendirme</h3>
<p>Aracınız teslim alındıktan sonra endüstriyel baskülde tartılır. Kilo başına güncel hurda demir fiyatı uygulanır. Alüminyum parçalar, motor bloğu gibi değerli metaller ayrıca hesaplanır. Şeffaf tartım süreci; hiçbir sürpriz olmaz.</p>

<h3>Adım 4: Hurda Belgesi İşlemleri</h3>
<p>Hurda belgesi, aracınızı trafikten silen ve vergi yükümlülüklerini sona erdiren resmi belgedir. İşlemleri Trafik Tescil Müdürlüğü'nde gerçekleştiriyoruz. Hurda belgesi düzenlendikten sonra araç tamamen kayıt dışı olur.</p>

<h3>Adım 5: Anında Ödeme</h3>
<p>Tüm işlemler tamamlandıktan sonra hemen nakit veya EFT ile ödeme yapılır. Ödemenin gerçekleşmesi için gün sonu beklemenize gerek yoktur.</p>

<h2>Hurda Belgesi Ne İşe Yarar?</h2>
<p>Hurda belgesi ile aracınızın trafikten kaydı silinir, MTV (Motorlu Taşıtlar Vergisi) ödemeleri sona erer, araç muayene yükümlülüğü kalkar ve trafik sigortası yenileme zorunluluğu ortadan kalkar. Bunun yanı sıra bazı devlet destekli araç yenileme programlarında hurda belgesi, yeni araç alımında indirim imkânı sunmaktadır.</p>
    `,
    image: '/images/blog/hurda-arac-teslim.png',
    category: 'Rehber',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-01',
    readTime: '4 dk',
    tags: ['hurda araç', 'hurda belgesi', 'süreç'],
    metaTitle: 'Hurda Araç Teslim Süreci | Hasar Park Blog',
    metaDescription: 'Hurda aracınızı teslim etme süreci hakkında detaylı bilgi. Ücretsiz çekici ve anında ödeme.',
  },
  {
    id: '4',
    slug: 'hasarli-arac-ne-kadar-deger-kaybeder',
    title: 'Hasarlı Araç Ne Kadar Değer Kaybeder?',
    excerpt: 'Motor, kaporta ve şanzıman hasarının araç değerine etkisi ve en iyi satış stratejisi.',
    content: `
<h2>Hasar Türüne Göre Araç Değer Kaybı</h2>
<p>Bir araçta meydana gelen hasar, aracın piyasa değerini doğrudan etkiler. Ancak bu etki hasar türüne, kapsamına ve aracın diğer özelliklerine göre büyük farklılıklar gösterir. Bu yazıda en yaygın hasar türlerinin araç değerine etkisini inceliyoruz.</p>

<h3>Kaporta Hasarı</h3>
<p>Kaporta hasarı, aracın mekanik performansını etkilemediği için değer kaybı genellikle en düşük olandır. Hafif boyama veya göçük tamir gerektiren hasarlarda değer kaybı %10-20 civarındadır. Ancak kapsamlı kaporta değişimi gerektiren durumlarda (kapı, kanat, bagaj) bu oran %20-35'e çıkabilir. Şasi hasarına dönüşen kaporta hasarları ise değeri %40-60 oranında düşürebilir.</p>

<h3>Motor Hasarı</h3>
<p>Motor hasarı, en ciddi değer kaybına yol açan hasar türlerinden biridir. Motor baş contası yanması, silindir blok çatlağı veya turbo arızası gibi sorunlar aracın değerini %30-50 oranında düşürebilir. Komple motor değişimi gerektiren durumlarda ise değer kaybı %40-60'a ulaşabilir. Bununla birlikte motor hasarı olan araçlarda kullanılabilir diğer parçalar (elektrik sistemi, iç döşeme, aksesuar) değer korunmasına yardımcı olur.</p>

<h3>Şanzıman Hasarı</h3>
<p>Şanzıman hasarı, tamir maliyeti yüksek olduğundan araç değerini ciddi ölçüde etkiler. Otomatik şanzımanda arıza, aracın değerini %25-45 oranında düşürebilir. Manuel şanzıman hasarında değer kaybı biraz daha düşük; %15-30 civarında seyredebilir.</p>

<h3>Elektrik Sistemi Hasarı</h3>
<p>Elektrik arızaları, modern araçlarda giderek daha karmaşık ve maliyetli hale gelmektedir. ECU (motor kontrol ünitesi) veya airbag sistemi arızaları değeri %20-35 oranında düşürebilir. Hibrit veya elektrikli araçlarda pil sistemi hasarı ise çok daha büyük değer kayıplarına neden olur.</p>

<h2>Hasarlı Araç Satışında En İyi Strateji</h2>
<p>Hasarlı araçları tamir ettirmeden doğrudan satmak çoğu zaman daha mantıklıdır. Tamir maliyeti ile satış fiyatı karşılaştırıldığında, çoğu durumda hasarlı aracı olduğu gibi satmak daha yüksek net gelir sağlar. Hasar Park, hasarlı araç alımında 5+ yıllık tecrübesiyle size adil ve en yüksek fiyatı sunar.</p>

<h2>Ne Yapmalısınız?</h2>
<p>Önce ücretsiz değerlendirme yaptırın, ardından tamir maliyetiyle karşılaştırın. Hasar Park'ı arayın; 30 dakika içinde hasarlı aracınız için net teklif alın ve en doğru kararı verin.</p>
    `,
    image: '/images/blog/hasarli-arac-deger-kaybi.png',
    category: 'Bilgi',
    author: 'Hasar Park Uzman Ekibi',
    publishedAt: '2025-01-10',
    readTime: '6 dk',
    tags: ['hasarlı araç', 'değer kaybı', 'araç fiyatı'],
    metaTitle: 'Hasarlı Araç Ne Kadar Değer Kaybeder? | Hasar Park Blog',
    metaDescription: 'Motor, kaporta ve şanzıman hasarının araç değerine etkisi. Hasar türüne göre değer kaybı oranları ve satış önerileri.',
  },
  {
    id: '5',
    slug: 'arac-ekspertizi-ne-kadar-surer',
    title: 'Araç Ekspertizi Ne Kadar Sürer ve Nasıl Yapılır?',
    excerpt: 'Profesyonel araç ekspertizinin aşamaları, süresi ve hasarlı araçlarda ekspertiz süreci hakkında detaylı bilgi.',
    content: `
<h2>Araç Ekspertizi Nedir?</h2>
<p>Araç ekspertizi, bir motorlu taşıtın teknik durumunun, hasar durumunun ve piyasa değerinin uzman kişiler tarafından incelenmesi işlemidir. Ekspertiz, araç alım-satım süreçlerinde, sigorta değerlendirmelerinde ve hasar tespitinde kritik rol oynar.</p>

<h3>Standart Araç Ekspertizi Ne Kadar Sürer?</h3>
<p>Standart bir araç ekspertizi 30 dakika ile 2 saat arasında sürer. Süre; aracın türüne, hasar boyutuna, kullanılan ekipmanlara ve ekspertizin kapsamına göre değişir. Dijital sistemler kullanan modern ekspertiz merkezlerinde bu süre önemli ölçüde kısalmaktadır.</p>

<h3>Ekspertiz Aşamaları</h3>
<ul>
  <li><strong>Görsel İnceleme (10-15 dk):</strong> Kaporta, boya, lastik ve genel dış görünüm incelenir.</li>
  <li><strong>Mekanik Kontrol (15-20 dk):</strong> Motor, şanzıman, fren sistemi ve süspansiyon kontrol edilir.</li>
  <li><strong>Elektronik Tarama (10-15 dk):</strong> OBD cihazıyla hata kodları okunur, airbag ve ABS sistemi kontrol edilir.</li>
  <li><strong>Boya Ölçümü (5-10 dk):</strong> Boya kalınlık ölçer ile orijinal boya tespiti yapılır.</li>
  <li><strong>Değerlendirme ve Rapor (10-20 dk):</strong> Tüm bulgular raporlanır ve piyasa değeri belirlenir.</li>
</ul>

<h3>Hasarlı Araçlarda Ekspertiz</h3>
<p>Hasarlı araçlarda ekspertiz daha kapsamlı olabilir. Şasi kontrolü, hasar analizi ve parça değer tespiti ek süre gerektirebilir. Hasar Park, hasarlı araç ekspertizini ücretsiz olarak gerçekleştirmektedir; bu konuda sizi ayrıca ücretlendirmiyoruz.</p>

<h2>Ekspertiz Sonrası Ne Yapmalısınız?</h2>
<p>Ekspertiz raporu elinizde olduğunda, hasarlı aracınızı satmak için en uygun zamandasınız demektir. Hasar Park'ı arayın; ekspertiz raporunuzu paylaşın ve 30 dakika içinde size en yüksek fiyat teklifini sunalım. Ekspertiz raporu olmasa da değerlendirme yapıyoruz.</p>
    `,
    image: '/images/blog/arac-ekspertiz-sureci.png',
    category: 'Rehber',
    author: 'Teknik Ekip',
    publishedAt: '2025-01-15',
    readTime: '5 dk',
    tags: ['araç ekspertizi', 'ekspertiz süresi', 'hasar tespiti'],
    metaTitle: 'Araç Ekspertizi Ne Kadar Sürer? | Hasar Park Blog',
    metaDescription: 'Araç ekspertizinin aşamaları ve süresi hakkında detaylı bilgi. Hasarlı araçlarda ekspertiz ve ücretsiz değerlendirme.',
  },
  {
    id: '6',
    slug: 'kazali-arac-sigorta-sureci',
    title: 'Kazalı Araçta Sigorta Süreci Nasıl İşler?',
    excerpt: 'Kaza sonrası sigorta başvurusu, hasar tespiti ve tazminat alma süreci hakkında kapsamlı rehber.',
    content: `
<h2>Kaza Sonrası İlk 24 Saat</h2>
<p>Trafik kazasından sonra ilk 24 saat kritiktir. Bu süreçte doğru adımları atmak, hem sigorta sürecinizi hem de araç satış sürecinizi önemli ölçüde etkiler.</p>

<h3>Hemen Yapmanız Gerekenler</h3>
<ul>
  <li>Güvendeyseniz aracı yolun kenarına çekin ve reflektör koyun</li>
  <li>Trafik polisini veya jandarma arayın (tutanak için)</li>
  <li>Gerekiyorsa ambulans çağırın</li>
  <li>Karşı araç bilgilerini alın (plaka, ruhsat, sigorta poliçesi)</li>
  <li>Kazayı fotoğraflarla belgeleyin</li>
  <li>24 saat içinde sigorta şirketinizi arayın</li>
</ul>

<h3>Sigorta Hasar Başvurusu</h3>
<p>Kasko sigortanız varsa kendi sigorta şirketinize başvurursunuz. Sadece zorunlu trafik sigortanız varsa karşı tarafın sigortasına başvuru yapmanız gerekir. Başvurudan sonra sigorta şirketi bir eksper görevlendirir ve hasar tespiti yapılır.</p>

<h3>Hasar Tespiti ve Pert Kararı</h3>
<p>Sigorta şirketinin eksperi hasarı değerlendirir ve tamir maliyetini hesaplar. Tamir maliyeti aracın rayiç değerinin %60-70'ini aşarsa pert kararı verilebilir. Bu durumda sigorta şirketi size tazminat teklifinde bulunur.</p>

<h2>Sigorta Teklifi Düşük Gelirse Ne Yapmalısınız?</h2>
<p>Sigorta tazminat teklifini sorgulamadan kabul etme zorunluluğunuz yoktur. İtiraz hakkınızı kullanabilir veya bağımsız eksper tayin ettirebilirsiniz. Alternatif olarak aracı kendiniz satmayı değerlendirebilirsiniz. Hasar Park olarak sigorta tazminatını beklemeden aracınızı anında satın alıyoruz — çoğu zaman sigorta teklifinden daha yüksek fiyat sunabiliyoruz.</p>

<h2>Kaza Sonrası Araç Satışı</h2>
<p>Sigorta sürecini beklemek istemiyorsanız doğrudan kazalı araç alıcılarıyla görüşebilirsiniz. Hasar Park, sigorta sürecinizin herhangi bir aşamasında aracınızı değerlendirerek en yüksek teklifi sunar. Ücretsiz ekspertiz, çekici ve tüm evrak işlemleri bizden.</p>
    `,
    image: '/images/blog/sigorta-hasar-islemleri.png',
    category: 'Rehber',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-18',
    readTime: '7 dk',
    tags: ['sigorta süreci', 'kaza sonrası', 'kasko'],
    metaTitle: 'Kazalı Araçta Sigorta Süreci Nasıl İşler? | Hasar Park',
    metaDescription: 'Kaza sonrası sigorta başvurusu ve hasar tespiti sürecinin tüm adımları. Sigorta teklifi düşük gelirse ne yapmalısınız?',
  },
  {
    id: '7',
    slug: 'pert-arac-satin-almak-mantikli-mi',
    title: 'Pert Araç Satın Almak Mantıklı mı?',
    excerpt: 'Pert araç alımının avantajları, riskleri ve dikkat edilmesi gereken kritik noktalar.',
    content: `
<h2>Pert Araç Nedir ve Neden Satın Alınır?</h2>
<p>Pert araç, sigorta şirketi tarafından ekonomik onarım sınırını aştığı değerlendirilen araçtır. Bu araçlar piyasa değerinin çok altında satılır; bu da yedek parça üreticileri, oto tamircileri ve bilinçli alıcılar için cazip fırsatlar yaratır.</p>

<h3>Pert Araç Almanın Avantajları</h3>
<ul>
  <li>Piyasa değerinin %30-50'si fiyatla araç sahibi olabilirsiniz</li>
  <li>Yedek parça kaynağı olarak değerlendirilebilir</li>
  <li>Deneyimli tamircilerin elinde orijinal haline döndürülebilir</li>
  <li>Tarımsal veya endüstriyel kullanım için uygun olabilir</li>
</ul>

<h3>Pert Araç Almanın Riskleri</h3>
<ul>
  <li>Gizli hasarlar her zaman görünür olmayabilir</li>
  <li>Tamir maliyeti beklentinin üzerine çıkabilir</li>
  <li>Yeniden trafiğe çıkarma süreci bürokratik olabilir</li>
  <li>Sigorta bulmak güçleşebilir</li>
</ul>

<h3>Pert Araç Satın Almadan Önce Kontrol Edilmesi Gerekenler</h3>
<p>Şasi numarasını mutlaka sorgulayın. Pert raporunu ve sigorta belgelerini inceleyin. Bağımsız bir eksperden görüş alın. Tamir maliyeti tahmini yaptırın ve gerçekçi bir bütçe planlayın.</p>

<h2>Hasar Park'tan Pert Araç Satın Alabilir Misiniz?</h2>
<p>Hasar Park esas olarak pert araç alan bir şirkettir; pert araç satmıyoruz. Pert aracınızı en yüksek fiyata Hasar Park'a satabilirsiniz. Tüm yasal süreçler, evraklar ve çekici hizmetimizden ücretsiz yararlanırsınız.</p>
    `,
    image: '/images/blog/pert-arac-yatirimi.png',
    category: 'Bilgi',
    author: 'Hasar Park Uzman Ekibi',
    publishedAt: '2025-01-20',
    readTime: '5 dk',
    tags: ['pert araç', 'araç satın alma', 'ikinci el'],
    metaTitle: 'Pert Araç Satın Almak Mantıklı mı? | Hasar Park Blog',
    metaDescription: 'Pert araç alımının avantajları ve riskleri. Pert araç satın alırken dikkat etmeniz gereken kritik noktalar.',
  },
  {
    id: '8',
    slug: 'aracinizi-en-yuksek-fiyata-satmanin-yollari',
    title: 'Hasarlı Aracınızı En Yüksek Fiyata Satmanın 7 Yolu',
    excerpt: 'Kazalı, hasarlı veya pert raporlu aracınızı piyasanın en yüksek fiyatına satmak için kanıtlanmış stratejiler.',
    content: `
<h2>Hasarlı Araç Satışında Maksimum Fiyat İçin 7 Strateji</h2>
<p>Hasarlı araç satışı, doğru yaklaşımla beklentinizin üzerinde gelir sağlayabilir. İşte uzmanların önerdiği ve işe kanıtlanmış 7 strateji:</p>

<h3>1. Zamanlamayı İyi Seçin</h3>
<p>Hasarlı araçlar bekledikçe ek hasar (pas, nem, pil boşalması) nedeniyle değer kaybeder. Kaza veya arıza sonrası mümkün olan en kısa sürede satışa çıkmak daha yüksek fiyat almanızı sağlar.</p>

<h3>2. Detaylı Fotoğraf Çekin</h3>
<p>Hasarı açıkça gösteren, iyi ışıklı fotoğraflar alıcıların güvenini artırır. 10-15 fotoğraf yeterlidir: her açıdan dış görünüm, hasar bölgesinin yakın çekimi, motor kaputu altı ve iç mekan.</p>

<h3>3. Tüm Belgeleri Hazırlayın</h3>
<p>Araç ruhsatı, sigorta belgesi, varsa kaza tutanağı ve servis geçmişi belgeleri satış fiyatını olumlu etkiler. Bakımlı ve belgeli araçlar daha yüksek teklif alır.</p>

<h3>4. Birden Fazla Alıcıdan Teklif Alın</h3>
<p>Sadece tek alıcıyla görüşmek her zaman en iyi fiyatı almanızı sağlamaz. En az 2-3 profesyonel alıcıdan teklif alarak karşılaştırın.</p>

<h3>5. Profesyonel Alıcılarla Çalışın</h3>
<p>Bireysel alıcılar genellikle düşük teklif verir. Hasar Park gibi profesyonel alıcılar piyasa araştırması yaparak adil ve rekabetçi fiyatlar sunar.</p>

<h3>6. Tamir Ettirmeden Satın</h3>
<p>Hasarlı araç tamir maliyeti çoğu zaman piyasa değerini aşar. Tamir masrafı çıkarmadan doğrudan satmak çoğu durumda daha karlıdır.</p>

<h3>7. Sigorta Teklifini Sorgulamadan Kabul Etmeyin</h3>
<p>Sigorta şirketinin ilk teklifi her zaman en iyi teklif değildir. Bağımsız değerlendirme yaptırmak ve itiraz haklarınızı kullanmak daha yüksek tazminat almanızı sağlayabilir.</p>

<h2>Hasar Park ile En Yüksek Fiyatı Garantileyin</h2>
<p>Hasar Park, 5+ yıllık tecrübesiyle hasarlı araç alımında Türkiye'nin en yüksek fiyatlarını sunmaktadır. Ücretsiz ekspertiz, anında teklif, ücretsiz çekici ve noter işlemleri dahil eksiksiz hizmet. Hemen arayın: +90 534 580 93 15</p>
    `,
    image: '/images/blog/en-yuksek-fiyata-arac-satisi.png',
    category: 'Strateji',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-25',
    readTime: '6 dk',
    tags: ['araç satış stratejisi', 'hasarlı araç', 'en yüksek fiyat'],
    metaTitle: 'Hasarlı Aracı En Yüksek Fiyata Satmanın 7 Yolu | Hasar Park',
    metaDescription: 'Kazalı ve hasarlı aracınızı en yüksek fiyata satmak için 7 kanıtlanmış strateji. Profesyonel ipuçları ve öneriler.',
  },
  {
    id: '9',
    slug: 'hurda-arac-fiyatlari-nasil-belirlenir',
    title: 'Hurda Araç Fiyatları Nasıl Belirlenir?',
    excerpt: 'Hurda araç fiyatını etkileyen faktörler, kilo fiyatları ve değerlendirme süreci hakkında kapsamlı rehber.',
    content: `
<h2>Hurda Araç Fiyatını Belirleyen Faktörler</h2>
<p>Hurda araç fiyatı; araç ağırlığı, günlük hurda demir fiyatı ve kullanılabilir parça değerinin birleşiminden oluşur. Bu faktörleri anlayarak aracınız için en iyi fiyatı alabilirsiniz.</p>

<h3>1. Günlük Hurda Demir Fiyatı</h3>
<p>Hurda araç fiyatlamasının temelini oluşturur. Hurda demir fiyatı günlük değişkenlik gösterir ve çelik piyasasıyla bağlantılıdır. Piyasa koşullarına göre kilogram başına 8-18 TL arasında seyreder. Hasar Park, her gün güncel piyasa fiyatlarını takip ederek size en iyi teklifi sunar.</p>

<h3>2. Araç Ağırlığı</h3>
<p>Ortalama araç ağırlıkları:
- Küçük otomobil (Fiat Punto, Renault Clio): 900-1.100 kg
- Orta sınıf (Toyota Corolla, VW Golf): 1.100-1.400 kg
- Büyük sedan (BMW 5 Serisi): 1.400-1.700 kg
- SUV (Volkswagen Tiguan): 1.500-1.900 kg
- Hafif ticari araç: 1.500-2.500 kg</p>

<h3>3. Değerli Metal İçeriği</h3>
<p>Alüminyum kapılar, motor bloğu ve bazı özel parçalar hurda demir değerinin üzerinde fiyatlanır. Bakır kablo demeti, katalitik konvertör (platin içeriği nedeniyle) ve alüminyum jantlar ek değer yaratır.</p>

<h3>4. Kullanılabilir Parçalar</h3>
<p>Araçta kullanılabilir durumda parçalar varsa (çalışan motor, sağlam koltuklar, hasarsız camlar, orijinal aksesuar) bu parçalar hurda değerinin üzerinde fiyatlandırılır ve toplam ödemeyi artırır.</p>

<h2>Örnek Hurda Araç Fiyat Hesabı</h2>
<p>1.200 kg ağırlığında bir araç, günlük 12 TL/kg fiyatıyla değerlendirildiğinde: 1.200 × 12 = 14.400 TL temel değer oluşur. Değerli parçalar ve metal içeriğiyle bu rakam artabilir.</p>

<h2>Neden Hasar Park'ı Seçmelisiniz?</h2>
<p>Resmi belgeli hurda araç işletmesi olarak Hasar Park; şeffaf tartım süreci, güncel piyasa fiyatları ve anında ödeme garantisiyle Türkiye genelinde hizmet vermektedir. Ücretsiz çekici ve tüm evrak işlemleri dahildir.</p>
    `,
    image: '/images/blog/hurda-demir-fiyatlari.png',
    category: 'Bilgi',
    author: 'Hasar Park Uzman Ekibi',
    publishedAt: '2025-02-01',
    readTime: '5 dk',
    tags: ['hurda araç fiyatı', 'kilo fiyatı', 'hurda demir'],
    metaTitle: 'Hurda Araç Fiyatları Nasıl Belirlenir? | Hasar Park Blog',
    metaDescription: 'Hurda araç fiyatını etkileyen faktörler ve güncel kilo fiyatları. Aracınız için en yüksek hurda teklifini alın.',
  },
  {
    id: '10',
    slug: 'motor-ariza-sonrasi-ne-yapilmali',
    title: 'Motor Arızasından Sonra Ne Yapmalısınız?',
    excerpt: 'Motor arızası yaşayan araç sahipleri için pratik rehber: tamir mi, satış mı? Doğru karar nasıl verilir?',
    content: `
<h2>Motor Arızası: Tamir mi, Satış mı?</h2>
<p>Motor arızası, araç sahiplerinin en zor kararlardan biriyle yüz yüze gelmesine neden olur: Pahalı tamirata girmek mi, yoksa aracı satmak mı? Bu rehber karar sürecinizi kolaylaştıracak.</p>

<h3>Motor Arızasının Türleri</h3>
<ul>
  <li><strong>Hafif Arızalar (Tamir edilebilir):</strong> Conta değişimi, enjektör temizliği, soğutma sistemi arızası</li>
  <li><strong>Orta Düzey Arızalar (Maliyet değerlendirmesi gerekir):</strong> Turbo arızası, zamanlama zinciri sorunu, şanzıman arızası</li>
  <li><strong>Ağır Arızalar (Satış önerilir):</strong> Motor bloğu çatlağı, silindir kapağı çatlağı, hidrolik hasar (su basması)</li>
</ul>

<h3>Tamir mi, Satış mı? Karar Kriterleri</h3>
<p>Bu soruyu yanıtlamak için önce tamir maliyetini öğrenin. Ardından şu hesabı yapın: Tamir sonrası aracın piyasa değeri - Tamir maliyeti = Net kazanç. Eğer bu değer negatifse veya çok düşükse satış daha mantıklıdır.</p>

<h3>Karar Tablosu</h3>
<p>Tamir mantıklı: Araç gençse (0-5 yaş), tamir maliyeti aracın değerinin %30'unun altındaysa, aracın duygusal değeri varsa.</p>
<p>Satış mantıklı: Araç eskiyse (8+ yaş), tamir maliyeti değerin %50'sini geçiyorsa, ek sorunlar da mevcutsa.</p>

<h2>Motor Arızalı Araç Satışı</h2>
<p>Motor arızalı araçları alıyoruz — çalışmasa bile. Hasar Park, motor durumundan bağımsız olarak aracınızı değerlendiriyor. Komple motor arızalı araçlarda bile parça değerleri, metal içeriği ve genel araç durumu hesaba katılarak adil bir fiyat belirleniyor.</p>

<p>Ücretsiz ekspertiz için +90 534 580 93 15 numarayı arayın. 30 dakikada net teklif, aynı gün çekici hizmeti ve anında ödeme.</p>
    `,
    image: '/images/blog/motor-arizasi-tamir.png',
    category: 'Rehber',
    author: 'Teknik Ekip',
    publishedAt: '2025-02-05',
    readTime: '5 dk',
    tags: ['motor arızası', 'motor hasarı', 'tamir mi satış mı'],
    metaTitle: 'Motor Arızasından Sonra Ne Yapmalısınız? | Hasar Park Blog',
    metaDescription: 'Motor arızalı araçta doğru karar: tamir mi satış mı? Motor arıza türleri ve satış stratejisi rehberi.',
  },
  {
    id: '11',
    slug: 'noter-ile-arac-satisi-nasil-yapilir',
    title: 'Noterde Araç Satışı Nasıl Yapılır? Adım Adım Rehber',
    excerpt: 'Hasarlı ve kazalı araç satışında noter işlemleri, gerekli belgeler ve süreç hakkında detaylı bilgi.',
    content: `
<h2>Noterde Araç Satışı Süreci</h2>
<p>Türkiye'de araç satışı noter onayı gerektirir. Bu süreç, alıcı ve satıcı için hukuki güvence sağlar. Hasarlı, kazalı veya pert raporlu araçlarda noter süreci aynı şekilde işler.</p>

<h3>Gerekli Belgeler</h3>
<ul>
  <li>Araç ruhsatı (aslı)</li>
  <li>Satıcı ve alıcının nüfus cüzdanı veya pasaportu</li>
  <li>Araç muayene belgesi (geçerli tarihli)</li>
  <li>Trafik sigortası poliçesi</li>
  <li>Varsa pert raporu veya hasar belgesi</li>
  <li>Araç satış sözleşmesi (noter tarafından düzenlenir)</li>
</ul>

<h3>Noter Süreci Adım Adım</h3>
<p>1. Notere randevu alın (bazı noterler randevusuz da kabul eder).
2. Tüm belgelerinizle notere gidin.
3. Noter, araç ruhsatı üzerindeki bilgileri kontrol eder.
4. Satış sözleşmesi düzenlenir ve taraflarca imzalanır.
5. Gerekli vergi ve harçlar ödenir.
6. Tapu sicil müdürlüğüne bildirim yapılır.</p>

<h3>Toplam Maliyet Ne Kadar?</h3>
<p>Araç satış işleminin noter ücreti, araç değeri ve harç oranlarına göre değişir. Tipik bir işlemde noter harçları ve masraflar 500-2.000 TL arasında değişebilir. Hasar Park olarak noter işlem ücretlerini ve bürokratik süreçleri tamamen biz üstleniyoruz; ekstra maliyet ödemiyorsunuz.</p>

<h2>Hasar Park ile Zahmetsiz Satış</h2>
<p>Hasar Park, noter sürecinin tamamını sizin adınıza yönetir. Tek yapmanız gereken aracınızı teslim etmek; geri kalan her şey bizden. Randevu, evrak hazırlığı, noter ziyareti ve tescil işlemleri dahil eksiksiz hizmet sunuyoruz.</p>
    `,
    image: '/images/blog/noter-arac-devir.png',
    category: 'Rehber',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-02-10',
    readTime: '4 dk',
    tags: ['noter işlemleri', 'araç satışı', 'evraklar'],
    metaTitle: 'Noterde Araç Satışı Nasıl Yapılır? | Hasar Park Blog',
    metaDescription: 'Hasarlı ve kazalı araçlarda noter süreci, gerekli belgeler ve adımlar. Hasar Park ile zahmetsiz noter işlemi.',
  },
  {
    id: '12',
    slug: 'ikinci-el-arac-deger-kaybi-nasil-onlenir',
    title: 'İkinci El Araçlarda Değer Kaybı Nasıl Önlenir?',
    excerpt: 'Aracınızın değerini korumanın yolları ve hasar sonrası değer kaybını minimize etme stratejileri.',
    content: `
<h2>Araç Değer Kaybına Neden Olan Faktörler</h2>
<p>Her araç zamanla değer kaybeder. Ancak hasar, bakımsızlık ve yanlış kullanım bu süreci önemli ölçüde hızlandırır. Değer kaybını minimize etmek için bunları bilmeniz gerekir.</p>

<h3>En Hızlı Değer Kaybına Yol Açan Durumlar</h3>
<ul>
  <li>Trafik kazası (değer kaybı: %15-40)</li>
  <li>Motor veya şanzıman arızası (değer kaybı: %20-50)</li>
  <li>Pert raporu (değer kaybı: %40-70)</li>
  <li>Düzensiz bakım geçmişi (değer kaybı: %10-20)</li>
  <li>Yüksek kilometre (değer kaybı: %5-15 her 10.000 km'de)</li>
  <li>Sigara içilmesi / hayvan taşıması (değer kaybı: %5-10)</li>
</ul>

<h3>Değer Koruma Stratejileri</h3>
<p>Düzenli bakım yaptırın ve tüm servis kayıtlarını saklayın. Kazadan sonra orijinal parçalarla tamir yaptırın. Boya ve kaporta işlerini yetkili serviste gerçekleştirin. Araç bakım geçmişini belgeleyin.</p>

<h3>Kaza Sonrası Değer Kaybı Talepçiliği</h3>
<p>Türkiye'de kaza sonrası araç değer kaybı için karşı tarafın sigortasından tazminat talep edebilirsiniz. "Değer kaybı davası" olarak bilinen bu süreçte mahkeme veya sigorta tahkimi yoluyla kaza nedeniyle oluşan değer kaybı tazminatı alınabilir.</p>

<h2>Hasar Sonrası En İyi Karar: Satmak</h2>
<p>Ciddi hasar geçirmiş araçlarda zaman geçtikçe değer kaybı derinleşir. En hızlı ve karlı çözüm, hasarlı aracı profesyonel bir alıcıya satmaktır. Hasar Park ile 30 dakika içinde en güncel ve en yüksek teklifi alın; değer kaybı daha da büyümeden önce doğru kararı verin.</p>
    `,
    image: '/images/blog/ikinci-el-deger-koruma.png',
    category: 'Bilgi',
    author: 'Hasar Park Uzman Ekibi',
    publishedAt: '2025-02-15',
    readTime: '5 dk',
    tags: ['değer kaybı', 'araç değeri', 'ikinci el'],
    metaTitle: 'İkinci El Araçlarda Değer Kaybı Nasıl Önlenir? | Hasar Park',
    metaDescription: 'Araç değer kaybına neden olan faktörler ve değer koruma stratejileri. Hasar sonrası en doğru karar.',
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}
