import { forbesStat1, seoChart } from "../hooks/useImage";
import {
  HomeModernIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

import Expertunity from "../components/DemoJobs/Expertunity";

//navigation options
export const nav = [
  {
    name: "Home",
    href: "/",
    icon: HomeModernIcon,
  },
  {
    name: "About",
    href: "/about",
    icon: UserGroupIcon,
  },
  {
    name: "Services",
    href: "/services",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: BookOpenIcon,
  },

  {
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  },
  // {
  //   name: "Demo Jobs",
  //   href: "/demo",
  //   icon: BeakerIcon,
  // },
];

//about data

export const abouts = [
  {
    id: "1",
    title: "Our Mission",
    description: `At Angia, our mission is to deliver innovative software solutions that drive business transformation. Based in Sydney, we combine technical excellence with deep industry understanding to create both custom solutions and powerful digital products. We're committed to helping businesses streamline their operations, enhance their digital presence, and achieve sustainable growth through technology.`,
  },
  {
    id: "2",
    title: "Our Vision",
    description: `Angia envisions a future where businesses of all sizes can harness the full potential of digital technology. We aim to be Australia's leading software development company, known for both our custom development services and our suite of innovative digital products. Our goal is to set new standards in software development, maintaining excellence in both product quality and service delivery.`,
  },
  {
    id: "3",
    title: "Our Strengths",
    description: `Angia excels through our dual expertise in custom software development and digital product innovation. Our Sydney-based team combines deep technical knowledge with a strong understanding of business needs. We pride ourselves on our ability to deliver both tailored solutions and scalable products, supported by our commitment to ongoing maintenance and support.`,
  },
  {
    id: "4",
    title: "Innovation & Growth",
    description: `At Angia, innovation is at our core. We continuously invest in emerging technologies and methodologies to enhance our service delivery and product development. Our commitment to growth extends beyond our own organization - we measure our success by the transformative impact our solutions have on our clients' businesses.`,
  },
  {
    id: "5",
    title: "Company Leadership",
    description: `Under strong leadership, Angia has established itself as a trusted name in software development. Our management team brings together extensive experience in technology, business strategy, and digital innovation. We're committed to maintaining the highest standards of service delivery while fostering a culture of continuous improvement and technical excellence.`,
  },
];
//slider images
export const homeSlides = [
  {
    id: 2,
    message:
      "Websites increase online sales Websites increase online sales Websites increase",
    image: forbesStat1,
    href: "/contact",
  },
  {
    id: 3,
    message:
      "Websites increase online sales Websites increase online sales Websites increase",
    image: seoChart,
    href: "/contact",
  },
];

//demo applications

export const demoApps = [
  {
    id: "expertunity",
    name: "Expertunity",
    description:
      "Helping subject matter experts grow enterprise skills and create strategic value.",
    icon: "👨‍💼👩‍💼💼",
    component: Expertunity,
  },
];
