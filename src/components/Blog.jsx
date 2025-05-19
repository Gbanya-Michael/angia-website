import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";
import { blogPosts } from "../data/blogPosts.js";

const BlogContent = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        {content.intro}
      </p>
      {content.sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {section.title}
          </h2>
          {section.items ? (
            <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // If no slug, show list view
  if (!slug) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="py-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Insights & Updates
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay up to date with the latest trends in software development,
                technology insights, and company updates.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group transform transition-all duration-300 hover:-translate-y-1"
                >
                  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative aspect-w-16 aspect-h-9">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <time dateTime={post.date} className="font-medium">
                          {post.date}
                        </time>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-gray-700"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  // Show detail view
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    navigate("/blog");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container>
        <article className="py-10">
          <div className="mb-8 sm:mb-12">
            <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <header className="mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime={post.date} className="font-medium">
                {post.date}
              </time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <BlogContent content={post.content} />

          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-white dark:border-gray-700"
              />
              <div>
                <p className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  {post.author.role}
                </p>
              </div>
            </div>
          </footer>
        </article>
      </Container>
      <Footer />
    </div>
  );
}
