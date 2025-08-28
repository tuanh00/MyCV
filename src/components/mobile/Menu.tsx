import React, { useState } from 'react';
import { GrReactjs } from "react-icons/gr";

const MobileMenu = () => {

  const [activeTab, setActiveTab] = useState<string>('home');
  const [isOpen, setIsOpen] = useState(false);

    const style = {
        overflow: "hidden",
        display: isOpen ? 'block' : 'none',
        transition: "2s"
    };

  const handleClickTab = (tab: string, event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
      setActiveTab(tab);
  
      const section = document.querySelector(`#${tab}`);
        if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          window.location.hash = tab;
        }, 1000)
        }
  }

    return (
        <>
         <div className="arlo_tm_mobile_header_wrap">
          <div className="main_wrap">
            <div className="logo">
              {/* <a href="#"><img src={imgMobileLogo} alt="mobile_logo" /></a> */}
              <a href="#"><GrReactjs /></a>
            </div>
            <div className="arlo_tm_trigger ">
                        <div
                            className={isOpen ?
                                "hamburger hamburger--collapse-r is-active"
                                : "hamburger hamburger--collapse-r"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner " onClick={() => {
                                    setIsOpen(prev => !prev)
                                }}></div>
                            </div>
                        </div>
                    </div>
          </div>
          <div className="arlo_tm_mobile_menu_wrap" style={style}>
               <div className="mob_menu">
              <ul className="anchor_nav">
              <li><a 
                      href="#home" className={activeTab === 'home' ? "active" : ""}
                      onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', event)}>
                        Home</a>
                  </li>
                  <li><a 
                      href="#about" className={activeTab === 'about' ? "active" : ""} 
                        onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', event)}>
                          About</a>
                  </li>
                  <li><a 
                        href="#skills" className={activeTab === 'skills' ? "active" : ""}
                        onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skills', event)}>
                        Skills</a>
                  </li>
                  <li><a href="#projects" className={activeTab === 'projects' ? "active" : ""}
                        onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('projects', event)}>
                        Projects</a>
                  </li>
                  <li><a 
                      href="#certifications" className={activeTab === 'certifications' ? "active" : ""}
                      onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('certifications', event)}>
                        Certifications</a>
                  </li>
                  <li><a 
                      href="#contact" className={activeTab === 'contact' ? "active" : ""}
                      onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', event)}>
                        Contact</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    );
    }
export default MobileMenu;