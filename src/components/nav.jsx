import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, Switch, Transition, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { nav } from "../data/useData";
import { products } from "../data/products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ content }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={classNames(
                  darkmode
                    ? "bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 hover:bg-gradient-to-r"
                    : "bg-slate-700",
                  "relative mr-16 flex w-full max-w-xs flex-1"
                )}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div
                  className={classNames(
                    darkmode
                      ? "bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 hover:bg-gradient-to-r"
                      : "bg-slate-700",
                    "flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4"
                  )}
                >
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {nav.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={classNames(
                                  currentItem === item.href
                                    ? "bg-gray-800 text-white/90"
                                    : "text-indigo-200 hover:text-gray-600 hover:bg-white/80",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    currentItem === item.href
                                      ? "text-white/90"
                                      : "text-indigo-200 group-hover:text-gray-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <div className="flex items-center justify-between px-2 py-3">
                          <span className="text-sm text-indigo-200">
                            Dark Mode
                          </span>
                          <Switch
                            checked={darkmode}
                            onClick={handleDarkMode}
                            className="group relative border inline-flex h-4 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute h-full w-full rounded-full"
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                darkmode ? "dark:bg-black" : "bg-black",
                                "pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out"
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
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={classNames(
            darkmode
              ? "bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 hover:bg-gradient-to-r"
              : "bg-slate-700",
            "flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4"
          )}
        >
          <Link to="/">
            <div className="flex h-fit mt-2 rounded-md shrink-0 items-center w-fit bg-gray-900">
              <img className="h-8 w-auto" src="/kinetick-logo.png" alt="logo" />
            </div>
          </Link>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {nav.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setCurrentItem(item.href)}
                        className={classNames(
                          currentItem === item.href
                            ? "bg-gray-800 text-white/90"
                            : "text-indigo-200 hover:text-gray-600 hover:bg-white/80",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            currentItem === item.href
                              ? "text-white/90"
                              : "text-indigo-200 group-hover:text-gray-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Menu as="div" className="relative">
                      {({ open }) => (
                        <>
                          <Menu.Button
                            onClick={() => setCurrentItem("/products")}
                            className={classNames(
                              currentItem === "/products" ||
                                currentItem?.startsWith("/products/")
                                ? "bg-gray-800 text-white/90"
                                : "text-indigo-200 hover:text-gray-600 hover:bg-white/80",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
                            )}
                          >
                            <span className="text-2xl">🚀</span>
                            Our Products
                            <ChevronDownIcon
                              className={classNames(
                                currentItem === "/products" ||
                                  currentItem?.startsWith("/products/")
                                  ? "text-white/90"
                                  : "text-indigo-200 group-hover:text-gray-600",
                                "ml-auto h-5 w-5 transition-transform duration-200",
                                open ? "rotate-180" : ""
                              )}
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {products.map((product) => (
                                  <Menu.Item key={product.id}>
                                    {({ active }) => (
                                      <Link
                                        to={product.path}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setCurrentItem(product.path);
                                        }}
                                        className={classNames(
                                          active || currentItem === product.path
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "group flex items-center px-4 py-2 text-sm"
                                        )}
                                      >
                                        <div className="w-8 h-8 mr-3 flex-shrink-0">
                                          <img
                                            src={product.icon}
                                            alt={`${product.name} logo`}
                                            className="w-full h-full object-contain"
                                          />
                                        </div>
                                        <div>
                                          <p className="font-medium">
                                            {product.name}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {product.shortDesc}
                                          </p>
                                        </div>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </li>
                </ul>
              </li>
              <li className="mt-auto">
                <div className="flex items-center justify-between px-2 py-3">
                  <span className="text-sm text-indigo-200">
                    {darkmode ? "Dark Mode" : "Light Mode"}
                  </span>
                  <Switch
                    checked={darkmode}
                    onClick={handleDarkMode}
                    className="group relative border inline-flex h-4 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full"
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute h-full w-full rounded-full"
                    />
                    <span
                      aria-hidden="true"
                      className={classNames(
                        darkmode ? "dark:bg-black" : "bg-black",
                        "pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out"
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
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <div className="  justify-between sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-8 w-6" aria-hidden="true" />
          </button>
          <div className="lg:pl-72 flex items-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900 dark:to-blue-900 border border-indigo-200 dark:border-indigo-800">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                ABN
              </span>
              <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                13 665 542 162
              </h3>
            </div>
          </div>

          <div className="flex gap-x-4 items-center h-8 lg:hidden">
            <div className="flex items-center flex-col">
              <span className="text-sm text-gray-600">
                {darkmode ? "Dark" : "Light"}
              </span>
              <Switch
                checked={darkmode}
                onClick={handleDarkMode}
                className="group relative border inline-flex h-4 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full"
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute h-full w-full rounded-full"
                />
                <span
                  aria-hidden="true"
                  className={classNames(
                    darkmode ? "dark:bg-black" : "bg-black",
                    "pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out"
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
            </div>
            <Link to="/">
              <div className="lg:hidden flex h-8 mt-1 rounded-md shrink-0 items-center w-fit bg-gray-900">
                <img
                  className="h-full w-auto"
                  src="/kinetick-logo.png"
                  alt="logo"
                />
              </div>
            </Link>
          </div>
        </div>

        <main className="lg:pl-72">{content}</main>
      </div>
    </>
  );
}
