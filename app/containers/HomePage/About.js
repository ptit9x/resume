import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/images/uploads/profile.png';

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="animate-up animated">
        <div className="section-box">
          <div className="profile">
            <div className="row">
              <div className="col-xs-5">
                <div className="profile-photo">
                  <img src={photo} alt="Do Ngoc Huynh" />
                </div>
              </div>
              <div className="col-xs-7">
                <div className="profile-info">
                  <div className="profile-preword">
                    <span>Hello</span>
                  </div>
                  <h1 className="profile-title">
                    <span>I'm</span> Do Ngoc Huynh
                  </h1>
                  <h2 className="profile-position">Full Stack Developer</h2>
                </div>
                <ul className="profile-list">
                  <li className="clearfix">
                    <strong className="title">Age</strong>
                    <span className="cont">29</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">Address</strong>
                    <span className="cont">
                      FLC My Dinh, 36 Pham Hung, My Dinh 2, Ha Noi
                    </span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">E-mail</strong>
                    <span className="cont">
                      <Link to="mailto:robertsmith@company.com">
                        ngochuynh1991@gmail.com
                      </Link>
                    </span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">Phone</strong>
                    <span className="cont">
                      <Link to="tel:+12562548456">+84 374 539 633</Link>
                    </span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">
                      <span className="button">On Vacation</span>
                    </strong>
                    <span className="cont">
                      <i className="rsicon rsicon-calendar" />
                      till March 25, 2016
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-social">
            <ul className="social">
              <li>
                <Link
                  className="ripple-centered"
                  to="https://www.facebook.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-facebook" />
                </Link>
              </li>
              <li>
                <Link
                  className="ripple-centered"
                  to="https://twitter.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  className="ripple-centered"
                  to="https://www.linkedin.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-linkedin" />
                </Link>
              </li>
              <li>
                <Link
                  className="ripple-centered"
                  to="https://plus.google.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-google-plus" />
                </Link>
              </li>
              <li>
                <Link
                  className="ripple-centered"
                  to="https://dribbble.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-dribbble" />
                </Link>
              </li>
              <li>
                <Link
                  className="ripple-centered"
                  to="https://www.instagram.com"
                  target="_blank"
                >
                  <i className="rsicon rsicon-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-txt-btn">
          <p>
            <Link
              className="btn btn-lg btn-border ripple"
              target="_blank"
              to="http://dev.novembit.com/rs_card/wp-content/uploads/2015/11/test-1.pdf"
            >
              Download Resume
            </Link>
          </p>
          <p>
            Hello! I’m Do Ngoc Huynh. Senior Web Developer specializing in front
            end development. Experienced with all stages of the development
            cycle for dynamic web projects. Well-versed in numerous programming
            languages including JavaScript, SQL, and C. Stng background in
            project management and customer relations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
