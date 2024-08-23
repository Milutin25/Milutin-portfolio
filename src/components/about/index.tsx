import { LeftPart } from "../home";
import { Progress } from "../../assets/progressbar";
import { FC } from "react";
import slavoImage from "../../assets/images/slavo.jpg";
import natasaImage from "../../assets/images/natasa.jpg";
import zikaImage from "../../assets/images/zika.jpg";
import twitterImage from "../../assets/images/twitter.svg";
import instagramImage from "../../assets/images/instagram.svg";
import facebookImage from "../../assets/images/facebook.svg";
import tiktokImage from "../../assets/images/tik-tok.svg";
import { DownloadButton} from "./button";

export const About: FC = () => {
  return (
    <>
      <LeftPart />

      <div id="about" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_about">
            <div className="kioto_tm_biography">
              <div className="biography">
                <div className="kioto_tm_title">
                  <span>// Biography</span>
                </div>
                <div className="text">
                  <p>
                    Hi, my name is Milutin Stefanovic and I began using React
                    since 2017. I’ve spent most of my waking hours for the last
                    few years programming and operating React sites. One of my
                    specialties is taking an idea from scratch and creating a
                    full-fledged platform. I go beyond to produce sites with a
                    unique, outstanding, contemporary look-and-feel.
                  </p>
                </div>
                <div className="kioto_tm_button">
                 <DownloadButton />
                </div>
              </div>
              <div className="personal_details">
                <div className="kioto_tm_title">
                  <span>// Personal Details</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <span>Name:</span>
                      <span>Milutin Stefanovic</span>
                    </li>
                    <li>
                      <span>Address:</span>
                      <span>9446 Bay Colony Dr, Des Plaines, IL</span>
                    </li>
                    <li>
                      <span>Study:</span>
                      <span>University of Belgrade, Serbia</span>
                    </li>
                    <li>
                      <span>Mail:</span>
                      <span>
                        <a
                          className="line_effect"
                          href="mailto:milustefano25@gmail.com"
                        >
                          milustefano25@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <span>
                        <a className="line_effect" href="tel:847-805-9655">
                          847-805-9655
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>Freelance:</span>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="kioto_tm_skills">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Programming Skills</span>
                </div>
                <div className="kioto_progress">
                  <Progress value={95} color="#767676" label="HTML & CSS" />
                  <Progress value={90} color="#767676" label="JavaScript" />
                  <Progress value={90} color="#767676" label="React" />
                </div>
              </div>
              <div className="right">
                <div className="kioto_tm_title">
                  <span>// Language Skills</span>
                </div>
                <div className="kioto_progress">
                  <Progress value={95} color="#767676" label="English" />
                  <Progress value={100} color="#767676" label="Serbian" />
                </div>
              </div>
            </div>
            <div className="kioto_tm_features">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Interests</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <span>
                        <label>&#10003;</label> Writing Clean Codes
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Web Design
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Swimming
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Watching Cinema
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>&#10003;</label> Reading IT Books
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right"></div>
            </div>
            <div className="kioto_tm_timeline">
              <div className="left">
                <div className="kioto_tm_title">
                  <span>// Education</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>University of Belgrade</h3>
                          <span>Physical Education</span>
                          </div>
                          <div className="year">
                            <span>2001 - 2005</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>IT Academy</h3>
                          <span>Code Expert</span>
                        </div>
                        <div className="year">
                          <span>2018 - 2020</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>Technology School</h3>
                          <span>Computer Engineering</span>
                        </div>
                        <div className="year">
                          <span>2016 - 2018</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="kioto_tm_title">
                  <span>// Experience</span>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="info">
                          <h3>Prototype.NEXT</h3>
                          <span>Software Developer</span>
                        </div>
                        <div className="year">
                          <span>2022 - now</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="kioto_tm_counter">
              <div className="kioto_tm_title">
                <span>// Fun Facts</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>100+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>35k+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>4</h3>
                      <span>Completed Marathons</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>100%</h3>
                      <span>Satisfaction Guarantee</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="kioto_tm_members">
              <div className="kioto_tm_title">
                <span>// Team Members</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <img src={slavoImage} alt="Slavo Popovic" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        ></div>
                      </div>
                      <div className="details">
                        <h3 className="name">Slavo Popovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={tiktokImage}
                                  alt="Tik-tok"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={twitterImage}
                                  alt="Twitter"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/StB7JEqVEyCTHuMG/?mibextid=LQQJ4d">
                                <img
                                  className="svg"
                                  src={facebookImage}
                                  alt="Facebook"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/slavo_3?igsh=a2xzdDVyd3pnaDZw">
                                <img
                                  className="svg"
                                  src={instagramImage}
                                  alt="Instagram"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <img src={zikaImage} alt="Marko Zivkovic" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        ></div>
                      </div>
                      <div className="details">
                        <h3 className="name">Marko Zivkovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={tiktokImage}
                                  alt="Tik-tok"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={twitterImage}
                                  alt="Twitter"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/MjLSFpjszLZ8oaHv/?mibextid=LQQJ4d">
                                <img
                                  className="svg"
                                  src={facebookImage}
                                  alt="Facebook"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/markozivkovic1982?igsh=MWN5a21hbGl1b3BzNw==">
                                <img
                                  className="svg"
                                  src={instagramImage}
                                  alt="Instagram"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="abs_image">
                        <img src={natasaImage} alt="Natasa Stefanovic" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        ></div>
                      </div>
                      <div className="details">
                        <h3 className="name">Natasa Stefanovic</h3>
                        <span className="job">Software Developer</span>
                        <div className="kioto_tm_social">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={tiktokImage}
                                  alt="Tik-tok"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="svg"
                                  src={twitterImage}
                                  alt="Twitter"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/share/6E2BAACqnYahYkYk/?mibextid=LQQJ4d">
                                <img
                                  className="svg"
                                  src={facebookImage}
                                  alt="Facebook"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/natalystefanovic?igsh=NzJ2YWZrMWEwdzY1">
                                <img
                                  className="svg"
                                  src={instagramImage}
                                  alt="Instagram"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


