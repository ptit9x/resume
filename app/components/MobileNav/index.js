import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
  return (
    <div className="mobile-nav">
      <button className="btn-mobile mobile-nav-close">
        <i className="rsicon rsicon-close" />
      </button>
      <div className="mobile-nav-inner mCustomScrollbar _mCS_1 mCS_no_scrollbar">
        <div
          id="mCSB_1"
          className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
          tabIndex={0}
          style={{ maxHeight: '879px' }}
        >
          <div
            id="mCSB_1_container"
            className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
            style={{ position: 'relative', top: 0, left: 0 }}
            dir="ltr"
          >
            <nav id="mobile-nav" className="nav">
              <ul className="clearfix">
                <li className="active">
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li className>
                  <a href="#portfolio">Portfolio</a>{' '}
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li className>
                  <a href="#references">References</a>
                </li>
                <li>
                  <a href="category.html">Blog</a>
                  <ul>
                    <li>
                      <a href="single-image.html">Image Post</a>
                    </li>
                    <li>
                      <a href="single-slider.html">Slider Post</a>
                    </li>
                    <li>
                      <a href="single-video.html">Video Post</a>
                    </li>
                    <li>
                      <a href="single-audio.html">Audio Post</a>
                    </li>
                    <li>
                      <a href="single-vimeo.html">Vimeo Post</a>
                    </li>
                    <li>
                      <a href="single-youtube.html">Youtube Post</a>
                    </li>
                    <li>
                      <a href="single-dailymotion.html">Dailymotion Post</a>
                    </li>
                    <li>
                      <a href="single.html">Without Media Post</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography Page</a>
                    </li>
                    <li>
                      <a href="icons.html">Icons Page</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href="#calendar">
                    Calendar <span />
                  </a>
                </li>
                <li className>
                  <a href="#contact">
                    Contact <span />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="mCSB_1_scrollbar_vertical"
            className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
            style={{ display: 'none' }}
          >
            <div className="mCSB_draggerContainer">
              <div
                id="mCSB_1_dragger_vertical"
                className="mCSB_dragger"
                style={{
                  position: 'absolute',
                  minHeight: '30px',
                  top: '0px',
                  height: '0px',
                }}
                onContextMenu="return false;"
              >
                <div
                  className="mCSB_dragger_bar"
                  style={{ lineHeight: '30px' }}
                />
              </div>
              <div className="mCSB_draggerRail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
