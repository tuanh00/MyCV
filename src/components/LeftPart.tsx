import desktopLogo from '@/assets/img/logo/atom.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

interface IProps {
    hideLeftPart: boolean;
    sethideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    return(
        <>
          <div className={props.hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
            <div className="leftpart_inner">
              <div className="logo_wrap">
                <a href="#"><img src={desktopLogo} alt="desktop-logo" style={{height: 150, width: 180}} /></a>
              </div>
              <div className="menu_list_wrap">
                <ul className="anchor_nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="leftpart_bottom">
                <div className="social_wrap">
                  <ul>
                    <li>
                        <a href="https://github.com/tuanh00" target="_blank" rel="noopener noreferrer">
                      <FaSquareGithub />
                      </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/huynh-tu-anh-chau-8a4a251a8/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
              className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
              href="#"
              onClick={() => props.sethideLeftPart(!props.hideLeftPart)}>
                <i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
              </a>
            </div>
          </div>
        </>
    );
}
export default LeftPart;