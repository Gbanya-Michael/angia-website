import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
function App() {
  return (
    <div className="  dark:bg-black bg-gray-200 h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
