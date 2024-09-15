import ProgressBar from "@ramonak/react-progress-bar";
import 'devicon/devicon.min.css';
 
const Skill = () => {
    return (
        <>
        <div className="arlo_tm_section" id="skills">
            {/* -----skill_1----- */}
                <div className="arlo_tm_skills_wrap">
                  <div className="container">
                  <div className="arlo_tm_title_holder">
                      <h3>Technical Skills</h3>
                      {/* <span>Main informations about me</span> */}
                    </div>
                    <div className="inner_wrap">
                      <div className="leftbox">
                        <div className="arlo_tm_mini_title_holder">
                          <h4>Front-end Skills</h4>
                        </div>
                        <p>For the front-end, HTML and CSS provided a solid foundation for kick-starting my journey into web development.<br/><br/> Moving forward, I used Vite and React to streamline the development process, making it easier to collaborate with teammates and build efficient applications. <br/><br/>Additionally, Figma has been invaluable in allowing me to deliver clear visual designs that align with customer expectations.</p>                   
                          </div>
                      <div className="rightbox">
                        <div className="progress_bar_wrap_total">
                          <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                            <div className="flex-container">
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html_icon"/>
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                            </div>
                            {/* <div className="arlo_tm_progress" data-value="95" data-color="#000">
                              <span>
                                <span className="label">HTML/CSS/Javascript</span>
                                <span className="number">95%</span>
                              </span>
                                <div className="arlo_tm_bar_bg">
                                <ProgressBar completed={95} 
                                    bgColor={"#333"}
                                    height="8px"
                                    isLabelVisible={false}
                                />

                            </div>
                            </div> */}
                            {/* <div className="arlo_tm_progress" data-value="95" data-color="#000">
                              <span>
                                <span className="label">HTML/CSS/Javascript</span>
                                <span className="number">95%</span>
                              </span>
                                <div className="arlo_tm_bar_bg">
                                <ProgressBar completed={95} 
                                    bgColor={"#333"}
                                    height="8px"
                                    isLabelVisible={false}
                                />

                            </div>
                            </div> */}
                            {/* <div className="arlo_tm_progress" data-value="95" data-color="#000">
                              <span>
                                <span className="label">HTML/CSS/Javascript</span>
                                <span className="number">95%</span>
                              </span>
                                <div className="arlo_tm_bar_bg">
                                <ProgressBar completed={95} 
                                    bgColor={"#333"}
                                    height="8px"
                                    isLabelVisible={false}
                                />

                            </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            {/* ----- end skill_1----- */}
    {/* -----skill_1----- */}
    <div className="arlo_tm_skills_wrap">
                  <div className="container">
                    <div className="inner_wrap">
                      <div className="leftbox">
                        <div className="arlo_tm_mini_title_holder">
                          <h4>Back-end Skills</h4>
                        </div>
                        <p>On the back-end, I leverage logic-based languages to handle complex functionalities and use tools like SQL to store and manage data efficiently.<br/><br/>Git helps me track and preserve project versions, ensuring smooth collaboration across teams.<br/><br/>For API documentation and management, Swagger allows me to maintain organized endpoints, ensuring integration for development teams.</p>
                      </div>
                      <div className="rightbox">
                        <div className="progress_bar_wrap_total">
                          <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                          <div className="flex-container">

                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />   
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />       
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" />    
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            {/* ----- end skill_1----- */}
              </div>
        </>
    );
    }
export default Skill;