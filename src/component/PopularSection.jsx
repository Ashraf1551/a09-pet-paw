import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Popular Winter Care Services
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
                <div className="flex justify-between text-sm sm:text-base">
                  <p>Price: {service?.price}</p>
                  <p>Rating: {service?.rating}</p>
                </div>
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

export default PopularSection;
