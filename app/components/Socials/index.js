import React from 'react';

function Socials() {
  return (
    <ul className="social">
      <li>
        <a
          className="ripple-centered"
          href="https://www.facebook.com/dongochuynh9x"
          target="_blank"
        >
          <i className="rsicon rsicon-facebook" />
        </a>
      </li>
      <li>
        <a
          className="ripple-centered"
          href="https://twitter.com/ptit9x"
          target="_blank"
        >
          <i className="rsicon rsicon-twitter" />
        </a>
      </li>
      <li>
        <a
          className="ripple-centered"
          href="https://www.linkedin.com/in/huynh-do-ngoc-36164172/"
          target="_blank"
        >
          <i className="rsicon rsicon-linkedin" />
        </a>
      </li>
      <li>
        <a
          className="ripple-centered"
          href="https://huynhdn.com"
          target="_blank"
        >
          <i className="rsicon rsicon-dribbble" />
        </a>
      </li>
      <li>
        <a
          className="ripple-centered"
          href="https://github.com/ptit9x"
          target="_blank"
        >
          <i className="rsicon rsicon-github" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
