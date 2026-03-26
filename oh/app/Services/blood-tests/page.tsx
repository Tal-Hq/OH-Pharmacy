import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blood Tests - OH Health+ Pharmacy',
  description: 'A wide range of blood tests available with fast, accurate results. Comprehensive diagnostic testing to help monitor your health and detect potential issues early.',
};

export default function BloodTestsPage() {
  const service = getServiceBySlug('/Services/blood-tests');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

