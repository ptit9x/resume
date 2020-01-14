/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.NotFoundPage';

export default defineMessages({
  content: {
    id: `${scope}.content`,
    defaultMessage: 'Ooops! This page doesn\'t even exist',
  },
  gohome: {
    id: `${scope}.gohome`,
    defaultMessage: 'Go To The Homepage?',
  },
});
