import {
  FileText,
  Briefcase,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      number: "01",
      title:
        "Fuzzy Logic Control System for Smart Home Energy Management",
      issuer: "ITIKD",
      year: "2025",
      icon: FileText,
      iconClass: "achievement-purple",
      link:
        "https://ieeexplore.ieee.org/abstract/document/11004957",
    },
    {
      number: "02",
      title: "Industry Immersion Program",
      issuer: "Alliance University",
      year: "May — July 2025",
      icon: Briefcase,
      iconClass: "achievement-blue",
      link:
        "https://drive.google.com/file/d/1tRh8nnISMQ2CxumsmnDW0HVKtyQzBqlo/view?usp=sharing",
    },
  ];


  /* =====================================================
     SCROLL ANIMATIONS
  ===================================================== */

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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


  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };


  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.97,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="achievements-container">


        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="section-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          <p>ACHIEVEMENTS</p>

          <h2>Beyond academics.</h2>

          <span>
            Research, industry exposure and experiences
            that contributed to my professional growth.
          </span>

        </motion.div>


        {/* =================================================
            ACHIEVEMENT GRID
        ================================================= */}

        <motion.div
          className="achievements-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >

          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <motion.a
                key={achievement.number}
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="achievement-card"
                variants={cardVariants}
              >


                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className={`achievement-icon ${achievement.iconClass}`}
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                  />
                </div>


                {/* =================================================
                    ACHIEVEMENT INFORMATION
                ================================================= */}

                <div className="achievement-info">

                  <h3 className="achievement-title">

                    <span>
                      {achievement.title}
                    </span>

                    <ExternalLink
                      className="achievement-external-icon"
                      size={16}
                      strokeWidth={2}
                    />

                  </h3>


                  <div className="achievement-meta">

                    <span>
                      {achievement.issuer}
                    </span>

                    <span className="achievement-meta-dot">
                      •
                    </span>

                    <span>
                      {achievement.year}
                    </span>

                  </div>

                </div>

              </motion.a>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;