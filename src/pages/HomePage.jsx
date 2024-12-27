import React from "react";
import Home from "../components/home";
import Sidebar from '../components/nav';

export default function HomePage() {
  return <Sidebar content={<Home />} />;
}
