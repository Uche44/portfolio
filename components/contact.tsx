"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { aleo } from "@/app/ui/fonts";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) return;

    // Here you could integrate an API endpoint or email service
    console.log({ email, message });

    setSuccess(true);
    setEmail("");
    setMessage("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="w-full py-20 px-5 md:px-4 bg-[#111d45] text-white">
      <h2
        className={`${aleo.className} text-2xl md:text-3xl font-bold text-center mb-14`}
      >
        Get in <span className="text-[#3841ff]">Touch</span>
      </h2>

      <div className=" w-full mx-auto flex gap-4 max-w-5xl">
        <div className="hidden md:flex flex-col justify-center w-[45%] p-6 border border-white/10 rounded-2xl bg-[#0d1736]/40 backdrop-blur-md shadow-lg">
          <p
            className={`${aleo.className} text-2xl font-extrabold leading-snug`}
          >
            Need my services, <br /> have questions, <br /> or just want to say
            hi?
          </p>

          <p className="mt-6 text-xl font-bold text-[#3841ff] flex items-center gap-3">
            Hit here 👉
            <span className="animate-bounce text-4xl">📩</span>
          </p>
        </div>

        <form
          action="https://formsubmit.co/perpetualuchechukwu808@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 md:w-[55%] bg-[#111d45]/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10"
        >
          {success && (
            <p className="text-green-400 text-center font-semibold">
              Message sent successfully!
            </p>
          )}

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="px-4 py-3 rounded-lg border bg-transparent border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3841ff] transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              rows={6}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3841ff] transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#3841ff] hover:bg-[#2c34d1] transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
