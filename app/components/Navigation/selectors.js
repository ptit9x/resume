import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the navigation
 */

const selectFixedMenu = state => state.fixedMenu || initialState;

/**
 * Select the fixed menu
 */

const makeSelectFixedMenu = () =>
  createSelector(
    selectFixedMenu,
    navigationState => navigationState.fixedMenu,
  );

export { selectFixedMenu, makeSelectFixedMenu };
