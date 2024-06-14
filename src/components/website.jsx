import React from "react";
import satu from "../assets/1.jpg";
import dua from "../assets/2.jpg";

function website() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: satu,
      title: "Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
    },
    {
      image: dua,
      title: "Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
    },
    {
      image: satu,
      title: "Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
    },
    {
      image: dua,
      title: "Project 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
    },
    {
      image: satu,
      title: "Project 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  if (currentIndex > cards.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
  }
  return (
    <div className="w-full mt-2">
      <div className="h-10 items-center justify-center flex">
        <button
          className="w-12 h-8 rounded-lg bg-gray-300 relative"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="w-12 h-8 rounded-lg bg-gray-300 relative left-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="relative">
        <div className="flex lg:flex-row md:flex-row xs:flex-col lg:space-x-4 md:space-x-4 xs:space-x-0">
          {/* Display only 2 cards based on currentIndex */}
          {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
            <div
              className="flex-none lg:w-1/2 md:w-1/2 xs:w-full p-4 "
              key={index}
            >
              <img
                className="w-full h-100 object-cover mb-4 "
                src={card.image}
                alt="Card"
              />
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className=" text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default website;
