import React from "react";
import { Helmet } from "react-helmet";
import Demo from "../components/Demo";
import Sidebar from "../components/nav";

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Demo Applications | Angia Technologies</title>
        <meta
          name="description"
          content="Explore our interactive demo applications showcasing Angia Technologies' capabilities in software development, including chat bots, ai agents and automated workflows."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au/demo" />
      </Helmet>
      <Sidebar content={<Demo />} />
    </>
  );
}
