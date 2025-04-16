import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ActivityModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1000]" onClose={closeModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div>                  <div className="flex max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-white shadow-xl">
                    {/* Left Side - Image */}
                    <div className="w-1/2 h-full hidden lg:block">
                      <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" // Replace with real URL
                        alt="Activity"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-[480px] flex flex-col h-full overflow-hidden">
                      <div className="flex flex-col p-6 space-y-4 overflow-y-auto">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            Active Geiranger
                          </h2>
                          <p className="text-sm text-gray-600">
                            Kayak is a must
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div>
                            <span className="font-medium text-black">
                              Category:
                            </span>{" "}
                            Activity
                          </div>
                          <div>
                            <span className="font-medium text-black">
                              Price:
                            </span>{" "}
                            £25
                          </div>
                          <div>
                            <span className="font-medium text-black">
                              Est. Duration:
                            </span>{" "}
                            1-2h
                          </div>
                        </div>

                        <p className="text-sm text-gray-700">
                          If you’re in Geiranger, renting a kayak is a must.
                          Active Geiranger are located further out in the fjord
                          than the other rental companies.
                        </p>

                        <div className="text-sm">
                          <p>
                            <span className="font-medium">Activity Level:</span>{" "}
                            🛶
                          </p>
                          <p>
                            <span className="font-medium">
                              Age requirement:
                            </span>{" "}
                            8 and older
                          </p>
                        </div>

                        <button className="text-blue-600 font-medium text-left underline">
                          Ask AI Assistant for more info
                        </button>

                        {/* Map */}
                        <div className="h-40 w-full rounded overflow-hidden">
                          <iframe
                            src="https://maps.google.com/maps?q=Geiranger,Norway&z=10&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                          ></iframe>
                        </div>

                        <div className="space-y-1 text-sm">
                          <button className="w-full text-left font-medium text-blue-600 hover:underline">
                            See Things To Do nearby
                          </button>
                          <button className="w-full text-left font-medium text-blue-600 hover:underline">
                            Directions to Active Geiranger
                          </button>
                        </div>

                        <button className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
                          See deals
                        </button>

                        <p className="text-xs text-gray-500">
                          *By booking through me, you are supporting me as a
                          content creator at no additional cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ActivityModal;
