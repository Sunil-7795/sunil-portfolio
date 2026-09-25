function Education() {
  const education = [
    {
      year: "2026",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Alliance University, Bengaluru",
      result: "CGPA: 8.2 / 10",
    },
    {
      year: "2020 — 2022",
      degree: "Pre-University Course",
      field: "Physics, Chemistry, Mathematics & Computer Science",
      institution: "PRN Amratha Bharathi PU College, Hebri",
      result: "Percentage: 83%",
    },
    {
      year: "2020",
      degree: "10th Grade (SSLC)",
      field: "KSEEB",
      institution: "MNDSM Aided High School, Mudrady",
      result: "Percentage: 89.44%",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">

        <div className="section-heading">
          <p>EDUCATION</p>

          <h2>Academic journey.</h2>

          <span>
            My educational background and academic foundation.
          </span>
        </div>

        <div className="education-timeline">

          {education.map((item, index) => (
            <div
              className="education-item"
              key={`${item.year}-${item.degree}`}
            >

              {/* Timeline marker */}

              <div className="education-marker">
                <span>0{index + 1}</span>
              </div>


              {/* Education card */}

              <div className="education-card">

                <div className="education-top">

                  <span className="education-year">
                    {item.year}
                  </span>

                  <span className="education-result">
                    {item.result}
                  </span>

                </div>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.field}
                </h4>

                <p className="education-institution">
                  {item.institution}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;