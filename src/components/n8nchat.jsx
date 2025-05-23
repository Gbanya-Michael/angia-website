import { useState, useEffect } from "react";
import { XMarkIcon, MinusIcon } from "@heroicons/react/24/outline";

const N8nChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if chat has been shown in this session
    const chatShown = sessionStorage.getItem("chatShown");
    if (chatShown) {
      setIsOpen(false);
    } else {
      sessionStorage.setItem("chatShown", "true");
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-main1 hover:bg-main2 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chat with us
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="h-64 overflow-y-auto mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-2 max-w-[80%]">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Hello! How can we help you today?
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-main2"
              />
              <button className="bg-main1 hover:bg-main2 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default N8nChat;
