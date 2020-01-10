import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollTop() {
  const backToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <a
        className="btn-scroll-top"
        onClick={backToTop}
        style={{ display: 'inline' }}
      >
        <i className="rsicon rsicon-arrow-up" />
      </a>
      <div id="overlay" />
    </div>
  );
}

export default ScrollTop;
