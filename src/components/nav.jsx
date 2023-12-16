import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Switch } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

//

export default function NavBar() {
  const [currentItem, setCurrentItem] = useState(null);
  const initialMode = localStorage.getItem("darkmode") === "true";
  const [darkmode, setDarkMode] = useState(initialMode);

  //
  const location = useLocation();
  //
  useEffect(() => {
    setCurrentItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  const handleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  //

  return (
    <Disclosure
      as="nav"
      className={
        darkmode
          ? "bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 hover:bg-gradient-to-r"
          : "bg-main2 "
      }
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center w-full justify-between ">
                <div className="flex-shrink-0">
                  <img
                    className="h-11 w-auto"
                    src="kinetick-logo.png"
                    alt="Your Company"
                  />
                </div>
                <ul className="hidden w-[40%] md:flex justify-between gap-3 ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                  {nav.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={classNames(
                          currentItem === item.href
                            ? darkmode
                              ? "bg-gray-900  px-5"
                              : "bg-gray-700"
                            : "text-gray-300",
                          darkmode
                            ? " hover:bg-gray-700  "
                            : "text-gray-200 hover:bg-gray-500 hover:text-white ",
                          "rounded-md px-3 py-2 text-sm font-medium  text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="md:text-end cursor-pointer flex flex-col gap-0 ">
                  <Switch
                    checked={darkmode}
                    onClick={handleDarkMode}
                    className="group relative border  inline-flex h-4 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full  "
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute h-full w-full rounded-full "
                    />
                    <span
                      aria-hidden="true"
                      className={classNames(
                        darkmode ? "dark:bg-black" : "bg-indigo-600",
                        "pointer-events-none absolute mx-auto h-3 w-7  rounded-full transition-colors duration-200 ease-in-out"
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={classNames(
                        darkmode ? "translate-x-3" : "translate-x-0.5",
                        "pointer-events-none absolute left-0 inline-block h-3 w-4 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                  <span className=" text-xs text-white">
                    {darkmode ? "Dark" : "Light"}
                  </span>
                </div>
              </div>

              <div className="-mr-2 ml-10 flex text-white md:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              {nav.map((item) => (
                <Disclosure.Button
                  as={Link}
                  to={item.href}
                  key={item.name}
                  className={classNames(
                    currentItem === item.href
                      ? darkmode
                        ? "bg-gray-900 text-white px-5"
                        : "bg-gray-700"
                      : "text-gray-300",
                    darkmode
                      ? "text-gray-300  hover:bg-gray-700 hover:text-white"
                      : "text-gray-200  hover:bg-gray-600 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
