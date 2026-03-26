import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private Minor Ailment Clinic - OH Health+ Pharmacy',
  description: 'Our private minor ailment clinic provides expert advice and treatment for common health issues.',
};

export default function MinorAilmentClinicPage() {
  const service = getServiceBySlug('/Services/minor-ailement-clinic');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

