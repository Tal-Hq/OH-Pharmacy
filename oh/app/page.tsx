'use client';
import Link from 'next/link';
import { Feature72 } from '@/components/ui/feature-72';
import { HeroSection } from '@/components/ui/hero-section-2';
import Map from '@/components/map';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-white dark:bg-[#101922]">
      {/* Hero Section */}
      <HeroSection
        logo={{
          url: "/images/oh-logo.png",
          alt: "OH Health+ Pharmacy Logo",
          text: "Welcome to OH Health+ Pharmacy"
        }}
        title={
          <>
            Your Partner in <br />
            <span className="text-primary">Health & Wellness</span>
          </>
        }
        subtitle="We provide expert travel vaccinations, weight loss programmes, wellness injections, and comprehensive private healthcare services."
        callToAction={{
          text: "BOOK AN APPOINTMENT",
          href: "/book-services",
        }}
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuACJT9xEVblSG9BgdONhzauh1Pgqs2YiQdALqxWci0h6zigwK-v1_UZdkYnTWpdD3y9Jzw6TaFya9Mrwxhc6wgBMyl64LPPDaqZrHxOrxy-qf7c_DION9I6IX8ug_-i7ke6U19FYMIr2X1GtBnholl6tVp3OyBSwE1r3yRUN4kZj1pzOpGl6HI5Y1XIrc32FXTTwDx_DcKCV7OgoUOipuYilC1j11McCe51YPJqfo65KDZvQRBA1BaHRt44WOyFcP7w-nuftE20Vlev"
        contactInfo={{
          phone: "",
          address: "6 - 8 Longmarket, Canterbury, CT1 2JS, United Kingdom",
        }}
      />

      {/* Meningococcal Treatment Promo Section */}
      <section className="px-4 py-10 mt-24 sm:px-6 lg:px-8 lg:py-14">
        <div
          className="relative mx-auto max-w-screen-xl overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGMYjSJr6JnmwDdITxz1i9ky0R8QVpF8Tg-5GWEWgrPReLJoKq9d2WqQJsDLoRD7r0EfRjQ62Le4fIPWXHS7pYZ41gKTTtNde_z9b0-uO08_xtgjkSooidZz2c9kpMbRFyXj-wTL-bry6H-icJPsrCG4ZzkuW2HeSrQ4pPZzhXLvxJhiGW9natkHjqhIeBR1OGetAP8daRi6xkXubn1ioFb_Q5xlK7a_0h-5HchVilEvbSBH7U5rjWZR77Pb4T6xcI06IGU1TjPeA')",
          }}
        >
          <div className="bg-black/25 p-5 sm:p-8 lg:p-12">
            <div className="ml-auto max-w-2xl rounded-2xl bg-white/90 p-6 backdrop-blur-sm sm:p-8">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-[#111418] sm:text-4xl">
               Meningitis Vaccine Available
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#374151]">
                 We offer a private meningitis vaccination service, symptom assessment, and medically guided treatment support. 
                 Book your appointment online today.
              </p>
             
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book-services?service=meningitis-acwy"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Book Appointment
                </Link>
               {/*  <Link
                  href="/Vaccines/meningitis-b-vaccine"
                  className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-6 py-3 text-sm font-semibold text-[#111418] transition-colors hover:bg-gray-50"
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <Feature72
        heading="Featured Services"
        description="Comprehensive medical solutions designed around you - combining advanced expertise with compassionate care."
        linkUrl="/Services"
        linkText="View All Services"
        features={[
          {
            id: "weight-loss",
            title: "Weight Loss Service",
            description: "We offer a private weight loss service. Our service offers online consultations, diet and exercise advice and regular check-in appointments.",
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            href: "/weight-loss-service"
          },
          {
            id: "vitamin-b12",
            title: "Vitamin B12",
            description: "We offer a private Vitamin B12 injection service at our pharmacy. Book your appointment online.",
            image: "https://plus.unsplash.com/premium_photo-1673953886109-a3249821993d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5qZWN0aW9ufGVufDB8fDB8fHww",
            href: "/Services/vitamin-b12"
          },
          {
            id: "travel-clinic",
            title: "Travel Clinic",
            description: "Are you travelling abroad soon? Get expert travel health advice, vaccines and antimalarials at our pharmacy.",
            image: "https://images.unsplash.com/photo-1758691461957-474a7686e388?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGljYWwlMjBjb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
            href: "/Travel-Clinic/travel-vaccination"
          },
          {
            id: "meningitis-acwy",
            title: "Meningitis ACWY",
            description: "Private meningitis ACWY vaccination service, including Hajj and Umrah requirements.",
            image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?w=400&auto=format&fit=crop&q=60",
            href: "/Vaccines/meningitis-acwy-vaccine"
          },
          {
            id: "flu-vaccination",
            title: "Flu Vaccination",
            description: "Seasonal flu vaccination available with fast appointments and expert care.",
            image: "https://images.unsplash.com/photo-1691139600731-7232eaa980c3?w=400&auto=format&fit=crop&q=60",
            href: "/Services/flu-vaccination"
          },
          {
            id: "erectile-dysfunction",
            title: "Erectile Dysfunction",
            description: "Discreet private consultations and treatment options with pharmacist prescribers.",
            image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=400&auto=format&fit=crop&q=60",
            href: "/Services/erectile-dysfunction"
          }
        ]}
      />

      

      {/* About Us Section */}
      <section id="about" className="w-full  mx-auto bg-[#F4F7F6] dark:bg-[#182430] py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#111418] dark:text-[#F4F7F6] text-3xl font-bold tracking-tight">Committed to Your Wellbeing</h2>
              <p className="text-[#617589] dark:text-[#a0aec0]  text-base leading-relaxed">At OH Health+ Pharmacy, our mission is to provide exceptional, patient-centered care. We believe in building lasting relationships within our community, offering not just treatments but also trusted advice and support for your health journey. We are here to ensure you receive the professional and compassionate service you deserve.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/Services">
                  <button
                   className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-primary text-primary-foreground hover:text-white hover:bg-primary/90  rounded-full px-6 py-4  border border-white tracking-wide text-primary transition-colors hover:text-primary/80">
                    <span className="truncate">Browse Services</span>
                  </button>
                </Link>
                <Link href="/Services/contact-us">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-[#E8A87C] text-[#005A5B] font-bold hover:bg-[#E8A87C]/90 transition-colors">
                    <span className="truncate">Contact Us Today</span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                className="rounded-xl object-cover w-full h-full aspect-[4/3]" 
                alt="A friendly pharmacist smiling behind the counter in a bright, modern pharmacy." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbBtctQoNv0eA17XksoLrRvIVKiJbDzMSX53Ph-naaSSfzT4a-zJvGhkRnAkWKolhR0q2NmfiEP4dXhl0WUQeFUxFPqroBV08W3F_posXumoRMlLxxLlbitplfF1h6nHnWN64uVAAGQGAz5FKdDdkoj3ugBTLT7CogQXk3hpOJo08YK91YrfvE50SwU4-DB6odbqUPpmxZqbv63St5tPQTIpxryE7dut-Q4EeyHR5FeUDeydLaCXeO408DlMHn_5b-gPz56ngr_pk4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111418] dark:text-[#F4F7F6]">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-[#617589] dark:text-[#a0aec0]">
              We're here to help. Contact us with any questions you may have.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm">
              <form action="#" className="space-y-6" method="POST">
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="name">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="name"
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="email">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="email"
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-[#F4F7F6]" htmlFor="message">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="block w-full rounded border border-slate-300 dark:border-slate-700 bg-[#F4F7F6] dark:bg-[#182430] shadow-sm focus:border-[#005A5B] focus:ring-[#005A5B] sm:text-sm px-3 py-2 text-[#111418] dark:text-[#F4F7F6]"
                      id="message"
                      name="message"
                      rows={4}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 h-12 px-5 bg-primary text-white text-base font-bold hover:bg-[#005A5B]/90 transition-colors"
                    type="submit"
                  >
                    <span className="truncate">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2">
              <Map />

            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}