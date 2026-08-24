import FlexiSaf from "../assets/FlexiSaf.jpg";
import Naseni from "../assets/Naseni.jpg";
import Freelance from "../assets/Freelance.jpg";
import L2e from "../assets/L2e.png"


export default function Experience() {
  const experiences = [
       {
      logo: L2e,
      company: "Learn2Earn",
      role: "AI-Native Engineer (Intern)",
      description: "Built and tested software applications that use artificial intelligence models as their main core foundation.",
      date: "Feb 2026 - Present",
    },
       {
      logo: Freelance,
      company: "Freelance",
      role: "Frontend Developer",
      description: "Built and maintained scalable UI with React and Tailwind CSS",
      date: "2025 - Present",
    },
    {
      logo: FlexiSaf,
      company: "FlexiSaf Edusoft",
      role: "Frontend Developer",
      description: "Built and maintained scalable UI with React and Tailwind CSS",
      date: "2024 - 2025",
    },
    {
      logo: Naseni,
      company: "NASENI",
      role: "Web Developer (Intern)",
      description: "Worked on responsive websites and optimized performance",
      date: "2024",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 text-gray-800 text-center">
          Experience
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 gap-2 sm:gap-4"
            >
              {/* Left - Logo */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {exp.company}
                  </h3>
                  <p className="text-gray-800 text-xs sm:text-sm">{exp.role}</p>
                </div>
              </div>

              {/* Right - Date */}
              <span className="text-gray-700 text-xs sm:text-sm sm:ml-4">{exp.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
