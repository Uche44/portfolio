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
        className="text-pink-600"
      />
    ),
  },
  {
    name: "Progressive Web Apps",
    description: "Fast, reliable PWAs that feel like native mobile apps.",
    icon: (
      <FaMobileAlt
        size={28}
        className="text-pink-600"
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
        className="text-pink-600"
      />
    ),
  },
  {
    name: "Website Maintenance",
    description: "Keeping your website updated, secure, and running smoothly.",
    icon: (
      <FaTools
        size={28}
        className="text-pink-600"
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
        className="text-pink-600"
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
        className="text-pink-600"
      />
    ),
  },
  {
    name: "Frontend & Frameworks",
    description: "Modern, scalable web apps using cutting-edge frameworks.",
    icon: (
      <SiNextdotjs
        size={28}
        className="text-pink-600"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 px-5 md:px-16 lg:px-24 bg-white"
    >
      <h2
        className={`${aleo.className} text-2xl text-gray-600 tracking-wider md:text-3xl font-bold text-center mb-14`}
      >
        My <span className="text-pink-600">Services</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group relative rounded-2xl p-6 bg-pink-100 backdrop-blur-md
              shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500
              border border-white/10 overflow-hidden cursor-pointer
            "
          >
            <div
              className="
              absolute inset-0 opacity-0 group-hover:opacity-20
              
              blur-lg transition duration-500
            "
            />

            <div className="relative flex flex-col items-start h-full">
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Title */}
              <h3
                className={`${aleo.className} text-xl text-gray-600 tracking-wide md:text-2xl font-semibold mb-2`}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 tracking-wide text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
