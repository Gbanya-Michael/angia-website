import { CheckCircle, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would integrate with Supabase or another backend
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const benefits = [
    {
      icon: <Clock className="h-5 w-5 text-green-600" />,
      text: "6-week delivery guarantee",
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      text: "Dedicated project team",
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-600" />,
      text: "Latest tech stack",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-orange-600" />,
      text: "Post-launch support",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div variant="secondary" className="mb-4 bg-white/20 text-white">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Ready to Launch Your MVP?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you go from
              idea to market in just 6 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white">
              <h1>
                <divTitle>Start Your Project</divTitle>
                <p>
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed proposal.
                </p>
              </h1>
              <p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Tell us about your project idea..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                  <div type="submit" className="w-full" size="lg">
                    Get Your Free Consultation
                  </div>
                </form>
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl mb-4">Why Choose The MVP Guys?</h3>
                <p className="text-primary-foreground/80 mb-8">
                  We've perfected the art of rapid MVP development, helping
                  Australian businesses launch faster and smarter.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 rounded-lg p-4"
                  >
                    {benefit.icon}
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 border-white/20">
                <p className="p-6 text-center">
                  <h4 className="text-xl mb-2">Free Consultation</h4>
                  <p className="text-primary-foreground/80 mb-4">
                    Get expert advice on your MVP strategy, tech stack, and
                    go-to-market approach.
                  </p>
                  <div className="text-2xl">$0</div>
                  <div className="text-sm text-primary-foreground/80">
                    No commitment required
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
