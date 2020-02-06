/*
 *
 * Navigation actions
 *
 */

import { FIXED_NAVIGATION, MOBILE_NAVIGATION_OPEN } from './constants';

export function changeFixedMenu(fixed) {
  return {
    type: FIXED_NAVIGATION,
    fixedMenu: fixed,
  };
}

export function changeMobileNavOpen(mobileNavOpen) {
  return {
    type: MOBILE_NAVIGATION_OPEN,
    mobileNavOpen,
  };
}
