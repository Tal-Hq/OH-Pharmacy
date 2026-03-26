import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Cholera Vaccine - OH Health+ Pharmacy',
  description: 'Cholera vaccination for travel protection.',
};

export default function CholeraVaccinePage() {
  const service = getServiceBySlug('/Vaccines/cholera-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

