const MobileMenu = () => {
    return (
        <>
         <div className="arlo_tm_mobile_header_wrap">
          <div className="main_wrap">
            <div className="logo">
              <a href="index.html"><img src="img/logo/mobile_logo.png" alt="mobile_logo" /></a>
            </div>
            <div className="arlo_tm_trigger">
              <div className="hamburger hamburger--collapse-r">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_mobile_menu_wrap">
               <div className="mob_menu">
              <ul className="anchor_nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        </>
    );
    }
export default MobileMenu;