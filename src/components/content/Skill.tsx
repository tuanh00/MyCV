import ProgressBar from "@ramonak/react-progress-bar";
import "devicon/devicon.min.css";

const Skill = () => {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Technical Skills</h3>
          </div>

            {/* Mind Map */}
          <div className="mindmap skills-mindmap">
            <div className="mm-center">
              <div className="mm-bubble">
                Tech Map
                <span>What I work with</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>Frontend</h5>
              <div className="mm-chips">
                <span>React</span>
                <span>TypeScript</span>
                <span>HTML</span>
                <span>CSS/SCSS</span>
                <span>Bootstrap</span>
                <span>Vite</span>
                <span>Figma</span>
                <span>SwiftUI</span>
                <span>Swift</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>Backend</h5>
              <div className="mm-chips">
                <span>Node.js</span>
                <span>C#</span>
                <span>Java</span>
                <span>JavaScript</span>
                <span>Python</span>
              </div>
            </div>

            {/* NEW: Java & Spring */}
            <div className="mm-branch">
              <h5>Java &amp; Spring</h5>
              <div className="mm-chips">
                <span>Spring Boot</span>
                <span>Spring Data JPA</span>
                <span>Hibernate ORM</span>
                <span>REST API Development</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>Data &amp; Cloud</h5>
              <div className="mm-chips">
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Oracle</span>
                <span>Firebase (Auth/Firestore/Storage)</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>APIs &amp; Integrations</h5>
              <div className="mm-chips">
                <span>Stripe</span>
                <span>Google Calendar</span>
                <span>Google Maps</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>Tools</h5>
              <div className="mm-chips">
                <span>Git</span>
                <span>Swagger UI</span>
                <span>Jupyter</span>
                <span>Spyder</span>
              </div>
            </div>

            {/* SHORTENED: Architecture -> only OOP */}
            <div className="mm-branch">
              <h5>Architecture &amp; Patterns</h5>
              <div className="mm-chips">
                <span>Object-Oriented Programming (OOP)</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>Quality &amp; Principles</h5>
              <div className="mm-chips">
                <span>SOLID</span>
                <span>JUnit Tests</span>
                <span>Postman</span>
              </div>
            </div>

            {/* NEW: DevOps & CI/CD */}
            <div className="mm-branch">
              <h5>DevOps &amp; CI/CD</h5>
              <div className="mm-chips">
                <span>CI/CD Pipelines</span>
                <span>GitLab</span>
                <span>Jenkins</span>
              </div>
            </div>

            {/* NEW: IT Ops & Support */}
            <div className="mm-branch">
              <h5>IT Ops &amp; Support</h5>
              <div className="mm-chips">
                <span>Microsoft 365 (Office 365)</span>
                <span>PowerShell</span>
                <span>Oracle VirtualBox</span>
              </div>
            </div>

            {/* NEW: Methodologies */}
            <div className="mm-branch">
              <h5>Methodologies</h5>
              <div className="mm-chips">
                <span>Agile</span>
                <span>Scrum</span>
              </div>
            </div>
          </div>
          {/* /Mind Map */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
