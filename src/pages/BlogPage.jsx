import React from "react";
import Sidebar from "../components/nav";
import Blog from "../components/Blog";

export default function BlogPage() {
  return <Sidebar content={<Blog />} />;
}
