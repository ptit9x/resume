import React from 'react';

function Education() {
  return (
    <section id="education" className="section section-education">
      <div className="animate-up">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div
            className="timeline-bar"
            style={{ top: '80px', height: '418px' }}
          />
          <div className="timeline-inner clearfix" style={{ height: '590px' }}>
            <div
              className="timeline-box timeline-box-compact timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '0px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">
                  <span>2012 - 2014</span>
                </div>
                <h3>Master of Information Technology</h3>
                <h4>MIT&amp;T</h4>
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
                  <span>2008 - 2012</span>
                </div>
                <h3>Bachelor Computer Engineering</h3>
                <h4>Harwarg Universitey</h4>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-compact timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '197px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">
                  <span>2007 - 2008</span>
                </div>
                <h3>Certificate for courses of Computer Science</h3>
                <h4>Stanfoorb Universitey</h4>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-compact timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '267px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">
                  <span>2007 - 2008</span>
                </div>
                <h3>1 week Courses of Information Systems</h3>
                <h4>Oxforz Universitey</h4>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-compact timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '418px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">
                  <span>2006 - 2007</span>
                </div>
                <h3>Software Engineering</h3>
                <h4>Sordonne University</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
