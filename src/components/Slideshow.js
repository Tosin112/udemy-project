import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonfile from "../courasel.json";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Slideshow({ number, bestseller }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const slider = React.useRef(null);
  const slidesToShowvalue = 5;
  const [slideWindow, setSlidesWindow] = useState(5);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth < 300) {
      setSlidesWindow(1);
    }
    console.log("This is working abeg");
  }, [windowSize]);

  console.log(windowSize);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(settings);
  return (
    <div className="px-10 mx-auto">
      <Slider ref={slider} {...settings}>
        {jsonfile?.cousarel?.map((single, idx) => {
          return (
            <div className="mx-5" key={idx}>
              <img src={single.img} alt="pictures" className="w-48" />
              <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
              <h1 className="pt-3 font-bold text-base lg:w-[200px] w-[200px] md:[250px]">
                {single.name}
              </h1>
              <p className="text-xs text-gray-300 pt-3">{single.author}</p>
              <div className="flex space-x-4 items-center">
                <p className="text-yellow-700 font-semibold">{single.stars}</p>
                <p className="text-gray-400">{`( ${single.views} )`}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="font-semibold">{single.discounted_price}</p>
                <p className="text-gray-400 line-through">{single.price}</p>
              </div>
              <button onClick={() => slider?.current?.slickNext()}>Next</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slideshow;
