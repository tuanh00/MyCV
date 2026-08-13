const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__heading">
          <p className="about__eyebrow">ABOUT ME</p>

          <h2 className="about__title">
            Building reliable software,
            <span> from backend to UI.</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__intro">
            <p>
              I&apos;m a software developer focused on Java, Spring Boot,
              and full-stack application development.
            </p>

            <p>
              I build REST APIs, database-backed systems, and modern web
              applications, with hands-on experience across Java, React,
              TypeScript, Firebase, SQL, and third-party API integrations.
            </p>

            <p>
              I&apos;m currently looking for junior or graduate software
              development opportunities where I can contribute to real
              products, work with experienced engineers, and continue
              developing as a backend-focused developer.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about-card">
              <span className="about-card__number">01</span>

              <div>
                <h3>Backend Development</h3>

                <p>
                  Java, Spring Boot, REST APIs, JPA, Hibernate, and
                  database-backed application development.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card__number">02</span>

              <div>
                <h3>Full-Stack Development</h3>

                <p>
                  React, TypeScript, C#, Firebase, mobile applications,
                  authentication, and third-party API integrations.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card__number">03</span>

              <div>
                <h3>Current Focus</h3>

                <p>
                  Building production-style Spring applications with
                  structured APIs, persistence, validation, and clean
                  application architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;