import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  SquaresPlusIcon,
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Container from "./Container";

//

export default function ContactFomr() {
  //

  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <Container>
          <div className="py-20 absolute w-screen z-50 h-screen top-0 bottom-0 right-0 bg-black/80 ">
            <div className=" w-24 px-3 mx-auto bg-white/50 my-5 shadow-lg dark:bg-black rounded-sm">
              Referral
            </div>
            {newService ? (
              <div className="p-10 absolute top-0 right-0 left-0 bg-black/80 w-full h-screen z-30  ">
                <div className="mt-20 p-5 h-fit bg-white mx-auto ">
                  <button
                    onClick={handleNewService}
                    className="ml-auto mb-5 ring-1 ring-black rounded-sm text-black flex justify-end flex-shrink-0 hover:bg-black/50 hover:text-white"
                  >
                    <XMarkIcon className="  w-6 h-6" />
                  </button>

                  <div className="text-gray-000 my-5 text-sm md:text-lg">
                    <p className="my-5">
                      <span className="text-red-700">Warning!</span> Services
                      you add here will be shown to the public for booking. Only
                      add services that you offer.
                    </p>
                    <p>
                      Fields marked with <span className="text-red-500">*</span>{" "}
                      are required fields.
                    </p>
                  </div>
                  <form>
                    <div className="md:flex gap-10">
                      <div className="md:w-1/2">
                        <div className="flex gap-1">
                          <label
                            htmlFor="service-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Service Name
                          </label>
                          <span
                            className="text-sm leading-6 text-red-500"
                            id="service-name"
                          >
                            *
                          </span>
                        </div>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="service-name"
                            id="service-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ex: Grooming, hand massage, teeth whitening"
                            aria-describedby="email-optional"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2 mt-5 md:mt-0">
                        <div className="flex gap-1">
                          <label
                            htmlFor="current-amount"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Current Amount
                          </label>
                          <span
                            className="text-sm leading-6 text-red-500"
                            id="current-amount"
                          >
                            *
                          </span>
                        </div>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="current-amount"
                            id="current-amount"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Numbers only. ex: 2000, 100"
                            aria-describedby="current-amount"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:flex gap-10 mt-5">
                      <div className="md:w-1/2">
                        <div className="flex gap-1">
                          <label
                            htmlFor="prev-amount"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Previous Amount
                          </label>
                          <span
                            className="text-sm leading-6 text-red-500"
                            id="prev-amount"
                          >
                            *
                          </span>
                        </div>
                        <div className="mt-2">
                          <input
                            type="number"
                            name="prev-amount"
                            id="prev-amount"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Numbers only. ex: 2000, 100"
                            aria-describedby="email-optional"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2 mt-5 md:mt-0 flex gap-5">
                        <div className="w-1/2">
                          <Listbox
                            value={selectedHour}
                            onChange={setSelectedHour}
                          >
                            {({ open }) => (
                              <>
                                <Listbox.Label className=" flex gap-1 text-sm font-medium leading-6 text-gray-900">
                                  <span className="block text-sm font-medium leading-6 text-gray-900">
                                    Hours
                                  </span>
                                  <span
                                    className="text-sm leading-6 text-red-500"
                                    id="current-amount"
                                  >
                                    *
                                  </span>
                                </Listbox.Label>
                                <div className="relative mt-2 ">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <div className="truncate flex gap-1 ">
                                      <p>
                                        {typeof selectedHour === "object"
                                          ? selectedHour.h
                                          : selectedHour}
                                        <span> {hourDisplay()}</span>
                                      </p>
                                    </div>

                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {timeSelector.hours.map((hour) => (
                                        <Listbox.Option
                                          key={hour.h}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={hour.h}
                                        >
                                          <div>{hour.h}</div>
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>
                        <div className="w-1/2">
                          <Listbox
                            value={selectedMin}
                            onChange={setSelectedMin}
                          >
                            {({ open }) => (
                              <>
                                <Listbox.Label className=" flex gap-1 text-sm font-medium leading-6 text-gray-900">
                                  <span className="block text-sm font-medium leading-6 text-gray-900">
                                    Minutes
                                  </span>
                                  <span
                                    className="text-sm leading-6 text-red-500"
                                    id="current-amount"
                                  >
                                    *
                                  </span>
                                </Listbox.Label>
                                <div className="relative mt-2 ">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <div className="truncate flex gap-1 ">
                                      {typeof selectedMin === "object"
                                        ? selectedMin.m
                                        : selectedMin}

                                      <p> mins</p>
                                    </div>

                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {timeSelector.mins.map((min) => (
                                        <Listbox.Option
                                          key={min.m}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-indigo-600 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={min.m}
                                        >
                                          <div>{min.m}</div>
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex gap-10 mt-5 ">
                      <div className="md:w-2/3 mt-5 md:mt-0">
                        <div className="flex gap-1">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Description
                          </label>
                          <span
                            className="text-sm leading-6 text-red-500"
                            id="description"
                          >
                            *
                          </span>
                        </div>
                        <div className="mt-2">
                          <textarea
                            type="description"
                            name="description"
                            id="description"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                            placeholder="Max characters: 100 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra"
                            aria-describedby="description"
                            maxLength={100}
                          ></textarea>
                        </div>
                      </div>
                      <div className="md:w-1/3">
                        <div className="flex gap-1">
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Upload Display Image
                          </label>
                          <span
                            className="text-sm leading-6 text-red-500"
                            id="image"
                          >
                            *
                          </span>
                        </div>

                        <div className="mt-2 flex justify-center rounded-md  ring-1 ring-inset items-center content-center  ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="image"
                            className="block w-full h-full border-0 py-2.5 px-5 text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            placeholder="Ex: Grooming, hand massage, teeth whitening"
                            aria-describedby="email-optional"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" md:flex  justify-end">
                      <button className="text-white w-full md:w-24  bg-indigo-500 px-2 h-8 mt-5 rounded-sm hover:bg-indigo-700 cursor-pointer">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </>
  );
}
