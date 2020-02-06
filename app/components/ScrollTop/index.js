import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollTop() {
  const backToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <button type="button" className="btn-scroll-top" onClick={backToTop}>
        <i className="rsicon rsicon-arrow-up" />
      </button>
      <div id="overlay" />
    </div>
  );
}

export default ScrollTop;
