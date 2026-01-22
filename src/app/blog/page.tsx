import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategories } from '@/data/blog';
import CTASection from '@/components/sections/CTASection';
import SocialProof from '@/components/ui/SocialProof';

export const metadata: Metadata = {
  title: 'Blog & Bilgiler | Hasar Park - Araç Alım Rehberi',
  description: 'Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilgilendirici yazılar, ipuçları ve rehberler.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  const blogStats = [
    { value: '50+', label: 'Bilgilendirici Yazı' },
    { value: '10K+', label: 'Aylık Okuyucu' },
    { value: '4', label: 'Kategori' },
    { value: '5dk', label: 'Ort. Okuma Süresi' },
  ];

  return (
    <div className="blog-page">
      {/* Hero - Matching Homepage Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-indigo-900/80 to-gray-800 pt-32 pb-20">
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-indigo-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-8 rounded-full">
                <span className="font-semibold text-sm tracking-wide">BİLGİLER & BLOG</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Araç Alım
                <span className="block text-emerald-400">Rehberi</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-xl">
                Kazalı, hasarlı, pert ve hurda araç satışı hakkında bilmeniz gereken her şey.
                Uzman içeriklerimizle doğru kararlar verin.
              </p>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {blogStats.map((stat, index) => (
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-emerald-400/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-5 py-2.5 bg-indigo-600 text-white font-semibold text-sm rounded-full">
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-violet-500 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
                    📝
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
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