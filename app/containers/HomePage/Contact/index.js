import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import messages from './messages';
import FormInput from '../../../components/FormInput';

function Contact({ google }) {
  const profile = {
    age: new Date().getFullYear() - 1991,
    address: 'FLC My Dinh, 36 Pham Hung, My Dinh 2, Ha Noi',
    email: 'ngochuynh1991@gmail.com',
    phone: '+84374539633',
    textPhone: '+84 37 453 9633',
  };

  const isRequired = (value) => {
    return value ? '' : 'Please fill out this field.';
  }
  const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      return 'Please fill a valid email.';
    }
    return '';
  }

  const [state, setState] = useState({
    name: {
      used: false,
      value: '',
      errorMessage: '',
      validates: [isRequired],
    },
    email: {
      used: false,
      value: '',
      errorMessage: '',
      validates: [isRequired, isEmail],
    },
    subject: {
      used: false,
      value: '',
      errorMessage: '',
      validates: [isRequired],
    },
    message: {
      used: false,
      value: '',
      errorMessage: '',
      validates: [isRequired],
    }
  });

  const onUpdateState = (name, value) => {
    const cloneState = Object.assign({}, state);
    cloneState[name] = value;
    setState(cloneState);
  }

  const onSubmitForm = () => {
    const cloneState = Object.assign({}, state);
    const data = {};
    const keys = Object.keys(state);
    let countError = 0;

    keys.forEach((key) => {
      // validate
      const { validates, value } = cloneState[key];
      const errors = validates.map(validate => validate(value)).filter(v => v.length > 0);
      if (errors && errors.length > 0) {
        countError++;
      }
      cloneState[key].errorMessage = errors && errors.length > 0 ? errors.join(', ') : '';
      // get data to submit
      data[key] = cloneState[key].value;
    });
    setState(cloneState);
    if (countError <= 0) {
      console.log(data, 'call API or write file');
    }
  }

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
              <form className="contactForm">
                <FormInput
                  className="contact-name"
                  name="name"
                  data={state["name"]}
                  formatMessage={messages.labelName}
                  onUpdateState={onUpdateState}
                />
                <FormInput
                  className="contact-email"
                  name="email"
                  data={state["email"]}
                  formatMessage={messages.labelEmail}
                  onUpdateState={onUpdateState}
                />
                <FormInput
                  className="contact-subject"
                  name="subject"
                  data={state["subject"]}
                  formatMessage={messages.subject}
                  onUpdateState={onUpdateState}
                />
                <FormInput
                  className="contact-message"
                  name="message"
                  data={state["message"]}
                  formatMessage={messages.message}
                  onUpdateState={onUpdateState}
                  textarea={true}
                />
                <span className="btn-outer btn-primary-outer ripple">
                  <input
                    className="contact-submit btn btn-lg btn-primary"
                    type="button"
                    defaultValue="Send"
                    onClick={onSubmitForm}
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
              <div id="map">
                <Map
                  google={google}
                  zoom={15}
                  style={{ width: '100%', height: '100%' }}
                  initialCenter={{ lat: 21.0272591, lng: 105.7762073 }}
                >
                  <Marker
                    name={'Dolores park'}
                    position={{ lat: 21.0272591, lng: 105.7762073 }} />
                  <Marker />
                </Map>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCyEOVGDcJhJX9_5LPohsj_7NKws4ad0Q'
})(Contact);
