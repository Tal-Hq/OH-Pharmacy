import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Japanese Encephalitis Vaccine - OH Health+ Pharmacy',
  description: 'Japanese Encephalitis vaccination for travel.',
};

export default function JapaneseEncephalitisVaccinePage() {
  const service = getServiceBySlug('/Vaccines/japanese-encephalitis-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

