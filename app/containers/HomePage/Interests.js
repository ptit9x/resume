import React from 'react';

function Interests() {
  return (
    <section id="interests" className="section section-interests">
      <div className="animate-up">
        <h2 className="section-title">My Interests</h2>
        <div className="section-box">
          <p>
            I have a keen interest in photography. I was vice-president of the
            photography club during my time at university, and during this
            period I organised a number of very successful exhibitions and
            events events both on and off campus.
            <br />I also play the piano to grade 8 standard.
          </p>
          <ul className="interests-list">
            <li>
              <i className="map-icon map-icon-bicycling" />
              <span style={{ left: '7px' }}>Bicycling</span>
            </li>
            <li>
              <i className="map-icon map-icon-movie-theater" />
              <span style={{ left: '-6.5px' }}>Watch Movies</span>
            </li>
            <li>
              <i className="map-icon map-icon-ice-skating" />
              <span style={{ left: '10.5px' }}>Skating</span>
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
