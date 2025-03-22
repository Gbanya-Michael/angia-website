import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../components/nav";
import Privacy from "../components/Privacy";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Angia Technologies</title>
        <meta
          name="description"
          content="Learn about how Angia Technologies handles your data, including location information for weather display and contact form submissions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au/privacy" />
      </Helmet>
      <Sidebar content={<Privacy />} />
    </>
  );
}
