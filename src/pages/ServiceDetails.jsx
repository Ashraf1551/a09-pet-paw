import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
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

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully! We'll contact you soon.");
    e.target.reset();
  };

  const findResult = services.find((service) => service.serviceId == id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!findResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden border border-base-200">
          <div className="relative">
            <img
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
              src={findResult.image}
              alt={findResult.serviceName}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="badge badge-primary badge-lg">
                {findResult.category}
              </span>
              {findResult.slotsAvailable <= 3 && (
                <span className="badge badge-warning badge-lg">
                  Limited Slots
                </span>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {findResult.serviceName}
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                by {findResult.providerName}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-base-200 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  ${findResult.price}
                </p>
                <p className="text-sm text-base-content/60">Price</p>
              </div>
              <div className="bg-base-200 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-warning flex items-center justify-center gap-1">
                  ★ {findResult.rating}
                </p>
                <p className="text-sm text-base-content/60">Rating</p>
              </div>
              <div className="bg-base-200 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-success">
                  {findResult.slotsAvailable}
                </p>
                <p className="text-sm text-base-content/60">Slots Left</p>
              </div>
              <div className="bg-base-200 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-secondary">
                  #{findResult.serviceId}
                </p>
                <p className="text-sm text-base-content/60">Service ID</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-base-content mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded"></span>
                Description
              </h2>
              <p className="text-base-content/70 leading-relaxed text-base sm:text-lg">
                {findResult.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded"></span>
                Provider Information
              </h2>
              <div className="bg-base-200 rounded-xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                    🏥
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-base-content">
                      {findResult.providerName}
                    </h3>
                    <a
                      href={`mailto:${findResult.providerEmail}`}
                      className="text-primary hover:underline flex items-center gap-2 mt-1"
                    >
                      ✉️ {findResult.providerEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded"></span>
                Book This Service
              </h2>
              <form
                onSubmit={handleBooking}
                className="bg-base-200 rounded-xl p-5 sm:p-6 space-y-4"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={user?.displayName || ""}
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    defaultValue={user?.email || ""}
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full gap-2">
                  📅 Book Now
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-outline btn-lg flex-1 gap-2">
                💬 Contact Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
