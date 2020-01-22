import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function Contact() {
  const profile = {
    age: new Date().getFullYear() - 1991,
    address: 'FLC My Dinh, 36 Pham Hung, My Dinh 2, Ha Noi',
    email: 'ngochuynh1991@gmail.com',
    phone: '+84374539633',
    textPhone: '+84 37 453 9633',
  };
  return (
    <section id="contact" className="section section-contact">
      <div className="animate-up">
        <h2 className="section-title">
        <FormattedMessage {...messages.title}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="row">
          <div className="col-sm-6">
            <div
              className="section-box contact-form"
              style={{ minHeight: '488px' }}
            >
              <h3><FormattedMessage {...messages.description}>{txt => txt}</FormattedMessage>{' '}</h3>
              <form
                className="contactForm"
                action="php/contact_form.php"
                method="post"
              >
                <div className="input-field">
                  <input className="contact-name" type="text" name="name" />
                  <span className="line" />
                  <label><FormattedMessage {...messages.labelName}>{txt => txt}</FormattedMessage>{' '}</label>
                </div>
                <div className="input-field">
                  <input className="contact-email" type="email" name="email" />
                  <span className="line" />
                  <label><FormattedMessage {...messages.labelAddress}>{txt => txt}</FormattedMessage>{' '}</label>
                </div>
                <div className="input-field">
                  <input
                    className="contact-subject"
                    type="text"
                    name="subject"
                  />
                  <span className="line" />
                  <label><FormattedMessage {...messages.subject}>{txt => txt}</FormattedMessage>{' '}</label>
                </div>
                <div className="input-field">
                  <textarea
                    className="contact-message"
                    rows={4}
                    name="message"
                    defaultValue=""
                  />
                  <span className="line" />
                  <label><FormattedMessage {...messages.message}>{txt => txt}</FormattedMessage>{' '}</label>
                </div>
                <span className="btn-outer btn-primary-outer ripple">
                  <input
                    className="contact-submit btn btn-lg btn-primary"
                    type="submit"
                    defaultValue="Send"
                  />
                </span>
                <div className="contact-response" />
              </form>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="section-box contact-info has-map"
              style={{ minHeight: '488px' }}
            >
              <ul className="contact-list">
                <li className="clearfix">
                  <strong><FormattedMessage {...messages.labelAddress}>{txt => txt}</FormattedMessage>{' '}</strong>
                  <span>{profile.address}</span>
                </li>
                <li className="clearfix">
                  <strong><FormattedMessage {...messages.labelPhone}>{txt => txt}</FormattedMessage>{' '}</strong>
                  <span>
                    <a href={'tel:' + profile.phone}>{profile.textPhone}</a>
                  </span>
                </li>
                <li className="clearfix">
                  <strong><FormattedMessage {...messages.labelEmail}>{txt => txt}</FormattedMessage>{' '}</strong>
                  <span>
                    <a href={'mailto:' + profile.email}>{profile.email}</a>
                  </span>
                </li>
              </ul>
            </div>
            <div id="map" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
