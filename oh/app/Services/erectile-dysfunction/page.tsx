import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Erectile Dysfunction Treatment - OH Health+ Pharmacy',
  description: 'Expert treatment and advice for erectile dysfunction.',
};

export default function ErectileDysfunctionPage() {
  const service = getServiceBySlug('/Services/erectile-dysfunction');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

