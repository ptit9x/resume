import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './header.css';

function Header() {
  const offset = -50;
  const duration = 300;
  const [fixedMenu, setFixedMenu] = useState(false);
  const scrollToTop = () => scroll.scrollToTop();
  const handleSetActive = () => setFixedMenu(true);
  const handleSetInactive = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setFixedMenu(false);
      }
    });
  };
  return (
    <header className="header">
      <div className="head-bg" />
      <div className={`head-bar animated ${fixedMenu ? 'head-sticky' : ''}`}>
        <div className="head-bar-inner">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <a className="logo" onClick={scrollToTop}>
                <span>RS</span>card
              </a>
            </div>
            <div className="col-sm-9 col-xs-6">
              <div className="nav-wrap">
                <nav id="nav" className="nav">
                  <ul className="clearfix">
                    <li>
                      <Link
                        activeClass="active"
                        to="about"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        ignoreCancelEvents={false}
                      >
                        About <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="skills"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                      >
                        Skills <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="portfolio"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                      >
                        Portfolio <span />
                      </Link>{' '}
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="experience"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                      >
                        Experience <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="references"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                      >
                        References <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="calendar"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                      >
                        Calendar <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="blog"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                      >
                        Blog <span />
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="contact"
                        to="contact"
                        spy
                        smooth
                        hashSpy
                        offset={offset}
                        duration={duration}
                        onSetActive={handleSetActive}
                      >
                        Contact <span />
                        <span />
                      </Link>
                    </li>
                  </ul>
                </nav>
                <button type="button" className="btn-mobile btn-mobile-nav">Menu</button>
                <button type="button" className="btn-sidebar btn-sidebar-open">
                  <i className="rsicon rsicon-menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
