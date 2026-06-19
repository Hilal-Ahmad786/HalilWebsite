import {
  ShieldCheck,
  Users,
  Truck,
  Clock,
  FileText,
  Wallet,
  BadgeCheck,
  Phone,
  Camera,
  HandCoins,
  type LucideIcon,
} from 'lucide-react';

/* ---- Safe & easy selling benefits ---- */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  { icon: ShieldCheck, title: 'Noterde Güvenli Devir', description: 'Satış işlemi resmi noter süreciyle güvence altında tamamlanır.' },
  { icon: Users, title: 'Deneyimli Uzman Kadro', description: '7+ yıllık tecrübeyle aracınızı doğru ve adil şekilde değerlendiririz.' },
  { icon: Truck, title: 'Ücretsiz Çekici', description: 'Hareketsiz araçlar dahil, bulunduğunuz yerden ücretsiz teslim alırız.' },
  { icon: Clock, title: '30 Dakikada Ön Teklif', description: 'Fotoğraf ve araç bilgisiyle 30 dakika içinde fiyat aralığı veririz.' },
  { icon: FileText, title: 'Tüm Evraklar Bizden', description: 'Noter ve tescil işlemlerini sizin adınıza eksiksiz yürütürüz.' },
];

/* ---- Four-step process ---- */
export interface ProcessStep {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
  time: string;
}

export const processSteps: ProcessStep[] = [
  { icon: Phone, number: 1, title: 'Bilgilerinizi Gönderin', description: 'Telefon veya WhatsApp ile aracınızı kısaca anlatın.', time: '5 dk. · İlk Görüşme' },
  { icon: Camera, number: 2, title: 'Fotoğraf Gönderin', description: 'WhatsApp üzerinden araç fotoğraflarını paylaşın.', time: '30 dk. · Değerlendirme' },
  { icon: BadgeCheck, number: 3, title: 'Teklif Alın', description: 'En yüksek fiyat teklifimizi ve noter sürecini netleştirelim.', time: '2 saat · Noter İşlemi' },
  { icon: HandCoins, number: 4, title: 'Hemen Satın', description: 'Devrin ardından nakit veya EFT ile ödemenizi anında alın.', time: 'Aynı Gün · Ödeme' },
];

/* ---- Why choose us ---- */
export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  { icon: Clock, title: 'Anında Değerlendirme', description: '30 dakika içinde net fiyat teklifi.' },
  { icon: Wallet, title: 'En Yüksek Fiyat', description: 'Piyasanın en iyi teklifini garantiliyoruz.' },
  { icon: Truck, title: 'Ücretsiz Çekici', description: 'Aracınızı bulunduğu yerden alırız.' },
  { icon: FileText, title: 'Tüm Evraklar Bizden', description: 'Noter ve tescil işlemleri dahil.' },
  { icon: HandCoins, title: 'Anında Ödeme', description: 'Nakit veya EFT ile hızlı ödeme.' },
  { icon: BadgeCheck, title: '7+ Yıl Tecrübe', description: '100.000+ mutlu müşteri.' },
];

/* ---- Service images (placeholders until real assets supplied) ---- */
export const serviceImages: Record<string, string> = {
  kazali: '/images/vehicles/kazali-arac.webp',
  hasarli: '/images/vehicles/hasarli-arac.webp',
  pert: '/images/vehicles/pert-arac.webp',
  hurda: '/images/vehicles/hurda-arac.webp',
};

/* ---- Homepage testimonials (real, on-site) ---- */
export interface Testimonial {
  name: string;
  city: string;
  category: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: 'Ahmet Y.', city: 'İstanbul', category: 'Kazalı Araç', rating: 5, text: 'Kazalı aracımı 30 dakikada değerlendirdiler. Piyasanın en iyi fiyatını verdiler. Kesinlikle tavsiye ederim!' },
  { name: 'Zeynep K.', city: 'Ankara', category: 'Hasarlı Araç', rating: 5, text: 'Ücretsiz çekici hizmeti çok işime yaradı. Evrakları da hemen hallettiler. Profesyonel ekip.' },
  { name: 'Mehmet D.', city: 'İzmir', category: 'Pert Araç', rating: 5, text: 'Pert aracımı satarken çok endişeliydim. Tüm süreci bana anlattılar, aynı gün ödeme aldım.' },
];

/* ---- FAQ ---- */
export const faqs = [
  { question: 'Kaza yapmış aracınızı alıyor musunuz?', answer: 'Evet. Ön, yan, arka çarpma, devrilme, yangın ve şasi hasarlı dahil tüm kazalı araçları alıyoruz. Aracın çalışıp çalışmaması fark etmez; ücretsiz çekici ile yerinden teslim alıyoruz.' },
  { question: 'Hasarlı araçlar için ön teklif nasıl veriyorsunuz?', answer: 'Bizi arayıp aracınızı anlatıyor, fotoğrafları WhatsApp üzerinden gönderiyorsunuz. 30 dakika içinde en yüksek fiyat teklifimizi sunuyoruz.' },
  { question: 'Ödeme nasıl yapılıyor?', answer: 'Noter işlemleri tamamlandıktan sonra anında nakit veya EFT ile ödeme yapıyoruz. Ek masraf veya gecikme yoktur.' },
  { question: 'Hangi il ve bölgelerde hizmet veriyorsunuz?', answer: 'Türkiye’nin tüm illerinde hizmet veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere her şehirden araç alıyor, ücretsiz çekici gönderiyoruz.' },
  { question: 'Ekspertiz ücreti var mı?', answer: 'Hayır, ekspertiz ve değerleme hizmetimiz tamamen ücretsizdir. Aracınızı yerinde değerlendirip en iyi teklifi sunuyoruz.' },
  { question: 'Araç çekici hizmetiniz var mı?', answer: 'Evet. Hareketsiz ve sürülemez araçlar için Türkiye genelinde ücretsiz çekici hizmeti sağlıyoruz.' },
];
