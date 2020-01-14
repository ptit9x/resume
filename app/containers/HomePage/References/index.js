import React from 'react';

function References() {
  return (
    <section id="references" className="section section-references">
      <div className="animate-up">
        <h2 className="section-title">References</h2>
        <div className="section-box">
          <div
            className="bx-wrapper"
            style={{ maxWidth: '100%', margin: '0px auto' }}
          >
            <div
              className="bx-viewport"
              style={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                height: '282px',
              }}
            >
              <ul
                className="ref-slider"
                style={{
                  width: '515%',
                  position: 'relative',
                  transitionDuration: '0s',
                  transform: 'translate3d(-810px, 0px, 0px)',
                }}
              >
                <li
                  style={{
                    float: 'left',
                    listStyle: 'none',
                    position: 'relative',
                    width: '810px',
                  }}
                  className="bx-clone"
                >
                  <div className="ref-box">
                    <div className="person-speech">
                      <p>
                        I have known Do Ngoc Huynh for 10 years as web developer
                      </p>
                    </div>
                    <div className="person-info clearfix">
                      <img
                        className="person-img"
                        src="img/uploads/rs-avatar-60x60.jpg"
                        alt="Headshot"
                      />
                      <div className="person-name-title">
                        <span className="person-name">Alexander Jokovich</span>
                        <span className="person-title">Modern LLC , HR</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    float: 'left',
                    listStyle: 'none',
                    position: 'relative',
                    width: '810px',
                  }}
                >
                  <div className="ref-box">
                    <div className="person-speech">
                      <p>
                        I confirm that I have dealt with New Company Ltd since
                        1998.
                      </p>
                    </div>
                    <div className="person-info clearfix">
                      <img
                        className="person-img"
                        src="img/uploads/rs-avatar-60x60.jpg"
                        alt="Headshot"
                      />
                      <div className="person-name-title">
                        <span className="person-name">Alexander Jokovich</span>
                        <span className="person-title">Modern LLC , HR</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    float: 'left',
                    listStyle: 'none',
                    position: 'relative',
                    width: '810px',
                  }}
                >
                  <div className="ref-box">
                    <div className="person-speech">
                      <p>
                        I confirm that New Company Ltd has been a customer of
                        ours since
                      </p>
                    </div>
                    <div className="person-info clearfix">
                      <img
                        className="person-img"
                        src="img/uploads/rs-avatar-60x60.jpg"
                        alt="Headshot"
                      />
                      <div className="person-name-title">
                        <span className="person-name">Alexander Jokovich</span>
                        <span className="person-title">Modern LLC , HR</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    float: 'left',
                    listStyle: 'none',
                    position: 'relative',
                    width: '810px',
                  }}
                >
                  <div className="ref-box">
                    <div className="person-speech">
                      <p>
                        I have known Do Ngoc Huynh for 10 years as web
                        developer.
                      </p>
                    </div>
                    <div className="person-info clearfix">
                      <img
                        className="person-img"
                        src="img/uploads/rs-avatar-60x60.jpg"
                        alt="Headshot"
                      />
                      <div className="person-name-title">
                        <span className="person-name">Alexander Jokovich</span>
                        <span className="person-title">Modern LLC , HR</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    float: 'left',
                    listStyle: 'none',
                    position: 'relative',
                    width: '810px',
                  }}
                  className="bx-clone"
                >
                  <div className="ref-box">
                    <div className="person-speech">
                      <p>
                        I confirm that I have dealt with New Company Ltd since
                        1998.
                      </p>
                    </div>
                    <div className="person-info clearfix">
                      <img
                        className="person-img"
                        src="img/uploads/rs-avatar-60x60.jpg"
                        alt="Headshot"
                      />
                      <div className="person-name-title">
                        <span className="person-name">Alexander Jokovich</span>
                        <span className="person-title">Modern LLC , HR</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bx-controls" />
          </div>
          <div className="ref-slider-nav">
            <span id="ref-slider-prev" className="slider-prev">
              <a className="bx-next">
                <i className="rsicon rsicon-chevron_right" />
              </a>
            </span>
            <span id="ref-slider-next" className="slider-next">
              <a className="bx-prev">
                <i className="rsicon rsicon-chevron_left" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
