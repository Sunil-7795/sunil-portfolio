import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      year: "2024",
      logo: "https://cdn.simpleicons.org/coursera/FFFFFF",
      logoClass: "logo-coursera",
      link: "https://coursera.org/verify/VWTG9DDFFJM8",
    },
    {
      number: "02",
      title: "DevOps, DataOps, MLOps",
      issuer: "Coursera",
      year: "2024",
      logo: "https://cdn.simpleicons.org/coursera/FFFFFF",
      logoClass: "logo-coursera",
      link: "https://coursera.org/verify/WMEEPS3LH15F",
    },
    {
      number: "03",
      title:
        "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      logo: "oracle",
      logoClass: "logo-oracle",
      link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=47ECACA4F57606D1C26B4C4B51B84EF878C49CBF9E0C3FB247ABB0E6FA6C59C4",
    },
    {
      number: "04",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      logo: "deloitte",
      logoClass: "logo-deloitte",
      link:
        "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68d5633ee8c126991b13341f_1758868320440_completion_certificate.pdf",
    },
  ];

  /* =========================================
     SCROLL ANIMATIONS
  ========================================= */

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const listVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.97,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        {/* Heading */}

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
          <p>CERTIFICATIONS</p>

          <h2>Continuous learning.</h2>

          <span>
            Certifications and professional learning experiences
            that strengthen my technical foundation.
          </span>
        </motion.div>


        {/* Certification Cards */}

        <motion.div
          className="certifications-list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {certifications.map((certification) => (
            <motion.a
              key={certification.number}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
              aria-label={`View ${certification.title} certificate`}
              variants={cardVariants}
            >

              {/* Animated background */}

              <span className="certification-orb"></span>

              <span className="certification-shine"></span>


              {/* Top row */}

              <div className="certification-top">

                {/* Certification logo */}

                <div
                  className={`certification-logo ${certification.logoClass}`}
                >
                  {certification.logo === "oracle" ? (
                    <span className="oracle-mark">
                      ORACLE
                    </span>
                  ) : certification.logo === "deloitte" ? (
                    <span className="deloitte-mark">
                      D<span></span>
                    </span>
                  ) : (
                    <img
                      src={certification.logo}
                      alt={`${certification.issuer} logo`}
                    />
                  )}
                </div>


                {/* External link */}

                <div className="external-link-wrapper">
                  <svg
                    className="external-link-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5h5v5" />
                    <path d="M19 5 10 14" />
                    <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
                  </svg>
                </div>

              </div>


              {/* Certification information */}

              <div className="certification-info">

                <h3 className="certification-title">
                  {certification.title}
                </h3>

                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                <span className="certification-year">
                  {certification.year}
                </span>

              </div>

            </motion.a>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;