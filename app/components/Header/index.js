import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Navigation from '../Navigation';
import './header.css';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';
import { changeLocale } from '../../containers/LanguageProvider/actions';
import {
  makeSelectFixedMenu,
  makeSelectMobileNavOpen,
} from '../Navigation/selectors';
import { changeMobileNavOpen } from '../Navigation/actions';

export function Header({
  fixedMenu,
  locale,
  onChangeLocale,
  mobileNavOpen,
  onChangeMobileNavOpen,
}) {
  const scrollToTop = () => scroll.scrollToTop();
  return (
    <header className="header">
      <div className="head-bg" />
      <div className={`head-bar animated ${fixedMenu ? 'head-sticky' : ''}`}>
        <div className="head-bar-inner">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <a className="logo" onClick={scrollToTop} href="/">
                <span>CV</span>HuynhDN
              </a>
            </div>
            <div className="col-sm-9 col-xs-6">
              <div className="nav-wrap">
                <nav id="nav" className="nav">
                  <Navigation />
                </nav>
                <button
                  type="button"
                  className="btn-mobile btn-mobile-nav"
                  onClick={() => onChangeMobileNavOpen(!mobileNavOpen)}
                >
                  Menu
                </button>
                <button
                  type="button"
                  className="btn-primary btn-sidebar-open"
                  onClick={() => onChangeLocale(locale === 'en' ? 'vi' : 'en')}
                >
                  {locale}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  locale: PropTypes.string,
  fixedMenu: PropTypes.bool,
  onChangeLocale: PropTypes.func.isRequired,
  mobileNavOpen: PropTypes.bool,
  onChangeMobileNavOpen: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  fixedMenu: makeSelectFixedMenu(),
  locale: makeSelectLocale(),
  mobileNavOpen: makeSelectMobileNavOpen(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLocale: lang => dispatch(changeLocale(lang)),
    onChangeMobileNavOpen: v => dispatch(changeMobileNavOpen(v)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
