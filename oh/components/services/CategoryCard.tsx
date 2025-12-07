import Link from 'next/link';
import { Service } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Service['category'];
  label: string;
  description: string;
  serviceCount: number;
}

export default function CategoryCard({
  category,
  label,
  description,
  serviceCount,
}: CategoryCardProps) {
  const categorySlug = category === 'weight-loss' ? 'weight-loss' : category;

  return (
    <Link
      href={`/Services/category/${categorySlug}`}
      className="flex flex-col rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white p-6 md:p-8 lg:p-10"
    >
      <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-[#111418]">
        {label}
      </h3>

      <p className="text-[#617589] lg:text-lg mb-6 flex-grow">
        {description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-[#617589]">
          {serviceCount} service{serviceCount !== 1 ? 's' : ''}
        </span>

        <span className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors px-6 py-3 text-sm">
          View Services
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
