import { useState, useEffect, useRef } from "react";
import {
  MinusIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const N8nChat = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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

  const handleOpenChat = async () => {
    setIsMinimized(false);
    if (messages.length === 0) {
      setIsTyping(true);
      try {
        const response = await fetch(import.meta.env.VITE_N8N_CHAT_HOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            chatInput: "greeting",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get greeting");
        }

        const data = await response.json();
        if (data && data.output) {
          setMessages([{ text: data.output, sender: "Angiata" }]);
        }
      } catch (error) {
        setMessages([
          {
            text: "Hey there, I am Angiata, Angia's personal assistant. How can I help you today?",
            sender: "Angiata",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

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

      // Add bot response to chat
      if (data && data.output) {
        setMessages((prev) => [
          ...prev,
          { text: data.output, sender: "Angiata" },
        ]);
      }
    } catch (error) {
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

  const formatMessage = (text) => {
    // Split by double newlines to handle paragraphs
    const paragraphs = text.split("\n\n");

    return paragraphs.map((paragraph, pIndex) => {
      // Split paragraph into lines
      const lines = paragraph.split("\n");

      return (
        <div key={pIndex} className="mb-3 last:mb-0">
          {lines.map((line, lIndex) => {
            // Handle bullet points
            if (line.trim().startsWith("-")) {
              return (
                <div key={lIndex} className="flex items-start space-x-2 mb-1">
                  <span className="text-main1 dark:text-main2 mt-1">•</span>
                  <span>{formatText(line.trim().substring(1).trim())}</span>
                </div>
              );
            }

            // Handle regular lines
            return (
              <div key={lIndex} className="mb-1">
                {formatText(line)}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const formatText = (text) => {
    // Handle bold text: **text**
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Handle italic text: *text*
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Handle links: [text](url)
    text = text.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-main1 dark:text-main2 underline hover:opacity-80" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="fixed md:top-20 top-36 right-7 z-50">
      {isMinimized ? (
        <div className="relative">
          <button
            onClick={handleOpenChat}
            className="relative dark:bg-gray-200 bg-main1 hover:bg-main2 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-90 transform"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 animate-pulse hover:animate-none text-white dark:text-black" />
            </div>
          </button>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap shadow-md">
            Ask Angiata
          </div>
        </div>
      ) : (
        <div className="dark:bg-white bg-gray-800 rounded-lg shadow-xl w-80 border border-gray-200 dark:border-gray-700 animate-fadeIn">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-main1 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chat with Angiata
              </h3>
            </div>
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
            <div className="h-64 overflow-y-auto mb-4 space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 w-fit ${
                    message.sender === "user" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-main1 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <div className="text-sm">{formatMessage(message.text)}</div>
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
              <div ref={messagesEndRef} />
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
