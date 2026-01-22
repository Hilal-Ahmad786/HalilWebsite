'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Kazalı araç alımında nasıl bir süreç işliyor?',
      answer: 'Önce bizi arayarak aracınız hakkında bilgi veriyorsunuz. Sonra fotoğrafları WhatsApp üzerinden gönderiyorsunuz. 30 dakika içinde size en yüksek fiyat teklifini sunuyoruz. Teklifi kabul ederseniz, ücretsiz çekici ile aracınızı alıyor ve noter işlemlerini tamamladıktan sonra anında ödeme yapıyoruz.',
    },
    {
      question: 'Ücretsiz çekici hizmeti hangi illeri kapsıyor?',
      answer: 'Türkiye\'nin tüm illerine ücretsiz çekici hizmeti veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere her şehirden araçları alabiliyoruz.',
    },
    {
      question: 'Ödeme nasıl yapılıyor?',
      answer: 'Noter işlemleri tamamlandıktan sonra anında nakit veya EFT ile ödeme yapıyoruz. Ödeme için hiçbir ek masraf veya gecikme yoktur.',
    },
    {
      question: 'Hangi tür araçları alıyorsunuz?',
      answer: 'Kazalı, hasarlı, pert ve hurda olmak üzere tüm araç türlerini alıyoruz. Marka, model ve yıl fark etmeksizin değerlendirme yapıyoruz.',
    },
    {
      question: 'Ekspertiz ücreti var mı?',
      answer: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir. Aracınızı yerinde değerlendirip size en iyi teklifi sunuyoruz.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-violet-500/10 text-violet-600 px-6 py-3 mb-6 rounded-full">
            <span className="font-semibold text-sm">Sık Sorulan Sorular</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Merak Edilenler
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 font-medium text-gray-900 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="text-base">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>

              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}