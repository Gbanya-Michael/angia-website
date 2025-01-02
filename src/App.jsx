import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="dark:bg-black bg-gray-200 h-screen">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    Angia Technologies | Custom Software Development Sydney
                  </title>
                  <meta
                    name="description"
                    content="Leading software development company in Sydney. Specializing in custom software solutions and digital products."
                  />
                  <link rel="canonical" href="https://angia.com.au" />
                </Helmet>
                <HomePage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us | Angia Technologies</title>
                  <meta
                    name="description"
                    content="Learn about Angia Technologies, a leading software development company in Sydney delivering innovative digital solutions."
                  />
                  <link rel="canonical" href="https://angia.com.au/about" />
                </Helmet>
                <AboutPage />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
