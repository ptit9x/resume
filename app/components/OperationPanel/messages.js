/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.OperationPanel';

export default defineMessages({
  light: {
    id: `${scope}.light`,
    defaultMessage: 'light',
  },
  dark: {
    id: `${scope}.dark`,
    defaultMessage: 'dark',
  },
  showBgImage: {
    id: `${scope}.showBgImage`,
    defaultMessage: 'show Image',
  },
});
