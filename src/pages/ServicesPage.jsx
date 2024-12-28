import React from "react";
import Services from "../components/Services";
import Sidebar from '../components/nav';
export default function ServicesPage() {
  return (

      <Sidebar  content={<Services/>}/>
  );
}
