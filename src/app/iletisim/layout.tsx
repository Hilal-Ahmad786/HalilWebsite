import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim - Hasar Park | Bize Ulaşın',
    description: 'Hasar Park ile iletişime geçin. Kazalı, hasarlı, pert ve hurda araç alımı için hemen arayın. 7/24 müşteri hizmetleri.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
