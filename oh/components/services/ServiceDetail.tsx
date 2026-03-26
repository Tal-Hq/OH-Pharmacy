import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/lib/services';
import { Button } from '../../components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Hero from '@/components/ui/Hero';
import { FaCheckCircle } from 'react-icons/fa';
import { services } from '@/lib/services';

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const getBreadcrumbItems = (): Array<{ label: string; href?: string }> => {
    const items: Array<{ label: string; href?: string }> = [{ label: 'Home', href: '/' }];
    
    // Map categories to breadcrumb paths
    const categoryMap: Record<Service['category'], { label: string; href: string }> = {
      'clinical': { label: 'Services', href: '/Services' },
      'vaccination': { label: 'Services', href: '/Services' },
      'travel': { label: 'Services', href: '/Services' },
      'prescribing': { label: 'Services', href: '/Services' },
      'medication': { label: 'Services', href: '/Services' },
      'children': { label: 'Services', href: '/Services' },
      'testing': { label: 'Services', href: '/Services' },
      'womens-health': { label: 'Services', href: '/Services' },
      'lifestyle': { label: 'Services', href: '/Services' },
      'weight-loss': { label: 'Services', href: '/Services' },
      'certificates': { label: 'Services', href: '/Services' },
      'additional': { label: 'Services', href: '/Services' },
    };
    
    const categoryInfo = categoryMap[service.category];
    if (categoryInfo) {
      items.push(categoryInfo);
    }
    
    // Add category page link
    const categorySlug = service.category === 'weight-loss' ? 'weight-loss' : service.category;
    const categoryLabels: Record<Service['category'], string> = {
      'clinical': 'Clinical & Health Services',
      'vaccination': 'Vaccinations & Immunisation',
      'travel': 'Travel Health Services',
      'prescribing': 'Private Prescribing & Consultations',
      'medication': 'Medication-Related Services',
      'children': 'Children & Family Services',
      'testing': 'Testing & Screening Services',
      'womens-health': 'Women\'s Health Services',
      'lifestyle': 'Lifestyle & Wellness Services',
      'weight-loss': 'Weight Loss Services',
      'certificates': 'Certificates & Workplace Services',
      'additional': 'Additional Services',
    };
    
    items.push({ 
      label: categoryLabels[service.category] || 'Category', 
      href: `/Services/category/${categorySlug}` 
    });
    
    items.push({ label: service.title });
    return items;
  };
  
  const breadcrumbItems = getBreadcrumbItems();

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Hero
        title={service.title}
        description={service.description}
        image={service.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Full Description */}
            {service.fullDescription && (
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-text-light text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold text-black mb-6">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price & Booking */}
            <div className="bg-white-off rounded-md p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  {service.price && (
                    <p className="text-3xl font-display font-bold text-primary mb-2">
                      From {service.price}
                    </p>
                  )}
                  <p className="text-text-light">
                    Book your appointment online today
                  </p>
                </div>
                <Link
                    href={`/book-services?service=${service.id}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div>
                <h3 className="text-2xl font-display font-semibold text-black mb-6">
                  Related Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedServices.map((related) => (
                    <div key={related.id} className="bg-white-off rounded-md p-6">
                      <h4 className="font-display font-semibold text-lg mb-2">
                        {related.title}
                      </h4>
                      <p className="text-text-light text-sm mb-4">
                        {related.description}
                      </p>
                      <Link
                        href={related.slug}
                        className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors px-6 py-3 text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

