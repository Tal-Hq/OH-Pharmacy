import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const InfoIcon = ({ type }: { type: 'address' }) => {
  const icons = {
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-primary"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

function PushPin({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute z-10 h-3.5 w-3.5 rounded-full bg-red-600 shadow-md ring-2 ring-red-900/25',
        className,
      )}
      aria-hidden
    />
  );
}

interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  /** Left column: classic hero headline (e.g. Health & Wellness). */
  leadTitle: React.ReactNode;
  leadSubtitle: string;
  leadCallToAction: {
    text: string;
    href: string;
  };
  /** Right column: notice board headline (e.g. Get your vaccinations). */
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  contactInfo: {
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      leadTitle,
      leadSubtitle,
      leadCallToAction,
      title,
      subtitle,
      callToAction,
      contactInfo,
      backgroundImage,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative overflow-hidden py-10 text-foreground md:py-14',
          !backgroundImage && 'bg-[#8f6f47] dark:bg-[#4a3824]',
          backgroundImage && 'min-h-[28rem] md:min-h-[32rem]',
          className,
        )}
        {...props}
      >
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${JSON.stringify(backgroundImage)})` }}
          />
        ) : null}

        {backgroundImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-[#2c1810]/85 " />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12] "
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 45%), radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: 'auto, 12px 12px',
              }}
            />
          </>
        ) : (
          <div
            className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.08) 0%, transparent 40%), radial-gradient(#6b4e2e 1px, transparent 1px)',
              backgroundSize: 'auto, auto, 10px 10px',
            }}
          />
        )}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16">
            {/* Left: classic hero */}
            <div className="flex w-full flex-1 flex-col justify-between lg:max-w-xl lg:pt-2">
              <div>
                {logo && (logo.text || logo.url) && (
                  <header className="mb-8 md:mb-10">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        {logo.text && (
                          <p className="text-lg font-bold text-white drop-shadow-sm">
                            {logo.text}
                          </p>
                        )}
                        {slogan && (
                          <p className="mt-1 text-xs tracking-wider text-white/85">{slogan}</p>
                        )}
                      </div>
                    </div>
                  </header>
                )}

                <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl ">
                  {leadTitle}
                </h1>
                <div className="my-6 h-1 w-20 bg-[#ECE47A] shadow-[0_0_12px_rgba(236,228,122,0.45)]" />
                <p className="mb-8 max-w-md text-base text-white/85 ">
                  {leadSubtitle}
                </p>
             
              </div>
            </div>

            {/* Right: main notice */}
            <div className="relative mx-auto w-full max-w-lg shrink-0 lg:mx-0">
              <div className="relative -rotate-1 lg:-rotate-2">
                <PushPin className="-top-1 left-1/2 -translate-x-1/2" />
                <div className="mt-2 border border-amber-200/90 bg-[#fffef7] p-6 pt-9 shadow-[6px_6px_0_rgba(0,0,0,0.12)] dark:border-amber-900/40 dark:bg-[#2a2319] dark:shadow-[6px_6px_0_rgba(0,0,0,0.35)] md:p-8 md:pt-10">
                  
                  <h2 className="font-serif text-3xl font-black uppercase leading-tight tracking-tight text-[#1a1a1a]  md:text-4xl lg:text-[2.75rem]">
                    {title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#333] ">
                    {subtitle}
                  </p>
                  <div className="mt-6 border-t border-dashed border-amber-900/15 pt-6 ">
                    <Link
                      href={callToAction.href}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    >
                      {callToAction.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 border-t border-white/20 pt-6 ">
            <div className="flex items-start text-sm text-white/95">
              <InfoIcon type="address" />
              <span>{contactInfo.address}</span>
            </div>
          </footer>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = 'HeroSection';

export { HeroSection };
