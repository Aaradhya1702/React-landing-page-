import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TravelLocationDialog({ isOpen, closeModal }) {
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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all flex">
                <div className="w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee" // replace with actual image
                    alt="Waterfall"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative overflow-visible lg:w-[480px] bg-white">
                  <div className="py-6 px-5 flex flex-col flex-grow overflow-hidden">
                    <div className="relative">
                      <div>
                        <div className="text-label font-semibold text-lg text-left lg:text-xl">
                          Unlock to see location
                        </div>
                        <div className="pt-1 text-label text-xs lg:text-sm text-left relative">
                          One of my favoruite spots
                        </div>
                        <div className="grid grid-cols-3 gap-y-4 justify-between text-xs pt-4 pb-6">
                          <div className="space-y-1 flex flex-col">
                            <div className="text-placeholder">Category</div>
                            <div className="w-auto flex flex-row space-x-2 font-semibold text-content">
                              <div>
                                <img
                                  width="18"
                                  src="https://cdn.prod.rexby.com/categories/sightseeing.png"
                                />
                              </div>
                              <p className="truncate">Sightseeing</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-title font-semibold text-xs text-left">
                            Message from Ása Steinars
                          </div>
                          <div className="relative text-content font-normal text-left leading-loose text-xs">
                            <div className="">
                              <p className="tiptap-paragraph py-1 first:pt-0 last:pb-0 text-content leading-loose">
                                <span className="">
                                  This is one of my favoruite spots of all of
                                  Norway. It's about 1 hour drive from Voss on a
                                  narrow road. Once you get to the bridge that
                                  leads over the river you've found the spot.
                                  You can swim just at the base of the waterfall
                                  in the perfect crystal blue water!
                                </span>
                              </p>
                            </div>
                            <button className="absolute right-0 bottom-0 leading-loose pl-2 pr-2 font-poppins text-placeholder focus:outline-none bg-white">
                              more
                              <div className="absolute -left-10 top-0 bottom-0 w-10 bg-gradient-to-l from-white"></div>
                            </button>
                          </div>
                        </div>
                        <div className="h-28"></div>
                        <div className="absolute sm:top-0 bottom-0 left-0 right-0">
                          <div className="w-full">
                            <div className=" lg:h-48 h-20 w-full bg-gradient-to-t from-white font-poppins flex text-center place-content-end items-center  flex-col"></div>
                            <div className=" bg-white space-x-1 md:items-center md:flex md:align-middle md:place-content-center text-center flex flex-col items-center justify-center sm:pb-4">
                              <p className="font-semibold text-header tracking-wide md:tracking-wide text-xl md:text-2xl mt-3">
                                Want to see more?
                              </p>
                              <p className="text-content md:text-sm text-xs max-w-480 leading-loose px-4 py-3 ">
                                I have created curated{" "}
                                <span className="font-semibold">maps</span> and{" "}
                                <span className="font-semibold">
                                  itineraries
                                </span>{" "}
                                for travellers that want to travel like me.
                              </p>
                              <div className="flex px-3 self-stretch">
                                <button className="relative flex items-center justify-center rounded-lg font-poppins focus:outline-none tracking-wider pointer-events-auto w-full font-semibold text-white bg-gradient-to-r from-[#1496BF] to-[#0f6e8c] h-9 px-6 text-sm pl-1 pr-1 uppercase">
                                  <div className="flex flex-1 justify-center truncate">
                                    Get access
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
}
