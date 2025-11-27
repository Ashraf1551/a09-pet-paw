import React from "react";

const Expert = () => {
  const services = [
    {
      serviceName: "Jessica",

      description: "10years of Experience",
      image:
        "https://plus.unsplash.com/premium_photo-1663011290771-f1448413beb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      serviceName: "Merina",
      description: "10years of Experience",
      image:
        "https://plus.unsplash.com/premium_photo-1663011296454-e68f12e316e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      serviceName: "Jorina",
      description: "11years of Experience",
      image:
        "https://plus.unsplash.com/premium_photo-1663011219208-418276022b35?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            🏥 Our Team
          </span>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Our <span className="text-primary">Expert</span> Vets
          </h3>
          <p className="mt-4 text-base-content/70 text-base sm:text-lg max-w-2xl mx-auto">
            Our certified veterinarians bring years of experience and compassion
            to every consultation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service?.image}
                  alt={service?.serviceName}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                  <span className="text-sm font-semibold text-primary">
                    ⭐ {service?.description}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Dr. {service?.serviceName}
                  </h2>
                  <p className="text-white/80 text-sm">Senior Veterinarian</p>
                </div>
              </div>

              <div className="p-5 bg-base-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="badge badge-primary badge-outline">
                    Pet Specialist
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-warning">★</span>
                    <span className="font-semibold">4.9</span>
                    <span className="text-base-content/50 text-sm">(120+)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                  <span className="text-sm text-base-content/70">
                    Available for appointments
                  </span>
                </div>

                <button className="btn btn-primary w-full gap-2 hover:gap-3 transition-all">
                  📅 Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expert;
