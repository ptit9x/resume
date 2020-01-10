/*
 *
 * Navigation reducer
 *
 */

import produce from 'immer';

import { FIXED_NAVIGATION } from './constants';

export const initialState = {
  fixedMenu: false,
};

/* eslint-disable default-case, no-param-reassign */
const navigationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FIXED_NAVIGATION:
        draft.fixedMenu = action.fixedMenu;
        break;
    }
  });

export default navigationReducer;
