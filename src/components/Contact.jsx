import React from "react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <Container>
          <div className="py-10">
            <div className="leading-5 mb-6 rounded-sm  text-gray-600 dark:text-white/80 bg-white/70 dark:bg-black shadow-md p-3 dark:p-0">
              <div>
                <p>
                  Please fill the contact form below. We will respond to your
                  inquiry within 24 hours.
                </p>
                <p className="my-5">
                  Alternatively, if you want to send a direct email to us, you
                  can send your inquiry to
                  <span className="text-blue-600 mx-1">
                    {import.meta.env.VITE_PUBLIC_EMAIL}.
                  </span>{" "}
                </p>

                <p className="mt-5">
                  We are actively engaged with our clients. We strive for
                  perfection and creating a balanced relationship with our
                  clients is part of the dedication.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
