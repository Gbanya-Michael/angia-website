import { useState, useEffect } from "react";
import { MinusIcon } from "@heroicons/react/24/outline";

const N8nChat = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hey there, I am Angiata, Angia's personal assistant.",
      sender: "Angiata",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  // Initialize chat session
  useEffect(() => {
    const initializeChat = async () => {
      // Check if there's an existing session
      const existingSessionId = sessionStorage.getItem("chatSessionId");

      if (existingSessionId) {
        setSessionId(existingSessionId);
        return;
      }

      // Create new session
      const newSessionId = Date.now().toString();
      sessionStorage.setItem("chatSessionId", newSessionId);
      setSessionId(newSessionId);
    };

    initializeChat();
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !sessionId) return;

    // Add user message to chat
    const userMessage = { text: inputMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(import.meta.env.VITE_N8N_CHAT_HOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          chatInput: inputMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log("Response from n8n:", data);

      // Add bot response to chat
      if (data && data.output) {
        setMessages((prev) => [
          ...prev,
          { text: data.output, sender: "Angiata" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, there was an error processing your message.",
          sender: "Angiata",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed top-20 right-7 z-50">
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
        <div className="dark:bg-white bg-gray-800 rounded-lg shadow-xl w-80 border border-gray-200 dark:border-gray-700">
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
            </div>
          </div>
          <div className="p-4">
            <div className="h-64 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 w-fit ${
                    message.sender === "user" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div
                    className={`rounded-lg p-1 ${
                      message.sender === "user"
                        ? "bg-main1 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                  <span>Angiata is typing</span>
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-main2"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-main1 hover:bg-main2 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
