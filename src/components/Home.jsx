import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Carousel from "../assets/utils/Carousel";
import {
  Design1,
  globe,
  globe2,
  sun,
  cloud,
  rain,
  clear,
  snow,
  mist,
  thunder,
  defaultBg,
  fog,
} from "../hooks/useImage";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { locationInfo, useWeather } from "../hooks/useApi";
import "animate.css";
import DateTimeDisplay from "../assets/utils/DateTime";
import { services, homeSlides } from "../data/useData";

export default function Home() {
  //
  const { locationData } = locationInfo();
  const [bgImage, setBgImage] = useState(null);

  const country = locationData?.country;
  const city = locationData?.city;
  // console.log(locationData);

  const { weatherData } = useWeather(locationData);
  const currentWeather = weatherData?.current;

  const weather = currentWeather?.weather[0];
  // console.log(weather);

  const weatherBG = () => {
    if (weather && weather.main === "Rain") {
      return rain;
    }
    if (weather && weather.main === "Clouds") {
      return cloud;
    }
    if (weather && weather.main === "Sun") {
      return sun;
    }
    if (weather && weather.main === "Clear") {
      return clear;
    }
    if (weather && weather.main === "Mist") {
      return mist;
    }
    if (weather && weather.main === "Snow") {
      return snow;
    }
    if (weather && weather.main === "Thunder storm") {
      return thunder;
    }
    if (weather && weather.main === "Fog") {
      return fog;
    }
    if (weather && weather.main === "Drizzle") {
      return rain;
    }
    return defaultBg;
  };

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = weatherBG(); // Use your function to get the image URL
      img.onload = () => {
        setBgImage(img.src);
      };
    };

    loadImage();
  }, []);

  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <div className="pt-5 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 dark:bg-black md:border shadow-lg rounded-md dark:border-white text-gray-600 dark:text-white/80 lg:flex  justify-between gap-5 p-3">
          <div className="lg:w-3/4 grid grid-cols-1 place-content-center  ">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 sr-only">
              Angia Technologies
            </h1>
            <h2 className="text-base md:text-2xl md:leading-8">
              <span className="font-logoFont text-logo2 font-bold">Angia</span>
              <span className="mr-2">,</span>
              legally registered as{" "}
              <span className="font-logoFont text-logo1 font-bold">
                Angia Technologies
              </span>{" "}
              is a software development company based in Sydney, Australia. We
              specialize in delivering high-quality software solutions and
              comprehensive maintenance services to businesses of all sizes. Our
              expertise spans across custom software development, digital
              product innovation, and ongoing technical support. With a
              portfolio of successful digital products already serving users
              worldwide, we understand what it takes to build and maintain
              software that makes a real impact. Whether you need a custom
              solution for your business or reliable maintenance services, our
              team is committed to delivering excellence in every project.
            </h2>
          </div>

          <div className=" my-5 md:my-0 lg:w-72">
            <div className="mt-5 lg:mt-0">
              {country && (
                <h1 className="flex justify-center gap-2  text-logo1 dark:text-white font-bold text-3xl">
                  <p>{city},</p>
                  <p>{locationData.country}</p>
                </h1>
              )}

              <div className=" flex justify-center">
                <DateTimeDisplay showDate={true} showTime={true} />
              </div>
            </div>

            {currentWeather && (
              <div
                className={`bg-cover bg-center h-fit p-3 mt-2 rounded-md `}
                style={{
                  backgroundImage: bgImage ? `url(${weatherBG()})` : "none",
                }}
              >
                <div>
                  <div className="flex justify-between text-white  mt-3 h-24">
                    <div className="text-start ">
                      <div className="text-6xl">
                        <span>{Math.floor(currentWeather?.temp)}</span>
                        <span>&#176;C</span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-center text-xl">{weather?.main}</h1>

                      <div className=" w-16 h-16 rounded-full bg-black/30 ">
                        <img
                          src={`https://openweathermap.org/img/wn/${weather?.icon}.png`}
                          alt={weather?.description}
                          className="w-full object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-full mt-2 ">
                    <ul className="flex justify-between gap-2">
                      <li className="flex w-1/2 items-center justify-center p-1 gap-1  text-white  bg-black/30 rounded-md">
                        <i className="fas fa-temperature-full " />
                        <div className=" ml-1  text-sm">
                          <p>Feels like</p>
                          <p>
                            {Math.ceil(currentWeather?.feels_like)}{" "}
                            <span>&#176;C</span>
                          </p>
                        </div>
                      </li>
                      <li className="flex w-1/2 items-center justify-center p-1 gap-1  text-white   bg-black/30 rounded-md">
                        <i className="fas fa-droplet " />
                        <div className=" ml-1 text-sm">
                          <p>Humidity</p>
                          <p>
                            {Math.ceil(currentWeather?.humidity)}
                            <span>%</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <ul className=" mt-3 flex justify-between gap-2">
                      <li className="flex w-1/2 items-center justify-center p-1 gap-1  text-white  bg-black/30 rounded-md">
                        <i className="fas fa-wind " />
                        <div className=" ml-1 text-sm">
                          <p>Wind</p>
                          <p>
                            {currentWeather?.wind_speed} <span> m/s</span>
                          </p>
                        </div>
                      </li>
                      <li className="flex w-1/2 items-center justify-center p-1 gap-1  text-white  bg-black/30 rounded-md">
                        <i className="fas fa-gauge" />
                        <div className=" ml-1 text-sm">
                          <p>Pressure</p>
                          <p>
                            {Math.ceil(currentWeather?.pressure)}
                            <span> hpa</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`bg-cover bg-center md:h-[400px] brightness-90 my-5 md:my-16  md:flex gap-2 justify-between items-center `}
        style={{ backgroundImage: `url(${Design1})` }}
      >
        <Container>
          <div className="md:flex h-full gap-5 justify-between items-center py-5 content-center ">
            <div className="hidden md:block md:max-w-md w-80 px-3 md:py-3  bg-black/60 mb-5 md:mb-0 text-white">
              <Carousel autoSlide={true} autoSlideInterval={4000}>
                {homeSlides.map((slide) => (
                  <div key={slide.id} className=" h-[19.5rem] ">
                    <div className=" h-52 w-full">
                      <img
                        src={slide.image}
                        alt={slide.image}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="mt-2  text-sm">{slide.message}</p>
                    <div className="my-2 text-blue-500 hover:text-blue-700">
                      <Link to={slide.href}>Learn more</Link>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="md:w-2/3  leading-3">
              <div className="bg-black/60 py-3 px-3">
                <h2 className="text-white/90 font-serif font-extrabold text-xl md:text-2xl">
                  Unlock The Power Of The Internet
                </h2>
                <div>
                  <p className=" text-white/70  text-sm">
                    Ready to take your business to the next level? Our digital
                    services can help. From boosting your search engine
                    visibility to creating appealing and user friendly web apps,
                    we have the tools and expertise to help you grow your online
                    presence and connect with more customers than ever before.
                    We also offer solutions to automate your activities which
                    will increase your productivity by eliminating long manual
                    processes.
                  </p>
                </div>
              </div>
              <div className="bg-black/60 pt-3 pb-4 px-3 mt-6 ">
                <h1 className="text-white/90 font-serif font-extrabold text-xl md:text-2xl">
                  Making Digital Impact
                </h1>
                <p className="text-white/70 text-sm">
                  From startups to established enterprises, our solutions are
                  powering businesses across Australia. Our suite of digital
                  products, including Birabook and LotsApark, are helping
                  organizations streamline their operations and achieve digital
                  excellence. Join the growing number of businesses transforming
                  their digital presence with Angia.
                </p>

                <Link
                  to="/contact"
                  className="mt-3 w-fit border dark:bg-main1 bg-bg1 hover:bg-main1/70 hover:text-white/80 text-white p-2 rounded-md"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div>
          <div className="md:hidden  md:max-w-md w-80 mx-auto px-3 py-5 rounded-sm shadow-sm md:py-3 dark:bg-black bg-white mb-5 md:mb-0 dark:text-white text-gray-600">
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              {homeSlides.map((slide) => (
                <div key={slide.id} className="h-[19.5rem]">
                  <div className="  h-52 w-full">
                    <img
                      src={slide.image}
                      alt={slide.image}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-2  text-sm">{slide.message}</p>
                  <Link
                    to={slide.href}
                    className="my-2 text-blue-500 hover:text-blue-700"
                  >
                    Learn more
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>

          <div className=" mt-20">
            <div>
              <h1 className="my-5 text-center font-semibold text-xl font-serif  md:text-3xl text-gray-800 dark:text-white/80 ">
                Services
              </h1>
              <ul className="md:flex flex-wrap justify-between gap-5 mt-5">
                {services.slice(0, 3).map((service) => (
                  <li
                    key={service.id}
                    className="mx-auto mt-5 px-3 h-50 max-w-96 md:w-96 py-5 border border-1  border-gray-300 bg-white/80 dark:bg-black dark:border-white/50 rounded-sm shadow-md"
                  >
                    <div className="flex gap-5 py-1 ">
                      <div className="flex flex-col gap-2">
                        <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                        <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                        <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                      </div>
                      <h1 className="text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
                        {service.title}
                      </h1>
                    </div>
                    <p className="text-gray-600 w-90 text-sm leading-6  md:text-xl dark:text-white/80">
                      {service.description}
                    </p>

                    <p className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1">
                      <Link to="/contact">Get in touch</Link>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:text-center text-xl lg:text-start text-blue-600 hover:text-blue-700 underline mt-3">
              <Link to="/services">See all services</Link>
            </div>
          </div>
          <div className=" md:mt-20">
            <div>
              <h1 className="my-5 text-center font-semibold text-xl font-serif md:text-3xl text-gray-800 dark:text-white/80">
                Global Digital Solutions
              </h1>
              <div className="my-10 md:grid md:grid-cols-3 gap-5">
                <div className="bg-white md:px-3 dark:bg-black rounded-sm shadow-md w-full col-span-1 order-3">
                  <div className="w-68 h-60 py-3">
                    <img
                      src={globe2}
                      alt={globe}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="p-3 md:border shadow-sm rounded-sm text-gray-500 dark:text-white/80">
                    While proudly headquartered in Sydney, our vision extends
                    globally. We're committed to delivering world-class digital
                    solutions that transcend borders, helping businesses
                    worldwide achieve their digital transformation goals through
                    innovative technology and exceptional service.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 font-serif text-gray-500 dark:text-white/80 p-3 dark:p-0 bg-white dark:bg-black rounded-sm shadow-md col-span-2 order-1">
                  <h2 className="text-xl md:text-2xl mb-4 text-gray-800 dark:text-white/90">
                    Our Digital Ecosystem
                  </h2>

                  <div className="text-sm md:text-xl leading-6">
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Birabook</h3>
                      <p>
                        A comprehensive marketplace platform connecting beauty
                        and lifestyle professionals with customers. Features a
                        robust business management system for service providers
                        to manage bookings, teams, and services efficiently.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">LotsApark</h3>
                      <p>
                        Streamlined building parking management solution that
                        enables property managers to create secure platforms for
                        tenants. Features include building account management,
                        tenant access control, and a marketplace for parking
                        space sharing.
                      </p>
                    </div>

                    <p className="mt-4">
                      Our products are designed with enterprise-grade security
                      and scalability, serving businesses across Australia with
                      user-friendly interfaces and comprehensive management
                      tools.
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
