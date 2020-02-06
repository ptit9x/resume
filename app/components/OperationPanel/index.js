import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { changeThemeColor, toggleBackGround, changeThemeSkin } from './actions';
import {
  makeSelectActiveColor,
  makeSelectToggleBackground,
  makeSelectThemeSkin,
} from './selectors';

import messages from './messages';

const key = 'operation';

function OperationPanel({
  activeColor,
  onChangeThemeColor,
  showBackground,
  toggleSetBackground,
  themeSkin,
  onChangeThemeSkin,
}) {
  useInjectReducer({ key, reducer });
  const colors = [
    'e83b35',
    'e8676b',
    'ec407a',
    '8e45ae',
    '673bb7',
    '3f51b5',
    '5d6cc1',
    '1a77d4',
    '07aaf5',
    '56c8d2',
    '27a79a',
    '07cb79',
    '8dc24c',
    'ffde03',
    'fec107',
    'ff9801',
    'd1a3a6',
    'ffcfd3',
    'fbbdd4',
    'e2bfe7',
    'c7ccea',
    '83d5fb',
    'b4e1dc',
    'a7d9a8',
  ];
  const [showSetting, setShowSetting] = useState(false);
  const toggleSetting = () => {
    setShowSetting(!showSetting);
  };
  return (
    <div
      id="op-panel"
      style={{
        left: showSetting ? '0px' : '-252px',
        top: '100px',
        width: '250px',
        height: 'auto',
      }}
    >
      <div id="op-panel-btn" role="button" tabIndex="0" onClick={toggleSetting}>
        <i className="rsicon rsicon-settings" />
      </div>
      <div className="op-content">
        <div className="op-section">
          <div className="op-theme-skin op-btn-group">
            <button
              type="button"
              className="op-btn"
              onClick={() => onChangeThemeSkin('light')}
            >
              <FormattedMessage {...messages.light} />
            </button>
            <button
              type="button"
              className="op-btn"
              onClick={() => onChangeThemeSkin('dark')}
            >
              <FormattedMessage {...messages.dark} />
            </button>
            <div className="op-btn-bar">
              <span
                className="op-btn-bar-line"
                style={{ left: themeSkin === 'light' ? '0px' : '100px' }}
              />
            </div>
          </div>
        </div>
        <div className="op-section">
          <div className="op-theme-colors">
            {colors.map(v => (
              <button
                type="button"
                className={
                  activeColor === v
                    ? 'ripple-centered active'
                    : 'ripple-centered'
                }
                data-color={v}
                key={v}
                onClick={() => onChangeThemeColor(v)}
              >
                <i className="rsicon rsicon-check" />
              </button>
            ))}
          </div>
        </div>
        <div className="op-section">
          <div
            className="op-theme-headimg"
            role="button"
            tabIndex="0"
            onClick={() => toggleSetBackground(!showBackground)}
          >
            <button
              type="button"
              className={
                showBackground ? 'op-btn-check active' : 'op-btn-check'
              }
            >
              <span className="op-check">
                <i className="rsicon rsicon-check" />
              </span>{' '}
              <FormattedMessage {...messages.showBgImage} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

OperationPanel.propTypes = {
  activeColor: PropTypes.string,
  onChangeThemeColor: PropTypes.func.isRequired,
  showBackground: PropTypes.bool,
  toggleSetBackground: PropTypes.func.isRequired,
  themeSkin: PropTypes.string,
  onChangeThemeSkin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  activeColor: makeSelectActiveColor(),
  showBackground: makeSelectToggleBackground(),
  themeSkin: makeSelectThemeSkin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeThemeColor: v => dispatch(changeThemeColor(v)),
    toggleSetBackground: v => dispatch(toggleBackGround(v)),
    onChangeThemeSkin: v => dispatch(changeThemeSkin(v)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(OperationPanel);
