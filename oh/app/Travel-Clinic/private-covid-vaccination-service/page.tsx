import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private COVID Vaccination Service - OH Health+ Pharmacy',
  description: 'Private COVID-19 vaccination service available at our pharmacy.',
};

export default function CovidVaccinationPage() {
  const service = getServiceBySlug('/Travel-Clinic/private-covid-vaccination-service');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

