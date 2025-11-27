import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-10 sm:py-12 md:py-16 bg-base-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🐾 All Services
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Premium Pet Services
          </h1>
          <p className="mt-4 text-base-content/70 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our wide range of professional pet care services designed
            to keep your furry friends happy and healthy
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-base-200"
              >
                <figure className="relative overflow-hidden">
                  <img
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                    src={service?.image}
                    alt={service?.serviceName}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge-primary badge-sm">
                      {service?.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-sm font-bold text-primary">
                      ${service?.price}
                    </span>
                  </div>
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-base font-bold line-clamp-1">
                    {service?.serviceName}
                  </h2>
                  <p className="text-sm text-base-content/60 line-clamp-2">
                    {service?.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-warning">★</span>
                      <span className="text-sm font-semibold">
                        {service?.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-base-content/60">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      {service?.slotsAvailable} slots
                    </div>
                  </div>
                  <div className="card-actions mt-3 pt-3 border-t border-base-200">
                    <Link
                      to={`/details/${service?.serviceId}`}
                      className="w-full"
                    >
                      <button className="btn btn-primary btn-sm w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
