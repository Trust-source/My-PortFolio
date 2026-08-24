import Experience from "./Experience"


function About() {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 bg-gray-50 text-gray-800"
    >
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
        About Me
      </h2>

      {/* Content Container */}
      <div className="max-w-4xl w-full text-center md:text-left space-y-5 sm:space-y-6">
        {/* Intro */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Hi, I'm <span className="font-semibold text-blue-600">Trust Femi</span>, a passionate{" "}
          <span className="font-semibold">Developer</span> with a strong focus on
          creating visually appealing, user-friendly, and responsive websites.
        </p>

        {/* What I Do */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          I specialize in building responsive web applications using modern frameworks like{" "}
          <span className="font-semibold">React, Next.JS,</span> <span className="font-semibold">Python</span>  and styling them with{" "}
          <span className="font-semibold">Tailwind CSS</span>. My approach combines clean design with
          optimal performance to deliver the best possible user experience.
        </p>

        {/* Work Experience */}
        <Experience/>

        {/* Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git", "Figma","Python","Next.JS", "Go"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium cursor-pointer"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About