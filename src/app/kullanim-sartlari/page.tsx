import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/shared/LegalLayout';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description: 'Hasar Park web sitesi kullanım şartları ve koşulları.',
  alternates: {
    canonical: 'https://www.hasarpark.com/kullanim-sartlari',
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Kullanım Şartları">
          <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Son güncellenme tarihi: 23.07.2026
            </p>
            
            <p>
              Bu web sitesini (hasarpark.com) ziyaret ederek veya hizmetlerimizden yararlanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Lütfen hizmetlerimizi kullanmadan önce bu şartları dikkatlice okuyunuz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Hizmet Kapsamı</h2>
            <p>
              {siteConfig.name}, kazalı, hasarlı, pert ve hurda araçların alımını gerçekleştiren bir platformdur. Web sitemiz üzerinden sunulan teklifler, tarafınızca sağlanan beyan ve fotoğraflara dayanmaktadır ve ön değerlendirme niteliği taşır. Kesin fiyat, aracın fiziki incelemesi sonucunda belirlenir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Kullanıcı Yükümlülükleri</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aracınız hakkında (hasar durumu, kilometre, tramer kaydı, rehin/haciz durumu vb.) doğru ve eksiksiz bilgi vermekle yükümlüsünüz.</li>
              <li>Yanlış veya eksik bilgi verilmesi durumunda {siteConfig.name}, verdiği teklifi geri çekme veya revize etme hakkını saklı tutar.</li>
              <li>Aracın yasal sahibi olduğunuzu veya yasal sahibini temsil etmeye yetkili olduğunuzu beyan edersiniz.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Fiyat Teklifleri ve Geçerlilik</h2>
            <p>
              Sitemiz üzerinden, WhatsApp hattımızdan veya telefonla verilen fiyat teklifleri aksi belirtilmedikçe o gün için geçerlidir. Piyasa koşullarındaki değişiklikler nedeniyle teklifler güncellenebilir. {siteConfig.name}, herhangi bir aracı satın alma zorunluluğu altında değildir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Fikri Mülkiyet Hakları</h2>
            <p>
              Bu web sitesinde yer alan tüm içerik, logo, tasarım, grafikler ve yazılımlar {siteConfig.name}'a aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
            <p>
              {siteConfig.name}, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Site kullanımından doğabilecek doğrudan veya dolaylı zararlardan {siteConfig.name} sorumlu tutulamaz. Dış bağlantılar (diğer web sitelerine verilen linkler) üzerindeki içeriklerden sorumluluk kabul edilmez.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Şartlarda Değişiklik</h2>
            <p>
              {siteConfig.name}, önceden bildirimde bulunmaksızın bu Kullanım Şartları'nda değişiklik yapma hakkını saklı tutar. Güncel şartlar sitede yayınlandığı andan itibaren geçerlilik kazanır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. İletişim</h2>
            <p>
              Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-100 p-6 rounded-xl mt-4">
              <p className="mb-2"><strong>E-posta:</strong> {siteConfig.email}</p>
              <p className="mb-2"><strong>Telefon:</strong> {siteConfig.phoneDisplay}</p>
            </div>
          </div>
    </LegalLayout>
  );
}
