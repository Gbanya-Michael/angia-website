import React from "react";
import Container from "./Container";
import { globe } from "../hooks/useImage";
import Footer from "./Footer";
import { abouts } from "../data/useData";
import { Link } from "react-router-dom";

export default function About() {
  //
  //
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <Container>
        <div className="py-10 text-gray-600 leading-6  dark:text-white/80">
          <div className="px-3 lg:mx-auto bg-white/50 shadow-lg dark:bg-black rounded-sm">
            <h1 className="text-center text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
              About Angia
            </h1>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className=" md:text-lg leading-6 text-gray-600 dark:text-gray-300">
                Angia is a dynamic software development company headquartered in
                Sydney, Australia, specializing in creating innovative digital
                solutions that drive business growth and efficiency.
              </p>

              <div className="mt-3 space-y-2">
                <p>
                  Founded with a vision to transform how businesses operate in
                  the digital age, we combine technical expertise with deep
                  industry knowledge to deliver solutions that make a real
                  impact. Our team of experienced developers and technology
                  experts are passionate about creating software that solves
                  complex business challenges.
                </p>

                <p>
                  We take pride in our dual approach to digital excellence:
                  providing custom software development services tailored to
                  specific business needs, while also maintaining a portfolio of
                  successful digital products used by organizations worldwide.
                  Our products, including Birabook and LotsApark, showcase our
                  commitment to innovation and user-centric design.
                </p>

                <p>
                  What sets us apart is our dedication to long-term
                  partnerships. We don't just build software; we provide ongoing
                  support and maintenance to ensure our solutions continue to
                  evolve with your business needs. Our local presence in Sydney,
                  combined with our global reach, allows us to serve clients
                  across different time zones while maintaining the highest
                  standards of service delivery.
                </p>
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

                <p>{about.description}</p>
                {about.message && (
                  <q className="text-gray-600 w-90 text-sm italic leading-6  md:text-xl dark:text-white/80">
                    {about.message}
                  </q>
                )}
              </li>
            ))}
          </ul>

          <div className="bg-white dark:bg-black cursor-pointer  text-white  border-2 border-black dark:border-main2  dark:hover:border-main2/80 w-full text-center p-0.5 mt-10 rounded-md ">
            <p className=" text-white text-lg w-full text-center p-1 rounded-md  bg-black hover:bg-black/80 dark:bg-main2 dark:hover:bg-main2/80">
              <Link to="/contact">
                Need a solution? We are happy to help. Click here!
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
