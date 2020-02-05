/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import MobileNav from 'components/MobileNav';
import Footer from 'components/Footer';
import ScrollTop from 'components/ScrollTop';
import OperationPanel from 'components/OperationPanel';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectMobileNavOpen } from '../../components/Navigation/selectors';
import { makeSelectActiveColor, makeSelectToggleBackground } from '../../components/OperationPanel/selectors';

export function App({
  mobileNavMenu,
  activeColor,
  backgroundHeader,
}) {
  return (
    <div
      className={`home ${ mobileNavMenu ? 'mobile-nav-opened' : '' } theme-color-${activeColor || ''} ${backgroundHeader ? 'header-has-img' : ''} theme-skin-light`}
    >
      <Helmet
        titleTemplate="%s - My Résumé"
        defaultTitle="React.js This is all about me"
      >
        <meta name="description" content="This is all about me" />
      </Helmet>
      <MobileNav />
      <div className="sidebar sidebar-fixed" />
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollTop />
      <OperationPanel />
    </div>
  );
}

App.propTypes = {
  mobileNavMenu: PropTypes.bool,
  activeColor: PropTypes.string,
  backgroundHeader: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  mobileNavMenu: makeSelectMobileNavOpen(),
  activeColor: makeSelectActiveColor(),
  backgroundHeader: makeSelectToggleBackground(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(App);
