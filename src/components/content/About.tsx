const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__heading">
          <p className="about__eyebrow">ABOUT ME</p>

          <h2 className="about__title">
            Building reliable software,
            <span> learning fast.</span>
          </h2>
        </div>

        <div className="about__grid">

          <div className="about__intro">
            <p>
              I&apos;m a junior full-stack developer with a growing focus on
              Java and Spring Boot.
            </p>

            <p>
              I enjoy building REST APIs, structured backend systems, and
              modern web applications using Java, React, TypeScript, and
              relational or cloud databases.
            </p>

            <p>
              I&apos;m currently looking for junior or graduate software
              development opportunities where I can contribute, learn from
              experienced engineers, and continue strengthening my backend
              skills.
            </p>
          </div>

          <div className="about__highlights">

            <div className="about-card">
              <span className="about-card__number">01</span>

              <div>
                <h3>Backend Focus</h3>
                <p>
                  Java, Spring Boot, REST APIs, JPA, Hibernate, and database
                  development.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card__number">02</span>

              <div>
                <h3>Full-Stack Experience</h3>
                <p>
                  React, TypeScript, C#, Firebase, mobile applications, and
                  API integrations.
                </p>
              </div>
            </div>

            <div className="about-card">
              <span className="about-card__number">03</span>

              <div>
                <h3>Current Direction</h3>
                <p>
                  Building production-style Spring projects while actively
                  applying for junior software roles.
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