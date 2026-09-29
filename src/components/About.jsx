import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <motion.p variants={fadeUp}>
            ABOUT ME
          </motion.p>

          <motion.h2 variants={fadeUp}>
            Turning ideas into technology.
          </motion.h2>
        </motion.div>


        {/* =====================================================
            TWO COLUMN ABOUT CONTENT
        ===================================================== */}

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* ===================================================
              LEFT SIDE — ABOUT INFORMATION
          =================================================== */}

          <motion.div
            className="about-main-card"
            variants={fadeUp}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3,
              },
            }}
          >

            {/* Decorative glows */}
            <motion.div
              className="about-card-glow about-card-glow-blue"
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="about-card-glow about-card-glow-purple"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* Location */}

            <motion.div
              className="about-location"
              variants={fadeUp}
            >

              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </motion.svg>

              <span>Bangalore, Karnataka, India</span>

            </motion.div>


            {/* Existing About Text */}

            <motion.div
              className="about-description"
              variants={containerVariants}
            >

              <motion.p variants={fadeUp}>
                I am a Computer Science and Engineering graduate
                from Alliance University, Bengaluru, with a strong
                interest in software development and modern
                technology.
              </motion.p>

              <motion.p variants={fadeUp}>
                My technical background includes programming,
                web technologies, databases, data structures and
                object-oriented programming.
              </motion.p>

              <motion.p variants={fadeUp}>
                I enjoy building practical projects and exploring
                technologies that can solve real-world problems.
              </motion.p>

            </motion.div>

          </motion.div>


          {/* ===================================================
              RIGHT SIDE — INFORMATION CARDS
          =================================================== */}

          <motion.div
            className="about-details"
            variants={containerVariants}
          >

            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                x: -6,
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              <motion.span
                animate={{
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                01
              </motion.span>

              <h3>B.Tech CSE</h3>

              <p>
                Alliance University, Bengaluru
              </p>

            </motion.div>


            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                x: -6,
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              <motion.span
                animate={{
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                02
              </motion.span>

              <h3>CGPA 8.2/10</h3>

              <p>
                Computer Science &amp; Engineering
              </p>

            </motion.div>


            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover={{
                x: -6,
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              <motion.span
                animate={{
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                03
              </motion.span>

              <h3>Graduate</h3>

              <p>
                Class of 2026
              </p>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;