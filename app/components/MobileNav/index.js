import React from 'react';
import Nagivation from '../Navigation';

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
              <Nagivation />
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
