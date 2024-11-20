import React, { useState, useEffect } from "react";
import icon from "../assets/user.png";
import icon1 from "../assets/html-5.png";
import icon2 from "../assets/css-3.png";
import icon3 from "../assets/js.png";
import icon4 from "../assets/react.png";
import icon5 from "../assets/github.png";
import icon6 from "../assets/photoshop.png";
import icon7 from "../assets/illustrator.png";
import icon8 from "../assets/corel.png";

const About = () => {
  const [selectedView, setSelectedView] = useState("Education");
  const [isFading, setIsFading] = useState(false);
  const [currentView, setCurrentView] = useState("Education");

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
    <div className="bg-[#395B64] flex flex-col lg:flex-col mx-auto items-center h-auto p-4">
      <div className="flex items-start w-full ">
        <img src={icon} alt="project" className="h-8 w-8 mr-3" />
        <h1 className="text-2xl text-white">About Me</h1>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 transition-all duration-300 ${
            selectedView === "Education"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedView("Education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 transition-all duration-300 ${
            selectedView === "Experience"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
          onClick={() => setSelectedView("Experience")}
        >
          Experience
        </button>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentView === "Education" && (
          <div className="flex flex-col w-max">
            <ul className="text-lg my-4 text-white list-disc pl-5 ml-8 lg:text-xl">
              <li>
                <h2 className="flex lg:gap-x-4 gap-x-2 text-xl font-semibold">
                  Universitas AKI Semarang
                  <p className="text-lg font-light">(2020 - 2024)</p>
                </h2>
                <p className="flex lg:gap-x-4 gap-x-2 text-lg font-normal">
                  S1 Teknik Informatika
                  <p className="text-lg font-light">IPK 3.47/4.00</p>
                </p>
              </li>
              <li>
                <h2 className="flex lg:gap-x-4 gap-x-2 text-xl font-semibold">
                  SMKS Garuda Nusantara
                  <p className="text-lg font-light">(2017 - 2020)</p>
                </h2>
                <p className="flex lg:gap-x-4 gap-x-2 text-lg font-normal">
                  Teknik Komputer & Jaringan
                </p>
              </li>
            </ul>
          </div>
        )}

        {currentView === "Experience" && (
          <div className="flex flex-col w-full">
            <ul className="text-xl my-4 text-white list-disc pl-5 ml-8">
              <li>
                <h2 className="flex lg:gap-x-4 gap-x-2 text-xl font-semibold">
                  Kodepedia Matari Studio
                  <p className="text-lg font-light">| Magang</p>
                </h2>
                <p className="text-lg font-normal">
                  Mentor (Agustus 2023 – September 2023)
                  <p className="text-lg font-light">
                    1. Sukses menyampaikan materi CorelDraw kepada dua orang
                    peserta kursus untuk membuat sebuah desain sederhana dalam
                    sekali pertemuan.
                  </p>
                  <p className="text-lg font-light">
                    2. Membantu membuat rancangan UML diagram pada projek
                    website E-Learning guna meningkatkan pembelajaran peserta
                    kursus.
                  </p>
                </p>
              </li>
              <li className="mt-4">
                <h2 className="flex lg:gap-x-4 gap-x-2 text-xl font-semibold">
                  PT Ruang Raya Indonesia
                  <p className="text-lg font-light">| Studi Independen</p>
                </h2>
                <p className="text-lg font-normal">
                  Frontend Engineering (Agustus 2022 – Desember 2022)
                  <p className="text-lg font-light">
                    1. Menyelesaikan sebanyak 35 pesanan pelanggan dengan
                    mendapatkan total rating 4.9/5.0.
                  </p>
                  <p className="text-lg font-light">
                    2. Sukses menyelesaikan pesanan dari satu pelanggan dengan
                    total 19 desain yang berbeda dan mampu menyelesaikannya
                    dalam waktu 4 hari.
                  </p>
                </p>
              </li>

              <li className="mt-4">
                <h2 className="flex lg:gap-x-4 gap-x-2 text-xl font-semibold">
                  Freelance
                </h2>
                <p className="text-lg font-normal">
                  Graphic Designer & Digital Product (2021 - Saat ini)
                  <p className="text-lg font-light">
                    1. Memahami mengenai Git version control untuk mengatur
                    setiap revisi di projeknya, dimulai dari menginisiasi sebuah
                    projek, melakukan commit, rollback sebuah commit.
                  </p>
                  <p className="text-lg font-light">
                    2. Memahami konsep pemrograman, syntax, dan fitur yang
                    terdapat pada bahasa pemrograman JavaScript.
                  </p>
                  <p className="text-lg font-light">
                    3. Belajar konsep-konsep fundamental pada library ReactJS
                    seperti JSX, Component, Props, State, LifeCycle, Handling
                    Event.
                  </p>
                  <p className="text-lg font-light">
                    4. Belajar untuk memahami konsep arsitektur RESTful API dan
                    menerapkannya dalam pengembangan website di sisi Frontend
                    Development.
                  </p>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-cols-4 gap-4 my-6 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl text-white text-center">Skills</h1>
          <hr className="h-1 w-full my-2 bg-white border-0 rounded"></hr>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center w-full my-2">
        <img
          src={icon1}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon2}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon3}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon4}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon5}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon6}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon7}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
        <img
          src={icon8}
          alt="a"
          className="transform transition-transform duration-300 hover:scale-110 lg:h-14 lg:w-14 h-10 w-10"
        />
      </div>
    </div>
  );
};

export default About;
