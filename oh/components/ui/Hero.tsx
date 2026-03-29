import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  ctaText = 'Book Now',
  ctaHref = '/book-services',
  className,
  children,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative py-24 md:py-32 overflow-hidden  ',
        image && 'bg-cover bg-center bg-no-repeat',
        className
      )}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {/* Overlay */}
      {image && (
        <div className="absolute inset-0 bg-[#005A5B]/80 " />
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#005A5B] to-[#007A7B]" />
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {children || (
            <Button asChild variant="secondary" size="lg" className="rounded-full">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
    </section>
  );
}

