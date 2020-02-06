import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the navigation
 */

const selectNavigation = state => state.navigation || initialState;

/**
 * Select the fixed menu
 */

const makeSelectFixedMenu = () =>
  createSelector(
    selectNavigation,
    navigationState => navigationState.fixedMenu,
  );

const makeSelectMobileNavOpen = () =>
  createSelector(
    selectNavigation,
    navigationState => navigationState.mobileNavOpen,
  );

export { makeSelectFixedMenu, makeSelectMobileNavOpen };
