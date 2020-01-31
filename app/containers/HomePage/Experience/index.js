import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './style.css';

function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.workExperience}>
            {txt => txt}
          </FormattedMessage>{' '}
        </h2>
        <div className="timeline">
          <div className="timeline-bar" />
          <div className="timeline-inner clearfix">
            <div className="timeline-box timeline-box-left timeline-box5">
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2019 - Now</div>
                <h3>Hybrid Technologies</h3>
                <h4>Full Stack developer</h4>
                <p>
                  <FormattedMessage {...messages.hybridDescription}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </p>
              </div>
            </div>
            <div className="timeline-box timeline-box-right timeline-box4">
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">2018 - 2019</div>
                <h3>Sendo (sendo.vn)</h3>
                <h4>Senior Developer & Leader</h4>
                <p>
                  <FormattedMessage {...messages.sendoDescription}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </p>
              </div>
            </div>
            <div className="timeline-box timeline-box-left timeline-box3">
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2016 - 2018</div>
                <h3>FPT Software</h3>
                <h4>Web Developer</h4>
                <p>
                  <FormattedMessage {...messages.fptDescription}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </p>
              </div>
            </div>
            <div className="timeline-box timeline-box-right timeline-box2">
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">2016</div>
                <h3>EyePlus</h3>
                <h4>Web Developer</h4>
                <p>
                  <FormattedMessage {...messages.eyePlusDescription}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </p>
              </div>
            </div>
            <div className="timeline-box timeline-box-left timeline-box1">
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2014 - 2016</div>
                <h3>CYA Soft</h3>
                <h4>Web Developer</h4>
                <p>
                  <FormattedMessage {...messages.cyaDescription}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
