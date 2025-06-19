import React, { useState } from "react";
import axios from "axios";

// Expert Onboarding Component
const ExpertOnboardingForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    expertise: "",
    yearsOfExperience: "",
    currentPosition: "",
    company: "",
    linkedinProfile: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace with your actual API endpoint
      const webhookURL = import.meta.env.VITE_N8N_EXPERT_ONBOARDING_URL;

      const response = await axios.post(webhookURL, formData);
      if (response.status === 200) {
        setSuccess("Onboarding submitted successfully!");
      }
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (err) {
      setError(
        "Registration already exists. Please check your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Expert Onboarding
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Please provide your information to begin the onboarding process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Area of Expertise
          </label>
          <input
            type="text"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Years of Experience
          </label>
          <input
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            min="0"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Current Position
          </label>
          <input
            type="text"
            name="currentPosition"
            value={formData.currentPosition}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            required
            placeholder="https://linkedin.com/in/your-profile"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}
      {success && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <p className="text-green-600 dark:text-green-400 font-medium">
            {success}
          </p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

// Expert 360 Survey For Coworkers
const Expert360SuvrveyOnboarding = () => {
  const [surveyData, setSurveyData] = useState({
    expertemail: "test.angia@gmail.com",
    reviewers: Array(2).fill({
      fullName: "",
      email: "",
      position: "",
      company: "",
    }),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleReviewerChange = (index, field, value) => {
    const newReviewers = [...surveyData.reviewers];
    newReviewers[index] = {
      ...newReviewers[index],
      [field]: value,
    };
    setSurveyData({ ...surveyData, reviewers: newReviewers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Submitting survey data:", surveyData);
      // Replace with your actual API endpoint
      const webhookURL = import.meta.env.VITE_N8N_360_PARTICIPANTS;
      const response = await axios.post(webhookURL, surveyData);
      if (response.status === 200) {
        setSuccess("Survey submitted successfully!");
      }
      console.log("RES", response);
    } catch (err) {
      setError("Registration already exists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Expert 360 Survey
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Please add up to 5 people who can provide feedback about your expertise.
      </p>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}
      {success && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <p className="text-green-600 dark:text-green-400 font-medium">
            {success}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {surveyData.reviewers.map((reviewer, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Reviewer {index + 1}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={reviewer.fullName}
                  onChange={(e) =>
                    handleReviewerChange(index, "fullName", e.target.value)
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={reviewer.email}
                  onChange={(e) =>
                    handleReviewerChange(index, "email", e.target.value)
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Position
                </label>
                <input
                  type="text"
                  value={reviewer.position}
                  onChange={(e) =>
                    handleReviewerChange(index, "position", e.target.value)
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={reviewer.company}
                  onChange={(e) =>
                    handleReviewerChange(index, "company", e.target.value)
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  required
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
        >
          {loading ? "Submitting..." : "Submit Survey"}
        </button>
      </div>
    </form>
  );
};

const SurveyQuestionnaire = ({ onSubmit, expertName = "Expert Name" }) => {
  const [answers, setAnswers] = useState({
    technicalExpertise: 0,
    communicationSkills: 0,
    leadership: 0,
    problemSolving: 0,
    innovation: 0,
    collaboration: 0,
    adaptability: 0,
    strategicThinking: 0,
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const questions = [
    { id: "technicalExpertise", label: "Technical Expertise" },
    { id: "communicationSkills", label: "Communication Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "problemSolving", label: "Problem Solving" },
    { id: "innovation", label: "Innovation" },
    { id: "collaboration", label: "Collaboration" },
    { id: "adaptability", label: "Adaptability" },
    { id: "strategicThinking", label: "Strategic Thinking" },
  ];

  const handleRatingChange = (questionId, rating) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const handleCommentChange = (e) => {
    setAnswers((prev) => ({
      ...prev,
      comments: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Submitting questionnaire answers:", answers);
      // Replace with your actual API endpoint
      const webhookURL = "https://your-questionnaire-webhook-url-here";
      const response = await axios.post(webhookURL, answers);
      console.log("Questionnaire submitted:", response.data);
      onSubmit();
    } catch (err) {
      console.error("Error submitting questionnaire:", err);
      setError(
        "There was a problem submitting the questionnaire. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Expert Assessment Questionnaire
        </h2>
        <h3 className="text-xl text-indigo-600 dark:text-indigo-400">
          for {expertName}
        </h3>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          Please rate the following aspects on a scale of 1 to 5, where 5 is the
          highest rating.
        </p>
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Disclaimer:
            </span>{" "}
            This assessment is used solely for professional development
            purposes. All survey responses are confidential and will NOT be
            shared directly with the expert concerned.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}

      <div className="space-y-8">
        {questions.map((question) => (
          <div
            key={question.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {question.label}
            </h3>
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingChange(question.id, rating)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-colors
                    ${
                      answers[question.id] === rating
                        ? "bg-indigo-600 text-white dark:bg-indigo-500"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                  {rating}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
        ))}

        {/* Comments Section */}
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Additional Comments
          </h3>
          <textarea
            value={answers.comments}
            onChange={handleCommentChange}
            rows="4"
            placeholder="Please share any additional feedback or observations..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          ></textarea>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={
            loading ||
            Object.entries(answers).some(
              ([key, value]) => key !== "comments" && value === 0
            )
          }
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
        >
          {loading ? "Submitting..." : "Submit Assessment"}
        </button>
      </div>
    </form>
  );
};

const ExpertAssessmentResults = ({ onSubmit, expertName = "Expert Name" }) => {
  const [assessmentData, setAssessmentData] = useState({
    summary: "",
    selectedCoach: "1", // Default to the best matching coach
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock data for demonstration - this would come from your API
  const averageScores = {
    technicalExpertise: 4.2,
    communicationSkills: 3.8,
    leadership: 4.0,
    problemSolving: 4.5,
    innovation: 3.9,
    collaboration: 4.1,
    adaptability: 4.3,
    strategicThinking: 4.0,
  };

  // Mock coach data - this would come from your API
  const availableCoaches = [
    {
      id: "1",
      name: "Sarah Johnson",
      expertise: "Leadership & Communication",
      matchScore: "92%",
      currentGroups: 3,
    },
    {
      id: "2",
      name: "Michael Chen",
      expertise: "Technical Strategy",
      matchScore: "88%",
      currentGroups: 2,
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      expertise: "Innovation & Problem Solving",
      matchScore: "85%",
      currentGroups: 4,
    },
    {
      id: "4",
      name: "David Kim",
      expertise: "Strategic Thinking",
      matchScore: "83%",
      currentGroups: 1,
    },
    {
      id: "5",
      name: "Lisa Patel",
      expertise: "Adaptability & Collaboration",
      matchScore: "80%",
      currentGroups: 2,
    },
  ];

  const handleSummaryChange = (e) => {
    setAssessmentData((prev) => ({
      ...prev,
      summary: e.target.value,
    }));
  };

  const handleCoachSelect = (coachId) => {
    setAssessmentData((prev) => ({
      ...prev,
      selectedCoach: coachId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Submitting assessment results:", assessmentData);
      // Replace with your actual API endpoint
      const webhookURL = "https://your-assessment-webhook-url-here";
      const response = await axios.post(webhookURL, assessmentData);
      console.log("Assessment submitted:", response.data);
      onSubmit();
    } catch (err) {
      console.error("Error submitting assessment:", err);
      setError(
        "There was a problem submitting the assessment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Expert Assessment Results
        </h2>
        <h3 className="text-xl text-indigo-600 dark:text-indigo-400">
          for {expertName}
        </h3>
      </div>

      {/* Average Scores Section */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Assessment Scores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(averageScores).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
            >
              <span className="text-gray-700 dark:text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                {value.toFixed(1)}/5.0
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Assessment Summary
        </h3>
        <textarea
          value={assessmentData.summary}
          onChange={handleSummaryChange}
          rows="6"
          placeholder="Enter or edit the assessment summary..."
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
        />
      </div>

      {/* Coach Recommendation Section */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Recommended Coach
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Coach
              </label>
              <select
                value={assessmentData.selectedCoach}
                onChange={(e) => handleCoachSelect(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                {availableCoaches.map((coach) => (
                  <option key={coach.id} value={coach.id}>
                    {coach.name} - {coach.expertise} (Match: {coach.matchScore})
                  </option>
                ))}
              </select>
            </div>

            {assessmentData.selectedCoach && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                {(() => {
                  const coach = availableCoaches.find(
                    (c) => c.id === assessmentData.selectedCoach
                  );
                  return (
                    <>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Name
                        </span>
                        <p className="text-gray-900 dark:text-white">
                          {coach.name}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Expertise
                        </span>
                        <p className="text-gray-900 dark:text-white">
                          {coach.expertise}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Current Groups
                        </span>
                        <p className="text-gray-900 dark:text-white">
                          {coach.currentGroups}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
        >
          {loading ? "Submitting..." : "Approve and Submit Assessment"}
        </button>
      </div>
    </form>
  );
};

const FindExpert = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock data for demonstration - this would come from your API
  const experts = [
    {
      id: "1",
      name: "Sarah Johnson",
      expertise: "Leadership & Communication",
      matchScore: "92%",
      currentGroups: 3,
      assessmentResults: {
        technicalExpertise: 4.2,
        communicationSkills: 3.8,
        leadership: 4.0,
        problemSolving: 4.5,
        innovation: 3.9,
        collaboration: 4.1,
        adaptability: 4.3,
        strategicThinking: 4.0,
      },
      summary:
        "Experienced leader with strong communication skills and proven track record in strategic planning.",
      coach: {
        name: "Michael Chen",
        expertise: "Technical Strategy",
        matchScore: "88%",
        currentGroups: 2,
      },
    },
    // Add more mock experts here
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const expert = experts.find((e) =>
        e.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSelectedExpert(expert);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Find Expert
        </h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by expert name or expertise..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {/* Expert Results */}
      {selectedExpert && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          {/* Expert Info */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedExpert.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedExpert.expertise}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Match Score: {selectedExpert.matchScore}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                • Current Groups: {selectedExpert.currentGroups}
              </span>
            </div>
          </div>

          {/* Assessment Scores */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Assessment Scores
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(selectedExpert.assessmentResults).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                  >
                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">
                      {value.toFixed(1)}/5.0
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Expert Summary
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedExpert.summary}
            </p>
          </div>

          {/* Assigned Coach */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Assigned Coach
            </h4>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Name
                  </span>
                  <p className="text-gray-900 dark:text-white">
                    {selectedExpert.coach.name}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Expertise
                  </span>
                  <p className="text-gray-900 dark:text-white">
                    {selectedExpert.coach.expertise}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Current Groups
                  </span>
                  <p className="text-gray-900 dark:text-white">
                    {selectedExpert.coach.currentGroups}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
};

const Expertunity = () => {
  const [activeTab, setActiveTab] = useState("onboarding"); // onboarding, find, chat
  const [show360SurveyPersons, setShow360SurveyPersons] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Explanation Section */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Expertunity Demo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          This demo showcases our comprehensive expert management platform that
          connects organizations with top-tier experts. Experience our three
          core features:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Expert Onboarding
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Streamlined process for experts to join our platform, including
              assessment and coach matching.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Find Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Advanced search and matching system to find the perfect expert for
              your needs.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Virtual Coach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI-powered coaching system to guide experts through their journey.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("onboarding")}
              className={`${
                activeTab === "onboarding"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Expert Onboarding
            </button>
            <button
              onClick={() => setActiveTab("find")}
              className={`${
                activeTab === "find"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Find Expert
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`${
                activeTab === "chat"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Chat with Virtual Coach
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {activeTab === "onboarding" && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            {show360SurveyPersons ? (
              <Expert360SuvrveyOnboarding
                onSubmit={() => setActiveTab("find")}
              />
            ) : (
              <ExpertOnboardingForm
                onSuccess={() => setShow360SurveyPersons(true)}
              />
            )}
          </div>
        )}
        {activeTab === "find" && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FindExpert />
          </div>
        )}
        {activeTab === "chat" && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Chat with Virtual Coach
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Interact with our AI-powered virtual coach to get guidance and
              support throughout your expert journey.
            </p>
            {/* Add your Chat component here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Expertunity;
