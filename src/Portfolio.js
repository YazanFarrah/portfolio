import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Server,
  GitBranch,
  Trello,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "education", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } bg-opacity-90 backdrop-blur-sm transition-colors duration-300`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              onClick={() => scrollToSection("hero")}
            >
              Yazan Farrah
            </a>
            <div className="hidden md:flex items-center space-x-6">
              {["about", "skills", "education", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-blue-500 transition-colors ${
                    activeSection === section ? "text-blue-500" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-200 text-gray-700"
                } transition-colors duration-300`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } py-2`}
          >
            {["about", "skills", "education", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`block w-full text-left px-6 py-2 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
              } transition-colors duration-300`}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Yazan Farrah"
                className="rounded-full w-48 h-48 mx-auto shadow-lg"
              />
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Yazan Farrah
            </h1>
            <p className="text-2xl md:text-3xl text-blue-500 mb-8">
              Senior Flutter Engineer
            </p>
            <a
              href="#contact"
              className={`bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300 inline-block`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section
          id="about"
          className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <h2
              className={`text-4xl font-bold mb-8 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About Me
            </h2>
            <div
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              } rounded-lg p-8 shadow-lg`}
            >
              <p className="text-lg mb-4">
                I'm a passionate Senior Flutter Engineer with a knack for
                creating beautiful, performant mobile applications. With a
                strong foundation in computer science from Princess Sumaya
                University for Technology, I bring a blend of theoretical
                knowledge and practical expertise to every project.
              </p>
              <p className="text-lg">
                When I'm not crafting pixel-perfect UIs or optimizing app
                performance, you can find me exploring the latest in mobile
                development, contributing to open-source projects, or mentoring
                aspiring developers. I'm always excited to take on new
                challenges and push the boundaries of what's possible with
                Flutter.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-6">
            <h2
              className={`text-4xl font-bold mb-12 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: "Flutter", icon: Server },
                { name: "Dart", icon: Server },
                { name: "Node.js", icon: Server },
                { name: "Express.js", icon: Server },
                { name: "JavaScript", icon: Server },
                { name: "Python", icon: Server },
                { name: "React", icon: Server },
                { name: "Git", icon: GitBranch },
                { name: "Jira", icon: Trello },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <span
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="container mx-auto px-6">
            <h2
              className={`text-4xl font-bold mb-12 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Education
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/psut.png "
                  style={{height:250 ,width:300}}
                  alt="Princess Sumaya University for Technology"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Princess Sumaya University for Technology
                </h3>
                <p
                  className={`text-lg mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Bachelor of Science in Computer Science
                </p>
                <h4
                  className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Activities and Societies:
                </h4>
                <ul
                  className={`list-disc list-inside ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li>Member of the Computer Science Student Association</li>
                  <li>
                    Participated in multiple hackathons and coding competitions
                  </li>
                  <li>
                    Volunteered as a peer tutor for introductory programming
                    courses
                  </li>
                  <li>
                    Contributed to the university's open-source projects
                    initiative
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-6">
            <h2
              className={`text-4xl font-bold mb-12 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get in Touch
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0 md:w-1/2 pr-0 md:pr-8">
                <p
                  className={`text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  Ready to bring your app idea to life? Let's collaborate and
                  create something amazing together!
                </p>
                <div className="flex space-x-4 mb-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="mailto:yazan.farrah@example.com"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={32} />
                  </a>
                </div>
                <p
                  className={`text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Or fill out the form, and I'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form
                className={`w-full md:w-1/2 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg p-8 shadow-lg`}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className={`block ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-3 py-2 ${
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    } rounded-md`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className={`block ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 ${
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    } rounded-md`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className={`block ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-3 py-2 ${
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    } rounded-md`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} py-6`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            &copy; 2023 Yazan Farrah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
