import React from "react";
import NavBar from "./nav";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div className="dark:bg-black bg-gray-200">
        <NavBar />
        <Container>
          <div className="py-20">
            <div className="my-10  text-gray-600 dark:text-white/80 bg-white/70 dark:bg-black shadow-md p-3 dark:p-0">
              Hello
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
