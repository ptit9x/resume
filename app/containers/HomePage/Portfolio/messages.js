/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Portfolio';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Portfolio',
  },
  all: {
    id: `${scope}.all`,
    defaultMessage: 'All',
  },
});
