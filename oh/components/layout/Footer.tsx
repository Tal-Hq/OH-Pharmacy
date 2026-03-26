import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#005A5A] dark:bg-[#101922] text-white mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 text-white">
               <img 
                src="/images/oh-logo.png" 
                alt="OH Pharmacy Logo"
                className="h-10 w-auto grayscale brightness-175" 
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner in health and wellness. Providing expert care and private services to the Kent community.
            </p>
          {/*   <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book-services" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Book Services
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Travel Clinic
                </Link>
              </li>
              <li>
                <Link href="/Services/contact-us" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/Services/vitamin-b12" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Vitamin B12
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Travel Vaccination
                </Link>
              </li>
              <li>
                <Link href="/weight-loss-service" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/eye-care" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link href="/Vaccines/travel-vaccines" className="text-gray-300 hover:text-green-500 transition-colors text-sm">
                  All Vaccines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm leading-relaxed">
                  OH Health+ Pharmacy<br />
                  6 - 8 Longmarket<br />
                  Canterbury<br />
                  CT1 2JS<br />
                  United Kingdom
                </span>
              </li>
              {/* <li className="flex items-center gap-3">
                <FaPhone className="text-[#005A5B] flex-shrink-0" size={16} />
                <a
                  href="tel:03330065650"
                  className="text-gray-300 hover:text-green-500 transition-colors text-sm"
                >
                  0333 006 5650
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#005A5B] flex-shrink-0" size={16} />
                <a
                  href="mailto:info@ohpharmacy.co.uk"
                  className="text-gray-300 hover:text-green-500 transition-colors text-sm"
                >
                  info@ohpharmacy.co.uk
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} OH Health+ Pharmacy. All rights reserved.{' '}
            {/* <Link href="/privacy-policy" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
}

