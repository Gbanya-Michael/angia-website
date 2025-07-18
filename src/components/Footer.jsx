import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const navigation = {
    products: [
      { name: "Birabook", href: "https://birabook.com" },
      { name: "LotsaPark", href: "https://lotsapark.com" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <p className="text-sm leading-6 text-gray-600 dark:text-white/80">
              Making digital impact through innovative software solutions.
            </p>
            <div className="flex space-x-6">
              <a
                href={`tel:${import.meta.env.VITE_PUBLIC_PHONE}`}
                className="text-indigo-600 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${import.meta.env.VITE_PUBLIC_EMAIL}`}
                className="text-indigo-600 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/angiatechnologies"
                className="text-[#1877F2] hover:text-[#1877F2]/80 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/angia-technologies"
                className="text-[#0A66C2] hover:text-[#0A66C2]/80 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/angiatechnologies"
                className="text-[#E4405F] hover:text-[#E4405F]/80 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 xl:col-span-2 xl:mt-0">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Products
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm mt-4leading-6 text-gray-700 dark:text-white">
            Address: 3478 G, 470 St Kilda Rd, Melbourne, Vic 3004
          </p>
        </div>
        <div className="mt-4 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-8 ">
          <p className="text-xs leading-5 text-gray-500 dark:text-white/80">
            &copy; {new Date().getFullYear()} Angia Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
