import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Interests() {
  return (
    <section id="interests" className="section section-interests">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.myInterest}>
            {txt => txt}
          </FormattedMessage>{' '}
        </h2>
        <div className="section-box">
          <p>
          <FormattedMessage {...messages.description}>
            {txt => txt}
          </FormattedMessage>{' '}
          </p>
          <ul className="interests-list">
            <li>
              <i className="map-icon map-icon-bicycling" />
              <span style={{ left: '7px' }}>Guitar</span>
            </li>
            <li>
              <i className="map-icon map-icon-movie-theater" />
              <span style={{ left: '-6.5px' }}>Watch Movies</span>
            </li>
            <li>
              <i className="map-icon map-icon-ice-skating" />
              <span style={{ left: '10.5px' }}>Shopping</span>
            </li>
            <li>
              <i className="map-icon map-icon-shopping-mall" />
              <span style={{ left: '5px' }}>Shopping</span>
            </li>
            <li>
              <i className="map-icon map-icon-tennis" />
              <span style={{ left: '-7.5px' }}>Playing Tennis</span>
            </li>
            <li>
              <i className="map-icon map-icon-bowling-alley" />
              <span style={{ left: '-11px' }}>Playing Bowling</span>
            </li>
            <li>
              <i className="map-icon map-icon-swimming" />
              <span style={{ left: '2.5px' }}>Swimming</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Interests;
