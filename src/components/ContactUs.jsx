import { CheckCircle, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORM_ENDPOINT = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export function ContactSection() {
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

        // Auto-scroll to confirmation message after a brief delay
        setTimeout(() => {
          const confirmationElement = document.getElementById(
            "confirmation-message"
          );
          if (confirmationElement) {
            confirmationElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      } catch (error) {
        alert(
          "There was an error submitting the form. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const benefits = [
    {
      icon: <Clock className="h-5 w-5 text-main2 dark:text-logo1" />,
      text: "6-week delivery guarantee",
    },
    {
      icon: <Users className="h-5 w-5 text-main1 dark:text-main2" />,
      text: "Dedicated project team",
    },
    {
      icon: <Zap className="h-5 w-5 text-main3 dark:text-logo2" />,
      text: "Latest tech stack",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-logo1 dark:text-main2" />,
      text: "Post-launch support",
    },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-16 bg-white dark:bg-gradient-to-br dark:from-main2 dark:to-logo1 text-gray-800 dark:text-white transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              id="confirmation-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 p-8 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-main2/20 dark:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-main2/10 dark:ring-white/10">
                  <svg
                    className="w-10 h-10 text-main1 dark:text-white"
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
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Thank you for reaching out!
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700 dark:text-white/90 text-lg">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gradient-to-br dark:from-main2 dark:to-logo1 text-gray-800 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 bg-main2/10 dark:bg-white/20 text-main1 dark:text-white px-4 py-2 rounded-full border border-main2/20 dark:border-white/30 w-fit mx-auto">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 dark:text-white">
              Ready to Launch Your MVP?
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/90 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you go from
              idea to market in just 6 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Start Your Project
              </h3>
              <p className="text-gray-600 dark:text-white/80 mb-6">
                Fill out the form below and we'll get back to you within 24
                hours with a detailed proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      value={formData["first-name"]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 ${
                        errors["first-name"]
                          ? "border-red-500"
                          : "border-gray-300 dark:border-white/30"
                      }`}
                      placeholder="Your first name"
                    />
                    <AnimatePresence mode="sync">
                      {touched["first-name"] && errors["first-name"] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 text-sm text-red-600 dark:text-red-300"
                        >
                          {errors["first-name"]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      value={formData["last-name"]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 ${
                        errors["last-name"]
                          ? "border-red-500"
                          : "border-gray-300 dark:border-white/30"
                      }`}
                      placeholder="Your last name"
                    />
                    <AnimatePresence mode="sync">
                      {touched["last-name"] && errors["last-name"] && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 text-sm text-red-600 dark:text-red-300"
                        >
                          {errors["last-name"]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    value={formData["phone-number"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 ${
                      errors["phone-number"]
                        ? "border-red-500"
                        : "border-gray-300 dark:border-white/30"
                    }`}
                    placeholder="Ex. 090 6333 6333"
                  />
                  <AnimatePresence mode="sync">
                    {touched["phone-number"] && errors["phone-number"] && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-300"
                      >
                        {errors["phone-number"]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-white/30"
                    }`}
                    placeholder="Your email"
                  />
                  <AnimatePresence mode="sync">
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-300"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-300 dark:border-white/30"
                    }`}
                    placeholder="Subject of your message"
                  />
                  <AnimatePresence mode="sync">
                    {touched.subject && errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-300"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/90 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={400}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-white dark:bg-white/20 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-main2/50 dark:focus:ring-white/50 focus:border-main2/50 dark:focus:border-white/50 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-white/30"
                    }`}
                    placeholder="Tell us about your project idea..."
                  />
                  <AnimatePresence mode="sync">
                    {touched.message && errors.message && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-300"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white/70">
                    {formData.message.length}/400 characters
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-main1 hover:bg-main2 dark:bg-white/20 dark:hover:bg-white/30 backdrop-blur-sm border border-main1 dark:border-white/30 hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
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
                    "Get Your Free Consultation"
                  )}
                </motion.button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl mb-4 font-bold text-gray-900 dark:text-white">
                  Why Choose The MVP Guys?
                </h3>
                <p className="text-gray-600 dark:text-white/80 mb-8">
                  We've perfected the art of rapid MVP development, helping
                  Australian businesses launch faster and smarter.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    {benefit.icon}
                    <span className="text-gray-700 dark:text-white font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-xl mb-2 font-bold text-gray-900 dark:text-white">
                    Free Consultation
                  </h4>
                  <p className="text-gray-600 dark:text-white/80 mb-4">
                    Get expert advice on your MVP strategy, tech stack, and
                    go-to-market approach.
                  </p>
                  <div className="text-3xl font-bold text-main1 dark:text-white mb-1">
                    $0
                  </div>
                  <div className="text-sm text-gray-500 dark:text-white/80">
                    No commitment required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
