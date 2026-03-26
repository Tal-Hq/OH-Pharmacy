import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Antimalarials - OH Health+ Pharmacy',
  description: 'Expert advice and antimalarial medication for your travel needs.',
};

export default function AntimalarialsPage() {
  const service = getServiceBySlug('/Travel-Clinic/antimalarials-sidcup');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

