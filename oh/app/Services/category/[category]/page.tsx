import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceList from '@/components/services/ServiceList';
import { getServicesByCategory, getAllServices, Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';

// Define a type for all possible categories
export type CategoryKey =
  | "all"
  | "clinical"
  | "vaccination"
  | "travel"
  | "prescribing"
  | "medication"
  | "children"
  | "testing"
  | "womens-health"
  | "lifestyle"
  | "weight-loss"
  | "certificates"
  | "additional";

export const categoryMap: Record<
  CategoryKey,
  { label: string; description: string }
> = {
  all: {
    label: "All Services",
    description: "Browse all available services we offer.",
  },
  clinical: {
    label: "Clinical & Health Services",
    description:
      "Comprehensive health assessments, blood pressure checks, cholesterol testing, and more.",
  },
  vaccination: {
    label: "Vaccinations & Immunisation",
    description: "Flu vaccinations, travel vaccines, and routine immunisations.",
  },
  travel: {
    label: "Travel Health Services",
    description:
      "Expert travel health consultations, antimalarials, and travel vaccination certificates.",
  },
  prescribing: {
    label: "Private Prescribing & Consultations",
    description:
      "Pharmacist prescriber consultations for UTIs, ear infections, skin conditions, and more.",
  },
  medication: {
    label: "Medication-Related Services",
    description:
      "Private prescriptions, repeat prescription collection, and emergency medication supply.",
  },
  children: {
    label: "Children & Family Services",
    description:
      "Childhood vaccinations, head lice treatment, and newborn health support.",
  },
  testing: {
    label: "Testing & Screening Services",
    description:
      "STD/STI testing, blood tests, hormone testing, and comprehensive health screening.",
  },
  "womens-health": {
    label: "Women’s Health Services",
    description:
      "Contraception, UTI treatment, menopause consultations, and pregnancy testing.",
  },
  lifestyle: {
    label: "Lifestyle & Wellness Services",
    description:
      "Smoking cessation, vitamin B12 injections, earwax removal, and healthy lifestyle coaching.",
  },
  "weight-loss": {
    label: "Weight Loss Services",
    description:
      "Injectable weight loss programmes with expert support and regular check-ins.",
  },
  certificates: {
    label: "Certificates & Workplace Services",
    description:
      "Fit-to-fly certificates, occupational health vaccinations, and workplace medicals.",
  },
  additional: {
    label: "Additional Services",
    description:
      "Needle disposal, mobility aids, eye care, and other essential pharmacy services.",
  },
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({ category }));
}

// Metadata per category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = categoryMap[category as CategoryKey];

  if (!categoryInfo) {
    return { title: 'Category Not Found - OH Health+ Pharmacy' };
  }

  return {
    title: `${categoryInfo.label} - OH Health+ Pharmacy`,
    description: categoryInfo.description,
  };
}

// Page component
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = categoryMap[category as CategoryKey];

  if (!categoryInfo) notFound();

  const services =
    category === 'all'
      ? getAllServices()
      : getServicesByCategory(category as Service['category']);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/Services' },
    { label: categoryInfo.label },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

     
      <Hero 
        title={categoryInfo.label}
        description={categoryInfo.description}
        image= 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b'
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList 
            services={services} 
            showBooking 
            categoryName={categoryInfo.label} 
          />
        </div>
      </section>
    </>
  );
}
