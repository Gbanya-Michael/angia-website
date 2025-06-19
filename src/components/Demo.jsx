import { useNavigate } from "react-router-dom";
import { demoApps } from "../data/useData"; // Assuming demoApps is exported from useData.js

const Demo = () => {
  const navigate = useNavigate();

  const handleDemoSelect = (demoId) => {
    navigate(`/demo/${demoId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white sm:tracking-tight md:text-3xl">
            Demo Works
          </h1>
          <p className="mt-5 text-md text-gray-500 dark:text-gray-300 md:text-xl">
            Explore our interactive demos showcasing our technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoApps.map((app) => (
            <div
              key={app.id}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => handleDemoSelect(app.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-transparent">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{app.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {app.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {app.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    View Demo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
