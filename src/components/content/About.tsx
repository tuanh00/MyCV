import githubLogo from '@/assets/img/about/github.png';
import myCV from '@/assets/Huynh-Tu-Anh-Chau-CV.pdf';
import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <>
         <div className="arlo_tm_section relative" id="about">
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
                                <div className="inner" data-img-url={githubLogo}></div>
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
                            <p>Hi! My name is <strong>Tu Anh</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                          </div>
                          <div className="about_short_contact_wrap">
                            <ul>
                              <li>
                                <span><label>Birthday:</label> 01.07.1990</span>
                              </li>
                              <li>
                                <span><label>Age:</label> 28</span>
                              </li>
                              <li>
                                <span><label>City:</label> New York, USA</span>
                              </li>
                              <li>
                                <span><label>Interests:</label> Soccer, UFC</span>
                              </li>
                              <li>
                                <span><label>Study:</label> Chicago University</span>
                              </li>
                              <li>
                                <span><label>Degree:</label> Master</span>
                              </li>	
                              <li>
                                <span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
                              </li>
                              <li>
                                <span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail&#64;gmail.com</a></span>
                              </li>
                              <li>
                                <span><label>Phone:</label> <a href="#">+77 022 177 05 05</a></span>
                              </li>
                              <li>
                                <span><label>Twitter:</label> <a href="#">&#64;myusername</a></span>
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