import {
  GlobeAltIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  ServerIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const servicesData = [
  {
    id: 1,
    title: "Full Stack Web Applications",
    description:
      "End-to-end web solutions with dynamic features, database integration, and real-time functionality for complex business needs.",
    icon: CodeBracketIcon,
    gradient: "from-blue-500 to-indigo-500",
    category: "web",
  },
  {
    id: 2,
    title: "Static Websites",
    description:
      "Fast, secure, and cost-effective websites perfect for showcasing your business, portfolio, or landing pages.",
    icon: GlobeAltIcon,
    gradient: "from-green-500 to-emerald-500",
    category: "web",
  },
  {
    id: 3,
    title: "AI Integration",
    description:
      "Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance decision-making processes.",
    icon: CpuChipIcon,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Process Automation",
    description:
      "Transform your business operations with smart automation that eliminates repetitive tasks, reduces errors, and boosts productivity.",
    icon: CogIcon,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "E-commerce",
    description:
      "Ready to sell online? We'll build you a secure, user-friendly online store that makes shopping a breeze. From product listings to checkout, we ensure your customers have a smooth buying experience.",
    icon: ShoppingCartIcon,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "SEO Services",
    description:
      "Tired of being invisible online? Let's get your business to the top of Google searches. We use proven strategies to help your customers find you when they're looking for services like yours.",
    icon: ChartBarIcon,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 7,
    title: "Web Hosting",
    description:
      "Don't let slow hosting hold you back. Our reliable hosting solutions keep your website fast, secure, and always online. We handle the technical stuff so you can focus on your business.",
    icon: ServerIcon,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 8,
    title: "Website Maintenance",
    description:
      "Think of us as your website's personal care team. We keep everything running smoothly with regular updates, security checks, and performance tuning. No technical headaches - we handle it all.",
    icon: WrenchScrewdriverIcon,
    gradient: "from-yellow-500 to-amber-500",
  },
];
