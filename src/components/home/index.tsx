import { Link } from "react-router-dom";
import { FC } from "react";
import { TypeAnimation } from "./typeanimation";
import milutinImage from "../../assets/images/unnamed.png"
export const LeftPart: FC = () => {
  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo" data-type="text">
          <Link to="/">
            <h3>MILUTIN</h3>
          </Link>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recentwork">Recent Work</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            &copy; 2024 <br />
            Created by Milutin Stefanovic
          </p>
        </div>
      </div>
    </div>
  );
};

const RightPart: FC = () => {
  return (
    <div className="rightpart">
      <div className="rightpart_in">
        <div id="home" className="kioto_tm_section animated">
          <div className="container">
            <div className="kioto_tm_home">
              <div className="left">
                <span className="name">// Milutin Stefanovic</span>
                <h3>Software Developer And</h3>
                <h3 className="job">
                  <span className="cd-headline clip">
                    <span className="cd-words-wrapper">
                      <b className="is-visible"> Web Nomad</b>
                      <b> Analyzer</b>
                      <b> Freelancer</b>
                    </span>
                  </span>
                </h3>
                <div className="kioto_tm_button transition_link">
                  <Link to="/contact" className="tm_text_effect">
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="abs_image">
                  <img src={milutinImage} alt="" />
                  <div
                    className="main ripple"
                    data-img-url={"3-4.png"}
                    id="ripple"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: FC = () => {
  return (
    <div className="home-page">
      <LeftPart />
      <RightPart />
      <TypeAnimation />
    </div>
  );
};

export default Home;
