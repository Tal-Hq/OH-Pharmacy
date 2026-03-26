import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Travel Health Packs - OH Health+ Pharmacy',
  description: 'Book your travel vaccination clinic appointment for expert travel health advice, vaccines and antimalarials.',
};

export default function TravelVaccinationPage() {
  const service = getServiceBySlug('/Travel-Clinic/travel-health-packs');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

