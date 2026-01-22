'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { PhoneIcon, WhatsAppIcon } from './Icons';

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
    phoneText = 'Hemen Ara',
    whatsappText = 'WhatsApp',
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
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${justifyClass} w-full`}>
            {/* Phone CTA - Orange color */}
            <a
                href={`tel:${phoneToCall}`}
                onClick={handlePhoneClick}
                className="group flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 md:px-8 md:py-5 font-semibold text-lg md:text-xl rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 min-w-fit"
            >
                <PhoneIcon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:scale-110 transition-transform" strokeWidth={2} />
                {phoneText}
            </a>

            {/* WhatsApp CTA - Green color */}
            <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="group flex-1 bg-[#25D366] text-white px-6 py-4 md:px-8 md:py-5 font-semibold text-lg md:text-xl rounded-2xl hover:bg-[#1da851] transition-all flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 min-w-fit"
            >
                <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
                {whatsappText}
            </a>
        </div>
    );
}
