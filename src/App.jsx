import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="dark:bg-black bg-gray-200 h-screen">
      <Helmet>
        <title>
          Angia Technologies | Custom Software Development & Digital Solutions
          Sydney
        </title>
        <meta
          name="description"
          content="Leading software development company in Sydney. Specializing in custom software solutions, web development, and digital products like Birabook and lotsApark."
        />
        <meta
          name="keywords"
          content="software development sydney, custom software solutions, web development, mobile apps, Birabook, lotsApark"
        />
        <meta name="author" content="Angia Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://angia.com.au" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
