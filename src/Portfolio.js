import { useState, useEffect } from "react";
import FlutterLogo from "./assets/flutter.png";
import DartLogo from "./assets/dart.png";
import NodeLogo from "./assets/node.png";
import ExpressLogo from "./assets/express.png";
import JavaScriptLogo from "./assets/js.png";
import PythonLogo from "./assets/python.png";
import ReactLogo from "./assets/react.png";
import JiraLogo from "./assets/jira.png";

import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  GitBranch,
  Award,
  Users,
  Code,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Portfolio() {
  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        try {
          return JSON.parse(savedValue);
        } catch (e) {
          // If it's not JSON, return the string directly
          return savedValue;
        }
      }

      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    });

    useEffect(() => {
      // Save either as a string or as JSON if it's not a string
      if (typeof value === "string") {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }, [key, value]);

    return [value, setValue];
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false); // use useLocalStorage for theme
  const [expandedItem, setExpandedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setIsDarkMode(savedTheme === "dark");
  //   }
  // }, []);

  // // Save theme to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  // }, [isDarkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpejjyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

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

  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Princess Sumaya University for Technology",
      year: "2018 - 2023",
      // description:
      //   "Graduated with honors, focusing on software engineering and mobile development.",
      activities: [
        {
          icon: Users,
          text: "Use to be a member of the ACM for competitive programming",
        },
        {
          icon: Award,
          text: "Gained certification in mobile development",
        },
        {
          icon: GraduationCap,
          text: "Volunteered as a peer tutor for introductory programming courses",
        },
      ],
    },
    {
      title: "Mobile App Development Certification",
      institution: "Udemy",
      year: "2021",
      description:
        "Completed an intensive program focusing on Flutter development and best practices.",
      activities: [
        {
          icon: Code,
          text: "Developed 3 fully functional Flutter apps as part of the certification",
        },
        {
          icon: Code,
          text: "Learned Bloc & Cubit, Provider, as well as Riverpod for state management solutions",
        },
        {
          icon: Code,
          text: "Dived deep into caching with Hive",
        },
        {
          icon: Code,
          text: "Built Responsive & Adaptive mobile apps",
        },
      ],
    },
  ];

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
        style={{
          backgroundImage: `radial-gradient(${
            isDarkMode ? "#ffffff10" : "#00000010"
          } 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              href="#hero"
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Yazan Farrah
            </button>

            <div className="hidden md:flex items-center space-x-6">
              {["about", "skills", "education", "contact"].map((section) => (
                <button
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
                </button>
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
              <button
                key={section}
                href={`#${section}`}
                className={`block px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
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
                src="/profile_image.jpeg"
                alt="Yazan Farrah"
                className="rounded-full w-48 h-48 mx-auto shadow-lg"
                style={{ objectFit: "cover", objectPosition: "top" }}
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
              Senior Software Engineer
            </p>
            <button
              href="#contact"
              className={`bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300 inline-block`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get in Touch
            </button>
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
                aspiring developers.
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
                { name: "Flutter", icon: FlutterLogo },
                { name: "Dart", icon: DartLogo },
                { name: "Node.js", icon: NodeLogo },
                { name: "Express.js", icon: ExpressLogo },
                { name: "JavaScript", icon: JavaScriptLogo },
                { name: "Python", icon: PythonLogo },
                { name: "React", icon: ReactLogo },
                { name: "Git", icon: GitBranch },
                { name: "Jira", icon: JiraLogo },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  {typeof skill.icon === "string" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-18 h-16 mx-auto mb-4"
                    />
                  ) : (
                    <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  )}
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
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${
                    isDarkMode ? "bg-gray-700" : "bg-gray-100"
                  } rounded-lg overflow-hidden shadow-lg`}
                >
                  <div
                    className={`p-6 cursor-pointer ${
                      isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
                    } transition-colors duration-300`}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-2xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {expandedItem === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-500" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-blue-500" />
                      )}
                    </div>
                    <p
                      className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.institution} | {item.year}
                    </p>
                  </div>
                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`px-6 pb-6 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <p className="mb-4">{item.description}</p>
                        <h4
                          className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Activities and Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {item.activities.map((activity, actIndex) => (
                            <motion.li
                              key={actIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: actIndex * 0.1,
                              }}
                              className="flex items-center"
                            >
                              <activity.icon className="w-5 h-5 mr-2 text-blue-500" />
                              <span>{activity.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
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
                    href="https://github.com/YazanFarrah"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yazan-farrah-795216227/"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="mailto:yazanfarrah@gmail.com"
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
                onSubmit={handleSubmit}
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
              {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="flex items-center justify-center p-4">
                    <svg
                      className="animate-spin h-12 w-12 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          <ToastContainer />
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
