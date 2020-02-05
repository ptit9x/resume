/*
 *
 * OperationPanel reducer
 *
 */

import produce from 'immer';
import { CHANGE_THEME_COLOR, TOGGLE_BACKGROUND_HEADER, LIGHT_THEME_SKIN } from './constants';

export const initialState = {
  activeColor: "07cb79",
  showBackground: true,
  lightTheneSkin: true,
};

/* eslint-disable default-case, no-param-reassign */
const operationPanelReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_THEME_COLOR:
        draft.activeColor = action.activeColor;
        break;
      case TOGGLE_BACKGROUND_HEADER:
        draft.showBackground = action.showBackground;
        break;
      case LIGHT_THEME_SKIN:
        draft.lightTheneSkin = action.lightTheneSkin;
        break;
    }
  });

export default operationPanelReducer;