import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Morning-After Pill - OH Health+ Pharmacy',
  description: 'Morning-after pill service available for emergency contraception.',
};

export default function MorningAfterPillPage() {
  const service = getServiceBySlug('/Services/morning-after-pill');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

