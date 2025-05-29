import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";
import ScrollToTop from "./components/ScrollToTop";
import N8nChat from "./components/n8nchat";
import { blogPosts } from "./data/blogPosts";

function App() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/blog/");
  const currentBlogPost = isBlogPost
    ? blogPosts.find((post) => post.slug === location.pathname.split("/").pop())
    : null;

  return (
    <div className="dark:bg-black bg-gray-200 h-screen">
      <Helmet>
        {isBlogPost && currentBlogPost ? (
          <>
            <title>{`${currentBlogPost.title} | Angia Technologies Blog`}</title>
            <meta name="description" content={currentBlogPost.excerpt} />
            <meta
              name="keywords"
              content={`${currentBlogPost.title}, software development, digital transformation, web development, Angia Technologies`}
            />
            <meta name="author" content={currentBlogPost.author.name} />
            <meta name="robots" content="index, follow" />
            <link
              rel="canonical"
              href={`https://angia.com.au/blog/${currentBlogPost.slug}`}
            />
            <meta
              property="article:published_time"
              content={currentBlogPost.date}
            />
            <meta
              property="article:author"
              content={currentBlogPost.author.name}
            />
            <meta property="og:title" content={currentBlogPost.title} />
            <meta property="og:description" content={currentBlogPost.excerpt} />
            <meta property="og:type" content="article" />
            <meta
              property="og:url"
              content={`https://angia.com.au/blog/${currentBlogPost.slug}`}
            />
            <meta property="og:image" content={currentBlogPost.coverImage} />
          </>
        ) : (
          <>
            <title>
              Angia Technologies | Custom Software Development & Digital
              Solutions Sydney
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
          </>
        )}
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
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <N8nChat />
    </div>
  );
}

export default App;
