import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Skills() {
  const skills = {
    office: '70%',
    english: '55%',
    agile: '60%',
    leadership: '70%',
    resolving: '80%',
    teamwork: '70%',
  };
  return (
    <section id="skills" className="section section-skills">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.skill}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="section-box">
          <div className="row">
            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.office}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.office}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.office}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.english}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.english}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.english}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.agile}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.agile}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.agile}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.leadership}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.leadership}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.leadership}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.resolving}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.resolving}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.resolving}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">
                    <FormattedMessage {...messages.teamwork}>
                      {txt => txt}
                    </FormattedMessage>{' '}
                  </span>
                  <span className="bar-value">{skills.teamwork}</span>
                </div>
                <div className="bar-line">
                  <span
                    className="bar-fill"
                    style={{ width: `${skills.teamwork}` }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
