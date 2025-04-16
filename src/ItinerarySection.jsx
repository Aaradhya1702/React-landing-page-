import React from "react";

export default function ItinerarySection() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left info */}
      <div className="md:w-1/3 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">1 itinerary</h2>
        <p className="text-gray-500 text-sm">
          Get expertly curated itineraries that help you organise all the
          'things to do' in an ideal time order
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold underline hover:text-blue-800 text-sm"
        >
          Preview for FREE
        </a>
      </div>

      {/* Cards container */}
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1 - Itinerary Builder */}
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 text-center hover:shadow-sm">
          <div className="text-4xl text-indigo-500 mb-2">🛣️</div>
          <h4 className="font-semibold text-gray-700">Itinerary Builder</h4>
          <p className="text-sm text-gray-500">Create your own itinerary</p>
        </div>

        {/* Card 2 - Road Trip */}
        <div className="relative rounded-lg overflow-hidden group hover:shadow-md">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Lofoten Road Trip"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white w-full">
            <p className="text-xs">Day 8</p>
            <h4 className="font-semibold text-sm">Lofoten Road Trip</h4>
          </div>
        </div>

        {/* Card 3 - Preview for FREE */}
        <div className="flex items-center justify-center border border-gray-300 rounded-lg text-center hover:shadow-sm">
          <p className="text-sm font-semibold text-gray-800">
            Preview for FREE
          </p>
        </div>
      </div>
    </div>
  );
}
