"use client";

import { aleo } from "@/app/ui/fonts";
import Image from "next/image";

const About = () => {
  const progress = [
    { id: 1, num: "1", text: "Hackathon Won" },
    // { id: 2, num: "2+", text: "Years Experience" },
    { id: 3, num: "6+", text: "Projects Built" },
    { id: 4, num: "5+", text: "Articles Written" },
    { id: 5, num: "10+", text: "Open Source Contributions" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen mt-5 px-2 md:px-4 py-10 md:flex items-start justify-center gap-6"
    >
      <div className="md:w-[30%] md:h-[70vh] rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-pink-500 flex items-end shadow-lg">
        <Image
          src="/about.jpg"
          alt="Profile photo"
          width={500}
          height={500}
          className="hidden md:block md:w-full md:h-full object-cover"
        />
      </div>

      {/* text */}

      <div className="md:w-[53%] md:h-64 flex flex-col items-start ">
        <div className="md:text-[15px] tracking-wide text-white/70 bg-pink-500 px-2 py-1 rounded-[5px]">
          ABOUT ME
        </div>

        <h1
          className={`${aleo.className} text-2xl tracking-wider antialiased mt-2 md:text-5xl md:mt-0 font-bold text-gray-600 leading-snug`}
        >
          ANYTHING THAT RUNS ON THE WEB,{" "}
          <span className="text-pink-500"> I BUILD</span>
        </h1>

        <p className="text-gray-600 tracking-wide text-[18px] mb-4 mt-4 md:mt-4">
          I&apos;m a fullstack developer who works across the entire stack -
          designing APIs, wiring up databases, and building the UIs that sit on
          top of them. I contribute to open source because I&apos;ve built my career
          on tools others shared freely, and technical writing because clear
          documentation is the difference between software that gets adopted and
          software that gets abandoned.
        </p>

        <div className="w-full h-fit flex gap-2 md:gap-4 mt-2">
          {progress.map((p) => (
            <div
              key={p.id}
              className="text-white md:h-22 md:w-36 grid place-content-center rounded-lg bg-white/8 backdrop-blur-3xl border border-pink-600 md:p-0 px-3 py-2"
            >
              <h3
                className={`${aleo.className} antialiased text-pink-500 md:text-4xl font-bold `}
              >
                {p.num}
              </h3>
              <p className={`${aleo.className} antialiased text-gray-600`}>{p.text}</p>
            </div>
          ))}
        </div>

        <a
          href="/perp.pdf"
          download
          className="bg-pink-600 md:w-47 mt-4 flex items-center justify-center px-5 py-2 rounded-4xl text-white cursor-pointer hover:brightness-110"
        >
          <p className="text-[13px] tracking-wide">DOWNLOAD MY CV</p>
        </a>
      </div>
    </section>
  );
};

export default About;
