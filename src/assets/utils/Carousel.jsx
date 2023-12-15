import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  //
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) =>
      current === 0 ? children.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent((current) =>
      current === children.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className=" overflow-hidden relative">
        <div
          style={{ transform: `translateX(-${current * 100}%)` }}
          className="flex transition-transform ease-in-out duration-500"
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} style={{ flex: "0 0 100%" }}>
              {child}
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 inset-0 flex items-center justify-between p-2">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 dark:bg-black/80 dark:text-white/80  text-gray-800 hover:bg-white dark:hover:bg-black dark:hover:text-white"
          >
            <ChevronLeftIcon className="w-3 h-3" />
          </button>

          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 dark:bg-black/80 dark:text-white/80  text-gray-800 hover:bg-white dark:hover:bg-black dark:hover:text-white"
          >
            <ChevronRightIcon className="w-3 h-3" />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 left-0">
          <div className="flex items-center justify-center gap-2 my-3">
            {React.Children.map(children, (_, index) => (
              <div
                key={index}
                className={`transition-all w-1.5 h-1.5 bg-black dark:bg-white rounded-full ${
                  current === index ? " p-1" : "opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
