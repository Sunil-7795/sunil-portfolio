const techIcons = [
  {
    name: "React",
    short: "⚛",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    short: "JS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    short: "Py",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    short: "☕",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Node",
    short: "Node",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    short: "SQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    short: "MDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    short: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    short: "K8s",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "TensorFlow",
    short: "TF",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "OpenCV",
    short: "CV",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "Git",
    short: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    short: "GH",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Spring",
    short: "Spring",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "HTML",
    short: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    short: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

function TechRain() {
  const particles = Array.from({ length: 18 }, (_, index) => {
    const tech = techIcons[index % techIcons.length];

    return (
      <div
        className="tech-rain-item"
        key={`${tech.name}-${index}`}
        style={{
          "--x": `${(index * 23.7) % 100}%`,
          "--delay": `${(index % 18) * -2.2}s`,
          "--duration": `${20 + (index % 7) * 2}s`,
          "--size": `${24 + (index % 3) * 5}px`,
          "--opacity": `${0.12 + (index % 3) * 0.025}`,
        }}
      >
        <img
          src={tech.url}
          alt=""
          aria-hidden="true"
          onError={(event) => {
            event.currentTarget.style.display = "none";

            const fallback = event.currentTarget.nextElementSibling;

            if (fallback) {
              fallback.style.display = "flex";
            }
          }}
        />

        <span className="tech-rain-fallback">
          {tech.short}
        </span>
      </div>
    );
  });

  return (
    <div className="tech-rain-background" aria-hidden="true">
      <div className="tech-bg-glow tech-bg-glow-one"></div>
      <div className="tech-bg-glow tech-bg-glow-two"></div>

      <div className="tech-bg-curve tech-bg-curve-one"></div>
      <div className="tech-bg-curve tech-bg-curve-two"></div>

      {particles}
    </div>
  );
}

export default TechRain;