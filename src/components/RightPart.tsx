import About from "./content/About";
import Contact from "./content/Contact";
import HomeCv from "./content/HomeCv";
import Project from "./content/Project";
import Skill from "./content/Skill";
import Certification from "./content/Certification";

const RightPart = () => {
    return(
        <>
          <HomeCv />
          <About />
          <Skill />
          <Project />
          <Certification />
          <Contact />
        </>
    );
}
export default RightPart;