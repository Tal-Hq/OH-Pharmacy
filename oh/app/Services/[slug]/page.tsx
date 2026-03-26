import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug, services } from '@/lib/services';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

const SERVICE_SLUG_PREFIX = '/Services/';

export async function generateStaticParams(): Promise<Params[]> {
  return services
    .filter((service) => service.slug.startsWith(SERVICE_SLUG_PREFIX))
    .map((service) => ({
      slug: service.slug.replace(SERVICE_SLUG_PREFIX, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug: slugParam } = await params;
  const slug = `${SERVICE_SLUG_PREFIX}${slugParam}`;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service - OH Health+ Pharmacy',
      description: 'Discover the services we offer at OH Health+ Pharmacy.',
    };
  }

  return {
    title: `${service.title} - OH Health+ Pharmacy`,
    description: service.description,
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<Params> }) {
  const { slug: slugParam } = await params;
  const slug = `${SERVICE_SLUG_PREFIX}${slugParam}`;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

