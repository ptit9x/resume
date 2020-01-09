/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  skills: {
    id: `${scope}.skills`,
    defaultMessage: 'Skills',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'Portfolio',
  },
  experience: {
    id: `${scope}.experience`,
    defaultMessage: 'Experience',
  },
  references: {
    id: `${scope}.references`,
    defaultMessage: 'References',
  },
  calendar: {
    id: `${scope}.calendar`,
    defaultMessage: 'Calendar',
  },
  blog: {
    id: `${scope}.blog`,
    defaultMessage: 'Blog',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
});
