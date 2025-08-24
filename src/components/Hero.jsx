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
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-bg2 dark:to-bg1 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 bg-main2/10 dark:bg-main2/20 w-fit mx-auto px-3 py-1 rounded-lg border border-main2/20 dark:border-main2/30">
            <span className="text-main1 dark:text-main2 font-medium">
              🇦🇺 Trusted by Australian businesses
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl mb-6 bg-gradient-to-r from-main1 to-main2 dark:from-main2 dark:to-logo1 bg-clip-text text-transparent font-bold">
            Launch Your MVP in Just 6 Weeks
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're The MVP Guys. We help founders, investors, and businesses
            transform ideas into market-ready products with lightning speed and
            precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="w-fit mx-auto md:mx-0 text-lg px-6 py-3 flex items-center bg-main1 hover:bg-main2 dark:bg-main2 dark:hover:bg-logo1 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
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
              className="w-fit mx-auto md:mx-0 text-lg px-6 py-3 flex items-center bg-main3 hover:bg-main2 dark:bg-logo2 dark:hover:bg-logo1 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CodeBracketIcon className="h-8 w-8 text-main1 dark:text-main2" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                Full-Stack Web Apps
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <PhoneIcon className="h-8 w-8 text-main2 dark:text-logo1" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                iOS &amp; Android Apps
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/80 dark:bg-bg1/80 backdrop-blur-sm border border-main2/20 dark:border-main2/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CalendarIcon className="h-8 w-8 text-main3 dark:text-logo2" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                AI-Powered Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
