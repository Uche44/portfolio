"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import Image from "next/image";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";
import { FlowingLogos } from "./ui/flowing-logos";
import { aleo } from "@/app/ui/fonts";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const text = useTypingEffect(["frontend developer", "technical writer"]);

  // 🧩 Social links + icons
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/perpetualuchec5",
      icon: <Twitter className="text-(--brand)" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/perpetual-uchechukwu-798b51262",
      icon: <Linkedin className="text-(--brand)" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/perpetualuchechukwu",
      icon: <Github className="text-(--brand)" />,
    },
  ];

  const techLogos = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <section className="min-h-screen md:pt-0 w-full md:flex items-center md:justify-center relative">
      {/* Left Side */}
      <div className="w-full pt-50 md:pt-0 md:w-[50%] md:h-64 flex flex-col items-start">
        <div className="mb-2 md:mb-0 md:text-[15px] text-white/70 bg-[#181482] px-2 py-1 rounded-[5px]">
          PERPETUAL ASOGWA
        </div>
        <h1
          className={`${aleo.className} antialiased text-3xl md:text-5xl font-bold text-white md:leading-snug`}
        >
          HEY! I&apos;M PERPETUAL,
        </h1>
        <h1
          className={`${aleo.className} antialiased text-3xl md:text-5xl font-bold mt-4 text-(--brand)
          md:leading-4.5 min-h-14`}
        >
          {text.toUpperCase()}
        </h1>
        <p className="text-white md:-mt-4">
          A creative and innovative frontend developer
        </p>
        <div className="w-full h-fit flex items-center gap-4 mt-3">
          {/* Button */}
          <button className="bg-(--brand) md:w-44 flex items-center justify-center px-5 py-2 rounded-4xl text-white cursor-pointer hover:brightness-110">
            <p className="text-[15px]">GET IN TOUCH</p>
            <ArrowRight className="h-3.5" />
          </button>

          {/* Social Icons */}
          <div className="flex gap-2 ">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 grid place-content-center rounded-full h-11 w-11 bg-white border-(--brand) hover:brightness-110 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* mobile img */}

      <div className="md:hidden absolute bottom-0 w-full h-55 bg-black rounded-t-full overflow-hidden shadow-lg flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/me.png"
            alt="My professional headshot"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Right Side - Image for desktop */}
      <div className="md:mt-13 hidden md:w-[35%] md:h-[76vh] bg-black rounded-full overflow-hidden shadow-lg md:flex items-center justify-center">
        <Image
          src="/me.png"
          alt="My professional headshot"
          width={600}
          height={800}
          className=" md:object-cover md:w-full md:h-full"
          priority
        />
      </div>

      <FlowingLogos
        className="absolute bottom-0"
        data={techLogos.map((tech) => ({
          name: tech.name,
          // Instead of image, we render icon directly
          icon: tech.icon,
        }))}
      />
    </section>
  );
};

export default Hero;
