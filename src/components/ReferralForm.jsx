import React from "react";
import Container from "./Container";
export default function ReferralForm() {
  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <Container>
          <div className="py-20 absolute w-screen z-50 h-screen top-0 bottom-0 right-0 bg-black/80 ">
            <div className=" w-24 px-3 mx-auto bg-white/50 my-5 shadow-lg dark:bg-black rounded-sm">
              Referral
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
