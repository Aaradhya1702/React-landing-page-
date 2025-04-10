import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const places = [
  {
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e", // Replace with your own images
    tag: "Sightseeing",
    title: "One of my favourite spots",
  },
  {
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914",
    tag: "Sightseeing",
    title: "Swing with amazing views",
  },
  {
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914",
    tag: "Hike",
    title: "Beautiful view point",
  },
  {
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914",
    tag: "Hike",
    title: "Beautiful view point",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function ThingsToDoCarousel() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left section */}
      <div className="md:w-1/3 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">161 things to do</h2>
        <p className="text-gray-500 text-sm">
          Get a curated list of all the best things to do with exact location,
          detailed info and inspiring content
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold underline hover:text-blue-800 text-sm"
        >
          Preview for FREE
        </a>
      </div>

      {/* Carousel section */}
      <div className="md:w-2/3">
        <Carousel
          responsive={responsive}
          infinite={false}
          arrows
          showDots={false}
          itemClass="px-2"
        >
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span>🧭</span>
                  {place.tag}
                </p>
                <h3 className="text-sm font-semibold mt-1 text-gray-800">
                  {place.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
