import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="animate-up">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div
            className="timeline-bar"
            style={{ top: '80px', height: '666px' }}
          />
          <div className="timeline-inner clearfix" style={{ height: '999px' }}>
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '0px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2014 - 2016</div>
                <h3>PINEAPPLE</h3>
                <h4>Full Stack developer</h4>
                <p>
                  Worked as part of a multi-disciplinary team, carrying out
                  ad-hoc tasks as requested by the IT Manager. Had a specific
                  brief to ensure the websites build for customer’s precisely
                  matched their requirements.developers and marketers.
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
                <div className="date">2011 - 2014</div>
                <h3>MACROSOOFT</h3>
                <h4>Web Developer</h4>
                <p>
                  I was responsible for working on a range of projects,
                  designing appealing websites and interacting on a daily basis
                  with graphic designers, back-end developers and marketers.
                </p>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '334px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2003 - 2006</div>
                <h3>JOOJLE</h3>
                <h4>Systems Analyst / Web Developer</h4>
                <p>
                  Rebuilt and enhanced existing ASP B2C site with ASP.NET 2.0
                  Framework and tools. Technology consists of ASP.NET 2.0 (C#),
                  IIS, Microsoft SQL Server 2005, Stored Procedures &amp; PayPal
                  Instant Payment Notification.
                </p>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '380px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">2004 - 2008</div>
                <h3>IBBBM</h3>
                <h4>Webmaster / Web Developer</h4>
                <p>
                  Developed, managed, operated and promoted an Internet
                  business.Handled customer support issues.Planned and managed
                  business finances.
                </p>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-left"
              style={{ position: 'absolute', left: '0px', top: '668px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-right">
                <span className="arrow" />
                <div className="date">2003 - 2004</div>
                <h3>HEADBOOK</h3>
                <h4>Intern</h4>
                <p>
                  This was beginning of my career. Developed, managed, operated
                  and promoted an Internet business.Handled customer support
                  issues.
                </p>
              </div>
            </div>
            <div
              className="timeline-box timeline-box-right"
              style={{ position: 'absolute', right: '0px', top: '666px' }}
            >
              <span className="dot" />
              <div className="timeline-box-inner animate-left">
                <span className="arrow" />
                <div className="date">2000 - 2003</div>
                <h3>UBEAR</h3>
                <h4>Taxi Driver</h4>
                <p>
                  Driving from point A to point B and if necessary to point C
                  and sometimes even to point R and point S. I was known as
                  experienced driver. Once my passenger who was a web developer
                  told me about his job and I have made my decision at that
                  moment to became a developer.
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
