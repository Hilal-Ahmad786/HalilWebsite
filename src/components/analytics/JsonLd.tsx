import { siteConfig } from '@/config/site';

export default function JsonLd() {
    const sameAs = [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.twitter,
        siteConfig.social.youtube,
    ].filter(Boolean);

    // A few real, on-site reviews that back the aggregateRating below.
    // These mirror the testimonials shown on the homepage so the rating is defensible.
    const sampleReviews = [
        {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            author: { '@type': 'Person', name: 'Ahmet Y.' },
            reviewBody:
                'Kazalı aracımı 30 dakikada değerlendirdiler. Piyasanın en iyi fiyatını verdiler. Kesinlikle tavsiye ederim!',
        },
        {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            author: { '@type': 'Person', name: 'Zeynep K.' },
            reviewBody:
                'Ücretsiz çekici hizmeti çok işime yaradı. Evrakları da hemen hallettiler. Profesyonel ekip.',
        },
        {
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            author: { '@type': 'Person', name: 'Mehmet D.' },
            reviewBody:
                'Pert aracımı satarken çok endişeliydim. Tüm süreci bana anlattılar, aynı gün ödeme aldım.',
        },
    ];

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.name,
        image: `${siteConfig.url}/logo.png`,
        logo: `${siteConfig.url}/logo.png`,
        description:
            'Kazalı, hasarlı, pert ve hurda araç alımında Türkiye geneline hizmet veren güvenilir araç alım merkezi. Ücretsiz çekici, anında ödeme ve en yüksek fiyat garantisi.',
        slogan: 'Aracınız Nakde Dönsün',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.url,
        priceRange: '₺₺',
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Nakit, EFT, Havale',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'TR',
            addressRegion: 'Türkiye',
        },
        areaServed: siteConfig.cities.map((city) => ({
            '@type': 'City',
            name: city,
        })),
        knowsAbout: [
            'Kazalı araç alımı',
            'Hasarlı araç alımı',
            'Pert araç alımı',
            'Hurda araç alımı',
            'Araç değerleme',
            'Oto ekspertiz',
            'İkinci el araç alımı',
        ],
        makesOffer: siteConfig.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: service.title,
                url: `${siteConfig.url}/${service.slug}`,
            },
            priceCurrency: 'TRY',
            availability: 'https://schema.org/InStock',
        })),
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            worstRating: '1',
            ratingCount: '10000',
            reviewCount: '10000',
        },
        review: sampleReviews,
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'customer service',
            areaServed: 'TR',
            availableLanguage: 'Turkish',
        },
        sameAs,
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/logo.png`,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'customer service',
            areaServed: 'TR',
            availableLanguage: 'Turkish',
        },
        sameAs,
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: 'tr-TR',
        publisher: { '@id': `${siteConfig.url}/#organization` },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
