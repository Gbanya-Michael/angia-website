import React from "react";
import { Helmet } from "react-helmet";
import Home from "../components/Home";
import Sidebar from "../components/nav";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Angia Technologies | Digital Solutions & Software Development
        </title>
        <meta
          name="description"
          content="Angia Technologies is a Melbourne-based software development company specializing in custom software solutions, web development, AI integration, and digital transformation services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au" />
      </Helmet>
      <Sidebar content={<Home />} />
    </>
  );
}
