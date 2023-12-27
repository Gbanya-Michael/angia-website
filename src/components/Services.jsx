import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./nav";
import Container from "./Container";
import Footer from "./Footer";
import ContactFormModal from "../modals/ContactFormModal";
import ReferalFormModal from "../modals/ReferalFormModal";
import { useForm } from "../contexts/FormContext";

//
const services = [
  {
    id: "1",
    title: "Web Development",
    description: `Elevate your online presence with our custom web development
                    services. We use modern technologies to modify or introduce your online
                    presence in style.`,
  },
  {
    id: "2",
    title: "SEO Services",
    description: `Dominate search engines with our 
    powerful SEO optimization services. We make sure you are being found online
    by powerful search engines like google.
                    `,
  },
  {
    id: "3",
    title: "SSM Services",
    description: `Low or zero social media presence? We will set up standard social media accounts
     and connect to your webiste. This will 
     boost traffic and increase sales.`,
  },
];

//

export default function Services() {
  //
  const { openForm, openReferalForm } = useForm();

  //
  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <NavBar />
        <ContactFormModal />
        <ReferalFormModal />
        <Container>
          <div className="py-20">
            <div className="lg:w-1/2 px-3 lg:mx-auto bg-white/50 my-5 shadow-lg dark:bg-black rounded-sm">
              <h1 className="py-5 text-center font-semibold text-xl font-serif  md:text-3xl text-gray-800 dark:text-white/80 ">
                Services
              </h1>

              <p className="text-gray-600 py-5 dark:text-white/80 ">
                We are a team of freelance software developers spread around the
                world. We have dedicated team members situated in Europe, Asia,
                Africa and Australia.
              </p>
            </div>
            <div className=" mt-20">
              <div>
                <ul className="md:flex flex-wrap justify-between gap-5 mt-5">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="mx-auto mt-5 px-3 h-50 max-w-96 md:w-96 py-5 border border-1  border-gray-300 bg-white/80 dark:bg-black dark:border-white/50 rounded-sm shadow-md"
                    >
                      <div className="flex gap-5 py-1 ">
                        <div className="flex flex-col gap-2">
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                        </div>
                        <h1 className="text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
                          {service.title}
                        </h1>
                      </div>

                      <p className="text-gray-600 w-90 text-sm leading-6  md:text-xl dark:text-white/80">
                        {service.description}
                      </p>

                      <button
                        onClick={openForm}
                        className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1"
                      >
                        Get in touch
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={openReferalForm}
                className="md:text-center text-xl lg:text-start text-blue-600 hover:text-blue-700 underline mt-3"
              >
                Refer a client
              </button>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
