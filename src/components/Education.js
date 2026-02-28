import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Maharishi Markandeshwar Engineering College (MMEC), MMDU",
      duration: "2022 - 2026",
      description:
        "Focused on Data Structures & Algorithms, Full Stack Development, DBMS, Operating Systems, and Software Engineering. Actively building real-world MERN stack projects and preparing for placement opportunities.",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Bihar School Examination Board (BSEB), Patna",
      duration: "2020 - 2022",
      description:
        "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.",
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Bihar School Examination Board (BSEB), Patna",
      duration: "2019 - 2020",
      description:
        "Built strong academic foundation with emphasis on mathematics, science, and logical reasoning.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 bg-[#0b061a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-700/20 blur-[150px] rounded-full bottom-[-150px] left-[-150px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Education Journey
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-purple-800 ml-4 md:ml-0 md:border-none">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 md:mb-16 md:grid md:grid-cols-2 md:gap-12 items-start"
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>

              {/* Card */}
              <div
                className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-800 hover:border-purple-500 transition-all duration-500 hover:scale-[1.03] ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-2">
                  {item.degree}
                </h3>
                <p className="text-gray-300 font-medium mb-1">
                  {item.institution}
                </p>
                <p className="text-gray-500 mb-4">{item.duration}</p>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
