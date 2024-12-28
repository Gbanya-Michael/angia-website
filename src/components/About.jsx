import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { globe } from "../hooks/useImage";
import Footer from "./Footer";
import { useForm } from "../contexts/FormContext";
import ContactFormModal from "../modals/ContactFormModal";
import { abouts } from "../data/useData";

const portFolio = "https://michaelgbanya.netlify.app";

export default function About() {
  //
  const { openForm } = useForm();
  //
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <ContactFormModal />
      <Container>
        <div className="py-10">
          <div className="px-3 lg:mx-auto bg-white/50 shadow-lg dark:bg-black rounded-sm">
            <h1 className="text-gray-700 py-5 text-xl md:text-3xl text-center dark:text-white">
              Who We Are
            </h1>
            <div>
              <div className=" w-68 h-56 mt-5 ">
                <img
                  src={globe}
                  alt={globe}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-gray-600 mt-5 text-base md:text-lg py-5 dark:text-white/80 ">
                <p className="mb-2">
                  Kinetic Kraft is not an agency; we are a vibrant network of
                  global freelance software developers who pride in their craft.
                  We are a dynamic collaboration of individual experts, with
                  dedicated members in Europe, Asia, Africa, and Australia.
                </p>
                <p className="mb-2">
                  Our diverse talent pool collaborates seamlessly to create
                  cutting-edge solutions for a seamless online experience. At
                  Kinetic Kraft, we take pride in being a network that
                  transcends boundaries, ready to engage with businesses and
                  entrepreneurs worldwide.
                </p>
                Our commitment is to craft engaging online solutions that
                captivate audiences and leave a lasting impression. Join us on
                this global journey, where innovation knows no boundaries, and
                the power of our freelance developer network shine.
              </div>
            </div>
          </div>
          <ul className="md:flex flex-wrap  justify-between gap-5 mt-5">
            {abouts.map((about) => (
              <li
                key={about.id}
                className="mx-auto mt-5 px-3 h-50 max-w-[45rem] md:w-[48%] py-5 border border-1  border-gray-300 bg-white/50 dark:bg-black dark:border-white/80 rounded-sm shadow-sm"
              >
                <div className="flex gap-5 py-1 ">
                  <div className="w-12 h-12 flex-shrink-0 ">
                    <img src={globe} className="w-full object-contain" />
                  </div>
                  <h1 className="text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
                    {about.title}
                  </h1>
                </div>

                <p className="text-gray-600 w-90 leading-6   dark:text-white/80">
                  {about.description}
                </p>
                {about.message && (
                  <q className="text-gray-600 w-90 text-sm italic leading-6  md:text-xl dark:text-white/80">
                    {about.message}
                  </q>
                )}

                {about.founder && (
                  <div className="w-fit">
                    <Link
                      to={portFolio}
                      target="_blank "
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      <h1 className="mt-3 text-gray-700 font-semibold text-xl md:text-2xl dark:text-white/80 ">
                        {about.founder}
                      </h1>
                      <div className="flex gap-2 dark:text-white/80">
                        <p>Founder</p>
                        <p>|</p>
                        <p className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          View profile
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div
            onClick={openForm}
            className="bg-white dark:bg-black cursor-pointer  text-white  border-2 border-black dark:border-main2  dark:hover:border-main2/80 w-full text-center p-0.5 mt-10 rounded-md "
          >
            <p className=" text-white text-lg w-full text-center p-1 rounded-md  bg-black hover:bg-black/80 dark:bg-main2 dark:hover:bg-main2/80">
              Need a solution? We are happy to help. Click here!
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
