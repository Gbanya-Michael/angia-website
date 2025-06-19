import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import {
  CpuChipIcon,
  CogIcon,
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ShoppingCartIcon,
  ServerIcon,
  PaintBrushIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  // Filter web development services
  const webServices = servicesData.filter(
    (service) => service.category === "web"
  );
  const otherServices = servicesData.filter((service) => !service.category);

  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <Container>
        <div className="py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 dark:text-gray-300  text-start">
              At Angia, we deliver comprehensive software development services
              and solutions that drive digital transformation. Based in
              Melbourne, our expert team combines technical excellence with
              industry expertise to create both custom solutions and innovative
              digital products. From initial development to ongoing maintenance,
              we provide end-to-end services that help businesses thrive in the
              digital age.
            </p>
          </div>

          {/* Web Development Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Web Development Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`bg-gradient-to-br ${service.gradient} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Other Services Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`bg-gradient-to-br ${service.gradient} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
