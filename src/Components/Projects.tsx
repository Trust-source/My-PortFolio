import { Globe } from 'lucide-react';
import FoodPorch from '../assets/FoodPorch.png';
import Weather from '../assets/Weather.png';
import Lucy from '../assets/Lucy.png'
import eastern from '../assets/eastern.png'
import summarizer from '../assets/Summarizer.png'
import BookBot from '../assets/BookBot.png'
import B from '../assets/B.jpg'

function Projects() {

const projects = [
       {
    title: "AI summarizer",
    date: "March 2026",
    description:
      "A Chrome extension that uses the Google Gemini API to summarize articles and web pages directly from your browser.",
    tags: ["Javascript", "HTML", "CSS"],
    image: summarizer,
    link: "https://github.com/Trust-source/AI-Summarizer-Chrome-extension",
  },

         {
    title: "BudgetFI",
    date: "May 2026",
    description:
      "A personal finance accountability app for tracking spending across multiple bank accounts with monthly budget planning.",
    tags: ["Next JS", "Typescript", "Tailwind", "Supabase"],
    image: B,
    link: "https://budget-fi-v2.vercel.app/",
  },


       {
    title: "Eastern Housing",
    date: "November 2025",
    description:
      "Developed a responsive real estate platform connecting property agents and tenants across Eastern Nigeria using modern web technologies. The application features fully responsive layouts, enabling users to explore available houses and facilitate lease agreements seamlessly.",
    tags: ["Next.js", "Javascript", "tailwind", "Lucide-react"],
    image: eastern,
    link: "https://eastern-housing.vercel.app",
  },
 

  {
    title: "Weather App",
    date: "February 2025",
    description:
      "With the power of modern web technologies, I developed a responsive weather application using React.js and a live weather API. This app provides real-time weather updates, forecasts, and temperature details for any location worldwide.",
    tags: ["React.js", "Javascript", "SCSS", "Lucide-react"],
    image: Weather,
    link: "https://example.com",
  },

       {
    title: "The Lucy",
    date: "November 2025",
    description:
      "Designed and developed a personal portfolio website that highlights her work, achievements, and professional journey, serving as a centralized platform for visibility and outreach.",
    tags: ["Next.js", "Javascript", "tailwind", "Lucide-react"],
    image: Lucy,
    link: "https://the-lucy-james.vercel.app/",
  },

       {
    title: "Book Bot",
    date: "August 2026",
    description:
      "BookBot is a beginner-friendly command-line program written in Python that reads a text file (like a novel), analyzes its contents, and prints a statistical report showing the total word count and individual character frequencies.",
    tags: ["Python"],
    image: BookBot,
    link: "https://github.com/Trust-source/Book-Bot",
  }
  // Add more projects...
];



  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 bg-white" id='Projects'>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-8">
          <p className="bg-black text-white px-3 py-1.5 rounded-md font-bold text-sm sm:text-base">
            My Projects
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            Check out my latest works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-2">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors gap-2 w-fit"
                >
                  <Globe size={16} /> Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects