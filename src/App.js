import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-7xl bg-[#2C3333]">
        <div className="w-full fixed lg:px-32 px-2 bg-[#2C3333] z-50">
          <Navbar />
        </div>
        <div id="hero" className="max-w-7xl mx-auto pt-24">
          <Hero />
        </div>
        <div id="about" className="min-w-7xl bg-[#395B64] pt-12">
          <div className="max-w-7xl mx-auto pb-4">
            <About />
          </div>
        </div>
        <div id="projects" className="min-w-7xl bg-[#22C3333] pt-20">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
