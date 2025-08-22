import {
  ArrowRightIcon,
  CalendarIcon,
  CodeBracketIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 bg-gray-300 w-fit mx-auto px-1 rounded-lg">
            🇦🇺 Trusted by Australian businesses
          </div>

          <h1 className="text-2xl md:text-4xl mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Launch Your MVP in Just 6 Weeks
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're The MVP Guys. We help founders, investors, and businesses
            transform ideas into market-ready products with lightning speed and
            precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="w-fit mx-auto md:mx-0 text-lg px-4 py-2 flex items-center bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Start Your Journey with Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" w-fit mx-auto md:mx-0 text-lg px-4 py-2 flex items-center bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white shadow-sm">
              <CodeBracketIcon className="h-8 w-8 text-blue-600" />
              <span>Full-Stack Web Apps</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white shadow-sm">
              <PhoneIcon className="h-8 w-8 text-green-600" />
              <span>iOS &amp; Android Apps</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white shadow-sm">
              <CalendarIcon className="h-8 w-8 text-purple-600" />
              <span>AI-Powered Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
