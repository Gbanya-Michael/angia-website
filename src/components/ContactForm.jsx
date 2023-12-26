import React from "react";

export default function ContactForm() {
  return (
    <>
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
              <span className="text-sm leading-6 text-red-500" id="prev-amount">
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
          <div className="md:w-1/2 mt-5 md:mt-0 flex gap-5"></div>
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
              <span className="text-sm leading-6 text-red-500" id="description">
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
              <span className="text-sm leading-6 text-red-500" id="image">
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
    </>
  );
}
