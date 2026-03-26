import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'HPV Vaccination - OH Health+ Pharmacy',
  description: 'Human Papillomavirus (HPV) vaccination.',
};

export default function HPVVaccinationPage() {
  const service = getServiceBySlug('/Vaccines/hpv-vaccination');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

