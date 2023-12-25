import React from "react";
import NavBar from "./nav";
import Container from "./Container";

export default function Contact() {
  return (
    <>
      <div className="dark:bg-black bg-gray-200">
        <NavBar />
        <Container>
          <div className="py-20">
            <div>Text</div>
          </div>
        </Container>
      </div>
    </>
  );
}
