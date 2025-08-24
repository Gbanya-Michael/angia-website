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

import { FooterSection } from "./Footter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-bg2 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-main2/10 via-gray-50 to-main3/10 dark:from-main2/20 dark:via-bg2 dark:to-main3/20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-main2/20 dark:bg-main2/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-main3/20 dark:bg-main3/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-logo1/20 dark:bg-logo1/30 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="px-4 py-2 text-sm bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-full text-main1 dark:text-white">
                <Code2 className="w-4 h-4 mr-2 inline" />
                Melbourne, Australia
              </div>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-main1 to-main2 dark:from-main2 dark:to-logo1 bg-clip-text text-transparent text-5xl md:text-6xl font-bold">
              About Angia
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Innovative software development company creating digital solutions
              that
              <span className="text-main1 dark:text-main2 font-semibold">
                {" "}
                drive business growth
              </span>{" "}
              and efficiency.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-full px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2 text-main1 dark:text-main2" />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Mobile Apps
                </span>
              </div>
              <div className="flex items-center bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-full px-4 py-2">
                <Monitor className="w-4 h-4 mr-2 text-main1 dark:text-main2" />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Web Solutions
                </span>
              </div>
              <div className="flex items-center bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-full px-4 py-2">
                <Database className="w-4 h-4 mr-2 text-main1 dark:text-main2" />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Backend Systems
                </span>
              </div>
              <div className="flex items-center bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-full px-4 py-2">
                <Cloud className="w-4 h-4 mr-2 text-main1 dark:text-main2" />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  Cloud Services
                </span>
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
                  <div className="w-12 h-12 bg-main2/10 dark:bg-main2/20 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-main1 dark:text-main2" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Story
                  </h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
                    <span className="text-gray-700 dark:text-gray-200">
                      Custom Software Development
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">
                      Digital Product Portfolio (Birabook, LotsaPark)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-200">
                      Long-term Partnership & Support
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-main2/10 to-main3/10 dark:from-main2/20 dark:to-main3/20 rounded-2xl p-8 backdrop-blur-sm border border-main2/20 dark:border-main2/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-main1 dark:bg-main2 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
                        Global
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Serving clients worldwide
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-main2 dark:bg-logo1 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
                        Expert
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Experienced team
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-main3 dark:bg-logo2 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
                        Fast
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Rapid development
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-logo1/20 dark:bg-logo1/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Code2 className="w-8 h-8 text-main1 dark:text-main2" />
                      </div>
                      <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
                        Quality
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
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
            <div className="group bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-main2/10 dark:bg-main2/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-main2/20 dark:group-hover:bg-main2/30 transition-colors">
                <Target className="w-7 h-7 text-main1 dark:text-main2" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To deliver innovative software solutions that drive business
                transformation. We combine technical excellence with deep
                industry understanding to create both custom solutions and
                powerful digital products.
              </p>
            </div>

            <div className="group bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-logo1/20 dark:bg-logo1/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-logo1/30 dark:group-hover:bg-logo1/40 transition-colors">
                <Eye className="w-7 h-7 text-main1 dark:text-main2" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be Australia's leading software development company, enabling
                businesses of all sizes to harness the full potential of digital
                technology through innovative solutions and exceptional service
                delivery.
              </p>
            </div>

            <div className="group bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-logo2/20 dark:bg-logo2/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-logo2/30 dark:group-hover:bg-logo2/40 transition-colors">
                <Zap className="w-7 h-7 text-main1 dark:text-main2" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Our Strengths
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dual expertise in custom software development and digital
                product innovation. Our Sydney-based team delivers both tailored
                solutions and scalable products with ongoing support.
              </p>
            </div>
          </div>

          {/* Innovation & Leadership Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-main2/5 to-main3/5 dark:from-main2/10 dark:to-main3/10 border border-main2/20 dark:border-main2/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-main2/10 dark:bg-main2/20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-main1 dark:text-main2" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Innovation & Growth
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Innovation is at our core. We continuously invest in emerging
                technologies and methodologies to enhance our service delivery
                and product development.
              </p>
              <div className="bg-white/50 dark:bg-bg1/50 rounded-xl p-4 border-l-4 border-main1 dark:border-main2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  "We measure our success by the transformative impact our
                  solutions have on our clients' businesses."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-logo1/5 to-logo2/5 dark:from-logo1/10 dark:to-logo2/10 border border-main2/20 dark:border-main2/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-logo1/20 dark:bg-logo1/30 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-main1 dark:text-main2" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Company Leadership
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Under strong leadership, Angia has established itself as a
                trusted name in software development with extensive experience
                in technology and business strategy.
              </p>
              <div className="bg-white/50 dark:bg-bg1/50 rounded-xl p-4 border-l-4 border-logo1 dark:border-logo2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  "Committed to maintaining the highest standards while
                  fostering continuous improvement."
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-main1 to-main2 dark:from-main2 dark:to-logo1 rounded-3xl p-12 text-white overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                  Need a digital solution that drives real results? We're here
                  to help you navigate the digital transformation journey with
                  innovative software solutions.
                </p>
                <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
