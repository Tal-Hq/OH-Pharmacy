import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Microsuction Earwax Removal Service - OH Health+ Pharmacy',
  description: 'We offer a private microsuction earwax removal service. Book your appointment online.',
};

export default function EarwaxRemovalPage() {
  const service = getServiceBySlug('/Services/earwax-removal-service');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

