import Footer from "./Footer";
import "animate.css";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import HeroSection from "./Hero";
import StatsSection from "./Stats";
import ServicesSection from "./Services";
import PortfolioSection from "./Portfolio";
import { TestimonialsSection } from "./Testimonials";

export default function Home() {
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <div className="lg:hidden">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-2">
              <div className="flex items-center justify-center gap-4">
                <a
                  href={`tel:${import.meta.env.VITE_PUBLIC_PHONE}`}
                  className="group flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    {import.meta.env.VITE_PUBLIC_PHONE}
                  </span>
                </a>
                <div className="h-6 w-px bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                <a
                  href={`mailto:${import.meta.env.VITE_PUBLIC_EMAIL}`}
                  className="group flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <EnvelopeIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    {import.meta.env.VITE_PUBLIC_EMAIL}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
