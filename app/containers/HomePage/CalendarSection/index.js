import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { makeSelectLocale } from '../../LanguageProvider/selectors';

import messages from './messages';
import './style.css';

function CalendarSection({ locale }) {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => setDate(date);

  return (
    <section id="calendar" className="section section-calendar">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>{txt => txt}</FormattedMessage>{' '}
        </h2>
        <div className="calendar-busy" data-weekstart="monday">
          <div
            className="calendar-today"
            style={{
              backgroundImage: 'url("img/uploads/rs-calendar-cover.jpg")',
            }}
          >
            <div className="valign-outer">
              <div className="valign-middle">
                <div className="valign-inner">
                  <div className="date">
                    <span className="day">{date.getDate()}</span>
                    <span className="month">
                      <FormattedMessage {...messages[moment(date).format('MMM')]}>{txt => txt}</FormattedMessage>{' '}
                    </span>
                  </div>
                  <div className="week-day">
                    <FormattedMessage {...messages[moment(date).format('dddd')]}>{txt => txt}</FormattedMessage>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-cont">
            <Calendar
              onChange={onChange}
              value={date}
              locale={locale}
            />
            <div className="calendar-busy-note">
              <FormattedMessage {...messages.busyNote}>{txt => txt}</FormattedMessage>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

CalendarSection.propTypes = {
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale }),
);


export default connect(
  mapStateToProps,
)(CalendarSection);
