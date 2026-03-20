"use client";

import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { aleo } from "@/app/ui/fonts";

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full py-20 px-5 md:px-16 lg:px-24 bg-white"
    >
      <h2
        className={`${aleo.className} text-2xl text-gray-600 tracking-wider md:text-3xl font-bold text-center mb-4`}
      >
        My <span className="text-pink-600">Blog</span>
      </h2>
      <p className="text-center text-gray-500 text-sm md:text-base tracking-wide mb-14 max-w-xl mx-auto">
        Thoughts, tutorials, and deep-dives on frontend development, backend
        systems, and everything in between.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((article, i) => (
          <article
            key={i}
            className="group flex flex-col rounded-2xl overflow-hidden bg-pink-50 border border-pink-100 shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            {/* Cover Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-widest bg-pink-200 text-pink-700 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className={`${aleo.className} text-gray-800 text-lg md:text-xl font-semibold leading-snug mb-2 group-hover:text-pink-600 transition-colors duration-300`}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm tracking-wide leading-relaxed line-clamp-3 flex-1">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              {/* Read More */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-pink-600 border border-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                Read Article
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
