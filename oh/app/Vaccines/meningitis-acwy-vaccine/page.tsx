import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Meningitis ACWY Vaccine - OH Health+ Pharmacy',
  description: 'Meningitis ACWY vaccination.',
};

export default function MeningitisACWYVaccinePage() {
  const service = getServiceBySlug('/Vaccines/meningitis-acwy-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

