import { forbesStat1, earnBanner, seoChart } from "../hooks/useImage";
import {
  HomeModernIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  BookOpenIcon,
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
    name: "Blog",
    href: "/blog",
    icon: BookOpenIcon,
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
    description:
      "Need a website that stands out? We'll build you a modern, fast, and beautiful website that your customers will love. Whether you're starting fresh or updating an existing site, we've got you covered.",
  },
  {
    id: "2",
    title: "SEO Services",
    description:
      "Tired of being invisible online? Let's get your business to the top of Google searches. We use proven strategies to help your customers find you when they're looking for services like yours.",
  },
  {
    id: "3",
    title: "Frontend Development",
    description:
      "First impressions matter. We create stunning, responsive websites that look great on any device. Your users will enjoy smooth, intuitive interactions that keep them coming back for more.",
  },
  {
    id: "4",
    title: "E-commerce",
    description:
      "Ready to sell online? We'll build you a secure, user-friendly online store that makes shopping a breeze. From product listings to checkout, we ensure your customers have a smooth buying experience.",
  },
  {
    id: "5",
    title: "Web Hosting",
    description:
      "Don't let slow hosting hold you back. Our reliable hosting solutions keep your website fast, secure, and always online. We handle the technical stuff so you can focus on your business.",
  },
  {
    id: "6",
    title: "Backend Development",
    description:
      "Think of it as your website's engine room - we build robust systems that power your online presence. From databases to APIs, we ensure everything runs smoothly behind the scenes.",
  },
  {
    id: "7",
    title: "UI/UX Design",
    description:
      "Want your website to feel just right? Our design team creates interfaces that your users will love to use. We combine beautiful aesthetics with practical functionality to deliver the best experience.",
  },
  {
    id: "8",
    title: "Website Maintenance",
    description:
      "Think of us as your website's personal care team. We keep everything running smoothly with regular updates, security checks, and performance tuning. No technical headaches - we handle it all.",
  },
  {
    id: "9",
    title: "Content Writing",
    description:
      "Words matter. Our writers craft engaging content that speaks directly to your audience. We help tell your story in a way that connects with your customers and gets your message across clearly.",
  },
];
