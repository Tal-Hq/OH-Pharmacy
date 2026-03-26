import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import Card from '@/components/ui/Card';
import { getServicesByCategory } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Vaccine Prices - OH Health+ Pharmacy',
  description: 'View our competitive vaccine prices for travel and general vaccinations.',
};

export default function VaccinePricesPage() {
  const vaccines = getServicesByCategory('vaccination');

  return (
    <>
      <Hero
        title="Vaccine Prices"
        description="View our competitive prices for travel and general vaccinations."
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccines.map((vaccine) => (
              <Card key={vaccine.id} hover>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {vaccine.title}
                </h3>
                <p className="text-text-light text-sm mb-4">
                  {vaccine.description}
                </p>
                {vaccine.price ? (
                  <p className="text-primary font-semibold text-lg">
                    From {vaccine.price}
                  </p>
                ) : (
                  <p className="text-text-light">Contact for pricing</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

