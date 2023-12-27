import React from "react";
import NavBar from "./nav";
import Container from "./Container";
import { globe } from "../hooks/useImage";
import Footer from "./Footer";
import { useForm } from "../contexts/FormContext";
import ContactFormModal from "./ContactFormModal";

//
const abouts = [
  {
    id: "1",
    title: "Our Mision",
    description: ` We are a team of freelance software developers spread around the
                world. We have dedicated team members situated in Europe, Asia,
                Africa and Australia.`,
  },
  {
    id: "2",
    title: "Our Target",
    description: `Dominate search engines with our 
    powerful SEO optimization services. We make sure you are being found online
    by powerful search engines like google.
                    `,
  },
  {
    id: "3",
    title: "Our Community",
    description: `Low or zero social media presence? We will set up standard social media accounts
     and connect to your webiste. This will 
     boost traffic and increase sales.`,
  },
  {
    id: "4",
    title: "Our team",
    description: `Low or zero social media presence? We will set up standard social media accounts
     and connect to your webiste. This will 
     boost traffic and increase sales.`,
  },
  {
    id: "5",
    title: "A message from the founder.",
    description: "",
    message: `Low or zero social media presence? We will set up standard social media accounts
     and connect to your webiste. This will 
     boost traffic and increase sales.`,
  },
];

export default function About() {
  //
  const { openForm } = useForm();
  //
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <NavBar />
      <ContactFormModal />
      <Container>
        <div className="py-20">
          <div className="lg:w-1/2 px-3 lg:mx-auto bg-white/50 mt-10 shadow-lg dark:bg-black rounded-sm">
            <h1 className="text-gray-700 py-5 text-2xl text-center dark:text-white">
              Who We Are
            </h1>
            <div>
              <div className=" w-68 h-56 ">
                <img
                  src={globe}
                  alt={globe}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-gray-600 py-5 dark:text-white/80 ">
                We are a team of freelance software developers spread around the
                world. We have dedicated team members situated in Europe, Asia,
                Africa and Australia.
              </p>
            </div>
          </div>
          <ul className="md:flex flex-wrap justify-between gap-5 mt-5">
            {abouts.map((about) => (
              <li
                key={about.id}
                className="mx-auto mt-5 px-3 h-50 max-w-[45rem] md:w-[48%] py-5 border border-1  border-gray-300 bg-white/50 dark:bg-black dark:border-white/80 rounded-sm shadow-md"
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
              </li>
            ))}
          </ul>

          <div
            onClick={openForm}
            className="bg-white dark:bg-black  text-white  border-2 border-black dark:border-main2  dark:hover:border-main2/80 w-full text-center p-0.5 mt-10 rounded-md "
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
