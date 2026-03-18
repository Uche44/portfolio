"use client";

import Image from "next/image";
import { Twitter, Linkedin, Github, ArrowDown } from "lucide-react";
import { FlowingLogos } from "./ui/flowing-logos";
import { aleo } from "@/app/ui/fonts";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiFastapi, SiPostgresql, SiPrisma, SiGit, SiPython } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/perpetualuchec5",
      icon: <Twitter className="text-pink-600" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/perpetual-uchechukwu-798b51262",
      icon: <Linkedin className="text-pink-600" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Uche44",
      icon: <Github className="text-pink-600" />,
    },
  ];

  const techLogos = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <section className="min-h-screen md:pt-0 w-full md:flex items-center md:justify-center relative">
      <div className="w-full pt-50 md:pt-0 md:w-[50%] md:h-64 flex flex-col items-start">
        <div className="mb-2 md:mb-0 md:text-[15px] tracking-wide text-white/70 bg-pink-500 px-2 py-1 rounded-[5px]">
          PERPETUAL ASOGWA
        </div>
        <h1
          className={`${aleo.className} antialiased tracking-wide text-3xl md:text-5xl font-bold text-gray-600 md:leading-snug`}
        >
          HEY! I&apos;M PERPETUAL,
        </h1>
        <h1
          className={`${aleo.className} antialiased tracking-wider text-3xl md:text-5xl font-bold mt-4 text-pink-600
          md:leading-4.5 min-h-14`}
        >
          FULLSTACK DEVELOPER &{" "}
          <span className="block md:mt-8">TECHNICAL WRITER</span>
        </h1>
        <p className="text-gray-600 mt-2 md:mt-8 tracking-wide md:max-w-[600px]">
          Fullstack Developer building solid and scalable software solutions.
          And a Technical Writer who enjoys sharing knowledge with others.
        </p>
        <div className="w-full mt-4 h-fit flex items-center gap-4 md:mt-3">
          <a
            href="#contact"
            className="bg-pink-600 md:w-44 flex items-center justify-center px-6 py-3 md:px-5 md:py-2 rounded-4xl text-white cursor-pointer hover:brightness-110"
          >
            <p className="text-[12px] md:text-[15px]">GET IN TOUCH</p>
            <ArrowDown className="h-3.5" />
          </a>

          <div className="flex gap-2 ">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 grid place-content-center rounded-full h-11 w-11 bg-white border-pink-500 hover:brightness-110 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="md:mt-13 hidden md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg md:flex items-center justify-center border-t-4 border-r-4 border-pink-500 bg-gray-100">
        <Image
          src="/me.png"
          alt="My professional headshot"
          width={600}
          height={800}
          className=" md:w-full md:h-full"
          priority
        />
      </div>

      <FlowingLogos
        className="absolute bottom-0"
        data={techLogos.map((tech) => ({
          name: tech.name,

          icon: tech.icon,
        }))}
      />
    </section>
  );
};

export default Hero;
