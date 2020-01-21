import React from 'react';

function Calendar() {
  return (
    <section id="calendar" className="section section-calendar">
      <div className="animate-up">
        <h2 className="section-title">
          <FormattedMessage {...messages.title}>
            {txt => txt}
          </FormattedMessage>{' '}
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
                    <span className="day">2</span>
                    <span className="month">Jan</span>
                  </div>
                  <div className="week-day">Thursday</div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-cont">
            <div className="calendar-header">
              <div className="calendar-nav">
                <span className="active-date">
                  <span className="active-month">January</span>
                  <span className="active-year">2020</span>
                </span>
                <a className="calendar-prev ripple-centered" title="Prev">
                  <i className="rsicon rsicon-chevron_left" />
                </a>
                <a className="calendar-next ripple-centered" title="Next">
                  <i className="rsicon rsicon-chevron_right" />
                </a>
              </div>
            </div>
            <table className="calendar-body">
              <thead className="calendar-thead">
                <tr>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody className="calendar-tbody">
                <tr>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-current-month">
                    <span>1</span>
                  </td>
                  <td className="calendar-current-month">
                    <span className="current-day">2</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>3</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>4</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>5</span>
                  </td>
                </tr>
                <tr>
                  <td className="calendar-current-month">
                    <span>6</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>7</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>8</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>9</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>10</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>11</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>12</span>
                  </td>
                </tr>
                <tr>
                  <td className="calendar-current-month">
                    <span>13</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>14</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>15</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>16</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>17</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>18</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>19</span>
                  </td>
                </tr>
                <tr>
                  <td className="calendar-current-month">
                    <span>20</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>21</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>22</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>23</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>24</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>25</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>26</span>
                  </td>
                </tr>
                <tr>
                  <td className="calendar-current-month">
                    <span>27</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>28</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>29</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>30</span>
                  </td>
                  <td className="calendar-current-month">
                    <span>31</span>
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                </tr>
                <tr>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                  <td className="calendar-other-month">
                    <span />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="calendar-busy-note">
              Sorry. I'm not available on those days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
