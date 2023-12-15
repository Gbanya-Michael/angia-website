import React from "react";
import NavBar from "./nav";
import Container from "../components/Container";
import Carousel from "../assets/utils/Carousel";
import { Design1, forbesStat1, earnBanner, seoChart } from "../useImage";
import { Link } from "react-router-dom";

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
//

export default function Home() {
  return (
    <div className="dark:bg-black bg-gray-200">
      <NavBar />

      <div className="">
        <div
          className={`bg-cover bg-center md:h-[400px] brightness-90 my-5  md:flex gap-2 justify-between items-center `}
          style={{ backgroundImage: `url(${Design1})` }}
        >
          <Container>
            <div className="md:flex h-full gap-5 justify-between items-center py-5 content-center ">
              <div className="hidden md:block md:max-w-md w-80 px-3 md:py-3  bg-black/60 mb-5 md:mb-0 text-white">
                <Carousel autoSlide={true} autoSlideInterval={4000}>
                  {homeSlides.map((slide) => (
                    <div key={slide.id} className=" h-[19.5rem] ">
                      <div className="  h-52 w-full">
                        <img
                          src={slide.image}
                          alt={slide.image}
                          className="h-full w-full object-cover"
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
                <div className="bg-black/60 py-5 px-3">
                  <h1 className="text-white/90  font-extrabold text-sm md:text-xl">
                    Unlock The Power Of The Internet
                  </h1>
                  <div>
                    <p className=" text-white/70  text-sm">
                      Ready to take your business to the next level? Our digital
                      services can help. From boosting your search engine
                      visibility to creating appealing and user friendly web
                      apps, we have the tools and expertise to help you grow
                      your online presence and connect with more customers than
                      ever before. We also offer solutions to automate your
                      activities which will increase your productivity by
                      eliminating long manual processes.
                    </p>
                    <div className="mt-3 w-fit border dark:bg-main1 bg-bg1 hover:bg-main1/70 hover:text-white/80 text-white p-2 rounded-md">
                      <Link>Contact us</Link>
                    </div>
                  </div>
                </div>
                <div className="bg-black/60 pt-5 pb-4 px-3 mt-6 ">
                  <h1 className="text-white/90  font-extrabold text-sm md:text-xl">
                    Earn Money with Us
                  </h1>
                  <p className=" text-white/70 text-sm">
                    Ready to take your business to the next level? Our digital
                    marketing services can help. From boosting your search
                    engine visibility to creating compelling social media
                    campaigns, we have the tools and expertise to help you grow
                    your online presence and connect with more customers than
                    ever before.
                  </p>
                  <div className="mt-3 w-fit border dark:bg-main1 bg-bg1 hover:bg-main1/70 hover:text-white/80 text-white p-2 rounded-md">
                    <Link>Register as agent</Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
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
        </div>
      </Container>
    </div>
  );
}
