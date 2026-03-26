import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Chicken Pox Vaccine - OH Health+ Pharmacy',
  description: 'Chicken vaccination for travel protection.',
};

export default function CholeraVaccinePage() {
  const service = getServiceBySlug('/Vaccines/chickenpox-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

