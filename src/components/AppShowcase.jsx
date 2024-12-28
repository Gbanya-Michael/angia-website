import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { Link } from "react-router-dom";

const AppShowcase = ({ title, description, productData }) => {
  const [activeTab, setActiveTab] = useState("user");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="h-24 w-24 mx-auto mb-8 transform hover:scale-110 transition-transform"
          >
            <img
              src={productData.icon}
              alt={`${title} logo`}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-8 text-gray-200"
          >
            {description}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <Link
              to="#features"
              className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition transform hover:scale-105"
            >
              Explore Features
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105"
            >
              Contact Sales
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interface Showcase */}
      <div id="features" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex gap-4 mb-12 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("user")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "user"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            User Features
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("business")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "business"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Business Features
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {activeTab === "user" ? "User Experience" : "Business Features"}
            </h2>
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {productData.features[activeTab].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span className="text-3xl transform hover:scale-110 transition-transform">
                      {feature.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`/mockup-${activeTab}.png`}
                alt={`${activeTab} interface`}
                className="w-full rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            See {title} in Action
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <motion.div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Video Thumbnail */}
                <img
                  src={productData.video.thumbnail}
                  alt={`${title} preview`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center">
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <p className="mt-4 text-xl font-semibold text-white">
                    Watch Demo Video
                  </p>
                </div>
              </motion.div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${productData.video.id}?autoplay=1`}
                title={`${title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoPlaying(false)}
            className={classNames(
              !isVideoPlaying && "hidden",
              "mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            )}
          >
            Close Video
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Active Users
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Transactions
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Happy Customers
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="flex gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`https://${productData.name.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition shadow-lg"
              >
                Visit {productData.name}
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppShowcase;
