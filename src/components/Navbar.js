import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

/* ✅ Move navLinks outside component (fixes ESLint build error) */
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll Progress
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;

      setScrollProgress(progress);

      // Hide / show navbar
      if (currentScroll > lastScroll.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll.current = currentScroll;

      // Active Section
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop - 140;
          const height = section.offsetHeight;

          if (currentScroll >= top && currentScroll < top + height) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 z-[100] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showNav ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <div
          className="flex items-center justify-between
          px-6 lg:px-10 py-3
          rounded-full
          bg-[#0b061a]/70
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          w-[95vw] md:w-auto"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            GK.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center relative ml-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 text-sm font-medium transition duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 transition-all duration-300"></span>
                )}
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="ml-6 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-purple-400 ml-4"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ${
            isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } overflow-hidden`}
        >
          <div className="bg-[#140730]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-5 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block text-base ${
                  active === link.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
