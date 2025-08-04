"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const RandomCarousel = ({
  children: slides,
  title,
}: {
  children: React.ReactNode[];
  title: string;
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="relative space-y-1">
      <h1 className="absolute top-3 z-50 drop-shadow-2xl -left-16 bg-darkGray/80 px-3 rounded-lg text-primaryDark font-jersey text-5xl -rotate-45">
        {title}
      </h1>
      <div className="overflow-hidden scrollbar-hide">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      <div className="absolute z-50 text-white inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 bg-white/20 hover:bg-white/10 transition-all duration-100 ease-in-out rounded-full group"
        >
          <BiChevronLeft
            size={40}
            className="group-hover:scale-75 transition-all duration-150 ease-in-out"
          />
        </button>
        <button
          onClick={next}
          className="p-2 bg-white/20 hover:bg-white/10 transition-all duration-100 ease-in-out rounded-full group"
        >
          <BiChevronRight
            size={40}
            className="group-hover:scale-75 transition-all duration-150 ease-in-out"
          />
        </button>
      </div>
      <div className="w-full flex gap-2 items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border p-1 border-black ${
              index === curr ? "bg-primaryDark" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RandomCarousel;
