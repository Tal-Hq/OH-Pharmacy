import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceGrid from '@/components/services/ServiceGrid';
import { getServicesByCategory } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Travel Vaccines - OH Health+ Pharmacy',
  description: 'Comprehensive travel vaccination services. Get protected before your trip.',
};

export default function TravelVaccinesPage() {
  const vaccines = getServicesByCategory('vaccination');

  return (
    <>
      <Hero
        title="Travel Vaccines"
        description="Comprehensive travel vaccination services. Get protected before your trip."
        image= 'https://plus.unsplash.com/premium_photo-1661594551472-826bdbdb09a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHB2JTIwdmFjY2luZXxlbnwwfHwwfHx8MA%3D%3D'
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <ServiceGrid services={vaccines} showBooking={false} />
        </div>
      </section>
    </>
  );
}

