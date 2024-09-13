import desktopLogo from '@/assets/img/logo/atom.png'
const LeftPart = () => {
    return(
        <>
          <div className="arlo_tm_leftpart_wrap">
            <div className="leftpart_inner">
              <div className="logo_wrap">
                <a href="#"><img src={desktopLogo} alt="desktop-logo" style={{height: 150, width: 180}} /></a>
              </div>
              <div className="menu_list_wrap">
                <ul className="anchor_nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#services">Projects</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                </ul>
              </div>
              <div className="leftpart_bottom">
                <div className="social_wrap">
                  <ul>
                    <li><a href="#"><i className="xcon-facebook"></i></a></li>
                    <li><a href="#"><i className="xcon-twitter"></i></a></li>
                    <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                    <li><a href="#"><i className="xcon-instagram"></i></a></li>
                    <li><a href="#"><i className="xcon-behance"></i></a></li>
                  </ul>
                </div>
              </div>
              <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
            </div>
          </div>
        </>
    );
}
export default LeftPart;