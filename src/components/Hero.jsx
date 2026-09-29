import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const roleText = "Aspiring Software Engineer";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < roleText.length) {
      timeout = setTimeout(() => {
        setDisplayText(roleText.slice(0, displayText.length + 1));
      }, 75);
    } else if (!isDeleting && displayText.length === roleText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(roleText.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleText]);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialItem = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="hero">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <motion.div
        className="hero-bg-glow hero-bg-glow-one"
        animate={{
          x: [0, 45, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-bg-glow hero-bg-glow-two"
        animate={{
          x: [0, -35, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="hero-content">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
              },
            },
          }}
        >

          {/* Availability Badge */}

          <motion.div
            className="availability-badge"
            variants={fadeUp}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
          >
            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            Open to Opportunities
          </motion.div>


          {/* Introduction */}

          <motion.p
            className="hero-intro"
            variants={fadeUp}
          >
            Hello, I'm
          </motion.p>


          {/* Name */}

          <motion.h1
            className="hero-title"
            variants={fadeUp}
          >
            <motion.span
              initial={{
                opacity: 0,
                letterSpacing: "0.3em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "normal",
              }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Sunil
            </motion.span>
          </motion.h1>


          {/* Role — TYPEWRITER */}

          <motion.h2
            className="hero-role"
            variants={fadeUp}
          >
            {displayText}

            <motion.span
              className="typing-cursor"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              |
            </motion.span>
          </motion.h2>


          {/* Description */}

          <motion.p
            className="hero-description"
            variants={fadeUp}
          >
            Computer Science and Engineering graduate passionate
            about software development, web technologies and
            technology-driven solutions.
          </motion.p>


          {/* =========================
              BUTTONS
          ========================== */}

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
          >

            <motion.a
              href="#projects"
              className="hero-primary"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Explore My Work

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>


            <motion.a
              href="/Sunil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Download Resume
            </motion.a>

          </motion.div>


          {/* =========================
              SOCIAL LINKS
          ========================== */}

          <motion.div
            className="hero-social-section"
            variants={fadeUp}
          >

            <p>
              CONNECT WITH ME
            </p>


            <motion.div
              className="hero-socials"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 1.1,
                    staggerChildren: 0.12,
                  },
                },
              }}
            >

              {/* GITHUB */}

              <motion.a
                href="https://github.com/Sunil-7795"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                variants={socialItem}
                whileHover={{
                  y: -5,
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.64-1.38-.2-.26-.56-1.02-.56-2.06 0-1.5.54-2.57 1.44-3.28-.14-.36-.63-1.65.14-3.43 0 0 1.18-.38 3.87 1.25a13.2 13.2 0 0 1 3.53 0c2.69-1.63 3.87-1.25 3.87-1.25.77 1.78.28 3.07.14 3.43.9.71 1.44 1.78 1.44 3.28 0 2.34-1.43 4.03-3.6 4.77.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
                  />
                </svg>

              </motion.a>


              {/* LINKEDIN */}

              <motion.a
                href="https://www.linkedin.com/in/sunil-5212a8301"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                variants={socialItem}
                whileHover={{
                  y: -5,
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6.5 8.2H3.2V20h3.3V8.2ZM4.85 3C3.8 3 3 3.8 3 4.85S3.8 6.7 4.85 6.7s1.85-.8 1.85-1.85S5.9 3 4.85 3ZM20.8 13.25c0-3.55-1.9-5.2-4.45-5.2-2.05 0-2.97 1.13-3.48 1.92V8.2H9.57V20h3.3v-6.56c0-1.73.33-3.4 2.47-3.4 2.1 0 2.13 1.98 2.13 3.5V20h3.33v-6.75Z"
                  />
                </svg>

              </motion.a>


              {/* EMAIL */}

              <motion.a
                href="mailto:sunilballadi24@gmail.com"
                aria-label="Email"
                variants={socialItem}
                whileHover={{
                  y: -5,
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path
                    d="m3 7 9 6 9-6"
                  />
                </svg>

              </motion.a>

            </motion.div>

          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <motion.div
          className="hero-visual"
          initial="hidden"
          animate="visible"
          variants={fadeRight}
        >

          {/* Photo Glow */}

          <motion.div
            className="hero-photo-glow"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* Decorative Rings */}

          <motion.div
            className="hero-ring hero-ring-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-ring hero-ring-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
          />


          {/* PYTHON */}

          <motion.div
            className="tech-icon tech-python"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="Python"
            />
          </motion.div>


          {/* JAVA */}

          <motion.div
            className="tech-icon tech-java"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -4, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Java"
            />
          </motion.div>


          {/* MYSQL */}

          <motion.div
            className="tech-icon tech-database"
            animate={{
              y: [0, -9, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
          </motion.div>


          {/* JAVASCRIPT */}

          <motion.div
            className="tech-icon tech-js"
            animate={{
              y: [0, 11, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
          </motion.div>


          {/* CODE */}

          <motion.div
            className="tech-icon tech-code"
            animate={{
              y: [0, -8, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>
              &lt;/&gt;
            </span>
          </motion.div>


          {/* PROFILE PHOTO */}

          <motion.div
            className="hero-photo"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/profile.png"
              alt="Sunil"
            />
          </motion.div>


          {/* Decorative Dots */}

          <motion.span
            className="hero-dot hero-dot-one"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="hero-dot hero-dot-two"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="hero-dot hero-dot-three"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.8,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.2,
          duration: 0.8,
        }}
      >

        <motion.span
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        Scroll to explore

      </motion.div>

    </section>
  );
}

export default Hero;