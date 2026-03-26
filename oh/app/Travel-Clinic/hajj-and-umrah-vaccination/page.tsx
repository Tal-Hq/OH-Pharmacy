import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Hajj and Umrah Vaccine - OH Health+ Pharmacy',
  description: 'Get the meningitis ACWY vaccine and certificate from our travel clinic for Hajj and Umrah.',
};

export default function HajjUmrahPage() {
  const service = getServiceBySlug('/Travel-Clinic/hajj-and-umrah-vaccination');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

