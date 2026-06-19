import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { getAllPosts, getCategories } from '@/data/blog';
import Container from '@/components/shared/Container';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: 'Blog & Bilgiler | Araç Alım Rehberi',
  description: 'Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilgilendirici yazılar, ipuçları ve rehberler.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <div className="blog-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]}
        eyebrow="Bilgiler & Blog"
        title="Araç Alım"
        highlight="Rehberi"
        subtitle="Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilmeniz gereken her şey. Uzman içeriklerimizle doğru kararlar verin."
        showCTAs={false}
      />

      {/* Categories */}
      <section className="border-b border-line bg-surface py-6">
        <Container>
          <div className="flex flex-wrap justify-center gap-2.5">
            <span className="rounded-full bg-brand-green px-4 py-2 text-[13px] font-semibold text-navy-950">Tümü</span>
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-ink-soft">
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="section bg-surface-alt">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40"
              >
                <div className="relative aspect-video overflow-hidden bg-surface-alt">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-block w-fit rounded-full bg-brand-green-soft px-3 py-1 text-[11.5px] font-semibold text-brand-green-dark">
                    {post.category}
                  </span>
                  <h3 className="mt-3 line-clamp-2 text-[17px] font-bold text-ink group-hover:text-brand-green-dark">{post.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[13.5px] text-ink-soft">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-line pt-3 text-[12px] text-ink-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner title="Sorularınız" highlight="mı Var?" subtitle="Hemen arayın, uzman ekibimiz size yardımcı olsun." source="blog-cta" />
    </div>
  );
}
