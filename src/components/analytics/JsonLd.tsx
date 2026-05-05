import { siteConfig } from '@/config/site';

export default function JsonLd() {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        name: siteConfig.name,
        image: `${siteConfig.url}/logo.png`,
        description: 'Kazalı, hasarlı, pert ve hurda araç alımı',
        telephone: siteConfig.phone,
        url: siteConfig.url,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'TR',
            addressRegion: 'Türkiye',
        },
        areaServed: 'TR',
        priceRange: 'Varies',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '100000',
        },
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
        sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.twitter,
            siteConfig.social.youtube,
        ].filter(Boolean),
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
