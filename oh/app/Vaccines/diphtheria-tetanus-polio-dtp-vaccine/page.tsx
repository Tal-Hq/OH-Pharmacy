import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Diphtheria, Tetanus & Polio (DTP) Vaccine - OH Health+ Pharmacy',
  description: 'DTP combined vaccination.',
};

export default function DTPVaccinePage() {
  const service = getServiceBySlug('/Vaccines/diphtheria-tetanus-polio-dtp-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

