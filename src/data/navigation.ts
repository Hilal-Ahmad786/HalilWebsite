import { getAllCities } from '@/data/cities';
import { siteConfig } from '@/config/site';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const mainNav: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: siteConfig.services.map((s) => ({
      label: s.title,
      href: `/${s.slug}`,
      desc: s.shortDesc,
    })),
  },
  {
    label: 'Şehirler',
    href: '/sehirler',
    children: getAllCities()
      .slice(0, 8)
      .map((c) => ({ label: c.name, href: `/sehirler/${c.slug}` })),
  },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];
