
import { Github, Linkedin, Mail, MessageCircle, Globe, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { name: "GitHub", icon: <Github size={24} />, link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/trust-femi-70b68a317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Twitter", icon: <Twitter size={24} />, link: "https://x.com/trust_femi?t=J9uShjChw694TmOlqfvqgQ&s=08" },
    { name: "Portfolio", icon: <Globe size={24} />, link: "https://yourportfolio.com" },
    { name: "Email", icon: <Mail size={24} />, link: "mailto:ftrust001@gmail.com" },
    { name: "Whatsapp", icon: <MessageCircle size={24} />, link: "https://wa.me/2349029288374" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 text-white py-12 px-6" id="Contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-gray-800/60 hover:bg-gray-700 transition-all p-5 rounded-xl shadow-md border border-gray-700"
            >
              <div className="p-3 bg-gray-900 rounded-lg flex items-center justify-center">
                {social.icon}
              </div>
              <span className="text-sm sm:text-base font-medium text-center">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
