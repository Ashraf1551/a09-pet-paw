import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl"
            >
              ❄️
            </motion.div>

            <div className="text-[150px] sm:text-[180px] md:text-[200px] leading-none">
              🐕‍🦺
            </div>

            <motion.div
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
              className="absolute top-20 left-12 text-2xl"
            >
              💧
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto mb-8">
            Looks like this page got lost in the snowstorm! 🌨️
            <br />
            Don't worry, let's get you back to warmth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="btn btn-primary btn-lg gap-2 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>🏠</span>
            Back to Home
          </Link>
          <Link
            to="/services"
            className="btn btn-outline btn-lg gap-2 px-8 hover:scale-105 transition-all duration-300"
          >
            <span>🐾</span>
            View Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-4 text-3xl"
        >
          <span className="transform rotate-[-20deg]">🐾</span>
          <span className="transform rotate-[10deg]">🐾</span>
          <span className="transform rotate-[-5deg]">🐾</span>
          <span className="transform rotate-[15deg]">🐾</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
