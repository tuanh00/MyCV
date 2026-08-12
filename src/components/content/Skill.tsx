const skillGroups = [
  {
    title: "Core Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Maven",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS / SCSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Oracle",
      "Firebase",
      "AWS",
    ],
  },
  {
    title: "Development & DevOps",
    skills: [
      "Git / GitHub",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Postman",
      "PowerShell",
    ],
  },
];

const Skill = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">

        <div className="skills__heading">
          <p className="skills__eyebrow">TECHNICAL SKILLS</p>

          <h2 className="skills__title">
            Tools I use to
            <span> build software.</span>
          </h2>

          <p className="skills__description">
            My current focus is Java and Spring backend development,
            supported by full-stack experience with React, TypeScript,
            databases, and cloud services.
          </p>
        </div>

        <div className="skills__core">
          <div className="skills__core-center">
            <span>CORE</span>
            <strong>Java + Spring</strong>
          </div>

          <span className="skills__orbit skills__orbit--java">
            Java
          </span>

          <span className="skills__orbit skills__orbit--spring">
            Spring Boot
          </span>

          <span className="skills__orbit skills__orbit--rest">
            REST API
          </span>

          <span className="skills__orbit skills__orbit--jpa">
            JPA
          </span>

          <span className="skills__orbit skills__orbit--sql">
            SQL
          </span>

          <span className="skills__orbit skills__orbit--docker">
            Docker
          </span>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skill-card"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <div className="skill-card__items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;