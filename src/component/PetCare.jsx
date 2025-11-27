import React from "react";

const tipsData = [
  {
    id: 1,
    title: "Keep Your Pet Warm Indoors",
    description:
      "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid exposing them to cold floors for long periods.",
    icon: "❄️",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Moisturize Paws Regularly",
    description:
      "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice.",
    icon: "🐾",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    title: "Limit Outdoor Time",
    description:
      "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets. Stay alert to their body language.",
    icon: "🧥",
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    title: "Hydrate & Maintain Nutrition",
    description:
      "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet to support warmth and immunity.",
    icon: "💧",
    bgColor: "bg-blue-50",
  },
];

const PetCare = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            🐶 Pet Care Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Winter Care Tips for Pets
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Essential tips to keep your beloved companions safe, warm, and happy
            during the cold season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tipsData.map((card, index) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 rounded-bl-full -mr-8 -mt-8 group-hover:opacity-50 transition-opacity"></div>

              <div
                className={`relative mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl text-4xl sm:text-5xl ${card.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {card.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {card.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-2 group/btn">
                  Learn more
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-gray-800">
                Need personalized advice?
              </h4>
              <p className="text-gray-600">
                Consult with our expert veterinarians today
              </p>
            </div>
            <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 whitespace-nowrap gap-2">
              💬 Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCare;
