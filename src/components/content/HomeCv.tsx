import { TypeAnimation } from "react-type-animation";

const HomeCv = () => {
  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          JUNIOR FULL-STACK DEVELOPER
        </p>

        <h1 className="hero__title">
          <span>Huynh Tu Anh Chau</span>
        </h1>

        <div className="hero__role">
          <TypeAnimation
            sequence={[
              "Java & Spring Developer",
              2200,
              "Full-Stack Developer",
              2200,
              "Backend Developer",
              2200,
            ]}
            wrapper="span"
            cursor
            repeat={Infinity}
          />
        </div>

        <p className="hero__description">
          I build modern web applications and REST APIs with Java,
          Spring Boot, React, and TypeScript.
        </p>

        <div className="hero__actions">
          <button
            type="button"
            className="hero__button hero__button--primary"
            onClick={scrollToProjects}
          >
            View Projects
          </button>

          <a
            className="hero__button hero__button--secondary"
            href="/Huynh_Tu_Anh_Chau__Developer_CV_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV ↗
          </a>
        </div>

        <div className="hero__tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>TypeScript</span>
        </div>
      </div>

      <div className="hero__network" aria-hidden="true">
          <span className="network-node network-node--java">Java</span>
          <span className="network-node network-node--spring">Spring Boot</span>
          <span className="network-node network-node--api">REST API</span>
          <span className="network-node network-node--sql">SQL</span>
          <span className="network-node network-node--react">React</span>

          <span className="network-node network-node--hibernate">Hibernate</span>
          <span className="network-node network-node--jpa">JPA</span>
          <span className="network-node network-node--maven">Maven</span>
          <span className="network-node network-node--docker">Docker</span>
          <span className="network-node network-node--git">Git</span>

          <span className="network-line network-line--one" />
          <span className="network-line network-line--two" />
          <span className="network-line network-line--three" />
          <span className="network-line network-line--four" />
          <span className="network-line network-line--five" />
          <span className="network-line network-line--six" />
          <span className="network-line network-line--seven" />
        </div>
    </section>
  );
};

export default HomeCv;