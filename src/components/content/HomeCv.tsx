import { TypeAnimation } from "react-type-animation";
import myAvatar from '@/assets/img/hero/img.png'
const HomeCv = () => {
  const handleScrollToAbout = () => {
      const section = document.querySelector("#about")
      if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      
      }
  
}
    return (
        <>
         <div className="arlo_tm_section" id="home">
                <div className="arlo_tm_hero_header_wrap">
                  <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                      <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                      <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                      <div className="inner_content">
                        <div className="image_wrap">
                          <img src={myAvatar} alt="My Avatar" />
                        </div>
                        <div className="name_holder">
                          <h3>Huynh Tu Anh <span>Chau</span></h3>
                        </div>
                        <div className="text_typing">
                          <p>I'm a&nbsp;
                          <TypeAnimation sequence = {[
                            'Full-Stack Developer',
                            2000,
                            'Junior Developer',
                            2000,
                            'Automation Enthusiast',
                            2000,
                          ]}
                          wrapper = "span"
                          cursor = {true}
                          repeat = {Infinity}
                          // style = {{ fontSize: '2em', display: 'inline-block'}}
                          />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                      <a href="#" onClick={(e) => {
                        handleScrollToAbout()
                        e.preventDefault();

                      }}><i className="xcon-angle-double-down"></i></a>
                    </div>
                  </div>
                </div>
              </div>
        </>
    );
    }
export default HomeCv;