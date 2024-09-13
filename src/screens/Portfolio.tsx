import LeftPart from "../components/LeftPart";
import MobileMenu from "../components/mobile/Menu";
import Preloader from "../components/Preloader";
import RightPart from "../components/RightPart";

const Portfolio = () => {
    return(
        <div className="arlo_tm_wrapper_all">
    
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close"><a href="#"></a></span>
        </div>
        
       {/* <!-- PRELOADER --> */}
        <Preloader/>
       {/* <!-- /PRELOADER --> */}
        
       {/* <!-- MOBILE MENU --> */}
       <MobileMenu/>
       {/* <!-- /MOBILE MENU --> */}
        
        {/* <!-- CONTENT --> */}
        <div className="arlo_tm_content">
          
         {/* <!-- LEFTPART --> */}
        <LeftPart/>
         {/* <!-- /LEFTPART --> */}
          
         {/* <!-- RIGHTPART --> */}
         <RightPart/>
         {/* <!-- /RIGHTPART --> */}
          
          <a className="arlo_tm_totop" href="#"></a> 
          
        </div>
      </div>
    );
}

export default Portfolio;