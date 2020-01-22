import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Interests() {
  return (
    <section id="interests" className="section section-interests">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>
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
              <i className="map-icon map-icon-walking" />
              <FormattedMessage {...messages.walking} />
            </li>
            <li>
              <i className="map-icon map-icon-movie-theater" />
              <FormattedMessage {...messages.movie} />
            </li>
            <li>
              <i className="map-icon map-icon-book-store" />
              <FormattedMessage {...messages.reading} />
            </li>
            <li>
              <i className="map-icon map-icon-cafe" />
              <FormattedMessage {...messages.cafe} />
            </li>
            <li>
              <i className="map-icon map-icon-travel-agency" />
              <FormattedMessage {...messages.travel} />
            </li>
            <li>
              <i className="map-icon map-icon-audio-description" />
              <FormattedMessage {...messages.music} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Interests;
