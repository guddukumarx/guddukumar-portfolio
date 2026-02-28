import React from "react";
import { Code, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#0d061f] text-white overflow-hidden"
    >
      {/* Soft Background Accent */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/10 blur-[180px] rounded-full -top-32 -right-32"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            I’m a final-year Computer Science student focused on building
            production-grade full-stack applications using the MERN stack. I
            enjoy transforming complex ideas into scalable, clean, and
            performance-driven web systems. Currently preparing for placement
            roles in product-based companies while sharpening Data Structures &
            Algorithm skills.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Highlight 1 */}
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md group-hover:border-purple-500 transition duration-300">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Clean & Scalable Architecture
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Writing maintainable code structured for long-term scalability
                  using modern best practices in React, Node.js, and MongoDB.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md group-hover:border-purple-500 transition duration-300">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Growth-Oriented Developer
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Constantly learning new technologies and improving
                  problem-solving efficiency through competitive coding and
                  real-world projects.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md group-hover:border-purple-500 transition duration-300">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Strong Collaboration Mindset
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Experienced in working on structured project modules,
                  understanding role-based systems, and contributing in team
                  development environments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                5+
              </h3>
              <p className="text-gray-400 text-sm">Full Stack Projects</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                MERN
              </h3>
              <p className="text-gray-400 text-sm">Primary Tech Stack</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                DSA
              </h3>
              <p className="text-gray-400 text-sm">Competitive Coding Focus</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                2026
              </h3>
              <p className="text-gray-400 text-sm">Graduation Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
