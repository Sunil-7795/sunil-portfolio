function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="section-heading">
          <p>SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">

          {/* Programming Languages */}
          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-items">

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                />
                <span>Python</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  alt="Java"
                />
                <span>Java</span>
              </div>

            </div>
          </div>


          {/* Core CS */}
          <div className="skill-card">
  <h3>Core CS</h3>

  <div className="skill-items">

    <div className="skill-item">
      <span className="skill-text-icon">DS</span>
      <span>Data Structures</span>
    </div>

    <div className="skill-item">
      <span className="skill-text-icon">OOP</span>
      <span>OOPs</span>
    </div>

    <div className="skill-item">
      <span className="skill-text-icon">DB</span>
      <span>DBMS</span>
    </div>

  </div>
</div>


          {/* Web Technologies */}
          <div className="skill-card">
            <h3>Web Technologies</h3>

            <div className="skill-items">

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML"
                />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <span className="skill-text-icon">&lt;/&gt;</span>
                <span>REST APIs</span>
              </div>

            </div>
          </div>


          {/* Databases */}
          <div className="skill-card">
            <h3>Databases</h3>

            <div className="skill-items">

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <span className="skill-text-icon">SQL</span>
                <span>SQL</span>
              </div>

            </div>
          </div>


          {/* Tools & Technologies */}
          <div className="skill-card">
            <h3>Tools & Technologies</h3>

            <div className="skill-items">

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                />
                <span>VS Code</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                />
                <span>Docker</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;