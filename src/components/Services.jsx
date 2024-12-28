import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import ContactFormModal from "../modals/ContactFormModal";
import ReferalFormModal from "../modals/ReferalFormModal";
import { useForm } from "../contexts/FormContext";
import { services } from "../data/useData";
//

export default function Services() {
  //
  const { openForm } = useForm();

  //
  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <ContactFormModal />
        <ReferalFormModal />
        <Container>
          <div className="py-10">
            <div className=" lg:w-[48%]   px-3 mx-auto bg-white/50 shadow-lg dark:bg-black rounded-sm">
              <h1 className="text-center text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
                Our Services
              </h1>
              <p className="text-gray-600 dark:text-white/80 text-base md:text-lg">
                At Angia, we deliver comprehensive software development services
                and solutions that drive digital transformation. Based in
                Sydney, our expert team combines technical excellence with
                industry expertise to create both custom solutions and
                innovative digital products. From initial development to ongoing
                maintenance, we provide end-to-end services that help businesses
                thrive in the digital age.
              </p>
            </div>
            <div className=" mt-10">
              <div>
                <ul className="md:flex flex-wrap justify-between gap-5 mt-5">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="mx-auto mt-5 px-3 h-50 max-w-[45rem] md:w-[48%] py-5 border-gray-300 bg-white/50 dark:bg-black dark:ring-white/80 rounded-sm shadow-md dark:ring-2 hover:ring-2 hover:ring-bg1 dark:hover:ring-bg1"
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
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
