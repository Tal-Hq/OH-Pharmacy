import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import CategoryCard from '@/components/services/CategoryCard';
import { services, getServicesByCategory } from '@/lib/services';
import { Service } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Our Services - OH Health+ Pharmacy',
  description: 'Find out more about our range of private services. We offer access to expert healthcare services in Canterbury.',
};

const categories: Array<{ value: Service['category']; label: string; description: string; image?: string }> = [
  { value: 'clinical', label: 'Clinical & Health Services', description: 'Comprehensive health assessments, blood pressure checks, cholesterol testing, and more.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmtSGLO_215TLN9x3DJRPc74L6tQnFmfzsOG6dFXPRvUZLjicde42UzgVnO7b7bVtCMG5Jtuo_p7cuFLIlGAODTOHh4u-U5u72fR-DwwzBgcQaB8yPJDXv9yhMW8poMuLQgxV1hS7H6oTL4HrDNKo1f5x26bFLZCvPn49KU75eHM_nuvAdzIVW6M_vJet8ww2QPwD9K4Hf5hvXk1qyIBp5Ewjv4HaoOrlQSPvuzQ7kVqNDuNnMwF0fIF-fukrC7uh5hkh7FBCdwEnU' },
  { value: 'vaccination', label: 'Vaccinations & Immunisation', description: 'Flu vaccinations, travel vaccines, and routine immunisations to keep you protected.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7x-bcvUBRxci3Y2E_TawocnlSXsAYljGQ3hqhnAxOumxRX7MJm6DqcS-5j20ztgF9K2gYLpJLO0JiVpII3RjgAnL9zXQ3Zf42V6U0f7K4gjjzCCvhMEoaRtZvBYbJ2ilNpQnNpRT4F_M4jALARlhCS-7evWCIuscrqWrw98KKgx_puy96J6FfaaqvAemay5aZ-JWsUn3X9YMGgMuLQFPndhc5MKpwnohTfi-CJLzOOtpcjUF-9DKSvveXt743x-lEOc3GSPyhV3C1' },
  { value: 'travel', label: 'Travel Health Services', description: 'Expert travel health consultations, antimalarials, and travel vaccination certificates.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkRj1i7vFrXAUHvWNwBsBLXwFsfcwAZok0dW7em9Dz5XztdD_DWEWSGYkgHwlKLzhHFF5glT4iPE3lG0x5urPeY2BrkkQSCWTeUw3J1S3EOLR1mjvDVeNo8d4ZYiSND4j8m8hAIVfY74js3SshTxz0TzDk7sMb-dCLxNDZusWfo1bsDvwU2zLBlpY8aD89hijFcxnlQiUWkXhQp-1zvysoNxCi1VTvewW8HExMDa6875OptBbeqPldjtcrRtKOocCRnAKY4l22QHpN' },
  { value: 'prescribing', label: 'Private Prescribing & Consultations', description: 'Pharmacist prescriber consultations for UTIs, ear infections, skin conditions, and more.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKtF8edOsUvVB80dNCH6qsUHJAtSqkV5lXD4u9wSKMZjru-vjT9NbnS3sSFC0j5zf3tlB7zNkkYRrQMXC6vkFLQDOGYoNl5VJa56UIxIMSluKhx1UG9OJj3l4Exhz4VIpPX6cXBwg4FWywlFY9CRwcpBxyHEKHcILXSNki3Q-hsASeVdkzQ6h2GPWn3AwcXYYeyw-LXTkEy3J-UyJ_bz45hSI-NRd4VWii213cLdXY-ExsqtU5Rv8dN8C6uKAkZ7w8eiHqLNtSEF4D'},
  { value: 'medication', label: 'Medication-Related Services', description: 'Private prescriptions, repeat prescription collection, and emergency medication supply.',  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b'},
  { value: 'children', label: 'Children & Family Services', description: 'Childhood vaccinations, head lice treatment, and newborn health support.', image: '' },
  { value: 'testing', label: 'Testing & Screening Services', description: 'STD/STI testing, blood tests, hormone testing, and comprehensive health screening.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL9SiZDq9g44NWAMHeMhlgyxjJlkZbP0xPoxyWeTQn3LeeW3AbF0e5_cnSIrkb4J2NAJs46745dIm5DB_41rwGnJ8hZceg_PIw88U3AuHmPl-pAMzCd5NbxwgcHaUnGGzsOG7_BfZSM3jmeYtAQO3lslgV2UC0DhNyYPEBd-46WBYILph2aTP9mExDyPJn6pXxYkH5Hq5lC8qHcItjuFQmYsalcYCuQUcmu_q8v7rPHprrqOXBBPsZN1yM_6piEJZkxcd6g98wI0o-' },
  { value: 'womens-health', label: 'Women\'s Health Services', description: 'Contraception, UTI treatment, menopause consultations, and pregnancy testing.' },
  { value: 'lifestyle', label: 'Lifestyle & Wellness Services', description: 'Smoking cessation, vitamin B12 injections, earwax removal, and healthy lifestyle coaching.' },
  { value: 'weight-loss', label: 'Weight Loss Services', description: 'Injectable weight loss programmes with expert support and regular check-ins.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  { value: 'certificates', label: 'Certificates & Workplace Services', description: 'Fit-to-fly certificates, occupational health vaccinations, and workplace medicals.' },
  { value: 'additional', label: 'Additional Services', description: 'Needle disposal, mobility aids, eye care, and other essential pharmacy services.' },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services"
        description="Find out more about our range of private services. We offer access to expert healthcare services in Canterbury."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#111418] mb-4">Categories</h2>
            <p className="text-[#617589] text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of healthcare services
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2  lg:gap-8">
            {categories.map((category) => {
              const categoryServices = getServicesByCategory(category.value);
              return (
                <CategoryCard
                  key={category.value}
                  category={category.value}
                  label={category.label}
                  description={category.description}
                  serviceCount={categoryServices.length}
                  image={category.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

