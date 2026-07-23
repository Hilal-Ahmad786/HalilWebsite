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
    excerpt: 'Pert raporu nedir, sovtaj ne demek, pert kaydı sorgulama nasıl yapılır? Pert araç sahiplerinin bilmesi gereken her şey bu kapsamlı rehberde.',
    content: `
<h2>Pert Raporu Nedir?</h2>
<p>Pert raporu; trafik kazası, yangın, sel baskını veya benzeri bir olay sonucunda ağır hasar gören bir aracın, sigorta şirketi tarafından ekonomik olarak onarılamaz kabul edilmesi üzerine düzenlenen resmi tespittir. Halk arasında "pert araç" olarak bilinen bu durum, sigortacılık dilinde tam hasar ya da tam ziya olarak adlandırılır. Pert kararı verilen araç hukuken ortadan kalkmaz; ancak bu kayıt sigorta ve trafik sistemlerinde izlenir ve aracın ikinci el değerini doğrudan etkiler. Bu yazıda pert raporu nedir sorusunun yanıtını, pert kaydı sorgulama yöntemlerini ve aracı pert ilan edilen sürücülerin izlemesi gereken adımları ayrıntılı biçimde ele alıyoruz.</p>

<h3>Sigorta Şirketi Ne Zaman Pert Kararı Verir?</h3>
<p>Uygulamada pert kararının temel ölçütü, onarım maliyetinin aracın rayiç (piyasa) değerine oranıdır. Kaza sonrası görevlendirilen eksper aracı inceler; parça, işçilik ve boya dahil toplam onarım maliyetini hesaplar. Bu maliyet, aracın hasar tarihindeki rayiç değerinin belirli bir bölümünü — genellikle yaklaşık yüzde 60-70'ini — aştığında sigorta şirketi aracı onarmak yerine pert işlemine yönelir. Bu oran kesin bir yasal sınır değildir; poliçe şartlarına, aracın yaşına, yedek parça bulunabilirliğine ve hasarın niteliğine göre şirketten şirkete değişebilir. Örneğin şasiye ulaşan hasarlarda, onarım maliyeti bu eşiğin altında kalsa bile güvenlik gerekçesiyle pert kararı verilebilir.</p>

<h3>Ağır Hasar Kaydı ile Pert Aynı Şey mi?</h3>
<p>Bu iki kavram sık sık birbirine karıştırılır. Ağır hasar kaydı, aracın taşıyıcı bölümlerinde (şasi, tavan, podye gibi) ciddi hasar oluştuğunda trafik siciline işlenen ve aracın yeniden trafiğe çıkabilmesi için özel muayene şartı getiren bir kayıttır. Pert ise sigorta şirketinin ekonomik bir değerlendirmesidir: Araç taşıyıcı sistemlerinden hasar almamış olsa bile, onarım maliyeti rayiç değere göre çok yüksekse pert sayılabilir. Yani her pert araç ağır hasarlı değildir; her ağır hasarlı araç da pert ilan edilmiş olmayabilir. Alım veya satım öncesinde her iki kaydın ayrı ayrı sorgulanması bu nedenle önemlidir.</p>

<h2>Pert Kararı Sonrası İki Seçenek: Tam Tazminat veya Sovtaj</h2>
<p>Sigorta şirketi pert kararı verdiğinde araç sahibinin önünde genellikle iki yol bulunur:</p>
<ul>
  <li><strong>Aracı sigortaya devretmek:</strong> Araç sahibi, aracın hasar tarihindeki rayiç değeri üzerinden hesaplanan tazminatın tamamını alır ve aracın mülkiyetini sigorta şirketine devreder. Şirket, aracı hasarlı araç veya hurda piyasasında kendisi değerlendirir.</li>
  <li><strong>Sovtaj bedeliyle aracı elde tutmak:</strong> Araç sahibi aracı kendisinde bırakır; sigorta şirketi ise tazminattan aracın hasarlı haliyle taşıdığı değeri, yani sovtaj bedelini düşerek ödeme yapar. Bu durumda araç sahibi, hasarlı aracı dilediği kişi ya da kuruma satmakta serbesttir.</li>
</ul>
<p>Hangi seçeneğin daha kazançlı olduğu, sigortanın belirlediği sovtaj bedeline ve hasarlı aracın gerçek piyasa değerine bağlıdır. Karar vermeden önce hasarlı araç alımında uzmanlaşmış bir firmadan bağımsız teklif almak, iki senaryoyu sağlıklı biçimde karşılaştırmanızı sağlar.</p>

<h2>Pert Kaydı Tramer'e İşler mi? Satışı Nasıl Etkiler?</h2>
<p>Evet. Pert işlemi tamamlandığında bu bilgi Tramer (Trafik Sigortaları Bilgi Merkezi) kayıtlarına işlenir ve aracın hasar geçmişinde kalıcı olarak görünür. Aracı ileride kim satın alırsa alsın, sorgulama yaptığında pert kaydına ulaşabilir. Bu şeffaflık, pert kayıtlı araçların ikinci el piyasasında benzer temiz araçlara göre belirgin biçimde düşük fiyattan işlem görmesine neden olur. Kaydı gizleyerek satış yapmaya çalışmak ise ileride ayıplı mal iddialarına ve tazminat taleplerine yol açabileceğinden hem yasal risk hem de güven sorunu doğurur.</p>

<h3>Pert Kaydı Sorgulama Nasıl Yapılır?</h3>
<p>Pert kaydı sorgulama için iki pratik yol vardır. Birincisi e-Devlet üzerinden sunulan araç sorgulama hizmetleridir; plaka ve ruhsat bilgileriyle aracın tescil durumu ve hasar bilgilerine ulaşabilirsiniz. İkincisi Tramer'in SMS kanalıdır: Aracın plakasıyla kısa mesaj göndererek hasar geçmişi sorgulanabilir. Ayrıca sigorta acenteleri ve ekspertiz firmaları aracılığıyla da ayrıntılı hasar dökümü alınabilir. Alım ya da satım öncesinde bu sorgulamaların yapılması, her iki taraf için de sürpriz yaşanmasını önler.</p>

<h2>Pert Araç Yasal Olarak Satılabilir mi?</h2>
<p>Evet, pert kayıtlı araçlar Türkiye'de yasal olarak alınıp satılabilir. Satış, tıpkı normal araçlarda olduğu gibi noter kanalıyla yapılır ve alıcı, pert kaydını sorgulamalarda açıkça görebilir. Trafikten çekilmiş pert araçlarda ise devir işlemi, muayene ve yeniden tescil şartlarına bağlı olarak farklılık gösterebilir. Noter aşamasının nasıl işlediğini merak ediyorsanız <a href="/blog/noter-ile-arac-satisi-nasil-yapilir">noterde araç satışı rehberimize</a> göz atabilirsiniz. Önemli olan, hasar durumunun alıcıya dürüstçe bildirilmesi ve tüm belgelerin eksiksiz hazırlanmasıdır.</p>

<h2>Aracınız Pert İlan Edilirse Adım Adım Ne Yapmalısınız?</h2>
<p>Pert kararı çoğu araç sahibi için beklenmedik ve stresli bir durumdur; ancak panikle atılan adımlar ciddi maddi kayba yol açabilir. Sürecin her aşamasında yazılı belge istemek, rakamları karşılaştırmak ve karar vermeden önce alternatif teklifleri görmek en güvenli yoldur. Aşağıdaki adımları sırasıyla izleyerek hem haklarınızı koruyabilir hem de elinize geçecek toplam tutarı artırabilirsiniz:</p>
<ul>
  <li>Eksper raporunu ve sigortanın tazminat teklifini yazılı olarak isteyin; rakamların neye göre hesaplandığını öğrenin.</li>
  <li>Aracın hasarlı haliyle piyasa değerini bağımsız kaynaklardan araştırın; benzer ilanları ve profesyonel alıcı tekliflerini karşılaştırın.</li>
  <li>Sovtaj bedelini sorgulayın: Aracı elde tutmanız halinde elinize geçecek toplam tutarı, devretmeniz halindeki tazminatla kıyaslayın.</li>
  <li>Karar netleşmeden araca onarım yaptırmayın; yapılan masraf tazminat hesabını değiştirmez ve çoğu zaman geri kazanılamaz.</li>
  <li>Teklifler belli olduktan sonra ruhsat, kimlik, poliçe ve eksper raporunu hazırlayarak süreci tamamlayın.</li>
</ul>

<h2>Pert Araç Değeri Nasıl Hesaplanır?</h2>
<p>Pert bir aracın değeri tek bir formülle bulunmaz; birden fazla etkenin birleşimiyle ortaya çıkar. Marka, model ve yıl ilk belirleyicidir: Yedek parçası çok aranan yaygın modeller, hasarlı halde bile güçlü talep görür. İkinci etken hasarın kapsamıdır; yalnızca kaporta ve boya hasarı bulunan bir pert araç, motoru ve şanzımanı sağlamsa ciddi değer taşır. Üçüncü etken kurtarılabilir parçalardır: Motor, şanzıman, kapılar, farlar, iç donanım ve elektronik üniteler parça piyasasında ayrı ayrı ekonomik değer üretir. Son olarak bölgesel talep de fiyatı etkiler; <a href="/sehirler/istanbul">İstanbul gibi büyük şehirlerde</a> hasarlı araç ve parça piyasası daha hareketli olduğundan teklifler genellikle daha rekabetçidir. Kazaya bağlı hasarı olan araçlarda <a href="/kazali-arac-alim">kazalı araç alımı</a> yapan uzman firmalardan değerleme istemek, gerçekçi bir fiyat aralığı görmenizi sağlar.</p>

<h2>Pert Sürecinde Sık Yapılan Hatalar</h2>
<p>En yaygın hata, sigortanın ilk sovtaj teklifini hiçbir karşılaştırma yapmadan kabul etmektir; hasarlı aracın gerçek piyasa değeri, teklif edilen sovtaj bedelinin üzerinde olabilir. İkinci hata, değerleme tamamlanmadan araca onarım yaptırmaktır; bu masraf çoğu zaman satış fiyatına yansımaz. Üçüncü hata, pert kaydını gizleyerek satış yapmaya çalışmaktır; kayıt Tramer'de göründüğü için bu yaklaşım hem güven kaybına hem de hukuki sorumluluğa yol açar. Son olarak süreci uzatmak da maliyetlidir: Bekleyen hasarlı araç pas, nem ve parça eskimesi nedeniyle zamanla değer kaybeder.</p>

<h2>Pert Aracınız İçin Rekabetçi Teklif Alın</h2>
<p>Aracınız pert ilan edildiyse acele karar vermeden önce ikinci bir görüş alın. Hasar Park, pert ve <a href="/hasarli-arac-alim">hasarlı araç alımında</a> uzman ekibiyle aracınızı değerlendirir; yaklaşık 30 dakika içinde piyasa koşullarında rekabetçi bir teklif sunar. Türkiye genelinde ücretsiz çekici, noter işlemlerinde tam destek ve anında ödeme ile süreç sizin için zahmetsiz ilerler. <a href="/pert-arac-alim">Pert araç alım hizmetimiz</a> hakkında ayrıntılı bilgi almak ve teklifinizi öğrenmek için hemen bize ulaşın.</p>
    `,
    image: '/images/blog/pert-raporu-belgesi.png',
    category: 'Bilgi',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-01-03',
    readTime: '7 dk',
    tags: ['pert raporu', 'sigorta', 'yasal süreç'],
    metaTitle: 'Pert Raporu Nedir, Nasıl Alınır? | Hasar Park',
    metaDescription: 'Pert raporu nedir, sigorta ne zaman pert kararı verir? Sovtaj, Tramer kaydı ve pert kaydı sorgulama dahil tüm süreç bu rehberde.',
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
    excerpt: 'Hurda araç fiyatlarını belirleyen etkenler: kilo fiyatı, kurtarılabilir parçalar, çekme ve hurda belgesi farkı ve hurdaya ayırma süreci.',
    content: `
<h2>Hurda Araç Fiyatları Nasıl Belirlenir?</h2>
<p>Ekonomik ömrünü tamamlamış, ağır hasar görmüş ya da onarımı anlamsız hale gelmiş bir aracı elden çıkarmak isteyen herkesin ilk sorusu aynıdır: Hurda araç fiyatları neye göre belirlenir? Yaygın kanının aksine hurda araç fiyatı tek bir rakamdan ibaret değildir; aracın ağırlığı, güncel hurda metal piyasası, kurtarılabilir parçaların değeri ve markaya olan parça talebi birlikte hesaba katılır. Bu rehberde hurda araç kilo fiyatının nasıl işlediğini, hurda belgesi ve hurdaya ayırma sürecini ve aracınızdan alabileceğiniz bedeli artırmanın yollarını adım adım anlatıyoruz.</p>

<h3>Hangi Araçlar Hurda Sayılır? Çekme Belgeli ve Hurda Belgeli Farkı</h3>
<p>Türkiye'de bir aracın hurda statüsü, trafik tescil kayıtları üzerinden tanımlanır ve karşımıza iki farklı belge çıkar. Çekme belgeli (ÇKB) araç, sahibinin talebiyle trafikten çekilmiş ancak tescil kaydı tamamen silinmemiş araçtır; gerekli muayene ve tescil şartları sağlandığında ileride yeniden trafiğe dönebilir. Bu ihtimal korunduğu için çekme belgeli araçlar, hurda belgelilere göre genellikle daha değerlidir. Hurda belgeli araçta ise tescil kaydı kalıcı olarak silinir; araç bir daha trafiğe çıkamaz ve yalnızca parça ile geri dönüşüm değeri üzerinden fiyatlanır. Satıştan önce aracınızın hangi statüde olduğunu netleştirmek, doğru fiyat beklentisi oluşturmanın ilk adımıdır.</p>

<h2>Hurda Araç Fiyatını Belirleyen Ana Etkenler</h2>

<h3>1. Araç Ağırlığı ve Güncel Hurda Kilo Fiyatı</h3>
<p>Fiyatlamanın temeli, aracın ağırlığının güncel hurda metal kilo fiyatıyla çarpılmasıdır. Küçük bir otomobil yaklaşık 900-1.100 kilogram, orta sınıf bir sedan 1.100-1.400 kilogram, SUV ve hafif ticari araçlar ise çoğunlukla 1.500 kilogramın üzerinde ağırlığa sahiptir. Hurda araç kilo fiyatı sabit değildir; küresel çelik ve metal piyasalarındaki dalgalanmalara, döviz kuruna ve iç talebe bağlı olarak haftadan haftaya değişir. Bu nedenle internette rastladığınız eski bir kilo fiyatı üzerinden hesap yapmak yanıltıcı olur; satış günü geçerli olan güncel fiyatı mutlaka teyit edin ve tartımın şeffaf yapılmasını isteyin.</p>

<h3>2. Kurtarılabilir Parçaların Ek Değeri</h3>
<p>Dışarıdan hurda görünen bir araçta, salt metal ağırlığının çok üzerinde değer taşıyan parçalar bulunabilir. Bu parçaların başlıcaları şunlardır:</p>
<ul>
  <li><strong>Katalitik konvertör:</strong> İçerdiği değerli metaller nedeniyle tek başına önemli bir kalemdir.</li>
  <li><strong>Alüminyum jantlar ve motor bloğu:</strong> Alüminyum, hurda demirden daha yüksek fiyatla alınır.</li>
  <li><strong>Akü ve bakır kablo tesisatı:</strong> Geri dönüşüm piyasasında ayrıca değerlendirilir.</li>
  <li><strong>Elektronik üniteler, farlar ve iç donanım:</strong> Çalışır durumdaysa ikinci el parça piyasasında alıcı bulur.</li>
  <li><strong>Motor ve şanzıman:</strong> Sağlam ya da onarılabilir durumdaysa aracın toplam değerini ciddi biçimde yükseltir.</li>
</ul>

<h3>3. Marka, Model ve Parça Talebi</h3>
<p>Yollarda sık görülen modellerin yedek parçaları sürekli arandığı için bu araçların hurdası da daha kolay ve daha iyi fiyata alıcı bulur. Az satılmış ya da parça talebi sınırlı modellerde ise fiyat, ağırlık esaslı hesaba daha çok yaklaşır. Aracın yaşı ve hasar geçmişi de bu dengeyi etkiler: Görece yeni bir modelin hurdası, parça talebi yüksek olduğu için eski muadillerine göre daha iyi fiyatlanır. Bölgesel piyasa da etkilidir: <a href="/sehirler/istanbul">İstanbul gibi büyük şehirlerde</a> parça ve geri dönüşüm piyasası hareketli olduğundan teklifler genellikle daha rekabetçi olur.</p>

<h2>Hurdaya Ayırma Süreci Adım Adım</h2>
<p>Hurdaya ayırma, yalnızca aracı bir tesise teslim etmekten ibaret değildir; işin resmi ayağı en az fiyat kadar önemlidir. Tescil kaydı doğru şekilde kapatılmadığında araç kağıt üzerinde sizin adınıza kayıtlı kalır ve tüm yükümlülükler devam eder. Sürecin sağlıklı ilerlemesi için izlenmesi gereken adımlar şunlardır:</p>
<ul>
  <li><strong>Karar aşaması:</strong> Aracı trafikten çekmek mi (çekme belgesi) yoksa tamamen hurdaya ayırmak mı istediğinize karar verin; iki işlemin sonuçları farklıdır.</li>
  <li><strong>Noter ve tescil başvurusu:</strong> İşlemler noter ve trafik tescil birimleri üzerinden yürütülür. Devir aşamasının ayrıntıları için <a href="/blog/noter-ile-arac-satisi-nasil-yapilir">noterde araç satışı rehberimizi</a> inceleyebilirsiniz.</li>
  <li><strong>Hurda belgesi düzenlenmesi:</strong> Hurdaya ayrılan aracın tescil kaydı silinir ve hurda belgesi düzenlenir; araç artık trafiğe çıkamaz.</li>
  <li><strong>MTV yükümlülüğünün sona ermesi:</strong> Kayıt silindikten sonra Motorlu Taşıtlar Vergisi tahakkuku durur; muayene ve zorunlu trafik sigortası yükümlülükleri de ortadan kalkar.</li>
  <li><strong>Teslim ve ödeme:</strong> Araç, alıcı firmaya ya da lisanslı tesise teslim edilir; tartım ve değerleme sonrası ödeme yapılır.</li>
</ul>

<h3>Gerekli Belgeler</h3>
<ul>
  <li>Araç ruhsatı (aslı)</li>
  <li>Araç sahibinin kimlik belgesi</li>
  <li>Araç sahibi işlemlere katılamıyorsa noter onaylı vekaletname</li>
  <li>Plakalar ve varsa aracın anahtarları</li>
</ul>
<p>Belgelerin eksiksiz olması işlemleri önemli ölçüde hızlandırır. Ruhsat kayıp ise ya da araç üzerinde haciz, rehin gibi bir şerh varsa bu durumların önceden çözülmesi gerekir. Profesyonel alım firmaları bu tür durumlarda hangi adımların izleneceği konusunda yol gösterir ve evrak sürecinin büyük bölümünü sizin adınıza yürütür.</p>

<h2>Lisanslı Geri Dönüşüm Tesisi mi, Hurda Araç Alım Firması mı?</h2>
<p>Lisanslı geri dönüşüm tesisleri aracı esas olarak metal ağırlığı üzerinden değerlendirir; süreç mevzuata uygun ilerler ancak kullanılabilir parçaların katkısı fiyata her zaman tam yansımayabilir. <a href="/hurda-arac-alim">Hurda araç alımı</a> yapan profesyonel firmalar ise aracı bir bütün olarak inceler: Ağırlığın yanında çalışan aksamlar, değerli metaller ve parça talebi de teklife dahil edilir. Aracınızda kurtarılabilir parça varsa, yalnızca kilo hesabıyla satmak çoğu durumda eksik kazanç anlamına gelir. En sağlıklı yaklaşım, satmadan önce her iki kanaldan da teklif alıp karşılaştırmaktır.</p>

<h2>Kullanılabilir Parçası Olan Araç Neden Daha Değerlidir?</h2>
<p>Salt hurda hesabı, aracı yalnızca eritilecek metal olarak görür. Oysa çalışan bir motor, sağlam bir şanzıman ya da hasarsız kapılar, parça piyasasında metal değerinin katbekat üzerinde fiyat bulabilir. Aynı ağırlıktaki iki araçtan biri komple yanmış, diğeri yalnızca önden darbe almışsa aralarındaki fiyat farkı birkaç kat olabilir; çünkü ikinci araçta motor, arka aksam ve iç donanım büyük olasılıkla değerlendirilebilir durumdadır. Bu yüzden kaza geçirmiş ama önemli aksamları sağlam kalmış bir araç, hurdadan çok hasarlı araç sınıfında değerlendirilmelidir. Böyle bir durumda <a href="/hasarli-arac-alim">hasarlı araç alımı</a> ya da <a href="/kazali-arac-alim">kazalı araç alımı</a> kapsamında değerleme istemek, kilo hesabına göre belirgin biçimde daha yüksek bir teklif almanızı sağlayabilir.</p>

<h2>Hurda Araç Satışında Sık Yapılan Hatalar</h2>
<p>En kritik hata, aracı trafikten çekmeden ya da hurdaya ayırmadan yalnızca fiziken teslim etmektir. Tescil kaydı üzerinizde kaldığı sürece MTV, trafik cezaları ve araçla ilgili hukuki sorumluluk size ait olmaya devam eder; bu nedenle resmi işlemler tamamlanmadan süreci bitmiş saymayın. İkinci hata, tek bir teklifle yetinmektir; alıcılar arasındaki fark ciddi olabilir. Üçüncü hata, katalitik konvertör ve alüminyum aksam gibi değerli kalemleri hesaba katmadan pazarlık yapmaktır. Son olarak aracı uzun süre bekletmek de kayıptır: Açıkta duran araçta pas ve parça bozulması ilerledikçe hem parça değeri hem de toplam teklif düşer.</p>

<h2>Hurda Aracınız İçin Hasar Park'tan Teklif Alın</h2>
<p>Hurda ya da ekonomik ömrünü doldurmuş aracınızı satmayı düşünüyorsanız süreci tek başınıza yürütmek zorunda değilsiniz. Hasar Park, aracınızı ağırlığı ve kurtarılabilir parçalarıyla birlikte değerlendirir; yaklaşık 30 dakika içinde piyasa koşullarında rekabetçi bir teklif iletir. Türkiye genelinde ücretsiz çekici, noter ve tescil işlemlerinde tam destek ve anında ödeme hizmetimizle tüm süreç zahmetsiz tamamlanır. Ayrıntılı bilgi için <a href="/hurda-arac-alim">hurda araç alım sayfamızı</a> ziyaret edin veya hemen bize ulaşın.</p>
    `,
    image: '/images/blog/hurda-demir-fiyatlari.png',
    category: 'Bilgi',
    author: 'Hasar Park Uzman Ekibi',
    publishedAt: '2025-02-01',
    readTime: '7 dk',
    tags: ['hurda araç fiyatı', 'kilo fiyatı', 'hurda demir'],
    metaTitle: 'Hurda Araç Fiyatları Nasıl Belirlenir? | Hasar Park Blog',
    metaDescription: 'Hurda araç fiyatları nasıl hesaplanır? Kilo fiyatı, kurtarılabilir parça değeri, hurda belgesi ve hurdaya ayırma süreci bu rehberde.',
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
