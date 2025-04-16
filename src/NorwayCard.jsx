import React from "react";

export default function NorwayGuideCard() {
  return (
    <div className="mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-start gap-6 mt-16">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" // Replace with your image
        alt="Norway Hammock"
        className="w-full md:w-1/3 rounded-xl object-cover aspect-square"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Norway Guide</h2>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Guide"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">
            Guide by Ása Steinars
          </span>
          <span>• Norway</span>
          <span className="text-blue-600 font-semibold">• ★ New</span>
        </div>

        <div className="">
          <p className="pt-2 first:pt-0 font-poppins text-content font-normal leading-loose text-left">
            {" "}
            Norway is my second home. I was born in Norway and I lived there
            until I was 7 years old. I often come back and I love this country
            almost as much as Iceland. Last summer I spent 3 months on the road
            with my van exploring everything from the south tip up to Lofoten.{" "}
          </p>

          <p className="pt-2 first:pt-0 font-poppins text-content font-normal leading-loose text-left">
            {" "}
            This guide is my best tips for Norway to make sure you get the most
            out of your trip. It's focused around the fjords in the west and
            Lofoten in the north. In my opinion, it's the best areas to explore
            in Norway.{" "}
          </p>
        </div>

        <div className="py-2 my-4">
          <div className="border-t border-gray-400 border-line"></div>
        </div>
        <div className="flex w-full space-x-2">
          <div className="flex flex-col flex-1">
            <a
              className="relative flex items-center justify-center rounded-lg font-poppins focus:outline-none tracking-wider pointer-events-auto w-full font-semibold text-title border border-title h-12 px-12 text-sm pl-1 pr-1"
              href="/"
            >
              <div className="flex flex-1 justify-center truncate">Preview</div>
            </a>
          </div>
          <div className="flex flex-col flex-1">
            <button className="relative flex items-center justify-center rounded-lg font-poppins focus:outline-none tracking-wider pointer-events-auto w-full font-semibold text-white bg-gradient-to-r from-[#1496BF] to-[#0f6e8c] h-12 px-12 text-sm pl-1 pr-1 uppercase">
              <div className="flex flex-1 justify-center truncate">
                Get access
              </div>
            </button>
            <div className="w-full text-center text-gray-400 pt-2 text-xs md:text-sm">
              Used for <span className="font-semibold">100+</span> trips
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
