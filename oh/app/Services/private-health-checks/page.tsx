import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private Health Checks - OH Health+ Pharmacy',
  description: 'Advanced screening for optimal wellness. Proactive health screening to monitor and manage your wellbeing with comprehensive private health check services.',
};

export default function PrivateHealthChecksPage() {
  const service = getServiceBySlug('/Services/private-health-checks');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

