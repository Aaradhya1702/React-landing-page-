import React from "react";
import {
  FaGlobe,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

export default function GuideProfileSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left - Image Card */}
      <div className="md:w-1/3 w-full rounded-2xl bg-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] overflow-hidden">
        <img
          src="https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=1920&height=2400"
          alt="Norway Guide"
          className="w-full h-72 object-cover"
        />
        <div className="p-4 space-y-1">
          <p className="text-xs text-gray-500">
            161 things to do | 1 itinerary | 0 travel tips
          </p>
          <h3 className="font-semibold text-gray-800 text-sm">Norway Guide</h3>
          <p className="text-xs text-gray-500">Norway</p>
        </div>
      </div>

      {/* Right - Guide Details */}
      <div className="md:w-2/3 w-full space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Guide by Ása Steinars
          </h2>
          <p className="text-sm text-gray-500">Joined in April 2022</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <FaGlobe />
          <FaInstagram />
          <FaTiktok />
          <FaFacebook />
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Ása Steinars is an adventure photographer and videographer from
          Iceland. Growing up in the north, surrounded by extreme landscapes and
          forever changing weather has given her a tight bond to nature and its
          forces. This you can clearly see in her photography. She works as a
          full time content creator, helping people to travel Iceland like she
          does. She has a total following of almost 2 million across her social
          media platforms.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="border border-gray-400 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
            Message
          </button>
          <button className="border border-gray-400 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
            Storefront
          </button>
          <button className="border border-gray-400 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
            Guide Affiliate Program
          </button>
        </div>
      </div>
    </div>
  );
}
