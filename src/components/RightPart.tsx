import About from "./content/About";
import Contact from "./content/Contact";
import HomeCv from "./content/HomeCv";
import Project from "./content/Project";
import Skill from "./content/Skill";

interface IProps {
  hideLeftPart: boolean;
  sethideLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
    return(
        <>
            <div className={props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
            <div className="rightpart_inner">
             {/* <!-- HOMECV --> */}
              <HomeCv/>
            {/* <!-- HOMECV --> */}

             {/* <!-- ABOUT --> */}
             <About/>
             {/* <!-- /ABOUT --> */}
              
             {/* <!-- SKILLS --> */}
              <Skill/>
              {/*{/* <!-- /SKILLS --> */} 
              
             {/* <!-- PROJECTS --> */}
            <Project/>
             {/* <!-- PROJECTS --> */}
          
                
             {/* <!-- CONTACT & FOOTER --> */}
            <Contact/>
             {/* <!-- /CONTACT & FOOTER --> */}
              
            </div>
          </div>
        </>
    );
}
export default RightPart;