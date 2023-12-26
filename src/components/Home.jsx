import React, { useState } from "react";
import NavBar from "./nav";
import Container from "../components/Container";
import Carousel from "../assets/utils/Carousel";
import {
  Design1,
  forbesStat1,
  earnBanner,
  seoChart,
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
} from "../useImage";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { locationInfo, useWeather } from "../useApi";
import "animate.css";
import DateTimeDisplay from "../assets/utils/DateTime";
import ContactFormModal from "./ContactFormModal";
import { useForm } from "../contexts/FormContext";

//
const homeSlides = [
  {
    id: 1,
    message:
      "Make money by referral. Work with us without obstructing your daily activities.",
    image: earnBanner,
    href: "#",
  },
  {
    id: 2,
    message:
      "Websites increase online sales Websites increase online sales Websites increase",
    image: forbesStat1,
    href: "#",
  },
  {
    id: 3,
    message:
      "Websites increase online sales Websites increase online sales Websites increase",
    image: seoChart,
    href: "#",
  },
];

const services = [
  {
    id: "1",
    title: "Web Development",
    description: `Elevate your online presence with our custom web development
                    services. We use modern technologies to modify or introduce your online
                    presence in style.`,
  },
  {
    id: "2",
    title: "SEO Services",
    description: `Dominate search engines with our 
    powerful SEO optimization services. We make sure you are being found online
    by powerful search engines like google.
                    `,
  },
  {
    id: "3",
    title: "SSM Services",
    description: `Low or zero social media presence? We will set up standard social media accounts
     and connect to your webiste. This will 
     boost traffic and increase sales.`,
  },
];
//

export default function Home() {
  //
  const { openForm } = useForm();
  const { locationData } = locationInfo();

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
    } else defaultBg;
  };

  const handleReferal = () => {
    if (country === "AU") {
      return "A$500";
    }
    if (country === "NG") {
      return "₦100,000 ";
    }
    if (country === "GB") {
      return "£300";
    }
    if (country === "PH") {
      return "₱10,000";
    }
    return "15%";
  };
  const referralCost = handleReferal();
  return (
    <div className="dark:bg-black bg-gray-200 relative">
      <NavBar />

      <ContactFormModal />

      <div className="pt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 dark:bg-black border shadow-lg rounded-md dark:border-white text-gray-600 dark:text-white/80 md:flex  justify-between gap-5 p-3">
          <div className="md:w-3/4 grid grid-cols-1 place-content-center  ">
            <h1 className="text-3xl leading-8">
              <span className=" font-logoFont text-logo2 font-bold">
                Kinetic
              </span>{" "}
              <span className="font-logoFont  text-logo1 font-bold ">
                Kraft
              </span>
              <span className="mr-2">,</span>
              the best software developers
              {country && (
                <span className="ml-2">in {locationData.country_name}.</span>
              )}
            </h1>
            <div className="text-lg md:text-2xl leading-6 mt-3">
              <p>
                We use modern technologies to create seamless, appealing and
                interractive web apps to solve complex problems for you and your
                customers.
              </p>

              <p className="mt-3">
                Your website is like the cover page of a book. We make sure
                visitors stay glued once they visit your webiste to enjoy your
                online presence and services. We work with businesses and
                enterpreneurs all around world.
              </p>
            </div>
          </div>

          <div className="p-3 my-5 md:my-0 md:w-64 ">
            <div>
              {country && (
                <h1 className="flex justify-center gap-2 text-logo1 dark:text-white font-bold text-3xl">
                  <p>{city},</p>
                  <p>{locationData.country}</p>
                </h1>
              )}

              <div className=" flex justify-center">
                <DateTimeDisplay showDate={true} showTime={true} />
              </div>
            </div>
            <div
              className={`bg-cover bg-center h-fit p-3 mt-2 rounded-md `}
              style={{
                backgroundImage: `url(${weatherBG()})`,
              }}
            >
              {currentWeather && (
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
              )}
            </div>
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
                <h1 className="text-white/90 font-serif  font-extrabold text-xl md:text-2xl">
                  Unlock The Power Of The Internet
                </h1>
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
                  <button
                    onClick={() => {
                      openForm();
                    }}
                    className="mt-3 w-fit border dark:bg-main1 bg-bg1 hover:bg-main1/70 hover:text-white/80 text-white p-2 rounded-md"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="bg-black/60 pt-3 pb-4 px-3 mt-6 ">
                <h1 className="text-white/90 font-serif  font-extrabold text-xl md:text-2xl">
                  Earn Money with Us
                </h1>
                <p className=" text-white/70 text-sm">
                  Unlock opportunities with us! Refer a client and earn{" "}
                  <span className=" text-green-500 ">{referralCost}</span> per
                  referral—because your connections deserve the best services,
                  just like you deserve the rewards. No commitment. Just get
                  paid anytime you refer a client successfully.
                </p>

                <button className="mt-3 w-fit border dark:bg-main1 bg-bg1 hover:bg-main1/70 hover:text-white/80 text-white p-2 rounded-md">
                  Refer a client
                </button>
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
                  <div className="my-2 text-blue-500 hover:text-blue-700">
                    <Link to={slide.href}>Learn more</Link>
                  </div>
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
                {services.map((service) => (
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

                    <button
                      onClick={() => openForm()}
                      className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1"
                    >
                      Get in touch
                    </button>
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
              <h1 className="my-5 text-center font-semibold text-xl font-serif  md:text-3xl text-gray-800 dark:text-white/80 ">
                Make Extra Income
              </h1>
              <div className="mb-10 md:grid md:grid-cols-3 gap-5">
                <div className=" bg-white  dark:bg-black rounded-sm shadow-md  w-full  col-span-1 order-3 ">
                  <div className=" w-68 h-60 py-3 md:px-3">
                    <img
                      src={globe2}
                      alt={globe}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="p-3  text-gray-500 dark:text-white">
                    We will work with wherever you are. We have a global reach
                  </p>
                </div>
                <div className="mt-5 md:mt-0 font-serif text-gray-500  dark:text-white/80 p-3 dark:p-0 bg-white  dark:bg-black rounded-sm shadow-md  col-span-2 order-1">
                  <p className="  text-xl md:text-xl leading-5 ">
                    Know a business or someone that would need our services?
                  </p>
                  <p className="text-xl">
                    <Link className="text-blue-500 hover:text-blue-700">
                      Refer
                    </Link>
                    <span> them to us and get paid.</span>
                  </p>
                  <div className="flex items-center gap-2 text-xl md:text-2xl  my-3 text-gray-800 dark:text-white/90 ">
                    <p>Get paid</p>
                    <p className="text-2xl text-green-500 animate__animated animate__tada animate__infinite ">
                      {referralCost}
                    </p>
                    <span> per referral.</span>
                  </div>
                  <div className="text-lg">
                    <p className="text-xl md:text-2xl leading-5">
                      How does it work?
                    </p>
                    <p>
                      You know someone that owns a business with zero or poor
                      online presence, all you need to do is click the
                      <q>Refer Now</q> button, fill in the required fields and
                      sumbit. You can also look for businesses on social media
                      and refer them to us with the neccessary information
                    </p>
                    <p>That is it. Your part is done !</p>
                    <p>
                      Our team will receive the provided information and send a
                      proposal to the client. Once successful, and we get paid,
                      we pay you first before any expenses !
                    </p>
                  </div>
                  <Link>
                    <div className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1">
                      Refer Now
                    </div>
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
