import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: 'İletişim | Hasar Park - Bize Ulaşın' },
    description: "Hasar Park ile iletişime geçin. Kazalı, hasarlı, pert ve hurda araç alımı için hemen arayın veya WhatsApp'tan yazın. 7/24 destek.",
    alternates: { canonical: 'https://www.hasarpark.com/iletisim' },
    openGraph: {
        title: 'İletişim | Hasar Park - Bize Ulaşın',
        description: "Hasar Park ile iletişime geçin. Kazalı, hasarlı, pert ve hurda araç alımı için hemen arayın veya WhatsApp'tan yazın. 7/24 destek.",
        url: 'https://www.hasarpark.com/iletisim',
        type: 'website',
        images: ['/images/kazali-arac.png'],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
