import { Code, Smartphone, ShoppingCart, Bot, Zap, Users } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
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
      icon: <Smartphone className="h-12 w-12 text-green-600" />,
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
      icon: <ShoppingCart className="h-12 w-12 text-purple-600" />,
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
      icon: <Bot className="h-12 w-12 text-orange-600" />,
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
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div variant="secondary" className="mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl mb-6">
            Everything You Need to Launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From web apps to mobile solutions, we deliver complete MVPs that are
            ready to scale and grow with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <div className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-slate-100 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-xl">{service.title}</div>
                <div className="text-sm">{service.description}</div>
              </div>
              <div>
                <ul className="grid grid-cols-2 gap-2 p-2 md:grid-cols-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Zap className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
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
