import { Star, Quote } from "lucide-react";
import ImageWithFallback from "./ImageWithFallBack";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart Australia",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The MVP Guys delivered exactly what we needed in just 6 weeks. Our app is now live and we've secured Series A funding. Their expertise in rapid prototyping is unmatched.",
      rating: 5,
      company: "TechStart",
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, RetailFlow",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Angia was a game-changer. They took our complex e-commerce idea and turned it into a beautiful, functional platform. The ROI has been incredible.",
      rating: 5,
      company: "RetailFlow",
    },
    {
      name: "Emma Thompson",
      role: "Product Manager, HealthTech Solutions",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The team's attention to detail and commitment to deadlines is outstanding. They helped us validate our concept and launch to market faster than we thought possible.",
      rating: 5,
      company: "HealthTech",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-bg2 dark:to-bg1 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 px-4 py-2 bg-main2/10 dark:bg-main2/20 text-main1 dark:text-main2 rounded-full border border-main2/20 dark:border-main2/30 w-fit mx-auto">
            Client Success
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 dark:text-white">
            Trusted by Australian Innovators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            working with The MVP Guys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <Quote className="h-8 w-8 text-main2/30 dark:text-main2/40 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-main2 dark:fill-logo1 text-main2 dark:text-logo1"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-main2/20 dark:border-main2/30"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs mt-1 px-2 py-1 bg-main2/10 dark:bg-main2/20 text-main1 dark:text-main2 rounded-full border border-main2/20 dark:border-main2/30 w-fit">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
