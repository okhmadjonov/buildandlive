import React from "react";
import "./Banner.scss";
import { useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
const data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
];

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="banner">
      <div className="container-slider">
        {data.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }>
              <img src={process.env.PUBLIC_URL + `../../${index + 1}.png`} />
            </div>
          );
        })}
        <BsFillCaretRightFill moveSlide={nextSlide} direction={"next"} />
        <BsFillCaretLeftFill moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
