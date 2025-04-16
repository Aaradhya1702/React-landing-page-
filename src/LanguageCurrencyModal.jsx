import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function LanguageCurrencyModal({ isOpen, onClose }) {
  const [currency, setCurrency] = useState("USD");

  const currencies = ["USD", "EUR", "INR"];
  const languages = [
    "English", "Español", "Português", "Deutsch",
    "Français", "Italiano", "Nederlands", "Polski",
    "简体中文", "Čeština"
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#00000080] " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-gray-900 mb-4"
                >
                  Choose a currency
                </Dialog.Title>

                <select
                  className="w-full p-3 bg-gray-100 rounded-lg mb-6"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c === "USD"
                        ? "US Dollar (USD)"
                        : c === "EUR"
                        ? "Euro (EUR)"
                        : "Indian Rupee (INR)"}
                    </option>
                  ))}
                </select>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose a language
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className="border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onClose}
                  className="w-full bg-[#0f0f23] text-white py-2 rounded-lg font-semibold"
                >
                  Apply
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
