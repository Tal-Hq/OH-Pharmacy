import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dengue Vaccine - OH Health+ Pharmacy',
  description: 'Dengue fever vaccination.',
};

export default function DengueVaccinePage() {
  const service = getServiceBySlug('/Vaccines/dengue-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

