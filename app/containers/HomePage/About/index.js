import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Socials from '../../../components/Socials';

import photo from '../../../assets/images/uploads/profile.png';
import messages from './messages';

function About() {
  const profile = {
    age: new Date().getFullYear() - 1991,
    address: 'FLC My Dinh, 36 Pham Hung, My Dinh 2, Ha Noi',
    email: 'ngochuynh1991@gmail.com',
    phone: '+84374539633',
    textPhone: '+84 37 453 9633',
  };

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
                    <FormattedMessage {...messages.hello} />
                  </div>
                  <h1 className="profile-title">
                    <FormattedMessage {...messages.iam} />
                    <FormattedMessage {...messages.myname}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </h1>
                  <h2 className="profile-position">
                    <FormattedMessage {...messages.position}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </h2>
                </div>
                <ul className="profile-list">
                  <li className="clearfix">
                    <strong className="title">
                      <FormattedMessage {...messages.labelAge}>
                        {txt => txt}
                      </FormattedMessage>{' '}
                    </strong>
                    <span className="cont">{profile.age}</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">
                      <FormattedMessage {...messages.labelAddress}>
                        {txt => txt}
                      </FormattedMessage>{' '}
                    </strong>
                    <span className="cont">{profile.address}</span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">
                      <FormattedMessage {...messages.labelEmail}>
                        {txt => txt}
                      </FormattedMessage>{' '}
                    </strong>
                    <span className="cont">
                      <Link to={`mailto:${profile.email}`}>
                        {profile.email}
                      </Link>
                    </span>
                  </li>
                  <li className="clearfix">
                    <strong className="title">
                      <FormattedMessage {...messages.labelPhone}>
                        {txt => txt}
                      </FormattedMessage>{' '}
                    </strong>
                    <span className="cont">
                      <a href={`tel:${profile.email}`}>{profile.textPhone}</a>
                    </span>
                  </li>
                  {/* <li className="clearfix">
                    <strong className="title">
                      <span className="button">On Vacation</span>
                    </strong>
                    <span className="cont">
                      <i className="rsicon rsicon-calendar" />
                      till March 25, 2016
                    </span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-social">
            <Socials />
          </div>
        </div>
        <div className="section-txt-btn">
          <p>
            <Link className="btn btn-lg btn-border ripple" to="/">
              <FormattedMessage {...messages.downloadcv}>
                {txt => txt}
              </FormattedMessage>{' '}
            </Link>
          </p>
          <p>
            <FormattedMessage {...messages.introduction}>
              {txt => txt}
            </FormattedMessage>{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
