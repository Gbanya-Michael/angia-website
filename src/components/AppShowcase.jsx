import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faStar,
  faMapMarkerAlt,
  faLock,
  faBriefcase,
  faUsers,
  faStore,
  faChartLine,
  faParking,
  faKey,
  faClock,
  faTicketAlt,
  faTh,
  faShieldAlt,
  faFileAlt,
  faDollarSign,
  faTimes,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const iconMap = {
  "fas fa-calendar-check": faCalendarCheck,
  "fas fa-star": faStar,
  "fas fa-map-marker-alt": faMapMarkerAlt,
  "fas fa-lock": faLock,
  "fas fa-briefcase": faBriefcase,
  "fas fa-users": faUsers,
  "fas fa-store": faStore,
  "fas fa-chart-line": faChartLine,
  "fas fa-parking": faParking,
  "fas fa-key": faKey,
  "fas fa-clock": faClock,
  "fas fa-ticket-alt": faTicketAlt,
  "fas fa-th": faTh,
  "fas fa-shield-alt": faShieldAlt,
  "fas fa-file-alt": faFileAlt,
  "fas fa-dollar-sign": faDollarSign,
};

const AppShowcase = ({ title, description, productData, href }) => {
  const [activeTab, setActiveTab] = useState("user");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isVideoPlaying) {
      setIsVideoPlaying(false);
    }
  }, [activeTab]);

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

  const getCurrentVideo = () => {
    if (!productData.video.isAvailable) return null;
    return productData.video.featureVideos[activeTab] || productData.video;
  };

  const getMockupImage = (tab) => {
    return `https://picsum.photos/seed/${productData.name.toLowerCase()}-${tab}-mockup/800/600`;
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
          <Link to={href} target="_blank">
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
          </Link>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            <Link to={href} target="_blank">
              {title}
            </Link>
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
              <AnimatePresence mode="sync">
                {productData.features[activeTab].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span className="text-3xl transform hover:scale-110 transition-transform text-indigo-600">
                      <FontAwesomeIcon icon={iconMap[feature.icon]} />
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
                src={getMockupImage(activeTab)}
                alt={`${activeTab} interface`}
                className="w-full rounded-2xl transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/fallback-${activeTab}/800/600`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            See {productData.name} in Action
          </h2>
          <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden relative">
            {isVideoPlaying ? (
              <div className="relative">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${
                    getCurrentVideo()?.id
                  }?autoplay=1`}
                  title={`${title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div
                className="relative cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src={
                    getCurrentVideo()?.thumbnail ||
                    `/placeholder-${activeTab}.jpg`
                  }
                  alt={`${title} ${activeTab} demo thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="w-8 h-8 text-indigo-600 ml-1"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
                {productData.stats.businesses}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {productData.name === "lotsApark"
                  ? "Active Locations"
                  : "Active Businesses"}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {productData.stats.bookings}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {productData.name === "lotsApark"
                  ? "Listed Parking Spaces"
                  : "Total Bookings"}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {productData.stats.customers}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Active Users
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
      <Footer />
    </div>
  );
};

export default AppShowcase;
