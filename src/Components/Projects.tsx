import { Globe } from 'lucide-react';
import FoodPorch from '../assets/FoodPorch.png';
import Weather from '../assets/Weather.png';

function Projects() {

const projects = [
  {
    title: "Weather App",
    date: "Oct 2024 - Jan 2025",
    description:
      "With the power of modern web technologies, I developed a responsive weather application using React.js and a live weather API. This app provides real-time weather updates, forecasts, and temperature details for any location worldwide.",
    tags: ["React.js", "Javascript", "SCSS", "Lucide-react"],
    image: Weather,
    link: "https://example.com",
  },
  {
    title: "Food-Porch",
    date: "Jan 2024 - Feb 2024",
    description:
      "Developed an interactive food ordering platform, Food Porch, using modern web technologies. The application features a visually appealing UI, dynamic product displays, and responsive layouts, allowing users to browse menus and view product details.",
    tags: ["React.js", "Javascript", "Tailwind", "Lucide-react"],
    image: FoodPorch,
    link: "https://food-porch1-1gsd.vercel.app/",
  },
  // Add more projects...
];



  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10 bg-white flex flex-col items-center" id='Projects'>
        <p className="bg-black text-white w-fit px-[10px] py-[3px] rounded-md font-bold">My Projects</p>
        <div className="md:text-5xl font-bold text-2xl mb-8">Check out my latest works</div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 text-sm mt-3 h-31">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-900 text-xs px-3 py-1 rounded-md font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 px-2 py-1 bg-black text-white rounded-md text-sm hover:bg-gray-800 gap-1"
              >
               <Globe size={17} className=''/> Website
              </a>
                                      
            </div>
          </div>
        ))}
      </div>
   
        </div>

    </div>
  )
}

export default Projects