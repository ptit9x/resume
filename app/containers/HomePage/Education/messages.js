/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Education';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Education',
  },
  masterSchool: {
    id: `${scope}.masterSchool`,
    defaultMessage:
      'Master of Post & Telecommunications Institute of Technology',
  },
  masterMajor: {
    id: `${scope}.masterMajor`,
    defaultMessage: 'Computer Science',
  },
  universitySchool: {
    id: `${scope}.universitySchool`,
    defaultMessage:
      'Student of Post & Telecommunications Institute of Technology',
  },
  universityMajor: {
    id: `${scope}.universityMajor`,
    defaultMessage: 'Software Technology',
  },
});
