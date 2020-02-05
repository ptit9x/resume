import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the operation panel
 */

const selectOperationPanel = state => state.operation || initialState;

/**
 * Select the fixed menu
 */

const makeSelectActiveColor = () =>
  createSelector(
    selectOperationPanel,
    operationState => operationState.activeColor,
  );

const makeSelectToggleBackground = () =>
  createSelector(
    selectOperationPanel,
    operationState => operationState.showBackground,
  );

export { makeSelectActiveColor, makeSelectToggleBackground };
