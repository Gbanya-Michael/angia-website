import {
  Code2,
  Rocket,
  Users,
  Globe,
  Lightbulb,
  Target,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Monitor,
  Database,
  Cloud,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div variant="secondary" className="px-4 py-2 text-sm">
                <Code2 className="w-4 h-4 mr-2" />
                Melbourne, Australia
              </div>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              About Angia
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Innovative software development company creating digital solutions
              that
              <span className="text-primary font-medium">
                {" "}
                drive business growth
              </span>{" "}
              and efficiency.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-card border rounded-full px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Mobile Apps</span>
              </div>
              <div className="flex items-center bg-card border rounded-full px-4 py-2">
                <Monitor className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Web Solutions</span>
              </div>
              <div className="flex items-center bg-card border rounded-full px-4 py-2">
                <Database className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Backend Systems</span>
              </div>
              <div className="flex items-center bg-card border rounded-full px-4 py-2">
                <Cloud className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Cloud Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h2>Our Story</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to transform how businesses operate in
                    the digital age, we combine technical expertise with deep
                    industry knowledge to deliver solutions that make a real
                    impact.
                  </p>
                  <p>
                    Our team of experienced developers and technology experts
                    are passionate about creating software that solves complex
                    business challenges and drives meaningful results.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom Software Development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Digital Product Portfolio (Birabook, LotsaPark)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Long-term Partnership & Support</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl mb-2">Global</h3>
                      <p className="text-muted-foreground text-sm">
                        Serving clients worldwide
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <h3 className="text-2xl mb-2">Expert</h3>
                      <p className="text-muted-foreground text-sm">
                        Experienced team
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="text-2xl mb-2">Fast</h3>
                      <p className="text-muted-foreground text-sm">
                        Rapid development
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Code2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl mb-2">Quality</h3>
                      <p className="text-muted-foreground text-sm">
                        Premium solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Strengths Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-gradient-to-br from-card to-card/50 border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative software solutions that drive business
                transformation. We combine technical excellence with deep
                industry understanding to create both custom solutions and
                powerful digital products.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Australia's leading software development company, enabling
                businesses of all sizes to harness the full potential of digital
                technology through innovative solutions and exceptional service
                delivery.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-card to-card/50 border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/40 transition-colors">
                <Zap className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="mb-4">Our Strengths</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dual expertise in custom software development and digital
                product innovation. Our Sydney-based team delivers both tailored
                solutions and scalable products with ongoing support.
              </p>
            </div>
          </div>

          {/* Innovation & Leadership Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3>Innovation & Growth</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Innovation is at our core. We continuously invest in emerging
                technologies and methodologies to enhance our service delivery
                and product development.
              </p>
              <div className="bg-background/50 rounded-xl p-4 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  "We measure our success by the transformative impact our
                  solutions have on our clients' businesses."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3>Company Leadership</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Under strong leadership, Angia has established itself as a
                trusted name in software development with extensive experience
                in technology and business strategy.
              </p>
              <div className="bg-background/50 rounded-xl p-4 border-l-4 border-secondary">
                <p className="text-sm text-muted-foreground">
                  "Committed to maintaining the highest standards while
                  fostering continuous improvement."
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-primary-foreground overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="mb-4 text-primary-foreground">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Need a digital solution that drives real results? We're here
                  to help you navigate the digital transformation journey with
                  innovative software solutions.
                </p>
                <button size="lg" variant="secondary" className="px-8 py-3">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
