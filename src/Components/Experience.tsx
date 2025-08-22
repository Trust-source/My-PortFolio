import FlexiSaf from "../assets/FlexiSaf.jpg";
import Naseni from "../assets/Naseni.jpg";
import Freelance from "../assets/Freelance.jpg";


export default function Experience() {
  const experiences = [
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
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-gray-200 pb-4"
            >
              {/* Left - Logo */}
              <div className="flex items-center gap-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-gray-800 text-sm">{exp.role}</p>
                
                </div>
              </div>

              {/* Right - Date */}
              <span className="text-gray-700 text-sm">{exp.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
