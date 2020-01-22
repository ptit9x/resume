import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Nagivation from '../Navigation';
import { changeMobileNavOpen } from '../Navigation/actions';
import { makeSelectMobileNavOpen } from '../Navigation/selectors';

function MobileNav({ mobileNavOpen, onChangeMobileNavOpen }) {
  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="btn-mobile mobile-nav-close"
        onClick={() => onChangeMobileNavOpen(!mobileNavOpen)}
      >
        <i className="rsicon rsicon-close" />
      </button>
      <div className="mobile-nav-inner">
        <div style={{ maxHeight: '879px' }}>
          <div style={{ position: 'relative', top: 0, left: 0 }}>
            <nav id="mobile-nav" className="nav">
              <Nagivation />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  mobileNavOpen: PropTypes.bool,
  onChangeMobileNavOpen: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mobileNavOpen: makeSelectMobileNavOpen(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMobileNavOpen: v => dispatch(changeMobileNavOpen(v)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MobileNav);
