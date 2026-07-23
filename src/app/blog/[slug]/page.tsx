import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { User, Calendar, Clock, Phone, ArrowRight } from 'lucide-react';
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/data/blog';
import { siteConfig } from '@/config/site';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Container from '@/components/shared/Container';
import TrackedContactLink from '@/components/shared/TrackedContactLink';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Yazı Bulunamadı' };
  return {
    // absolute: metaTitle already contains the brand; the root template would duplicate it
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      siteName: siteConfig.name,
      locale: 'tr_TR',
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

const serviceLinks = [
  { href: '/kazali-arac-alim', label: 'Kazalı Araç' },
  { href: '/hasarli-arac-alim', label: 'Hasarlı Araç' },
  { href: '/pert-arac-alim', label: 'Pert Araç' },
  { href: '/hurda-arac-alim', label: 'Hurda Araç' },
];

const articleClasses =
  'text-[16px] text-ink-soft [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:text-ink ' +
  '[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-ink [&_p]:mb-4 [&_p]:leading-relaxed ' +
  '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5 [&_strong]:text-ink [&_strong]:font-semibold ' +
  '[&_a]:text-brand-green-dark [&_a]:underline';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts().filter((p) => p.id !== post.id).slice(0, 3);
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <article className="blog-post-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article', headline: post.title,
        description: post.metaDescription || post.excerpt, image: `${siteConfig.url}${post.image}`,
        datePublished: post.publishedAt, dateModified: post.publishedAt,
        author: { '@type': 'Organization', name: post.author },
        publisher: { '@type': 'Organization', name: siteConfig.name, logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl }, keywords: post.tags.join(', '),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      }) }} />

      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.category }]}
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        showCTAs={false}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-ink-muted">
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" aria-hidden="true" />{post.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" />{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{post.readTime} okuma</span>
        </div>
      </PageHero>

      {/* Content */}
      <section className="section bg-surface">
        <Container className="max-w-3xl">
          <div className="relative mb-9 aspect-video overflow-hidden rounded-2xl bg-surface-alt shadow-soft">
            <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
          </div>

          {/* Lead-gen card */}
          <div className="mb-9 rounded-2xl border border-line bg-brand-green-pale p-6 shadow-soft sm:p-7">
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-brand-green-dark">Ücretsiz Ön Teklif</p>
            <h2 className="mt-2 text-[22px] font-bold text-ink">Aracınız için bugün net fiyat aralığı öğrenin</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Fotoğraf, ruhsat bilgisi ve hasar durumunu paylaşın; kazalı, hasarlı, pert veya hurda aracınız için aynı gün teklif hazırlayalım.
            </p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="group flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-[14px] font-semibold text-ink transition hover:border-brand-green hover:text-brand-green-dark">
                  {s.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <TrackedContactLink kind="phone" location="blog-post-cta" href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark px-5 py-3 text-[14px] font-bold text-white transition hover:brightness-[1.05]">
                <Phone className="h-5 w-5" aria-hidden="true" /> {siteConfig.phoneDisplay}
              </TrackedContactLink>
              <TrackedContactLink kind="whatsapp" location="blog-post-cta" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#20BA5A]">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp'tan Teklif Al
              </TrackedContactLink>
            </div>
          </div>

          <div className={articleClasses} dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="mt-10 border-t border-line pt-7">
            <h3 className="mb-3 text-[16px] font-bold text-ink">Etiketler:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="rounded-full bg-brand-green-soft px-3.5 py-1.5 text-[13px] font-medium text-brand-green-dark">#{tag}</span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="section bg-surface-alt">
          <Container className="max-w-5xl">
            <SectionHeader eyebrow="İlgili Yazılar" title="İlginizi" highlight="Çekebilir" />
            <div className="grid gap-5 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40">
                  <div className="relative aspect-video overflow-hidden bg-surface-alt">
                    <Image src={rp.image} alt={rp.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-[15px] font-bold text-ink group-hover:text-brand-green-dark">{rp.title}</h3>
                    <p className="mt-2 text-[12.5px] text-ink-muted">{rp.readTime} okuma</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABanner title="Daha Fazla" highlight="Sorunuz mu Var?" subtitle="Uzman ekibimizle görüşmek için hemen arayın." source="blog-post-cta" />
    </article>
  );
}
