import { siteConfig } from '@/config/site';

export default function JsonLd() {
    const sameAs = [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.twitter,
        siteConfig.social.youtube,
    ].filter(Boolean);

    // NOTE: Do NOT add aggregateRating or review markup here unless it is backed by
    // real, third-party-verifiable reviews (e.g. Google Business Profile).
    // Self-serving ratings violate Google's structured-data policies (manual-action risk).
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.name,
        image: `${siteConfig.url}/logo.png`,
        logo: `${siteConfig.url}/logo.png`,
        description:
            'Kazalı, hasarlı, pert ve hurda araç alımında Türkiye geneline hizmet veren araç alım merkezi. Ücretsiz çekici, anında ödeme ve rekabetçi fiyat teklifi.',
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
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '22:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '09:00',
                closes: '20:00',
            },
        ],
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
