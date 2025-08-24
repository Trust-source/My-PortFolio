function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-[1px] left-1/2 -translate-x-1/2 
                 bg-black text-gray-200 px-6 py-1 sm:py-2 rounded-full shadow-lg 
                 backdrop-blur-md bg-opacity-60  
                 text-sm md:text-base sm:px-8 z-50 mt-4"
    >
      <ul className="flex space-x-4 sm:space-x-7">
        {["Home", "About", "Projects", "Contact"].map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            className="cursor-pointer hover:text-gray-300 font-bold filter blur-[0.3px]"
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
