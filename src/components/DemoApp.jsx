import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "./nav";
import { demoApps } from "../data/useData"; // Assuming demoApps is exported from useData.js

const DemoApp = () => {
  const navigate = useNavigate();
  const { demoId } = useParams();
  const demo = demoApps.find((app) => app.id === demoId);
  const DemoComponent = demo?.component;

  if (!demo) {
    return (
      <Sidebar
        content={
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Demo not found
                </h1>
                <button
                  onClick={() => navigate("/demo")}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Back to Demos
                </button>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  return (
    <Sidebar
      content={
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header with back button */}
            <div className="mb-8">
              <button
                onClick={() => navigate("/demo")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Demos
              </button>
            </div>

            {/* Demo content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{demo.icon}</span>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {demo.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {demo.description}
                  </p>
                </div>
              </div>

              {/* Render the actual demo component */}
              <div className="mt-8">
                <DemoComponent />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DemoApp;
