/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Contact';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Contact',
  },
  labelName: {
    id: `${scope}.labelName`,
    defaultMessage: 'Name',
  },
  labelAddress: {
    id: `${scope}.labelAddress`,
    defaultMessage: 'Address',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  labelPhone: {
    id: `${scope}.labelPhone`,
    defaultMessage: 'Phone',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'description',
  },
  subject: {
    id: `${scope}.subject`,
    defaultMessage: 'subject',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'message',
  },
});
