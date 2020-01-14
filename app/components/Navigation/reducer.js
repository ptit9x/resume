/*
 *
 * Navigation reducer
 *
 */

import produce from 'immer';

import {
  FIXED_NAVIGATION,
  MOBILE_NAVIGATION_OPEN,
} from './constants';

export const initialState = {
  fixedMenu: false,
  mobileNavOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const navigationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FIXED_NAVIGATION:
        draft.fixedMenu = action.fixedMenu;
        break;
      case MOBILE_NAVIGATION_OPEN:
        draft.mobileNavOpen = action.mobileNavOpen;
    }
  });

export default navigationReducer;
