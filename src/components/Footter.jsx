import { Mail, Phone, MapPin, Linkedin, Share2, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export function FooterSection() {
  return (
    <footer className="bg-bg2 dark:bg-bg1 text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">
                  <img src="/angia-logo.png" alt="Logo" />
                </span>
              </div>
              <div>
                <div className="font-bold text-lg">ANGIA</div>
                <div className="text-xs text-gray-300">The MVP Guys</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Australia's leading MVP development studio. From idea to market in
              just 6 weeks.
            </p>
            <div className="bg-main2/20 dark:bg-main2/30 text-main2 dark:text-main2 px-3 py-1 rounded-full border border-main2/30 dark:border-main2/40 w-fit">
              🇦🇺 Proudly Australian
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                Web App Development
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Mobile App Development
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                E-Commerce Solutions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                AI-Powered Workflows
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                MVP Consulting
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {" "}
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <a
                href={`mailto:${import.meta.env.VITE_PUBLIC_EMAIL}`}
                className="flex items-center space-x-2"
              >
                <Mail className="h-4 w-4 text-main2 dark:text-logo1" />
                <span> {import.meta.env.VITE_PUBLIC_EMAIL}</span>
              </a>
              <a
                href={`tel:${import.meta.env.VITE_PUBLIC_PHONE}`}
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4 text-main2 dark:text-logo1" />
                <span> {import.meta.env.VITE_PUBLIC_PHONE}</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-main2 dark:text-logo1" />
                <span>Melbourne, Australia</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a
                  href={import.meta.env.VITE_LINKEDIN_URL}
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-main2 dark:hover:text-logo1 cursor-pointer transition-colors" />
                </a>
                <a
                  href={import.meta.env.VITE_PINTEREST_URL}
                  className="hover:scale-110 transition-transform"
                >
                  <Share2 className="h-5 w-5 text-gray-400 hover:text-main2 dark:hover:text-logo1 cursor-pointer transition-colors" />
                </a>
                <a
                  href={import.meta.env.VITE_FACEBOOK_URL}
                  className="hover:scale-110 transition-transform"
                >
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-main2 dark:hover:text-logo1 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-main2/20 dark:border-main2/30 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 Angia. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}
