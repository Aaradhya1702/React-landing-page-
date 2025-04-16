import React from "react";
import ActivityModal from "./ActivityModal";

const bookingItems = [
  {
    category: "Activity",
    title: "Active Geiranger",
    icon: "🚣‍♂️",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    category: "Stay",
    title: "Jølstraholmen Camping & Cottages",
    icon: "🛏️",
    img: "https://cdn.prod.rexby.com/image/0eb73fc4-23fe-400f-82e9-876972b90d3a?format=webp&width=640&height=800",
  },
  {
    category: "Activity",
    title: "Floating Sauna Fjærland",
    icon: "🌊",
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  },
];

export default function BookingPageSection() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left info */}
      <div className="md:w-1/3 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">Booking Page</h2>
        <p className="text-gray-500 text-sm">
          Get a curated list of reliable options when booking tours, hotels, and
          car rentals
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
        {bookingItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3 space-y-1">
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span>{item.icon}</span> {item.category}
              </p>
              <h4 className="font-semibold text-sm text-gray-800">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
