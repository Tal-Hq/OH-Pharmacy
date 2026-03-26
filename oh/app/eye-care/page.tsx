import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Eye Care - High-quality spectacles at affordable prices - OH Health+ Pharmacy',
  description: 'OH Eye Care offers high-quality spectacles at affordable prices. Contact our team for details.',
};

export default function EyeCarePage() {
  const service = getServiceBySlug('/eye-care');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

