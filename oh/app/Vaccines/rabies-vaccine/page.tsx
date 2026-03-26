import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Rabies Vaccine - OH Health+ Pharmacy',
  description: 'Rabies vaccination for travel protection.',
};

export default function RabiesVaccinePage() {
  const service = getServiceBySlug('/Vaccines/rabies-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

