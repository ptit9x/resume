/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Experience';

export default defineMessages({
  title: {
    id: `${scope}.experience`,
    defaultMessage: 'Experience',
  },
  workExperience: {
    id: `${scope}.workExperience`,
    defaultMessage: 'Work Experience',
  },
  hybridDescription: {
    id: `${scope}.hybridDescription`,
    defaultMessage: '',
  },
  sendoDescription: {
    id: `${scope}.sendoDescription`,
    defaultMessage: '',
  },
  fptDescription: {
    id: `${scope}.fptDescription`,
    defaultMessage: '',
  },
  eyePlusDescription: {
    id: `${scope}.eyePlusDescription`,
    defaultMessage: '',
  },
  cyaDescription: {
    id: `${scope}.cyaDescription`,
    defaultMessage: '',
  },
});
