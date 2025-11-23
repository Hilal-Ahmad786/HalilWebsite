import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/data/blog';
import CTASection from '@/components/sections/CTASection';

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

  return (
    <article className="blog-post-page">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-16">
        <div className="container mx-auto px-6 text-white">
          <div className="max-w-3xl mx-auto text-center">
            {/* Category */}
            <div className="inline-block bg-lime-400/20 text-lime-400 px-4 py-2 mb-6 border-2 border-lime-400">
              <span className="font-bold text-sm tracking-widest">{post.category.toUpperCase()}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
              <span>✍️ {post.author}</span>
              <span>📅 {new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
              <span>⏱️ {post.readTime} okuma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <div 
              className="prose prose-sm max-w-none
                prose-headings:font-black prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-li:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Etiketler:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold"
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
            <h2 className="text-3xl font-black text-center mb-12 text-gray-900">
              İLGİNİZİ <span className="text-purple-600">ÇEKEBİLİR</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white shadow-md hover:shadow-xl transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white text-4xl">
                    📝
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition text-sm">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">{relatedPost.readTime} okuma</p>
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