import React from "react";
import Navbar from "../../layout/navbar";

function Home() {

  return (
    <div className="flex-[1] bg-[#191717] min-h-screen">
      <video controls="true">
    <source src="https://www.youtube.com/watch?v=CmzEWmbWmBE&list=PL0zysOflRCembfeMvJEd0N1VCNR9dhNqH&index=3" type="video/mp4" />
</video>
      {/* <div className="sticky top-0 ">
        <Navbar />
      </div>
      <div className="grid grid-cols-2 items-center px-28 py-10 gap-28 bg-no-repeat bg-cover bg-[url('/src/assets/bg.jpg')] h-screen">
        <div className="">
          <img src={require('../../assets/developer.png')} className="w-[80%]" />
        </div>
        <div className="">
          <p className="text-[#fff] font-bold text-7xl pb-5">I'm a Software Engineer</p>
          <p className="text-[#fff] font-semibold text-base leading-7 ">A front-end developer creates the visual and interactive aspects of websites using HTML, CSS, and JavaScript, ensuring responsive design and cross-browser compatibility. They collaborate with designers and back-end developers to build user-friendly interfaces and optimize web performance.</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
