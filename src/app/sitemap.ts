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
        '',
        '/hizmetler',
        '/hakkimizda',
        '/iletisim',
        '/blog',
        '/sehirler',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts
    const posts = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: currentDate,
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

    // City routes
    const cities = getAllCities().map((city) => ({
        url: `${baseUrl}/sehirler/${city.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...services, ...cities, ...posts];
}
