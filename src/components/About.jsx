function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning ideas into technology.</h2>
        </div>


        {/* =====================================================
            TWO COLUMN ABOUT CONTENT
        ===================================================== */}

        <div className="about-content">


          {/* ===================================================
              LEFT SIDE — ABOUT INFORMATION
          =================================================== */}

          <div className="about-main-card">

            {/* Decorative glows */}
            <div className="about-card-glow about-card-glow-blue"></div>
            <div className="about-card-glow about-card-glow-purple"></div>


            {/* Location */}

            <div className="about-location">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>Bangalore, Karnataka, India</span>

            </div>


            {/* Existing About Text */}

            <div className="about-description">

              <p>
                I am a Computer Science and Engineering graduate
                from Alliance University, Bengaluru, with a strong
                interest in software development and modern
                technology.
              </p>

              <p>
                My technical background includes programming,
                web technologies, databases, data structures and
                object-oriented programming.
              </p>

              <p>
                I enjoy building practical projects and exploring
                technologies that can solve real-world problems.
              </p>

            </div>

          </div>


          {/* ===================================================
              RIGHT SIDE — EXISTING INFORMATION CARDS
          =================================================== */}

          <div className="about-details">

            <div className="about-card">

              <span>01</span>

              <h3>B.Tech CSE</h3>

              <p>
                Alliance University, Bengaluru
              </p>

            </div>


            <div className="about-card">

              <span>02</span>

              <h3>CGPA 8.2/10</h3>

              <p>
                Computer Science &amp; Engineering
              </p>

            </div>


            <div className="about-card">

              <span>03</span>

              <h3>Graduate</h3>

              <p>
                Class of 2026
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;