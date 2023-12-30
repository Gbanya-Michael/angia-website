import React from "react";
import NavBar from "./nav";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ReferalFormModal from "../modals/ReferalFormModal";
import { useForm } from "../contexts/FormContext";

export default function Contact() {
  const { openReferalForm } = useForm();

  const LIVE_EMAIL = "kinetic@kinetic.com";

  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <NavBar />
        <ReferalFormModal />
        <Container>
          <div className="py-20">
            <div className="my-10 leading-8 rounded-sm  text-gray-600 dark:text-white/80 bg-white/70 dark:bg-black shadow-md p-3 dark:p-0">
              <div className="max-w-4xl mx-auto">
                <p>
                  Please fill the contact form below. We will respond to your
                  inquiry within 24 hours.
                </p>
                <p className="my-5">
                  Alternatively, if you want to send a direct email to us, you
                  can send your inquiry to
                  <span className="text-blue-600 mx-1">{LIVE_EMAIL}.</span> We
                  highly recommend using the contact form provided below, this
                  will allow us to handle your inquiry faster with neccessary
                  details.
                </p>
                <p>
                  If you are contacting us about referring a potential client,
                  <span
                    onClick={openReferalForm}
                    className="cursor-pointer text-blue-600 mx-1"
                  >
                    click here.
                  </span>
                </p>
                <p className="mt-5">
                  We are actively engaged with our clients. We strive for
                  perfection and creating a balanced relationship with our
                  clients is part of the dedication.
                </p>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-black shadow-md dark:p-0 p-3 rounded-sm">
              <ContactForm />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
