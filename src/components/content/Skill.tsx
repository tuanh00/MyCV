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

            <div className="mm-branch">
              <h5>Data & Cloud</h5>
              <div className="mm-chips">
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>Oracle</span>
                <span>Firebase (Auth/Firestore/Storage)</span>
              </div>
            </div>

            <div className="mm-branch">
              <h5>APIs & Integrations</h5>
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

            <div className="mm-branch">
              <h5>Architecture & Patterns</h5>
              <div className="mm-chips">
                <span>MVC</span>
                <span>MVVM</span>
                <span>3-Tier / Layered</span>
                <span>Clean Architecture</span>
                <span>RESTful API Design</span>
                <span>Webhooks</span>
                <span>Dependency Injection</span>
                <span>Factory</span>
                <span>Abstract Factory</span>
                <span>Builder</span>
                <span>Singleton</span>
                <span>Strategy</span>
                <span>Observer</span>
                <span>State</span>
                <span>Adapter</span>
                <span>Repository</span>
                <span>Service</span>
              </div>
            </div>
            <div className="mm-branch">
              <h5>Quality & Principles</h5>
              <div className="mm-chips">
                <span>SOLID</span>
                <span>JUnit Tests</span>
                <span> Postman</span>
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
