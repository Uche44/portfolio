"use client";

import { FiSend } from "react-icons/fi";
import { aleo } from "@/app/ui/fonts";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);

        // reset fields
        setEmail("");
        setMessage("");
        formRef.current?.reset();

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-5 md:px-4 bg-[#111d45] text-white"
    >
      <h2
        className={`${aleo.className} text-2xl tracking-wider md:text-3xl font-bold text-center mb-14`}
      >
        Get in <span className="text-[#3841ff]">Touch</span>
      </h2>

      <div className="w-full mx-auto flex gap-4 max-w-5xl">
        <div className="hidden md:flex flex-col justify-center w-[45%] p-6 border border-white/10 rounded-2xl bg-[#0d1736]/40 backdrop-blur-md shadow-lg">
          <p
            className={`${aleo.className} text-2xl font-extrabold leading-snug`}
          >
            Need my services, <br /> have questions, <br /> or just want to say
            hi?
          </p>

          <p className="mt-6 text-xl font-bold text-[#3841ff] flex items-center gap-3">
            Hit here 👉 <span className="animate-bounce text-4xl">📩</span>
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 md:w-[55%] bg-[#111d45]/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10"
        >
          {success && (
            <p className="text-white bg-green-600 px-3 py-5 rounded-2xl text-center font-semibold">
              Message received. Will respond soon!
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
              name="email"
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
              name="message"
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
            {loading ? "Sending..." : "Send Message"} <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
