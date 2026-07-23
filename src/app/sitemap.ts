import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllCities } from '@/data/cities';
import { getAllServices } from '@/data/services';
import { getAllPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date();

    // Static routes
    const routes = [
        { path: '', priority: 1, changeFrequency: 'weekly' as const },
        { path: '/hizmetler', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/hakkimizda', priority: 0.5, changeFrequency: 'monthly' as const },
        { path: '/iletisim', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
        { path: '/sehirler', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/kvkk', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/gizlilik-politikasi', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/kullanim-sartlari', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/cerez-politikasi', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map(({ path, priority, changeFrequency }) => ({
        url: `${baseUrl}${path}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
    }));

    // Blog posts — real publish dates, not the build date
    const posts = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Service routes
    const services = getAllServices().map((service) => ({
        url: `${baseUrl}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // City routes — skeleton cities (no local content yet) are noindexed,
    // so keep them out of the sitemap too
    const cities = getAllCities()
        .filter((city) => city.features.length > 0 || city.faqs.length > 0)
        .map((city) => ({
            url: `${baseUrl}/sehirler/${city.slug}`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

    return [...routes, ...services, ...cities, ...posts];
}
