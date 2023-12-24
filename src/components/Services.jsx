import React from "react";
import NavBar from "./nav";
import Container from "./Container";

export default function Services() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="py-20">
          <div>
            <h1 className="text-center">Our Services</h1>
          </div>
        </div>
      </Container>
    </>
  );
}
