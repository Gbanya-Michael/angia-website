import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useForm } from "@formspree/react";

const REFER_END_POINT = import.meta.env.VITE_REFERAL_FORM_ENDPOINT;

export default function ContactForm() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const [state, handleSubmit] = useForm(`${REFER_END_POINT}`);
  if (state.succeeded) {
    return (
      <div className=" absolute z-50 right-2 md:right-5 top-10 w-[97%] h-44 bg-gray-200 p-4 my-4 ">
        <div className="w-fit h-full text-center mx-auto bg-white border border-green-500 text-green-800 p-4 my-4">
          Your form has been submitted successfully.
        </div>
      </div>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="block text-lg text-center mt-10 bg-white/40 dark:bg-white/20  font-medium leading-0 text-gray-700 dark:text-white/90">
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>{" "}
              Your information{" "}
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>
            </div>
            <div className="md:flex gap-10 mt-5">
              <div className="md:w-1/2">
                <div className="flex gap-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                  >
                    First name
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="first-name"
                  >
                    *
                  </span>
                </div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="last-name"
                  >
                    *
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    Your phone no.
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="phone-number"
                  >
                    *
                  </span>
                </div>

                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    Your email
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="last-name"
                  >
                    *
                  </span>
                </div>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your email"
                  aria-describedby="email"
                />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="block text-lg text-center mt-10 bg-white/40 dark:bg-white/20  font-medium leading-0 text-gray-700 dark:text-white/90">
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>{" "}
              Client information{" "}
              <span className="text-sm leading-6 text-red-500" id="last-name">
                *
              </span>
            </div>
            <div className="md:flex gap-10 mt-5 ">
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="client-name"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      Full name
                    </label>
                    <span
                      className="text-sm leading-6 text-red-500"
                      id="subject"
                    >
                      *
                    </span>
                  </div>
                  <input
                    type="text"
                    name="client-name"
                    id="client-name"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's name"
                    aria-describedby="client-name"
                  />
                </div>
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="business-name"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      Business name
                    </label>
                    <span
                      className="text-sm leading-6 text-red-500"
                      id="subject"
                    >
                      *
                    </span>
                  </div>
                  <input
                    type="text"
                    name="business-name"
                    id="business-name"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's business name"
                    aria-describedby="business-name"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-10 ">
              <div className="md:w-1/2">
                <div className="flex gap-1">
                  <label
                    htmlFor="client-phoneNumber"
                    className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                  >
                    Client's phone no.
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="client-phoneNumber"
                  >
                    *
                  </span>
                </div>

                <input
                  type="tel"
                  name="client-phoneNumber"
                  id="client-phoneNumber"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ex. 090 6333 6333"
                  aria-describedby="client-phoneNumber"
                />
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="flex gap-1">
                  <label
                    htmlFor="client-email"
                    className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                  >
                    Email
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="last-name"
                  >
                    *
                  </span>
                </div>

                <input
                  type="email"
                  name="client-email"
                  id="client-email"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Client's email"
                  aria-describedby="client-email"
                />
              </div>
            </div>
            <div className="md:flex gap-10 mt-5">
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      Existing website
                    </label>
                  </div>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's existing website"
                    aria-describedby="website"
                  />
                </div>
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="linkedIn"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      LinkedIn
                    </label>
                  </div>
                  <input
                    type="text"
                    name="linkedIn"
                    id="linkedIn"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's LinkedIn url"
                    aria-describedby="linkedIn"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-10 mt-5">
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      Facebook
                    </label>
                  </div>
                  <input
                    type="text"
                    name="facebook"
                    id="facebook"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's facebook url"
                    aria-describedby="facebook"
                  />
                </div>
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="mb-5">
                  <div className="flex gap-1">
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-medium leading-6 text-gray-500 dark:text-white/90"
                    >
                      Instagram
                    </label>
                  </div>
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Client's instagram url"
                    aria-describedby="instagram"
                  />
                </div>
              </div>
            </div>
            <div className="my-5 md:max-w-[70%] mx-auto">
              <div className="flex gap-1 md:justify-center">
                <label
                  htmlFor="facebook"
                  className="block text-sm  font-medium leading-6 text-gray-500 dark:text-white/90"
                >
                  Reason for referral
                </label>{" "}
                <span className="text-sm leading-6 text-red-500" id="reason">
                  *
                </span>
              </div>
              <textarea
                type="reason"
                name="reason"
                id="reason"
                className="block w-full h-20 mt-2 rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm leading-5"
                placeholder="Why are your referring this client? 200 characters max."
                aria-describedby="reason"
                maxLength={200}
                required
              ></textarea>
            </div>
          </>
        )}
        <nav className="flex items-center mt-5 justify-between border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            {step > 1 && (
              <button
                type="button"
                className="inline-flex items-center pl-1 p-4  font-medium  text-white  bg-red-500 px-2 h-8 mt-5 rounded-sm hover:bg-red-700 cursor-pointer"
                onClick={handlePreviousStep}
              >
                <ArrowLongLeftIcon
                  className="mr-3 h-5 w-5 "
                  aria-hidden="true"
                />
                Previous
              </button>
            )}
          </div>
          <div className="flex w-0 flex-1  justify-end">
            {step < 2 && (
              <button
                type="button"
                className="inline-flex items-center pl-1 p-4 text-sm font-medium  text-white  bg-indigo-500 px-2 h-8 mt-5 rounded-sm hover:bg-indigo-700 cursor-pointer"
                onClick={handleNextStep}
              >
                Next
                <ArrowLongRightIcon
                  className="ml-3 h-5 w-5 "
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
          <div>
            {step === 2 && (
              <button
                type="submit"
                className="text-white w-24 bg-indigo-500 px-2 h-8 mt-5 rounded-sm hover:bg-indigo-700 cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </nav>
      </form>
    </>
  );
}
