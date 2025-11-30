import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-(--brand) md:flex justify-between text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p className="font-semibold text-lg text-white tracking-wider">
            PERPETUAL ASOGWA
          </p>
        </div>
      </div>

      <div className="max-w-6xl tracking-wide mx-auto flex flex-col md:flex-row items-center justify-between text-xs md:text-sm gap-2">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">perpetual</span>. All
          rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
