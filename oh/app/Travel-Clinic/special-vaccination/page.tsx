import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Speciality Vaccine - OH Health+ Pharmacy',
  description: 'We offer private speciality vaccines at our pharmacy, including Chickenpox, Shingles and HPV vaccines.',
};

export default function SpecialVaccinationPage() {
  const service = getServiceBySlug('/Travel-Clinic/special-vaccination');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

