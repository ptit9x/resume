import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <ul className="social">
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-facebook" />
            </Link>
          </li>
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-twitter" />
            </Link>
          </li>
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-linkedin" />
            </Link>
          </li>
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-google-plus" />
            </Link>
          </li>
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-dribbble" />
            </Link>
          </li>
          <li>
            <Link to="/" className="ripple-centered" target="_blank">
              <i className="rsicon rsicon-instagram" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
