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
    <div className="mt-8 px-4 sm:px-6 md:px-8 lg:px-[130px]">
      <div>
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
          Popular Winter Care Services
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <div className="card bg-base-100 w-full sm:w-80 lg:w-96 shadow-sm">
              <figure>
                <img
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                  src={service?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service?.serviceName}</h2>
                <div className="flex justify-between">
                  <p>Price: {service?.price}</p>
                  <p>Rating: {service?.rating}</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
