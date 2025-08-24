import { Code, Smartphone, ShoppingCart, Bot, Zap, Users } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-main1 dark:text-main2" />,
      title: "Full-Stack Web Apps",
      description:
        "Modern, scalable web applications built with the latest technologies. From concept to deployment in 6 weeks.",
      features: [
        "React/Angualar.js",
        "Ruby/Node.js Backend",
        "Database Design",
        "Cloud Deployment",
      ],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-main2 dark:text-logo1" />,
      title: "Mobile Apps",
      description:
        "Native iOS and Android applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform",
        "App Store Submission",
      ],
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-main3 dark:text-logo2" />,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
      features: [
        "Online Stores",
        "Payment Integration",
        "Inventory Systems",
        "Analytics Dashboard",
      ],
    },
    {
      icon: <Bot className="h-12 w-12 text-logo1 dark:text-main2" />,
      title: "AI-Powered Workflows",
      description:
        "Smart automation and AI integration to streamline your business processes and boost productivity.",
      features: [
        "Process Automation",
        "AI Integration",
        "Workflow Optimization",
        "Data Analytics",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-bg2 dark:to-bg1 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 px-4 py-2 bg-main2/10 dark:bg-main2/20 text-main1 dark:text-main2 rounded-full border border-main2/20 dark:border-main2/30 w-fit mx-auto">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 dark:text-white">
            Everything You Need to Launch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From web apps to mobile solutions, we deliver complete MVPs that are
            ready to scale and grow with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border border-main2/20 dark:border-main2/30 shadow-md bg-white/80 dark:bg-bg1/80 backdrop-blur-sm rounded-xl overflow-hidden hover:-translate-y-1"
            >
              <div className="text-center pb-4 p-6">
                <div className="mx-auto mb-4 p-3 bg-main2/10 dark:bg-main2/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </div>
              </div>
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-2 gap-2 p-2 md:grid-cols-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Zap className="h-4 w-4 text-main2 dark:text-logo1" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
