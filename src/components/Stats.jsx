export default function StatsSection() {
  const stats = [
    { number: "10+", label: "MVPs Delivered" },
    { number: "6", label: "Week Delivery" },
    { number: "98.5%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-gray-200 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
