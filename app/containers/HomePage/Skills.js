import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="animate-up">
        <h2 className="section-title">Professional Skills</h2>
        <div className="section-box">
          <div className="row">
            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">Wordpress</span>
                  <span className="bar-value">80%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '51%' }}>
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">JavaScript</span>
                  <span className="bar-value">52%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '67%' }}>
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
                  <span className="bar-title">Drupal</span>
                  <span className="bar-value">61%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '79%' }}>
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">HTML &amp; CSS</span>
                  <span className="bar-value">89%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '67%' }}>
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
                  <span className="bar-title">PHP &amp; MySQL</span>
                  <span className="bar-value">99%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '54%' }}>
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-bar">
                <div className="bar-data">
                  <span className="bar-title">Photoshop</span>
                  <span className="bar-value">97%</span>
                </div>
                <div className="bar-line">
                  <span className="bar-fill" style={{ width: '80%' }}>
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
