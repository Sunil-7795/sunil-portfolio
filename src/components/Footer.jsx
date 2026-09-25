function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Decorative background elements */}

      <div className="footer-decoration footer-decoration-one">
        &lt;/&gt;
      </div>

      <div className="footer-decoration footer-decoration-two">
        JS
      </div>

      <div className="footer-decoration footer-decoration-three">
        AI
      </div>

      <div className="footer-container">

        {/* ================================
            TOP SECTION
        ================================= */}

        <div className="footer-content">

          {/* BRAND */}

          <div className="footer-brand-section">

            <a
              href="#home"
              className="footer-logo"
            >
              <span className="footer-logo-icon">
                &lt;/&gt;
              </span>

              <span className="footer-logo-text">
                Sunil<span>.</span>
              </span>
            </a>

            <p className="footer-description">
              Aspiring Software Engineer · AI & ML
              Enthusiast · Web Developer · Building
              practical and technology-driven solutions.
            </p>

          </div>


          {/* NAVIGATION */}

          <div className="footer-links">

            <h3>Navigation</h3>

            <div className="footer-nav-grid">

              <a href="#about">About</a>

              <a href="#skills">Skills</a>

              <a href="#projects">Projects</a>

              <a href="#education">Education</a>

              <a href="#certifications">
                Certifications
              </a>

              <a href="#achievements">
                Achievements
              </a>

              <a href="#contact">Contact</a>

            </div>

          </div>


          {/* CONNECT */}

          <div className="footer-connect">

            <h3>Connect</h3>

            <div className="footer-socials">

              {/* GitHub */}

              <a
                href="https://github.com/Sunil-7795"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.9c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.78-4.59 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/sunil-5212a8301"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 8.5A2 2 0 1 0 6.5 4a2 2 0 0 0 0 4.5ZM4.8 9.8H8.2V20H4.8V9.8ZM10.3 9.8h3.3v1.4h.05c.46-.87 1.58-1.78 3.25-1.78 3.47 0 4.11 2.28 4.11 5.24V20h-3.4v-4.73c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5V20h-3.4V9.8Z" />
                </svg>
              </a>


              {/* Email */}

              <a
                href="mailto:sunilballadi24@gmail.com"
                aria-label="Email"
                className="footer-social"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
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

                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>

            </div>


            <a
              href="mailto:sunilballadi24@gmail.com"
              className="footer-contact-link"
            >
              sunilballadi24@gmail.com
            </a>

            <a
              href="tel:+917795364566"
              className="footer-contact-link"
            >
              +91 7795364566
            </a>

          </div>

        </div>


        {/* ================================
            DIVIDER
        ================================= */}

        <div className="footer-divider"></div>


        {/* ================================
            BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Sunil. All rights reserved.
          </p>

          <p className="footer-made">
            Built with React & passion.
          </p>

          <p>
            Bengaluru, India
          </p>

        </div>


        {/* BACK TO TOP */}

        <a
          href="#home"
          className="footer-top-button"
          aria-label="Back to top"
        >
          ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;