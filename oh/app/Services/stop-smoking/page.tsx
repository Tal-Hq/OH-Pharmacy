import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Stop Smoking Service - OH Health+ Pharmacy',
  description: 'Expert advice and support to help you quit smoking. Our Stop Smoking Service provides personalized guidance and Nicotine replacement products.',
};

export default function StopSmokingPage() {
  const service = getServiceBySlug('/Services/stop-smoking');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

