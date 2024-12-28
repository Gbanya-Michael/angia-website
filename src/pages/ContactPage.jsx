import React from "react";
import Contact from "../components/Contact";
import Sidebar from "../components/nav";

export default function ContactPage() {
  return <Sidebar content={<Contact />} />;
}
