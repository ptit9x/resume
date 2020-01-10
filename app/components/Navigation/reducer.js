/*
 *
 * Navigation reducer
 *
 */

import produce from 'immer';

import { FIXED_NAVIGATION } from './constants';

export const initialState = {
  fixedMenu: true,
};

/* eslint-disable default-case, no-param-reassign */
const navigationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FIXED_NAVIGATION:
        console.log(`Reducer ${action.type} OLD: ${action.fixedMenu}`);
        draft.fixedMenu = true;
        break;
    }
  });

export default navigationReducer;
