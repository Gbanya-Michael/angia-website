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
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div variant="secondary" className="mb-4">
            Client Success
          </div>
          <h2 className="text-3xl md:text-4xl mb-6">
            Trusted by Australian Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            working with The MVP Guys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div variant="outline" className="text-xs mt-1">
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
