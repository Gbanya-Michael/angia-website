import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace this with your Google Apps Script deployment URL
const FORM_ENDPOINT = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    "phone-number": "",
    email: "",
    subject: "",
    message: "",
    timestamp: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "first-name":
      case "last-name":
        return value.trim() ? "" : "This field is required";
      case "phone-number":
        const phoneRegex = /^[0-9\s+()-]{10,}$/;
        if (!value.trim()) return "Phone number is required";
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      case "subject":
        return value.trim() ? "" : "Subject is required";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Add timestamp to form data
        const submissionData = {
          ...formData,
          timestamp: new Date().toISOString(),
        };

        console.log("Submitting to:", FORM_ENDPOINT);
        console.log("Submission data:", submissionData);

        // Create URL-encoded form data
        const formBody = Object.keys(submissionData)
          .map(
            (key) =>
              encodeURIComponent(key) +
              "=" +
              encodeURIComponent(submissionData[key])
          )
          .join("&");

        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
          mode: "no-cors", // This is important for handling CORS
          redirect: "follow",
          credentials: "omit",
        });

        // With no-cors mode, we won't get a normal response
        // We'll assume success if we get here
        setIsSubmitted(true);
        setFormData({
          "first-name": "",
          "last-name": "",
          "phone-number": "",
          email: "",
          subject: "",
          message: "",
          timestamp: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "There was an error submitting the form. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg shadow-lg border border-green-200 dark:border-green-800"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-50 dark:ring-green-900">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4">
            Thank you for reaching out!
          </h3>
          <div className="space-y-2 mb-6">
            <p className="text-green-600 dark:text-green-300 text-lg">
              We've received your message and will get back to you within 24
              hours.
            </p>
            <p className="text-green-500 dark:text-green-400 text-sm">
              A confirmation email has been sent to your inbox.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                "first-name": "",
                "last-name": "",
                "phone-number": "",
                email: "",
                subject: "",
                message: "",
                timestamp: "",
              });
            }}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-md font-medium transition-colors"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="md:flex gap-6">
        <div className="md:w-1/2 space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              value={formData["first-name"]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-md border-0 py-2 px-3 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors["first-name"]
                  ? "ring-red-500"
                  : "ring-gray-300 dark:ring-gray-700"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm`}
              placeholder="Your first name"
            />
            <AnimatePresence mode="sync">
              {touched["first-name"] && errors["first-name"] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors["first-name"]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              value={formData["last-name"]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-md border-0 py-2 px-3 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors["last-name"]
                  ? "ring-red-500"
                  : "ring-gray-300 dark:ring-gray-700"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm`}
              placeholder="Your last name"
            />
            <AnimatePresence mode="sync">
              {touched["last-name"] && errors["last-name"] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors["last-name"]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              value={formData["phone-number"]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-md border-0 py-2 px-3 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors["phone-number"]
                  ? "ring-red-500"
                  : "ring-gray-300 dark:ring-gray-700"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm`}
              placeholder="Ex. 090 6333 6333"
            />
            <AnimatePresence mode="sync">
              {touched["phone-number"] && errors["phone-number"] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors["phone-number"]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-md border-0 py-2 px-3 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors.email
                  ? "ring-red-500"
                  : "ring-gray-300 dark:ring-gray-700"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm`}
              placeholder="Your email"
            />
            <AnimatePresence mode="sync">
              {touched.email && errors.email && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 mt-6 md:mt-0">
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-md border-0 py-2 px-3 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ${
                errors.subject
                  ? "ring-red-500"
                  : "ring-gray-300 dark:ring-gray-700"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm`}
              placeholder="Subject of your message"
            />
            <AnimatePresence mode="sync">
              {touched.subject && errors.subject && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={400}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                touched.message && errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              } dark:bg-gray-800`}
            />
            <AnimatePresence mode="sync">
              {touched.message && errors.message && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {formData.message.length}/400 characters
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2.5 rounded-md text-white font-medium transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </div>
    </form>
  );
}
