import React from "react";
import Container from "./Container";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <Container>
        <div className="py-10 text-gray-600 leading-6 dark:text-white/80">
          <div className="bg-white/50 shadow-lg dark:bg-black rounded-sm">
            <h1 className="text-center text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
              Privacy Policy
            </h1>
            <div className="px-3 space-y-6">
              <section>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Your Privacy
                </h2>
                <p>
                  At Angia Technologies, we respect your privacy and are
                  committed to protecting your personal information. This policy
                  explains how we handle your data when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Information We Collect
                </h2>
                <p>We collect information in two ways:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Location data: Used only to show weather information in your
                    area. This data is not stored or shared.
                  </li>
                  <li>
                    Contact form submissions: When you contact us, we collect
                    your name, email, phone, and message to respond to your
                    inquiry.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To respond to your inquiries</li>
                  <li>To provide requested services</li>
                  <li>To improve our website experience</li>
                </ul>
                <p className="mt-2">
                  We do not sell or share your information with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our privacy policy, please
                  contact us at{" "}
                  <a
                    href={`mailto:${import.meta.env.VITE_PUBLIC_EMAIL}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {import.meta.env.VITE_PUBLIC_EMAIL}
                  </a>
                </p>
              </section>

              <div className="mt-8 text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
