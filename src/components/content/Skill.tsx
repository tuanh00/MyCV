import ProgressBar from "@ramonak/react-progress-bar";
import 'devicon/devicon.min.css';
 
const Skill = () => {
    return (
        <>
        <div className="arlo_tm_section" id="skills">
            {/* -----skill_1----- */}
                <div className="arlo_tm_skills_wrap">
                  <div className="container">
                    <div className="inner_wrap">
                      <div className="leftbox">
                        <div className="arlo_tm_mini_title_holder">
                          <h4>Front-end Skills</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                      </div>
                      <div className="rightbox">
                        <div className="progress_bar_wrap_total">
                          <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                            <div className="flex-container">
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html_icon"/>
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                              <img className="responsive-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
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