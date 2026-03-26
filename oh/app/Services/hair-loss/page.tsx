import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Hair Loss Treatment - OH Health+ Pharmacy',
  description: 'Expert hair loss treatment and consultation services.',
};

export default function HairLossPage() {
  const service = getServiceBySlug('/Services/hair-loss');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

