import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private Prescriptions - OH Health+ Pharmacy',
  description: 'We offer private prescription services for your convenience.',
};

export default function PrivatePrescriptionsPage() {
  const service = getServiceBySlug('/Services/private-prescriptions');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

