import React from "react";
import images from "../constans/images";
import { scroller } from "react-scroll";

const Hero = () => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="lg:min-h-[85vh] min-h-[65vh] bg-[#2C3333] flex flex-row items-center justify-center font-poppins">
      {/* Left Section (Text) */}
      <div className="flex flex-col lg:w-1/2 w-full p-6 lg:pl-8 space-y-6">
        <h1 className="text-5xl lg:text-6xl font-semibold text-white text-left">
          Hi, Nice to meet you 👋
          <br />
        </h1>
        <span className="text-5xl lg:text-6xl font-semibold text-white text-left underline underline-offset-8 decoration-[#8fa8df]">
          I'm Aditya
        </span>
        <p className="lg:text-lg text-white text-justify">
          Lulusan Sarjana dari Universitas AKI Semarang dalam bidang Teknik
          Informatika, juga memiliki minat yang kuat sebagai Frontend Developer,
          berpengalaman dalam HTML, CSS, JavaScript, dan ReactJS untuk membuat
          website yang menarik. Berorientasi pada pemecahan masalah, kreatif,
          dan berdedikasi menciptakan antarmuka pengguna yang responsif dan
          optimal.
        </p>
        <button
          className="rounded-xl text-xl dark:text-lg font-medium text-white text-start"
          onClick={() => scrollToSection("about")}
        >
          About me
          <div className="w-40 h-2 bg-green-500 rounded-full"></div>
          <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 w-full flex justify-center ml-28 hidden lg:flex">
        <img
          className="p-2 h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] rounded-full mb-24"
          src={images.Profile}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Hero;
