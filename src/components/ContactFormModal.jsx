import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Container from "./Container";
import { useForm } from "../contexts/FormContext";
import ContactForm from "./ContactForm";
//

export default function ContactFormModal() {
  const { isFormOpen, closeForm } = useForm();
  return (
    <>
      {isFormOpen ? (
        // <div className="relative">
        <div className="pt-20 bg-black/80 w-screen absolute  z-50 bottom-0 top-0 left-0 right-0">
          <Container>
            <div className=" p-3 absolute md:p-5 right-0 left-0 bg-white w-[85%] mx-auto max-w-7xl ">
              <button
                onClick={closeForm}
                className="ml-auto mb-5 ring-1 ring-black rounded-sm text-black flex justify-end flex-shrink-0 hover:bg-black/50 hover:text-white"
              >
                <XMarkIcon className="  w-6 h-6" />
              </button>
              <div className="text-gray-600 text-center my-5 text-sm md:text-lg">
                Referral
              </div>
              <div className="text-gray-6000 my-5 text-sm md:text-lg">
                <p className="my-5">
                  <span className="text-red-700">Warning!</span> Services you
                  add here will be shown to the public for booking. Only add
                  services that you offer.
                </p>
                <p>
                  Fields marked with <span className="text-red-500">*</span> are
                  required fields.
                </p>
              </div>
              <ContactForm />
            </div>
          </Container>
        </div>
      ) : // </div>
      null}
    </>
  );
}
