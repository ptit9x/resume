/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound() {
  return (
    <div className="page-404">
      <h2>
        4<span>0</span>4
      </h2>
      <p>
        <FormattedMessage {...messages.content}>{txt => txt}</FormattedMessage>{' '}
      </p>
      <Link className="btn btn-lg btn-border" to="/">
        <FormattedMessage {...messages.gohome}>{txt => txt}</FormattedMessage>{' '}
      </Link>
    </div>
  );
}
