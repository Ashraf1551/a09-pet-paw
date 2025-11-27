import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-linear-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ❄️ Winter Special
          </span>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Popular Winter Care Services
          </h3>
          <p className="mt-4 text-base-content/70 text-base sm:text-lg max-w-2xl mx-auto">
            Keep your furry friends warm and healthy with our specialized winter
            care packages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-base-200 rounded-2xl"
            >
              <figure className="relative overflow-hidden">
                <img
                  className="w-full h-[220px] sm:h-[250px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                  src={service?.image}
                  alt={service?.serviceName}
                />

                <div className="absolute top-4 right-4 bg-primary text-primary-content px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ${service?.price}
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>

              <div className="card-body p-5 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {service?.serviceName}
                </h2>

                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(service?.rating)
                            ? "opacity-100"
                            : "opacity-30"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-base-content/60">
                    ({service?.rating})
                  </span>
                </div>

                <div className="flex gap-2 mt-3">
                  <span className="badge badge-outline badge-primary badge-sm">
                    Winter
                  </span>
                  <span className="badge badge-outline badge-secondary badge-sm">
                    Popular
                  </span>
                </div>

                <div className="card-actions justify-end mt-4 pt-4 border-t border-base-200">
                  <button className="btn btn-primary btn-sm sm:btn-md gap-2 hover:gap-3 transition-all">
                    View Details
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={"/services"}
            className="btn btn-outline btn-primary btn-lg hover:scale-105 transition-transform duration-300"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
