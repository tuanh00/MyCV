import { useRef, useEffect } from "react";
import githubLogo from "@/assets/img/about/crypto.jpg";
import myCV from "@/assets/Huynh_Tu_Anh_Chau_CV_Aug.pdf";
import { TypeAnimation } from "react-type-animation";
import Parallax from "parallax-js";
import logo550 from "@/assets/img/about/550x640.jpg";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <>
      <div
        className="arlo_tm_section relative"
        id="about"
        style={{ paddingTop: 100 }}
      >
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              {/* <span>Main informations about me</span> */}
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    ref={sceneEl}
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.2">
                      <img src={logo550} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={githubLogo}
                        style={{ backgroundImage: `url(${githubLogo})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src={logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Greetings! I am a&nbsp;
                      <TypeAnimation
                        sequence={[
                          "Trainee Developer",
                          2000,
                          "Front-End Developer",
                          2000,
                          "Back-End Developer",
                          2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p className="about-intro">
                      Junior developer focused on React/TypeScript and Java/C#
                      backends. Graduating May 2025 and open to full-time roles.
                    </p>
                    <ul className="about-points">
                      <li>
                        Happy to contribute as Front-end, Full-stack, or Mobile
                        (iOS).
                      </li>
                      <li>
                        Fast learner — if a skill isn’t in my portfolio yet, I’m
                        ready to learn it.
                      </li>
                      <li>
                        I care about clean UI, maintainable code, and
                        collaborative teams.
                      </li>
                    </ul>
                  </div>

                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>City:</label> Montreal, QC
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> LaSalle College
                        </span>
                      </li>
                      {/* <li>
                                <span><label>Website:</label> <a href="https://tuanh00.github.io/portfolio/" target="_blank">Check Portfolio</a></span>
                              </li> */}
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:chtuanh@gmail.com">
                            chtuanh&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>LinkedIn:</label>{" "}
                          <a
                            href="https://www.linkedin.com/in/huynh-tu-anh-chau-8a4a251a8/"
                            target="_blank"
                          >
                            Check Linkedin
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
