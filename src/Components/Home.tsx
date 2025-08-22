import folio from '../assets/Folio.jpg'

export default function Home() {
  return (
    <div className="min-h-fit flex items-center justify-center mt-10">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white  md:p-10 max-w-fit mx-auto shadow-gray-300">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={folio}
            alt="Your Name"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Trust Femi👋</h1>
          <p className="text-gray-500 mt-2 font-medium">Frontend Web Developer</p>
          <p className="mt-4 text-gray-600 max-w-md font-medium">
            I am a passionate frontend developer with a love for crafting
            beautiful, responsive, and interactive web experiences using modern technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
