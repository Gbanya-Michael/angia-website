import { ExternalLink, Globe, Smartphone, ShoppingCart } from "lucide-react";
import ImageWithFallback from "./ImageWithFallBack";

export default function PortfolioSection() {
  const projects = [
    {
      title: "FinTech Dashboard",
      description:
        "A comprehensive financial analytics platform for investment tracking and portfolio management.",
      type: "Web App",
      icon: <Globe className="h-5 w-5" />,
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
      icon: <Smartphone className="h-5 w-5" />,
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
      icon: <ShoppingCart className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "AI/ML", "AWS"],
      timeline: "6 weeks",
    },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="mb-4 text-lg md:text-2xl text-gray-600">Our Work</h1>
          <h2 className="text-3xl md:text-4xl mb-6">
            Recent MVP Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses launch and scale their ideas with
            our proven 6-week MVP process.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md flex flex-col" // <-- added flex flex-col
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 px-1 rounded-lg text-s text-gray-700 shadow-md">
                    {project.timeline}
                  </div>
                </div>
              </div>

              <div className="px-2 pt-2 h-fit">
                <div className="flex items-center space-x-2 mb-2">
                  {project.icon}
                  <div variant="outline">{project.type}</div>
                </div>
                <div className="text-xl">{project.title}</div>
                <div>{project.description}</div>

                <div className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* To */}
              {/* <button className="mt-auto w-full group flex items-center justify-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 px-4 py-2 border border-gray-300">
                View Case Study
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
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
