import React, { useEffect, useState } from "react";
import { Download, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import profileImage from "../assets/profile.jpeg";

const roles = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "React & Node.js Developer",
  "Competitive Programmer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-40 sm:pt-44 bg-[#0f0c29] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#14122e] to-[#1c163d]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[200px] rounded-full -top-40 -left-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-green-900/20 border border-green-600/40 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open for Full-Time Opportunities • 2026 Batch
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              Guddu Kumar
            </h1>

            {/* Typewriter Role */}
            <div className="h-[40px] sm:h-[50px] mb-6">
              <span className="text-lg sm:text-xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                {currentRole}
              </span>
              <span className="text-purple-400 ml-1 animate-pulse">|</span>
            </div>

            {/* Refined Bio */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Final-year Computer Science student building scalable,
              production-ready full-stack applications using the MERN stack.
              Focused on clean architecture, performance optimization, and
              solving real-world engineering problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start mb-14">
              {[
                {
                  icon: <Linkedin size={18} />,
                  link: "https://linkedin.com/in/guddukumarx",
                },
                {
                  icon: <Github size={18} />,
                  link: "https://github.com/guddukumarx",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/20 transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Refined Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {[
                { value: "5+", label: "Projects" },
                { value: "100+", label: "DSA Solved" },
                { value: "MERN", label: "Primary Stack" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-purple-400">
                    {item.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={profileImage}
                  alt="Guddu Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
        >
          <ArrowDown size={26} className="text-purple-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
