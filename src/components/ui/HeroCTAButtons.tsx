'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface HeroCTAButtonsProps {
    trackingSource: string;
    whatsappMessage?: string;
    phoneText?: string;
    whatsappText?: string;
    phoneNumber?: string;
    align?: 'center' | 'left';
}

export default function HeroCTAButtons({
    trackingSource,
    whatsappMessage,
    phoneText = 'HEMEN ARA',
    whatsappText = 'WHATSAPP',
    phoneNumber,
    align = 'center'
}: HeroCTAButtonsProps) {
    const handlePhoneClick = () => {
        trackPhoneClick(trackingSource);
    };

    const handleWhatsAppClick = () => {
        trackWhatsAppClick(trackingSource);
    };

    const defaultMessage = 'Merhaba, araç alımı için bilgi almak istiyorum.';
    const message = whatsappMessage || defaultMessage;
    const phoneToCall = phoneNumber || siteConfig.phone;

    const justifyClass = align === 'left' ? 'justify-start' : 'justify-center';

    return (
        <div className={`flex flex-col lg:flex-row gap-4 mb-8 ${justifyClass} w-full`}>
            <a
                href={`tel:${phoneToCall}`}
                onClick={handlePhoneClick}
                className="flex-1 bg-lime-400 text-gray-900 px-6 py-4 md:px-8 md:py-5 font-black text-lg md:text-xl hover:bg-lime-300 transition flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-fit"
            >
                <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
                </svg>
                {phoneText}
            </a>
            <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#25D366] text-white px-6 py-4 md:px-8 md:py-5 font-black text-lg md:text-xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-fit"
            >
                <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {whatsappText}
            </a>
        </div>
    );
}
