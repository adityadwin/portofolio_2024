import React, { useState, useEffect } from "react";
import icon from "../assets/cube.png";
import Website from "./website";
import Design from "./desain";

export default function Projects() {
  const [selectedView, setSelectedView] = useState("Website");
  const [isFading, setIsFading] = useState(false);
  const [currentView, setCurrentView] = useState("Website");

  useEffect(() => {
    if (selectedView !== currentView) {
      setIsFading(true);
      const timeout = setTimeout(() => {
        setIsFading(false);
        setCurrentView(selectedView);
      }, 300); // Duration should match the CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [selectedView, currentView]);

  return (
    <div className="bg-[#2C3333] flex flex-col lg:flex-col mx-auto pt-5 items-center h-auto p-4">
      <div className="flex items-start w-full">
        <img src={icon} alt="project" className="h-8 w-8 mr-3" />
        <h1 className="text-2xl text-white">Projects</h1>
      </div>

      <hr className="h-1 w-full my-2 bg-white border-0 rounded"></hr>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 transition-all duration-300 ${
            selectedView === "Website"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedView("Website")}
        >
          Website
        </button>
        <button
          className={`px-4 py-2 transition-all duration-300 ${
            selectedView === "Design"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedView("Design")}
        >
          Design
        </button>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentView === "Website" && <Website />}
        {currentView === "Design" && <Design />}
      </div>
    </div>
  );
}
