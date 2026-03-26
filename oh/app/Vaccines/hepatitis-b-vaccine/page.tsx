import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Hepatitis B Vaccine - OH Health+ Pharmacy',
  description: 'Hepatitis B vaccination.',
};

export default function HepatitisBVaccinePage() {
  const service = getServiceBySlug('/Vaccines/hepatitis-b-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

