import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* ================= CONTACT — HEADER ================= */}

        <div className="contact__header">
          <p className="contact__eyebrow">LET&apos;S CONNECT</p>

          <h2 className="contact__title">
            Open to the
            <span> next opportunity.</span>
          </h2>

          <p className="contact__description">
             I&apos;m currently looking for junior or graduate full-stack and
            backend development opportunities in Vietnam or New Brunswick, Canada.
          </p>
        </div>


        {/* ================= CONTACT — CARD ================= */}

        <div className="contact__card">

          <div className="contact__message">
            <p className="contact__availability">
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h3>
              Have a role, project,
              <br />
              or conversation in mind?
            </h3>

            <p>
              Feel free to reach out. I&apos;m always happy to connect with
              developers, recruiters, and teams working on interesting
              software.
            </p>
          </div>


          <div className="contact__actions">

            <a
              className="contact__button contact__button--primary"
              href="mailto:chtuanh@gmail.com"
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              className="contact__button"
              href="https://www.linkedin.com/in/huynh-tu-anh-chau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>

            <a
              className="contact__button"
              href="https://github.com/tuanh00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

        </div>


        {/* ================= CONTACT — FOOTER ================= */}

        <footer className="footer">

          <div>
            <strong>Huynh Tu Anh Chau</strong>

            <span>
              Junior Full-Stack Developer · Java &amp; Spring Focus
            </span>
          </div>

          <div className="footer__right">
            <span>
              Ho Chi Minh City, Vietnam · Dieppe / Greater Moncton, NB, Canada
          </span>

            <span>
              © {new Date().getFullYear()} Huynh Tu Anh Chau
            </span>
          </div>

        </footer>

      </div>
    </section>
  );
};

export default Contact;