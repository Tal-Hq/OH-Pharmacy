import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Meningitis B Vaccine - OH Health+ Pharmacy',
  description: 'Meningitis B vaccination.',
};

export default function MeningitisBVaccinePage() {
  const service = getServiceBySlug('/Vaccines/meningitis-b-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

