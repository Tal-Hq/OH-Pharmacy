import { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/ui/Hero';
import BookingForm from '@/components/book/BookingForm';

export const metadata: Metadata = {
  title: 'Book Services Online - OH Health+ Pharmacy',
  description: 'Book our expert healthcare services online 24/7. Travel vaccinations, weight loss programmes, and more. Book your appointment in minutes.',
};

export default function BookServicesPage() {
  return (
    <>
      <Hero
        title="Book Your Appointment"
        description="Fill out the form below to request a booking. We'll get back to you to confirm your appointment."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<div className="bg-white rounded-xl border border-primary p-8 md:p-12">Loading booking form...</div>}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
