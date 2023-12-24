import React from "react";
import NavBar from "./nav";
import Container from "./Container";
import { globe } from "../useImage";
import Footer from "./Footer";
export default function About() {
  return (
    <div className="dark:bg-black bg-gray-200">
      <NavBar />
      <Container>
        <div className="my-10">
          <div className="bg-white dark:bg-black rounded-sm">
            <h1 className="text-gray-700 py-5 text-2xl text-center dark:text-white">
              Who We Are
            </h1>
            <div>
              <div className=" w-68 h-56 py-3 md:px-3">
                <img
                  src={globe}
                  alt={globe}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-lg text-gray-500 dark:text-white/80">
                We are a team of freelance software developers spread around the
                world. We have dedicated team members situated in Europe, Asia,
                Africa and Australia.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
