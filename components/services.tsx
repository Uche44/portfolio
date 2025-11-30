"use client";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaPenNib,
  FaTools,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { aleo } from "@/app/ui/fonts";
import { Service } from "@/types/services";

const services: Service[] = [
  {
    name: "Websites",
    description: "Beautiful, responsive websites built to modern standards.",
    icon: (
      <FaLaptopCode
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Progressive Web Apps",
    description: "Fast, reliable PWAs that feel like native mobile apps.",
    icon: (
      <FaMobileAlt
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Fullstack Development",
    description:
      "End-to-end solutions using React, Next.js, Django, and whatever sells.",
    icon: (
      <FaServer
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Website Maintenance",
    description: "Keeping your website updated, secure, and running smoothly.",
    icon: (
      <FaTools
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Technical Articles",
    description:
      "Clear and insightful guides, tutorials, and technical content.",
    icon: (
      <FaPenNib
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Web Design",
    description:
      "Crafting intuitive interfaces and delightful user experiences.",
    icon: (
      <FaPaintBrush
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
  {
    name: "Frontend & Frameworks",
    description: "Modern, scalable web apps using cutting-edge frameworks.",
    icon: (
      <SiNextdotjs
        size={28}
        className="text-[#3841ff]"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 px-5 md:px-16 lg:px-24 bg-[#111d45] text-white"
    >
      <h2
        className={`${aleo.className} text-2xl tracking-wider md:text-3xl font-bold text-center mb-14`}
      >
        My <span className="text-[#3841ff]">Services</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group relative rounded-2xl p-6 bg-[#111d45]/30 backdrop-blur-md
              shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500
              border border-white/10 overflow-hidden cursor-pointer
            "
          >
            <div
              className="
              absolute inset-0 opacity-0 group-hover:opacity-20
              bg-linear-to-t from-transparent via-white/20 to-transparent
              blur-lg transition duration-500
            "
            />

            <div className="relative flex flex-col items-start h-full">
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Title */}
              <h3
                className={`${aleo.className} text-xl tracking-wide md:text-2xl font-semibold mb-2`}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-white/80 tracking-wide text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
