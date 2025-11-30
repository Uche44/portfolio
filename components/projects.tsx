"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { aleo } from "@/app/ui/fonts";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-5 md:px-16 lg:px-24 bg-[#111d45] text-white"
    >
      <h2
        className={`${aleo.className} text-2xl tracking-wider md:text-3xl font-bold text-center mb-14`}
      >
        My <span className="text-[#3841ff]">Projects</span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="
              group relative rounded-xl overflow-hidden p-0.5
              bg-linear-to-br from-white/20 to-white/5
              hover:from-[#3841ff] hover:to-[#111d45]
              transition-all duration-500 shadow-xl
            "
          >
          
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-20
                transition duration-700
                bg-linear-to-t from-transparent via-white/30 to-transparent
                blur-sm
              "
            />

            <div className="bg-[#111d45] rounded-xl p-4 flex flex-col h-full">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                {/* progress flag */}

                {i === projects.length - 1 && (
                  <span
                    className="z-10 
          absolute top-2 right-2
          bg-[#3841ff] text-white text-[10px] font-semibold
          px-2 py-1 rounded-md shadow-md
          uppercase tracking-wide
        "
                  >
                    In Progress
                  </span>
                )}

                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Title */}
              <h3
                className={`${aleo.className} text-(--brand) tracking-wide mt-4 text-lg md:text-xl font-semibold`}
              >
                {project.name}
              </h3>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      text-xs bg-white/10 border tracking-wide border-white/10
                      px-2 py-1 rounded-md
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-sm text-white/80 mt-3 tracking-wide grow">
                {project.about}
              </p>

              <div className="flex items-center justify-between mt-5">
                <a
                  href={project.url}
                  target="_blank"
                  className="
                    flex items-center gap-1 hover:text-[#3841ff]
                    transition
                  "
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="
                    flex items-center gap-1 hover:text-[#3841ff]
                    transition
                  "
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
