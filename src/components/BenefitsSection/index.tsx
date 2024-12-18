const BenefitsSection = () => {
    const benefits = [
      {
        title: "Clinically Studied",
        description: "Underwent lab and safety tests",
        icon: "🧪",
      },
      {
        title: "Vegetarian Friendly",
        description: "Wide selection for your needs",
        icon: "🌱",
      },
      {
        title: "Made In India",
        description: "Explore products made locally",
        icon: "🇮🇳",
      },
      {
        title: "Free Shipping",
        description: "No shipping costs on orders",
        icon: "🚚",
      },
      {
        title: "No Risk",
        description: "Products safe and within use by date",
        icon: "🔒",
      },
      { title: "GMO Free", description: "No modified products", icon: "🌾" },
    ];
  
    return (
      <section className="bg-deepTeal text-white pt-10 px-6 mx-5 rounded-[50px] w-3/4 relative -translate-y-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 gap-8 max-w-5xl mx-auto -translate-y-[60px] -mb-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-t-2"
            >
              <span className="text-4xl">{item.icon}</span>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default BenefitsSection;