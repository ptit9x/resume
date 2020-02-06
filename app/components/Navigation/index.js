import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-scroll';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { changeFixedMenu, changeMobileNavOpen } from './actions';
import { makeSelectFixedMenu } from './selectors';
import messages from './messages';

const key = 'navigation';

export function Navigation({
  fixedMenu,
  onChangeFixedMenu,
  onChangeFixedMenuScrollTop,
}) {
  useInjectReducer({ key, reducer });
  const offset = -50;
  const duration = 300;
  return (
    <ul className="clearfix">
      <li>
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
          ignoreCancelEvents={false}
        >
          <FormattedMessage {...messages.about}>{txt => txt}</FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="skills"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.skills}>{txt => txt}</FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="portfolio"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.portfolio}>
            {txt => txt}
          </FormattedMessage>{' '}
          <span />
        </Link>{' '}
      </li>
      <li>
        <Link
          activeClass="active"
          to="experience"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.experience}>
            {txt => txt}
          </FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="references"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.references}>
            {txt => txt}
          </FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="calendar"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.calendar}>
            {txt => txt}
          </FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="blog"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.blog}>{txt => txt}</FormattedMessage>{' '}
          <span />
        </Link>
      </li>
      <li>
        <Link
          activeClass="contact"
          to="contact"
          spy
          smooth
          hashSpy
          offset={offset}
          duration={duration}
          onSetActive={() => onChangeFixedMenu(fixedMenu)}
          onSetInactive={onChangeFixedMenuScrollTop}
        >
          <FormattedMessage {...messages.contact}>
            {txt => txt}
          </FormattedMessage>{' '}
          <span />
        </Link>
      </li>
    </ul>
  );
}

Navigation.propTypes = {
  fixedMenu: PropTypes.bool,
  onChangeFixedMenu: PropTypes.func.isRequired,
  onChangeFixedMenuScrollTop: PropTypes.func.isRequired,
  mobileNavOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  fixedMenu: makeSelectFixedMenu(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFixedMenu: () => dispatch(changeMobileNavOpen(false)), // hide menu mobile when click to menu mobile
    onChangeFixedMenuScrollTop: () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          return dispatch(changeFixedMenu(false));
        }
        return dispatch(changeFixedMenu(true));
      });
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Navigation);
