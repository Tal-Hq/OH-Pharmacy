import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Hepatitis A Vaccine - OH Health+ Pharmacy',
  description: 'Hepatitis A vaccination for travel protection.',
};

export default function HepatitisAVaccinePage() {
  const service = getServiceBySlug('/Vaccines/hepatitis-a-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

