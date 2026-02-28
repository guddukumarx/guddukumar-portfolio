import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const lastSubmitTime = useRef(0);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setStatus({
        type: "error",
        message: "Please wait before submitting again.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
      const adminTemplate = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
      const autoReplyTemplate =
        process.env.REACT_APP_EMAIL_AUTO_REPLY_TEMPLATE_ID;

      if (!serviceId || !adminTemplate || !autoReplyTemplate) {
        throw new Error("Email configuration missing.");
      }

      const formData = new FormData(form.current);

      if (formData.get("company")) {
        setLoading(false);
        return;
      }

      await emailjs.sendForm(serviceId, adminTemplate, form.current);

      await emailjs.sendForm(serviceId, autoReplyTemplate, form.current);

      lastSubmitTime.current = Date.now();

      setStatus({
        type: "success",
        message: "Message sent successfully 🚀",
      });

      form.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0d061f] text-white overflow-hidden"
    >
      <div className="absolute w-[400px] h-[400px] bg-purple-700/20 blur-[150px] rounded-full top-[-100px] left-[-150px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Let's Connect 🚀
            </h3>
            <p className="text-gray-400 mb-8">
              I'm actively seeking placement opportunities. Feel free to reach
              out for roles or collaboration.
            </p>

            <div className="flex gap-5">
              <a
                href="mailto:guddukumar.codes@gmail.com"
                className="p-4 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://linkedin.com/in/guddukumarx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/guddukumarx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-800"
          >
            {/* Honeypot Hidden Field */}
            <input type="text" name="company" style={{ display: "none" }} />

            <div className="mb-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                minLength="2"
                className="w-full px-4 py-3 rounded-lg bg-[#140730] border border-purple-700 text-white"
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#140730] border border-purple-700 text-white"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                minLength="10"
                className="w-full px-4 py-3 rounded-lg bg-[#140730] border border-purple-700 text-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {status && (
              <p
                className={`mt-4 text-center text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
