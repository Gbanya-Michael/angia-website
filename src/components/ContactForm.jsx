import React from "react";

export default function ContactForm() {
  return (
    <>
      <form>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <div className="flex gap-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
              >
                First name
              </label>
              <span className="text-sm leading-6 text-red-500" id="first-name">
                *
              </span>
            </div>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full bg-white/80 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Your first name"
              aria-describedby="first-name"
            />
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <div className="flex gap-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
              >
                Last name
              </label>
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="block w-full bg-white/80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Your last name"
                aria-describedby="last-name"
              />
            </div>
          </div>
        </div>
        <div className="md:flex gap-10 mt-5">
          <div className="md:w-1/2">
            <div className="flex gap-1">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
              >
                Phone no.
              </label>
              <span className="text-sm leading-6 text-red-500" id="prev-amount">
                *
              </span>
            </div>

            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="block w-full bg-white/80  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ex. 090 6333 6333"
              aria-describedby="phone-number"
            />
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <div className="flex gap-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
              >
                Email
              </label>
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-white/80  mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Your email"
              aria-describedby="email"
            />
          </div>
        </div>
        <div className="md:flex gap-10 mt-5 ">
          <div className="md:w-1/2 mt-5 md:mt-0">
            <div className="mb-5">
              <div className="flex gap-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                >
                  Subject
                </label>
                <span className="text-sm leading-6 text-red-500" id="subject">
                  *
                </span>
              </div>
              <input
                type="text"
                name="subject"
                id="subject"
                className="block w-full bg-white/80  mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Subject of your message"
                aria-describedby="subject"
              />
            </div>
            <div>
              <div className="flex gap-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                >
                  Message
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
                  type="message"
                  name="message"
                  id="message"
                  className="block w-full bg-white/80  h-40 rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Please write your message here. 400 characters max."
                  aria-describedby="message"
                  maxLength={400}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <div>
              <div className="flex gap-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                >
                  Referer's full name
                </label>
              </div>
              <input
                type="text"
                name="refer"
                id="refer"
                className="block w-full bg-white/80 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name of the referer"
                aria-describedby="refer"
              />
            </div>
            <div className="mt-5 ">
              <div className="flex gap-1">
                <label
                  htmlFor="referer"
                  className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                >
                  Referer's email address
                </label>
              </div>
              <input
                type="text"
                name="referer"
                id="referer"
                className="block w-full bg-white/80 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email of the referer"
                aria-describedby="referer"
              />
            </div>
          </div>
        </div>

        <div className=" md:flex  justify-end">
          <button className="text-white w-full  bg-indigo-500 px-2 h-8 mt-10 rounded-sm hover:bg-indigo-700 cursor-pointer">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
