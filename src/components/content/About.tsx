import githubLogo from '@/assets/img/about/github.png';
import myCV from '@/assets/Huynh-Tu-Anh-Chau-CV.pdf';
import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <>
         <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100}}>
                <div className="arlo_tm_about_wrapper_all">
                  <div className="container">
                    <div className="arlo_tm_title_holder">
                      <h3>About Me</h3>
                      {/* <span>Main informations about me</span> */}
                    </div>
                    <div className="arlo_tm_about_wrap">
                      <div className="author_wrap">
                        <div className="leftbox">
                          <div className="about_image_wrap parallax" data-relative-input="true">
                          <a href="https://github.com/tuanh00/" target="_blank" rel="noopener noreferrer">
                            <div className="image layer" data-depth="0.1">
                                <img src="img/about/550x640.jpg" alt="550x640" />
                                <div className="inner" data-img-url={githubLogo}
                                
                                style={{backgroundImage: `url(${githubLogo})`}}
                                ></div>
                            </div>
                            </a>
                            <div className="border layer" data-depth="0.2">
                              <img src="img/about/550x640.jpg" alt="550x640" />
                              <div className="inner"></div>
                            </div>
                          </div>
      
                        </div>
                        <div className="rightbox">
                          <div className="arlo_tm_mini_title_holder">
                            <h4>Greetings! I am a&nbsp;  
                            <TypeAnimation sequence = {[
                            'Trainee Developer',
                            2000,
                            'Front-End Developer',
                            2000,
                            'Back-End Developer',
                            2000,
                          ]}
                          wrapper = "span"
                          cursor = {true}
                          repeat = {Infinity}
                          />
                          </h4>
                          </div>
                          <div className="definition">
                            <p>Hi! My name is <strong>Tu Anh</strong>. I am a trainee developer passionate about creating functional and visually appealing web solutions. I'm pursuing a DEC in Computer Science Technology and will graduate in May 2025. I'm actively seeking a front-end development internship for Winter 2025.
                            <br/><br/>

                            For front-end development, I work with libraries like <strong>React</strong>, frameworks like <strong>Bootstrap</strong>, and for styling such as <strong>SCSS</strong> and <strong>CSS</strong>. I also use tools like <strong>Vite, Figma, and Draw.io</strong> for design and prototyping.

On the back-end, I have hands-on experience with programming languages like <strong>C#, Java, and Javascript</strong> and I also work with <strong>Node.js</strong>. For database management, I utilize <strong>SQL Server, MySQL, and Oracle</strong>. I use tools such as <strong>Git</strong> for version control and <strong>Swagger UI</strong> for testing RESTful APIs.
<br/><br/>
I'm always looking to enhance my skills and would love to contribute to a team where I can bring both creativity and technical expertise.</p>
                          </div>
                          <div className="about_short_contact_wrap">
                            <ul>
                              <li>
                                <span><label>City:</label> Montreal, QC
                                </span>
                              </li>
                              <li>
                                <span><label>Study:</label> LaSalle College</span>
                              </li>
                              <li>
                                <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                              </li>
                              <li>
                                <span><label>Mail:</label> <a href="mailto:chtuanh@gmail.com">chtuanh&#64;gmail.com</a></span>
                              </li>
                              <li>
                                <span><label>LinkedIn:</label> <a href="https://www.linkedin.com/in/huynh-tu-anh-chau-8a4a251a8/" target="_blank">huynh-tu-anh-chau</a></span>
                              </li>
                            </ul>
                          </div>
                          <div className="buttons_wrap">
                            <ul>
                              <li>
                                <a href={myCV} download><span>Download CV</span></a>
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
    }
export default About;