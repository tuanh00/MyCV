import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "certifications",
  "contact",
];

const LeftPart = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const section = document.querySelector(`#${tab}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${tab}`);
    }

    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.4;

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (nearBottom) {
        currentSection = "contact";
      }

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">

        <a
          href="#home"
          className="navbar__brand"
          onClick={(event) => handleClickTab("home", event)}
        >
          TA<span>.</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navbar__links ${
            mobileOpen ? "navbar__links--open" : ""
          }`}
          aria-label="Main navigation"
        >
          {sections.slice(1).map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeTab === section ? "active" : ""}
              aria-current={activeTab === section ? "page" : undefined}
              onClick={(event) =>
                handleClickTab(section, event)
              }
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1)}
            </a>
          ))}
        </nav>

        <div className="navbar__socials">
          <a
            href="https://github.com/tuanh00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaSquareGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/huynh-tu-anh-chau/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </header>
  );
};

export default LeftPart;