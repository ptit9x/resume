import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Education() {
  return (
    <section id="education" className="section section-education">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="timeline">
          <div
            className="timeline-bar"
            style={{ top: '80px', height: '250px' }}
          />
          <div className="timeline-inner clearfix" style={{ height: '270px' }}>
            <div
              className="timeline-box timeline-box-compact timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '0px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">
                  <span>2014 - 2016</span>
                </div>
                <h3>
                  <FormattedMessage {...messages.masterSchool}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </h3>
                <h4>
                  <FormattedMessage {...messages.masterMajor}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </h4>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-compact timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '70px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">
                  <span>2009 - 2014</span>
                </div>
                <h3>
                  <FormattedMessage {...messages.universitySchool}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </h3>
                <h4>
                  <FormattedMessage {...messages.universityMajor}>
                    {txt => txt}
                  </FormattedMessage>{' '}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
