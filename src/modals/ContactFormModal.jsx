import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Container from "../components/Container";
import { useForm } from "../contexts/FormContext";
import ContactForm from "../components/ContactForm";
//

export default function ContactFormModal() {
  const { isFormOpen, closeForm } = useForm();

  return (
    <>
      {isFormOpen ? (
        <div className="pt-12  bg-black/90   w-screen absolute  z-50 bottom-0 top-0 left-0 right-0">
          <Container>
            <div className=" h-[40rem] overflow-y-scroll p-3 fixed md:p-5  right-0 left-0 rounded-sm bg-white/90 dark:bg-black w-[90%] md:w-[80%] mx-auto max-w-7xl ">
              <button
                onClick={closeForm}
                className="ml-auto mb-5 ring-1 ring-black dark:ring-white rounded-sm text-black dark:text-white flex justify-end flex-shrink-0 hover:bg-black/50 dark:hover:bg-white hover:text-white dark:hover:text-black"
              >
                <XMarkIcon className="  w-6 h-6" />
              </button>
              <div className="text-gray-800 dark:text-white text-center my-5 text-sm md:text-lg">
                Contact Form
              </div>
              <div className="text-gray-600 dark:text-white/80 my-5 text-sm md:text-lg">
                <p>
                  Fields marked with <span className="text-red-500">*</span> are
                  required fields.
                </p>
              </div>
              <ContactForm />
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
