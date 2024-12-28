import React from "react";
import About from "../components/About";
import Sidebar from "../components/nav";
export default function AboutPage() {
  return <Sidebar content={<About />} />;
}
