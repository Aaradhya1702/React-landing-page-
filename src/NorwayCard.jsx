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
                    <span className="text-gray-700 font-medium">Guide by Ása Steinars</span>
                    <span>• Norway</span>
                    <span className="text-blue-600 font-semibold">• ★ New</span>
                </div>

                <p className="text-gray-700 mb-4">
                    Norway is my second home. I was born in Norway and I lived there until I was 7 years old. I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months on the road with my van exploring everything from the south tip up to Lofoten.
                    <br />
                    This guide is my best tips for Norway to make sure you get the most out of your trip. It's focused around the fjords in the west and Lofoten in the north. In my opinion, it's the best areas to explore in Norway.
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md font-semibold hover:bg-gray-100 transition">
                        Preview
                    </button>
                    <button className="px-6 py-2 bg-sky-600 text-white rounded-md font-semibold hover:bg-sky-700 transition">
                        Get Access
                    </button>
                </div>

                <p className="text-sm text-gray-400 mt-2">Used for 100+ trips</p>
            </div>
        </div>
    );
}
