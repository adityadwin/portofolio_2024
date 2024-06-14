/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import icon from "../assets/profile.png";
import icon1 from "../assets/html-5.png";
import icon2 from "../assets/css-3.png";
import icon3 from "../assets/js.png";
import icon4 from "../assets/react.png";
import icon5 from "../assets/github.png";
import icon6 from "../assets/photoshop.png";
import icon7 from "../assets/illustrator.png";
import icon8 from "../assets/corel.png";

const About = () => {
  return (
    <div className=" bg-[#395B64] flex flex-col lg:flex-col mx-auto pt-5 items-center h-auto p-4">
      <div className="flex items-start w-full">
        <img src={icon} className="h-8 w-8 mr-3" />
        <h1 className="text-2xl text-white">About</h1>
      </div>
      <hr className="h-1 w-full my-2 bg-white border-0 rounded"></hr>
      <p className="text-xl my-4 text-white ml-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </p>
      <hr className="h-1 w-full my-2 bg-white border-0 rounded"></hr>

      <div className="flex flex-col lg:flex-row gap-4 my-6">
        <div className="flex flex-col">
          <h1 className="text-2xl text-white">Education</h1>
          <ul className="text-lg my-4 text-white list-disc pl-5 ml-8 lg:text-xl">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </li>
            <li>
              An unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl text-white">Experience</h1>

          <ul className="text-xl my-4 text-white list-disc pl-5 ml-8">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </li>
            <li>
              An unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-cols-4 gap-4 my-6 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl text-white text-center">Skills</h1>
          <hr className="h-1 w-full my-2 bg-white border-0 rounded"></hr>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center w-full my-2">
        <img src={icon1} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon2} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon3} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon4} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon5} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon6} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon7} className="lg:h-14 lg:w-14 h-10 w-10" />
        <img src={icon8} className="lg:h-14 lg:w-14 h-10 w-10" />
      </div>
    </div>
  );
};

export default About;
