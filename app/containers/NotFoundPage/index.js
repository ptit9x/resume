/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-404">
      <h2>
        4<span>0</span>4
      </h2>
      <p>Ooops! This page doesn't even exist</p>
      <Link className="btn btn-lg btn-border" to="/">
        Go To The Homepage?
      </Link>
    </div>
  );
}
