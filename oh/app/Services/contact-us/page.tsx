import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Card from "@/components/ui/Card";

export const metadata: Metadata = { title: 'Contact Us - OH Health+ Pharmacy', description: 'Get in touch with OH Health+ Pharmacy. We are here to help with all your healthcare needs.', 

};

export default function ContactUsPage() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="Contact Us"
        description="Get in touch with OH Health+ Pharmacy. We are here to help with your healthcare needs."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b"
      />

      {/* FORM + CONTACT CARDS SIDE-BY-SIDE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
           {/*  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111418] dark:text-[#F4F7F6]">
               Get In Touch 
            </h2> 
            <p className="mt-4 text-lg text-[#617589] dark:text-[#a0aec0]"> 
              We're here to help. Contact us with any questions you may have. 
            </p>  */}
          
          </div>

          <div className="grid grid-cols-1  gap-12">

            {/* LEFT — GET IN TOUCH FORM */}
            <div className="bg-white rounded-xl border border-border p-8">

              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT — CONTACT INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Address */}
              <Card className="border border-border shadow-none">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Address
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    OH Health+ Pharmacy <br />
                    6 - 8 Longmarket <br />
                    Canterbury <br />
                    CT1 2JS <br />
                    United Kingdom
                  </p>
                </div>
              </Card>

              {/* Email */}
              <Card className="border border-border shadow-none">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@ohpharmacy.co.uk"
                    className="text-primary hover:underline text-sm break-all"
                  >
                    info@ohpharmacy.co.uk
                  </a>
                </div>
              </Card>

              {/* Opening Hours */}
            {/*   <Card className="border border-border shadow-none">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-white text-2xl" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    Mon–Wed: 9am–6pm <br />
                    Thu–Fri: Closed <br />
                    Sat–Sun: 9am–5pm
                  </p>
                </div>
              </Card> */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
