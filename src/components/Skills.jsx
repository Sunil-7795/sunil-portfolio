import { motion } from "framer-motion";

function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={cardVariants}
        >
          <motion.p variants={cardVariants}>
            SKILLS
          </motion.p>

          <motion.h2 variants={cardVariants}>
            Technologies I work with.
          </motion.h2>
        </motion.div>


        {/* =====================================================
            SKILLS GRID
        ===================================================== */}

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >

          {/* ===================================================
              PROGRAMMING LANGUAGES
          =================================================== */}

          <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <h3>Programming Languages</h3>

            <motion.div
              className="skill-items"
              variants={containerVariants}
            >

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                />
                <span>Python</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                />
                <span>Java</span>
              </motion.div>

            </motion.div>
          </motion.div>


          {/* ===================================================
              CORE CS
          =================================================== */}

          <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <h3>Core CS</h3>

            <motion.div
              className="skill-items"
              variants={containerVariants}
            >

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-text-icon">DS</span>
                <span>Data Structures</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-text-icon">OOP</span>
                <span>OOPs</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-text-icon">DB</span>
                <span>DBMS</span>
              </motion.div>

            </motion.div>
          </motion.div>


          {/* ===================================================
              WEB TECHNOLOGIES
          =================================================== */}

          <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <h3>Web Technologies</h3>

            <motion.div
              className="skill-items"
              variants={containerVariants}
            >

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML"
                />
                <span>HTML</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <span>CSS</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-text-icon">&lt;/&gt;</span>
                <span>REST APIs</span>
              </motion.div>

            </motion.div>
          </motion.div>


          {/* ===================================================
              DATABASES
          =================================================== */}

          <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <h3>Databases</h3>

            <motion.div
              className="skill-items"
              variants={containerVariants}
            >

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
                <span>MySQL</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-text-icon">SQL</span>
                <span>SQL</span>
              </motion.div>

            </motion.div>
          </motion.div>


          {/* ===================================================
              TOOLS & TECHNOLOGIES
          =================================================== */}

          <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <h3>Tools &amp; Technologies</h3>

            <motion.div
              className="skill-items"
              variants={containerVariants}
            >

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                />
                <span>VS Code</span>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                />
                <span>Docker</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;