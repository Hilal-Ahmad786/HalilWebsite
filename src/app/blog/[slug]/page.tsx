import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/data/blog';
import CTASection from '@/components/sections/CTASection';
import SocialProof from '@/components/ui/SocialProof';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import { ArrowRightIcon, BanknotesIcon, PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Hasar Park',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const articleStats = [
    { value: post.readTime, label: 'Okuma Süresi' },
    { value: post.tags.length + '+', label: 'Konu' },
  ];

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const articleImageUrl = `${siteConfig.url}${post.image}`;
  const serviceLinks = [
    { href: '/kazali-arac-alim', label: 'Kazalı Araç' },
    { href: '/hasarli-arac-alim', label: 'Hasarlı Araç' },
    { href: '/pert-arac-alim', label: 'Pert Araç' },
    { href: '/hurda-arac-alim', label: 'Hurda Araç' },
  ];
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: articleImageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: post.tags.join(', '),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteConfig.url}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <article className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero - Matching Homepage Style */}
      <section className="relative min-h-[64svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 pt-40 md:pt-44 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-emerald-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Content - Takes 2 columns */}
            <div className="lg:col-span-2 text-white">
              {/* Category Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-6 rounded-full">
                <span className="font-semibold text-sm tracking-wide">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} okuma
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-1 gap-6">
              {articleStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-2 border border-white/10"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <SocialProof variant="dark" />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Content */}
      <section id="sayfa-icerigi" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-sm mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="mb-10 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <BanknotesIcon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
                    Ücretsiz Ön Teklif
                  </p>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">
                    Aracınız için bugün net fiyat aralığı öğrenin
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fotoğraf, ruhsat bilgisi ve hasar durumunu paylaşın; kazalı, hasarlı, pert veya hurda aracınız için aynı gün teklif hazırlayalım.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group flex items-center justify-between rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm"
                  >
                    {service.label}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
                >
                  <PhoneIcon className="h-5 w-5" strokeWidth={1.8} />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp'tan Teklif Al
                </a>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-li:text-gray-600
                prose-strong:text-gray-900 prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Etiketler:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-3 mb-6 rounded-full">
                <span className="font-bold text-sm tracking-wide">İLGİLİ YAZILAR</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                İlginizi <span className="text-emerald-700">Çekebilir</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-700 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{relatedPost.readTime} okuma</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="DAHA FAZLA SORU?"
        subtitle="Uzman ekibimizle görüşmek için hemen arayın"
        variant="urgent"
      />
    </article>
  );
}
