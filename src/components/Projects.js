import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "ParkPro - Smart Parking System",
      description:
        "A full-stack MERN application for booking and managing parking slots with authentication, admin dashboard, and real-time slot tracking.",
      tech: ["React", "Node.js", "MongoDB", "Material UI"],
      github: "https://github.com/guddukumarx/parkpro-mern",
      live: "#",
    },
    {
      title: "Online Examination System",
      description:
        "A role-based online exam platform with timer-based tests, admin/student dashboards, and secure authentication.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/guddukumarx/exam-pilot",
      live: "#",
    },
  {
  title: "Personal Portfolio Website",
  description:
    "A fully responsive, dark-themed personal portfolio website built using React and Tailwind CSS to showcase projects, technical skills, resume, and contact information with a modern UI/UX design.",
  tech: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
  github: "https://github.com/guddukumarx/guddukumar-portfolio",
  live: "https://guddukumar.co.in",
},
    {
      title: "FreshBasket - Grocery E-Commerce (MERN)",
      description:
        "A full-stack grocery e-commerce web application built using the MERN stack featuring user authentication, product filtering, cart management, online payments, order tracking, and an admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Material UI", "JWT"],
      github: "https://github.com/guddukumarx/freshbasket-mern",
      live: "#",
    },
    {
      title: "HireTrack - Applicant Tracking System (MERN)",
      description:
        "A full-stack Applicant Tracking System built using the MERN stack featuring role-based authentication, resume uploads, job postings, application tracking, and an admin dashboard with analytics.",
      tech: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Material UI",
        "JWT",
        "Multer",
      ],
      github: "https://github.com/guddukumarx/hiretrack-mern",
      live: "#",
    },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0d061f] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[150px] rounded-full top-[-150px] right-[-150px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-800 hover:border-purple-500 transition-all duration-500 hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="px-3 py-1 text-sm rounded-lg bg-gradient-to-r from-purple-700/40 to-indigo-700/40 border border-purple-600"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-purple-700 hover:bg-purple-800/30 transition duration-300"
                >
                  <Github size={18} />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition duration-300"
                >
                  <ExternalLink size={18} />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showMore && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowMore(true)}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
