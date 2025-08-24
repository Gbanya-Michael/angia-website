import { ExternalLink, Globe, Smartphone, ShoppingCart } from "lucide-react";
import ImageWithFallback from "./ImageWithFallBack";

export default function PortfolioSection() {
  const projects = [
    {
      title: "FinTech Dashboard",
      description:
        "A comprehensive financial analytics platform for investment tracking and portfolio management.",
      type: "Web App",
      icon: <Globe className="h-5 w-5 text-main1 dark:text-main2" />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      timeline: "6 weeks",
    },
    {
      title: "Delivery Mobile App",
      description:
        "On-demand delivery application connecting customers with local restaurants and stores.",
      type: "Mobile App",
      icon: <Smartphone className="h-5 w-5 text-main2 dark:text-logo1" />,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      timeline: "5 weeks",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Multi-vendor marketplace with advanced inventory management and AI-powered recommendations.",
      type: "E-Commerce",
      icon: <ShoppingCart className="h-5 w-5 text-main3 dark:text-logo2" />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "AI/ML", "AWS"],
      timeline: "6 weeks",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-bg1 dark:to-bg2 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-lg md:text-2xl text-main1 dark:text-main2 font-medium">
            Our Work
          </h1>
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 dark:text-white">
            Recent MVP Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we've helped businesses launch and scale their ideas with
            our proven 6-week MVP process.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-main2/20 dark:border-main2/30 shadow-md flex flex-col bg-white/80 dark:bg-bg1/80 backdrop-blur-sm rounded-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 dark:bg-bg1/90 px-3 py-1 rounded-lg text-sm text-gray-700 dark:text-gray-200 shadow-md border border-main2/20 dark:border-main2/30">
                    {project.timeline}
                  </div>
                </div>
              </div>

              <div className="px-6 pt-6 h-fit">
                <div className="flex items-center space-x-2 mb-3">
                  {project.icon}
                  <div className="px-3 py-1 bg-main2/10 dark:bg-main2/20 text-main1 dark:text-main2 rounded-full text-sm font-medium border border-main2/20 dark:border-main2/30">
                    {project.type}
                  </div>
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </div>

                <div className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-main2/5 dark:bg-main2/10 text-main1 dark:text-main2 rounded-md border border-main2/20 dark:border-main2/30"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <button
            className="bg-main1 hover:bg-main2 dark:bg-main2 dark:hover:bg-logo1 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your MVP Project
          </button>
        </div>
      </div>
    </section>
  );
}
