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

<p>Kazalı bir aracı satmak stresli bir süreç gibi görünebilir, ancak doğru adımları izlerseniz en yüksek fiyatı alabilirsiniz.</p>

<h3>1. Aracın Hasar Durumunu Değerlendirin</h3>
<p>İlk adım, aracınızın hasar durumunu realistik bir şekilde değerlendirmektir. Büyük hasarlar fiyatı etkiler, ancak küçük hasarlar için de adil bir değer alabilirsiniz.</p>

<h3>2. Trafik Raporu Alın</h3>
<p>Kaza raporu, alıcıların güvenini artırır ve satış sürecini hızlandırır. Mutlaka trafik raporunuzu hazırlayın.</p>

<h3>3. Piyasa Araştırması Yapın</h3>
<p>Benzer hasarlı araçların satış fiyatlarını araştırın. Bu size gerçekçi bir fiyat beklentisi verecektir.</p>

<h3>4. Profesyonel Alıcılarla Çalışın</h3>
<p>Hasar Park gibi profesyonel alıcılar, size anında değerlendirme ve en yüksek fiyat garantisi sunar.</p>

<h3>5. Gerekli Evrakları Hazırlayın</h3>
<ul>
  <li>Araç ruhsatı</li>
  <li>Trafik kazası tutanağı</li>
  <li>Kimlik fotokopisi</li>
  <li>Sigorta poliçesi</li>
</ul>

<h2>En Yüksek Fiyatı Nasıl Alırsınız?</h2>
<p>Birden fazla alıcıdan teklif alın ve karşılaştırın. Hasar Park, piyasa araştırması yaparak size en yüksek teklifi sunar.</p>
    `,
    image: '/images/blog/kazali-arac-satis.webp',
    category: 'Rehber',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-05',
    readTime: '5 dk',
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
<p>Pert raporu, sigorta şirketinin bir aracı ekonomik olarak onarılamaz olarak değerlendirmesi sonucu düzenlenen belgedir.</p>

<h3>Pert Raporu Ne Zaman Çıkar?</h3>
<p>Genellikle aracın tamir maliyeti, piyasa değerinin %60-70'ini aştığında pert raporu düzenlenir.</p>

<h3>Pert Raporlu Araç Satılır mı?</h3>
<p>Evet! Pert raporlu araçlar yasal olarak satılabilir ve alınabilir. Hasar Park olarak pert araçlar için özel değerlendirme yapıyoruz.</p>

<h3>Gerekli Evraklar</h3>
<ul>
  <li>Pert raporu</li>
  <li>Araç ruhsatı</li>
  <li>Sigorta poliçesi</li>
  <li>Kimlik belgesi</li>
</ul>
    `,
    image: '/images/blog/pert-raporu.webp',
    category: 'Bilgi',
    author: 'Hukuk Ekibi',
    publishedAt: '2025-01-03',
    readTime: '4 dk',
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

<p>Hurda aracınızı teslim etmek düşündüğünüzden çok daha kolay!</p>

<h3>Adım 1: Bizi Arayın</h3>
<p>İlk adım basit: 0530 344 40 97 numaralı telefondan bizi arayın.</p>

<h3>Adım 2: Ücretsiz Çekici</h3>
<p>Aracınızın bulunduğu yere ücretsiz çekici gönderiyoruz.</p>

<h3>Adım 3: Tartım ve Değerlendirme</h3>
<p>Aracınız tartılır ve kilo bazında değerlendirme yapılır.</p>

<h3>Adım 4: Noter İşlemleri</h3>
<p>Hurda belgesi düzenlenir ve noter işlemleri tamamlanır.</p>

<h3>Adım 5: Anında Ödeme</h3>
<p>Tüm işlemler tamamlandıktan sonra hemen nakit veya EFT ile ödeme yapılır.</p>

<h2>Hurda Belgesi Ne İşe Yarar?</h2>
<p>Hurda belgesi ile aracınızın trafikten kaydı silinir ve MTV ödemeleriniz sona erer.</p>
    `,
    image: '/images/blog/hurda-arac.webp',
    category: 'Rehber',
    author: 'Hasar Park Ekibi',
    publishedAt: '2025-01-01',
    readTime: '3 dk',
    tags: ['hurda araç', 'hurda belgesi', 'süreç'],
    metaTitle: 'Hurda Araç Teslim Süreci | Hasar Park Blog',
    metaDescription: 'Hurda aracınızı teslim etme süreci hakkında detaylı bilgi. Ücretsiz çekici ve anında ödeme.',
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