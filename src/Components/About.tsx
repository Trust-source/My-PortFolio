import Experience from "./Experience"


function About() {
  return (
    <div>
         <section
      id="About"
      className="min-h-screen flex flex-col items-center justify-center md:px-6 py-12 bg-gray-50 text-gray-800"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-5xl font-bold md:mb-6 mb-1">About Me</h2>

      {/* Content Container */}
      <div className="max-w-4xl text-center md:text-left space-y-6">
        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed">
          Hi, I’m <span className="font-semibold text-blue-600">Trust Femi</span>, a passionate{" "}
          <span className="font-semibold">Front-End Web Developer</span> with a strong focus on
          creating visually appealing, user-friendly, and responsive websites.
        </p>

        {/* What I Do */}
        <p className="text-lg md:text-xl leading-relaxed">
          I specialize in building responsive web applications using modern frameworks like{" "}
          <span className="font-semibold">React</span> and styling them with{" "}
          <span className="font-semibold">Tailwind CSS</span>. My approach combines clean design with
          optimal performance to deliver the best possible user experience.
        </p>

        {/* Work Experience */}
       <Experience/>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git", "Figma","Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium cursor-pointer"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About