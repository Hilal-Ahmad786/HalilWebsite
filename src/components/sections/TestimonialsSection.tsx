'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmet Y.',
      city: 'İstanbul',
      rating: 5,
      text: 'Kazalı aracımı 30 dakikada değerlendirdiler. Piyasanın en iyi fiyatını verdiler. Kesinlikle tavsiye ederim!',
      service: 'Kazalı Araç',
    },
    {
      name: 'Zeynep K.',
      city: 'Ankara',
      rating: 5,
      text: 'Ücretsiz çekici hizmeti çok işime yaradı. Evrakları da hemen hallettiler. Profesyonel ekip.',
      service: 'Hasarlı Araç',
    },
    {
      name: 'Mehmet D.',
      city: 'İzmir',
      rating: 5,
      text: 'Pert aracımı satarken çok endişeliydim. Tüm süreci bana anlattılar, aynı gün ödeme aldım.',
      service: 'Pert Araç',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-500/10 text-emerald-600 px-6 py-3 mb-6 rounded-full">
            <span className="font-semibold text-sm">Mutlu Müşterilerimiz</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gerçek Yorumlar,
            <span className="block text-emerald-600">Gerçek Memnuniyet</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-6 text-5xl text-gray-100 font-bold">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.city} • {testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}