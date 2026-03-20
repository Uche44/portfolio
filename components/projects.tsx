"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/projects";
import { aleo } from "@/app/ui/fonts";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="w-full py-20 px-5 md:px-16 lg:px-24 bg-pink-50 text-white"
    >
      <h2
        className={`${aleo.className} text-2xl text-gray-600 tracking-wider md:text-3xl font-bold text-center mb-14`}
      >
        My <span className="text-pink-600">Projects</span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="
              group relative rounded-xl overflow-hidden p-0.5
              bg-linear-to-br from-white/20 to-white/5
              hover:from-pink-600 hover:to-pink-500
              transition-all duration-500 shadow-xl pointer-events-none
            "
          >
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                transition duration-700
                // bg-linear-to-t from-transparent via-white/30 to-transparent
                blur-sm pointer-events-none
              "
            />

            <div className="bg-white rounded-xl p-4 flex flex-col h-full">
              <div className="relative w-full h-48 rounded-lg overflow-hidden pointer-events-none">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>

              <h3
                className={`${aleo.className} text-(--brand) tracking-wide mt-4 text-lg md:text-xl font-semibold`}
              >
                {project.name}
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      text-xs bg-pink-500 border tracking-wide
                      px-2 py-1 rounded-md
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-3 tracking-wide grow">
                {project.about}
              </p>

              <div className="flex items-center justify-between mt-5 pointer-events-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-1 text-gray-600 hover:text-pink-600
                    transition cursor-pointer pointer-events-auto
                  "
                >
                  <ExternalLink size={18} />
                  <span className="text-sm cursor-pointer">Live</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-1 text-gray-600 hover:text-pink-600
                    transition cursor-pointer pointer-events-auto
                  "
                >
                  <Github size={18} />
                  <span className="text-sm cursor-pointer">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              flex items-center gap-2 px-8 py-3 rounded-full
              bg-pink-600 text-white font-semibold
              hover:bg-pink-700 transition duration-300
              shadow-lg hover:shadow-pink-200/50
            "
          >
            {showAll ? (
              <>
                View Less <ChevronUp size={20} />
              </>
            ) : (
              <>
                View More <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
