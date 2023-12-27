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
