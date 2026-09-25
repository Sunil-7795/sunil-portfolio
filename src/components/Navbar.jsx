import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="nav-container">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span className="logo-mark">S</span>

          <span className="logo-name">
            Sunil<span>.</span>
          </span>
        </button>


        {/* Desktop Navigation */}
        <nav className="nav-links">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}

          <motion.a
            href="/Sunil_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Download size={15} />
            Resume
          </motion.a>

        </nav>


        {/* Mobile Menu Button */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}

            <a
              href="/Sunil_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              Download Resume
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;