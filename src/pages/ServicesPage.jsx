import React from "react";
import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import Sidebar from "../components/nav";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Angia Technologies</title>
        <meta
          name="description"
          content="Explore Angia Technologies' comprehensive range of services including web development, AI integration, process automation, and digital solutions for businesses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au/services" />
      </Helmet>
      <Sidebar content={<Services />} />
    </>
  );
}
