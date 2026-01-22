'use client';

interface TrustBadgesProps {
  variant?: 'light' | 'dark' | 'colored';
}

export default function TrustBadges({ variant = 'light' }: TrustBadgesProps) {
  const badges = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Güvenli Ödeme',
      subtitle: '256-bit SSL',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '7/24 Hizmet',
      subtitle: 'Her zaman ulaşılabilir',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '%100 Garanti',
      subtitle: 'Anında ödeme',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: '81 İl',
      subtitle: 'Tüm Türkiye',
    },
  ];

  const getStyles = () => {
    switch (variant) {
      case 'dark':
        return {
          container: 'bg-gray-800/50 border-gray-700',
          icon: 'text-emerald-400',
          title: 'text-white',
          subtitle: 'text-gray-400',
        };
      case 'colored':
        return {
          container: 'bg-white/10 border-white/20',
          icon: 'text-white',
          title: 'text-white',
          subtitle: 'text-white/70',
        };
      default:
        return {
          container: 'bg-gray-50 border-gray-200',
          icon: 'text-emerald-600',
          title: 'text-gray-900',
          subtitle: 'text-gray-500',
        };
    }
  };

  const styles = getStyles();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 p-4 rounded-xl border ${styles.container} transition-all hover:scale-105`}
        >
          <div className={styles.icon}>{badge.icon}</div>
          <div>
            <div className={`font-semibold text-sm ${styles.title}`}>{badge.title}</div>
            <div className={`text-xs ${styles.subtitle}`}>{badge.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
