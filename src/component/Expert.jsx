import React from "react";

const Expert = () => {
  const services = [
    {
      serviceId: 6,
      serviceName: "Cold Weather Nutrition Plan",
      providerName: "Pet Dietetics Pro",
      providerEmail: "nutrition@petdietetics.com",
      price: 55,
      rating: 4.8,
      slotsAvailable: 4,
      description:
        "Customized diet plans to adjust calorie intake for pets who are less active indoors or burn more energy staying warm.",
      image:
        "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80",
      category: "Health",
    },
    {
      serviceId: 7,
      serviceName: "Heated Luxury Boarding Suite",
      providerName: "CozyStays Resort",
      providerEmail: "book@cozystays.com",
      price: 85,
      rating: 4.9,
      slotsAvailable: 3,
      description:
        "Overnight boarding in suites featuring heated floors and orthopedic bedding for the ultimate cozy winter night.",
      image:
        "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80",
      category: "Boarding",
    },
    {
      serviceId: 8,
      serviceName: "Hydrating Hot Oil Coat Spa",
      providerName: "Luxe Fur Salon",
      providerEmail: "spa@luxefur.com",
      price: 50,
      rating: 4.7,
      slotsAvailable: 7,
      description:
        "Deep conditioning hot oil treatment to combat static electricity and dry skin caused by indoor heating systems.",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Grooming",
    },
  ];

  return (
    <div className="mt-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Meet Our Expert Vets
        </h3>

        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)] max-w-sm shadow-sm hover:shadow-lg transition-shadow"
            >
              <figure>
                <img
                  className="w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] object-cover"
                  src={service?.image}
                  alt={service?.serviceName}
                />
              </figure>
              <div className="card-body p-4 sm:p-5 md:p-6">
                <h2 className="card-title text-base sm:text-lg md:text-xl">
                  {service?.serviceName}
                </h2>

                <div className="card-actions justify-end mt-2">
                  <button className="btn btn-primary btn-sm sm:btn-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expert;
