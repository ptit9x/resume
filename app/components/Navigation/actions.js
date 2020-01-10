/*
 *
 * Navigation actions
 *
 */

import { FIXED_NAVIGATION } from './constants';

export function changeFixedMenu(fixed) {
  return {
    type: FIXED_NAVIGATION,
    fixedMenu: fixed,
  };
}
