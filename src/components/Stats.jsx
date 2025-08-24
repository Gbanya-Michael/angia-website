export default function StatsSection() {
  const stats = [
    { number: "10+", label: "MVPs Delivered" },
    { number: "6", label: "Week Delivery" },
    { number: "98.5%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-main2/10 via-gray-100 to-main3/10 dark:from-main2/20 dark:via-bg1 dark:to-main3/20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl mb-2 font-bold bg-gradient-to-r from-main1 to-main2 dark:from-main2 dark:to-logo1 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-main1 dark:group-hover:text-main2 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
