import React from "react";

const Skills = () => {
  const skills = {
    Frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    Programming: ["Java", "DSA", "Problem Solving"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0b061a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full top-[-100px] left-[-100px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-800 hover:border-purple-500 transition-all duration-500 hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-700/40 to-indigo-700/40 border border-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="text-gray-400 text-center mt-16 max-w-3xl mx-auto">
          Continuously enhancing my full-stack development expertise while
          strengthening problem-solving and competitive programming skills for
          top product-based companies.
        </p>
      </div>
    </section>
  );
};

export default Skills;
