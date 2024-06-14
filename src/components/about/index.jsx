import React from "react";
import Navbar from "../../layout/navbar";

function About() {
  return (
    <div className="flex-[1] bg-[#191717] min-h-screen">
      <div className="sticky top-0 ">
        <Navbar />
      </div>
      <p className="">About</p>
    </div>
  );
}

export default About;
