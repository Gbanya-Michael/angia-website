import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../components/About";
import Sidebar from "../components/nav";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Angia Technologies</title>
        <meta
          name="description"
          content="Learn about Angia Technologies, a Melbourne-based software development company delivering innovative digital solutions and custom software development services worldwide."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au/about" />
      </Helmet>
      <Sidebar content={<About />} />
    </>
  );
}
