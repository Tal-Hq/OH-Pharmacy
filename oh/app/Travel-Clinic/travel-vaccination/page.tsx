import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Travel Vaccination Clinic - OH Health+ Pharmacy',
  description: 'Book your travel vaccination clinic appointment for expert travel health advice, vaccines and antimalarials.',
};

export default function TravelVaccinationPage() {
  const service = getServiceBySlug('/Travel-Clinic/travel-vaccination');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

