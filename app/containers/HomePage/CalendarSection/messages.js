/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Calendar';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Availability Calendar',
  },
  busyNote: {
    id: `${scope}.busyNote`,
    defaultMessage: 'Sorry. I\'m not available on those days',
  },
});
