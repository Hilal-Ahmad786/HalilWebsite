import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/shared/LegalLayout';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Hasar Park gizlilik politikası ve kişisel verilerin işlenmesi hakkında bilgilendirme.',
  alternates: {
    canonical: 'https://www.hasarpark.com/gizlilik-politikasi',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Gizlilik Politikası">
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: 23.07.2026
            </p>
            
            <p>
              {siteConfig.name} ("biz", "bizim" veya "şirketimiz") olarak, müşterilerimizin ve web sitemizi ziyaret eden kullanıcıların gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi (hasarpark.com) kullandığınızda veya hizmetlerimizden yararlandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Toplanan Bilgiler</h2>
            <p>
              Hizmetlerimizi kullandığınızda aşağıdaki türde bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kimlik ve İletişim Bilgileri:</strong> Adınız, soyadınız, telefon numaranız, e-posta adresiniz.</li>
              <li><strong>Araç Bilgileri:</strong> Marka, model, yıl, hasar durumu, plaka, ruhsat bilgileri ve araç fotoğrafları.</li>
              <li><strong>Teknik Bilgiler:</strong> IP adresiniz, tarayıcı türünüz, işletim sisteminiz, web sitemizi ziyaret tarih ve saatiniz.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Bilgilerin Kullanım Amacı</h2>
            <p>
              Topladığımız kişisel verileri aşağıdaki amaçlarla kullanmaktayız:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aracınız için en doğru fiyat teklifini hazırlamak ve sunmak,</li>
              <li>Sizinle iletişime geçmek ve taleplerinizi yanıtlamak,</li>
              <li>Noter, devir ve çekici işlemlerini koordine etmek,</li>
              <li>Hizmet kalitemizi artırmak ve müşteri memnuniyetini sağlamak,</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel verileriniz, yalnızca size hizmet sunabilmek amacıyla ve yasal zorunluluklar çerçevesinde aşağıdaki kişi veya kurumlarla paylaşılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Çekici ve lojistik iş ortaklarımız (aracınızın taşınması için),</li>
              <li>Noterlikler ve ilgili resmi kurumlar (devir işlemleri için),</li>
              <li>Yasal bir zorunluluk olması halinde yetkili kamu kurum ve kuruluşları.</li>
            </ul>
            <p>Verileriniz kesinlikle reklam veya pazarlama amacıyla üçüncü şahıslara satılmaz.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin yetkisiz erişime, kaybolmaya, değiştirilmeye veya ifşa edilmeye karşı korunması için gerekli tüm teknik ve idari tedbirleri almaktayız. Sitemiz 256-bit SSL sertifikası ile şifrelenmektedir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Haklarınız</h2>
            <p>
              KVKK uyarınca kişisel verilerinizle ilgili olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. İletişim</h2>
            <p>
              Gizlilik politikamız ile ilgili soru ve talepleriniz için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
              <p><strong>Çalışma Saatleri:</strong> 7/24 Hizmet</p>
            </div>
          </div>
    </LegalLayout>
  );
}
