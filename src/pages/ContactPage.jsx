import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";
import Sidebar from "../components/nav";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Angia Technologies</title>
        <meta
          name="description"
          content="Get in touch with Angia Technologies for custom software development, web solutions, and digital transformation services. Based in Melbourne, serving clients worldwide."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au/contact" />
      </Helmet>
      <Sidebar content={<Contact />} />
    </>
  );
}
