import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 2 },
      }}
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-6 sm:py-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 w-full shadow-sm hover:shadow-lg transition-shadow"
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
                  <Link to={`/details/${service?.serviceId}`}>
                    <button className="btn btn-primary btn-sm sm:btn-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
