/*
 *
 * OperationPanel actions
 *
 */

import { CHANGE_THEME_COLOR, TOGGLE_BACKGROUND_HEADER, LIGHT_THEME_SKIN } from './constants';

export function changeThemeColor(color) {
  return {
    type: CHANGE_THEME_COLOR,
    activeColor: color,
  };
}

export function toggleBackGround(v) {
  return {
    type: TOGGLE_BACKGROUND_HEADER,
    showBackground: v,
  }
}

export function changeThemeSkin(v) {
  return {
    type: LIGHT_THEME_SKIN,
    themeSkin: v,
  }
}

