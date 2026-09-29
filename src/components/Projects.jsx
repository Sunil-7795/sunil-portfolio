import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Plant Disease Detection",
      image: "/projects/plant-disease.png",
      description:
        "Built a CNN-based system to detect and classify plant diseases from images. Used OpenCV for preprocessing and Pandas and Matplotlib for analysis and visualization.",
      technologies: [
        "Python",
        "OpenCV",
        "CNN",
        "Streamlit",
      ],
      link: "https://github.com/Sunil-7795",
    },

    {
      title: "Foggy Weather Object Detection System",
      image: "/projects/foggy-detection.png",
      description:
        "Developed a GDIP–YOLOv8 system for foggy weather object detection. Enhanced image visibility using deep learning-based dehazing and deployed the system with Streamlit.",
      technologies: [
        "Python",
        "YOLOv8",
        "GDIP",
        "Streamlit",
        "OpenCV",
      ],
      link: "https://github.com/Sunil-7795/foggy-object-detection",
    },

    {
      title: "Credit Card Processing",
      image: "/projects/credit-card.png",
      description:
        "Developed a responsive credit card management dashboard with OTP-based login and personalized transaction tracking, allowing users to manage payments and analyze spending.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
      ],
      link: "https://github.com/Sunil-7795/Credit_Card_Processing-",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading projects-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            MY WORK
          </motion.p>


          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            Featured Projects
          </motion.h2>


          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            A selection of projects I've built using software
            development and machine learning technologies.
          </motion.span>

        </motion.div>


        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}

              initial={{
                opacity: 0,
                y: 45,
                scale: 0.97,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.18,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -6,
              }}
            >

              {/* Border Glow */}
              <div className="project-border"></div>


              {/* Project Top */}
              <div className="project-top">

                {/* Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>


                {/* GitHub */}
                <div className="project-github-area">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.024-.013-1.857-2.782.604-3.369-1.183-3.369-1.183-.455-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.913.832.091-.647.349-1.087.635-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .133-.001.269-.003.406-.003.354-.006.71-.006 1.004 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                    </svg>

                  </a>

                </div>

              </div>


              {/* Project Content */}
              <div className="project-content">

                <h3>
                  {project.title}
                </h3>


                {/* Technologies */}
                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>


                {/* Description */}
                <p>
                  {project.description}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;