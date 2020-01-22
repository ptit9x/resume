import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

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
          <div
            className="timeline-bar"
            style={{ top: '80px', height: '860px' }}
          />
          <div className="timeline-inner clearfix" style={{ height: '999px' }}>
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '0px' }}
            >
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
            <div
              className="timeline-box timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '70px' }}
            >
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
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '375px' }}
            >
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
            <div
              className="timeline-box timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '600px' }}
            >
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
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '730px' }}
            >
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
