import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#0b061a] text-white overflow-hidden border-t border-purple-900">
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700/10 blur-[150px] rounded-full bottom-[-200px] right-[-200px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Guddu Kumar
              </span>
            </h2>
            <p className="text-gray-400">
              BTech CSE Final Year • MERN Stack Developer Building scalable
              full-stack applications with clean UI & performance focus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-purple-400 transition duration-300 capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-purple-400">
              Connect With Me
            </h3>

            <div className="flex gap-5">
              <a
                href="mailto:guddukumar.codes@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition duration-300"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://linkedin.com/in/guddukumarx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/guddukumarx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-purple-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {year} Guddu Kumar. All rights reserved.</p>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="mt-5 md:mt-0 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-110 transition duration-300 shadow-lg"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
