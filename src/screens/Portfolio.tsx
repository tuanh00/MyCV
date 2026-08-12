import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import { FloatButton } from "antd";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <LeftPart />

      <main className="portfolio__content">
        <RightPart />

        <FloatButton.BackTop
          tooltip={<div>Scroll to top</div>}
        />
      </main>
    </div>
  );
};

export default Portfolio;