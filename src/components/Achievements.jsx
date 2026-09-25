import {
  FileText,
  Briefcase,
  ExternalLink,
} from "lucide-react";

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

  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="achievements-container">

        {/* Heading */}

        <div className="section-heading">
          <p>ACHIEVEMENTS</p>

          <h2>Beyond academics.</h2>

          <span>
            Research, industry exposure and experiences
            that contributed to my professional growth.
          </span>
        </div>

        {/* Achievement Grid */}

        <div className="achievements-list">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <a
                key={achievement.number}
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="achievement-card"
              >

                {/* Icon */}

                <div
                  className={`achievement-icon ${achievement.iconClass}`}
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                  />
                </div>

                {/* Achievement Information */}

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

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Achievements;