import { forbesStat1, earnBanner, seoChart } from "../hooks/useImage";
import {
  HomeModernIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  },
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

// data for services
export const services = [
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

    title: "Frontend Development",
    description: `
    Revolutionize user experiences with cutting-edge Frontend Development. Craft visually stunning interfaces for an immersive online reflection.
    `,
  },
  {
    id: "4",
    title: "E-commerce",
    description: `
Transform your business online with expert E-commerce Development. Elevate your digital storefront for a seamless shopping experience.    `,
  },
  {
    id: "5",
    title: "Web Hosting",
    description: `
    Empower your online presence with our secure and reliable hosting solutions. Elevate performance for a seamless user experience.
    `,
  },
  {
    id: "6",
    title: "Backend Development",
    description: `
    Empower your digital infrastructure with expert Backend Development. Ensure robust functionality and seamless operations for optimal performance.
    `,
  },
  {
    id: "7",
    title: "UI/UX Design ",
    description: `
    Shape exceptional user experiences with our UI/UX Design expertise. Craft visually appealing interfaces for engaging and intuitive interactions.
    `,
  },
  {
    id: "8",
    title: "Webisite Maintenance",
    description: `
    Ensure the longevity of your online presence with Website Maintenance & Support. Receive expert care for a seamless and secure web experience.
    `,
  },
  {
    id: "9",
    title: "Email Signature Design",
    description: `
    Optimize your professional image with Email Signature Design. Elevate your communications with visually appealing and impactful email signatures.
    `,
  },

  {
    id: "10",
    title: "Content writing",
    description: `
    Craft compelling narratives with our expert Content Writers. Elevate your brand's voice for a resonant and impactful impression.
    `,
  },
];
