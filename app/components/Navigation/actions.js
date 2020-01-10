/*
 *
 * Navigation actions
 *
 */

import { FIXED_NAVIGATION } from './constants';

export function changeFixedMenu(fixed) {
  console.log(fixed, "fixeddddddddddddddddd");
  return {
    type: FIXED_NAVIGATION,
    fixedMenu: fixed,
  };
}
