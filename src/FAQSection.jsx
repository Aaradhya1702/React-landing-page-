import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I access the Guide and Map?",
    answer: "Once purchased, you can access the guide and map through your dashboard or email link."
  },
  {
    question: "Do I need internet connection?",
    answer: "Some features may work offline, but for full access, an internet connection is recommended."
  },
  {
    question: "How long will I have access?",
    answer: "You’ll have lifetime access to the guide and future updates."
  },
  {
    question: "Can I share it with my travel buddy?",
    answer: "Unfortunately, access is for individual use only. Each person must purchase their own."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your questions, answered</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full text-left text-gray-800 font-medium text-base hover:text-blue-600"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
