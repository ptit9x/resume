/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollTop from 'components/ScrollTop';
import OperationPanel from 'components/OperationPanel';

export default function App() {
  return (
    <div className="home header-has-img">
      <Helmet
        titleTemplate="%s - My Résumé"
        defaultTitle="React.js This is all about me"
      >
        <meta name="description" content="This is all about me" />
      </Helmet>
      <div className="mobile-nav" />
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
