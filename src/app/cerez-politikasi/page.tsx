import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'Hasar Park web sitesinde kullanılan çerezler ve yönetimi hakkında bilgilendirme.',
  alternates: {
    canonical: '/cerez-politikasi',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Çerez Politikası</h1>
          
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>
            
            <p>
              {siteConfig.name} olarak, web sitemizden (hasarpark.com) en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek için Çerezler (Cookies) kullanmaktayız. Çerez kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından çerezleri silebilir ya da engelleyebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza veya akıllı telefonunuza kaydedilen küçük metin dosyalarıdır. Çerezler, bir web sitesinin daha kullanıcı dostu deneyim sunmasını sağlar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Hangi Çerezleri Kullanıyoruz?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması ve temel işlevlerin yerine getirilmesi için kesinlikle gerekli olan çerezlerdir.</li>
              <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizi nasıl kullandığınızı (hangi sayfaları ziyaret ettiğiniz, ne kadar süre kaldığınız vb.) analiz etmek ve site performansını iyileştirmek için kullanılır (örn: Google Analytics).</li>
              <li><strong>Reklam ve Hedefleme Çerezleri:</strong> Size ilgi alanlarınıza yönelik reklamlar sunmak ve reklam kampanyalarının etkinliğini ölçmek için kullanılır (örn: Google Ads, Meta Pixel).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Çerezlerin Kullanım Amaçları</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web sitesinin çalışması için gerekli temel fonksiyonları gerçekleştirmek.</li>
              <li>Web sitesini analiz etmek ve performansını artırmak.</li>
              <li>İşlevselliği artırmak ve kullanım kolaylığı sağlamak.</li>
              <li>Pazarlama ve reklam faaliyetlerini yönetmek.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Çerezleri Nasıl Yönetebilirsiniz?</h2>
            <p>
              Kullandığınız internet tarayıcısının ayarlarına giderek çerezlere ilişkin tercihlerinizi kişiselleştirebilirsiniz. Çerezleri tamamen devre dışı bırakmanız halinde, web sitemizin bazı özellikleri düzgün çalışmayabilir.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler ve diğer site verileri</li>
              <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
              <li><strong>Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. İletişim</h2>
            <p>
              Çerez politikamız ile ilgili soru ve görüşleriniz için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
