"use client";

import { ArrowDown } from "lucide-react";
import { aleo } from "@/app/ui/fonts";
import Image from "next/image";

const About = () => {
  const progress = [
    { id: 1, num: "1", text: "Hackathons Won" },
    { id: 2, num: "2+", text: "Years Experience" },
    { id: 3, num: "5+", text: "Projects Built" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen px-2 md:px-4 py-10 md:flex items-start justify-center gap-6"
    >
      <div className="md:w-[30%] md:h-[70vh] rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-(--brand) flex items-end shadow-lg">
        <Image
          src="/me.png"
          alt="Profile photo"
          width={500} // you can adjust these
          height={500} // Next.js requires width + height
          className="hidden md:block md:w-[95%] md:h-[90%] object-cover"
        />
      </div>

      {/* text */}

      <div className="md:w-[53%] md:h-64 flex flex-col items-start ">
        <div className="md:text-[15px] text-white/70 bg-[#181482] px-2 py-1 rounded-[5px]">
          ABOUT ME
        </div>

        <h1
          className={`${aleo.className} text-2xl antialiased mt-2 md:text-5xl md:mt-0 font-bold text-white leading-snug`}
        >
          I AM AVAILABLE FOR{" "}
          <span className="text-(--brand)">WEB DEVELOPMENT </span> PROJECTS
        </h1>

        <p className="text-white text-[18px] mb-4 mt-2 md:mt-4">
          I’m a frontend developer who enjoys bringing ideas to life through
          clean, responsive, and interactive web designs. I also have some
          experience with backend development, which helps me understand the
          full picture when building modern web apps.
        </p>

        <div className="w-full h-fit flex gap-2 md:gap-4 mt-2">
          {progress.map((p) => (
            <div
              key={p.id}
              className="text-white md:h-22 md:w-36 grid place-content-center rounded-lg bg-white/8 backdrop-blur-3xl border border-(--brand) md:p-0 px-3 py-2"
            >
              <h3
                className={`${aleo.className} antialiased md:text-4xl font-bold `}
              >
                {p.num}
              </h3>
              <p className={`${aleo.className} antialiased `}>{p.text}</p>
            </div>
          ))}
        </div>

        <a
          href="/perp.pdf"
          download
          className="bg-(--brand) md:w-47 mt-4 flex items-center justify-center px-5 py-2 rounded-4xl text-white cursor-pointer hover:brightness-110"
        >
          <p className="text-[13px]">DOWNLOAD MY CV</p>
        </a>
      </div>
    </section>
  );
};

export default About;
