/*
 * Section HomePage -> Skills Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Skills';

export default defineMessages({
  skill: {
    id: `${scope}.skill`,
    defaultMessage: 'Profestional Skill',
  },
  office: {
    id: `${scope}.office`,
    defaultMessage: 'Office',
  },
  english: {
    id: `${scope}.english`,
    defaultMessage: 'English',
  },
  agile: {
    id: `${scope}.agile`,
    defaultMessage: 'Agile and Scrum',
  },
  leadership: {
    id: `${scope}.leadership`,
    defaultMessage: 'Leadership',
  },
  resolving: {
    id: `${scope}.resolving`,
    defaultMessage: 'Resolving Problem',
  },
  teamwork: {
    id: `${scope}.teamwork`,
    defaultMessage: 'Teamwork',
  }
});
