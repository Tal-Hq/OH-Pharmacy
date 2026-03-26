import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceList from '@/components/services/ServiceList';
import { services } from '@/lib/services';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'All Services - OH Health+ Pharmacy',
  description:
    'Find out more about our range of private services. We offer access to expert healthcare services in Canterbury.',
};

export default function AllServicesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/Services' },
    { label: 'All Services' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <Hero
        title="All Services"
        description="Browse our complete range of private services. We offer access to expert healthcare services in Canterbury."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList services={services} showBooking={true} />
        </div>
      </section>
    </>
  );
}
