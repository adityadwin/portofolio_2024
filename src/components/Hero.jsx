import React from "react";
import images from "../constans/images";
import { Link } from "react-router-dom";
import { animateScroll as scroller } from "react-scroll";

const Hero = () => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="lg:min-h-[85vh] min-h-[65vh] bg-[#2C3333] flex flex-col font-poppins">
      <div className="items-center justify-center flex pt-16">
        <div class="shrink-0">
          <img
            class="h-[250px] w-[250px] dark:w-[200px] dark:h-[200px] object-cover rounded-full"
            src={images.Profile}
          />
        </div>
      </div>
      <div className="bg-[#2C3333] p-4 items-center justify-center flex">
        <h1 className="text-4xl dark:text-3xl font-semibold text-white text-center">
          Hi, Nice to meet you <br /> I'm Aditya
        </h1>
      </div>
      <div className="bg-[#2C3333] h-1/5 items-center justify-center flex ">
        <p className=" lg:w-[65%] dark:text-lg text-lg lg:text-xl text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="bg-[#2C3333] pb-10 pt-4 items-center justify-center flex ">
        <button className="bg-gray-500 rounded-xl py-1 px-1 text-xl dark:text-lg font-medium text-white w-[50%] lg:w-[21%]">
          <Link to="/about" onClick={() => scrollToSection("about")}>
            More about me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
