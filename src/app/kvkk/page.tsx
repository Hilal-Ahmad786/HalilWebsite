import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Hasar Park Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni.',
  alternates: {
    canonical: '/kvkk',
  },
};

export default function KVKKPage() {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">KVKK Aydınlatma Metni</h1>
          
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              <strong>KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ</strong>
            </p>
            <p>
              Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}
            </p>
            
            <p>
              {siteConfig.name} ("Şirket") olarak, veri sorumlusu sıfatıyla, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında, kişisel verilerinizin güvenliğine ve hukuka uygun şekilde işlenmesine son derece önem vermekteyiz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. İşlenen Kişisel Verileriniz</h2>
            <p>
              Tarafımızca işlenen kişisel verileriniz aşağıdakileri kapsayabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kimlik Verisi:</strong> Ad, soyad, T.C. kimlik numarası (satış işlemleri sırasında).</li>
              <li><strong>İletişim Verisi:</strong> Telefon numarası, e-posta adresi, adres bilgisi.</li>
              <li><strong>Müşteri İşlem Verisi:</strong> Araç plakası, ruhsat bilgileri, hasar durumu, fotoğraflar, banka hesap/IBAN bilgileri (ödeme işlemleri için).</li>
              <li><strong>İşlem Güvenliği Verisi:</strong> IP adresi, site ziyaret bilgileri.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Araç alım/satım süreçlerinin yürütülmesi ve teklif oluşturulması,</li>
              <li>Müşteri ilişkileri yönetimi süreçlerinin yürütülmesi,</li>
              <li>Noter devir ve ödeme işlemlerinin gerçekleştirilmesi,</li>
              <li>Hukuki yükümlülüklerin (fatura, vergi vb.) yerine getirilmesi,</li>
              <li>Talep ve şikayetlerin takibi.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, web sitemiz, WhatsApp hattımız, e-posta veya telefon aracılığıyla elektronik ve sözlü ortamda toplanmaktadır. İşleme süreçleri, KVKK Madde 5'te belirtilen "bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması", "veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması" ve "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebeplerine dayanmaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar dâhilinde;
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Noterliklere ve resmi kurumlara (araç devir işlemleri için),</li>
              <li>Banka ve finans kuruluşlarına (ödeme işlemleri için),</li>
              <li>Anlaşmalı lojistik ve çekici firmalarına (aracın teslim alınması için),</li>
              <li>Gerekli hallerde hukuk bürolarına ve yetkili kamu kurumlarına aktarılabilmektedir.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. İlgili Kişinin Hakları (KVKK Madde 11)</h2>
            <p>
              KVKK'nın 11. maddesi uyarınca veri sahipleri;
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK 7. maddede öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme haklarına sahiptir.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Veri Sorumlusuna Başvuru</h2>
            <p>
              KVKK Madde 11 kapsamındaki haklarınızı kullanmak için taleplerinizi kimliğinizi tespit edici belgeler ile birlikte aşağıdaki iletişim kanalları üzerinden bize iletebilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>Veri Sorumlusu:</strong> {siteConfig.name}</p>
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
