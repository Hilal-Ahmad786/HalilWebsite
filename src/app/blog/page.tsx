import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategories } from '@/data/blog';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Blog & Bilgiler | Premium Auto - Araç Alım Rehberi',
  description: 'Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilgilendirici yazılar, ipuçları ve rehberler.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-16">
        <div className="container mx-auto px-6 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 px-4 py-2 mb-6 border-2 border-lime-400">
            <span className="font-bold text-sm tracking-widest">BİLGİLER & BLOG</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            ARAÇ ALIM <span className="text-lime-400">REHBERİ</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilmeniz gereken her şey
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-purple-600 text-white font-bold text-sm">
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 font-bold text-sm hover:bg-purple-50 hover:text-purple-600 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white shadow-md hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-fuchsia-600 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                    📝
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-xs font-bold text-purple-600 mb-2 uppercase">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📅 {new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="SORULARINIZ MI VAR?"
        subtitle="Hemen arayın, uzman ekibimiz size yardımcı olsun"
        variant="lime"
      />
    </div>
  );
}