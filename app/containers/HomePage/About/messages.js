/*
 * Section HomePage -> About Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.About';

export default defineMessages({
  hello: {
    id: `${scope}.hello`,
    defaultMessage: 'Hello',
  },
  iam: {
    id: `${scope}.iam`,
    defaultMessage: `I'm`,
  },
  myname: {
    id: `${scope}.myname`,
    defaultMessage: 'Do Ngoc Huynh',
  },
  position: {
    id: `${scope}.position`,
    defaultMessage: 'Full Stack Developer',
  },
  labelAge: {
    id: `${scope}.labelAge`,
    defaultMessage: 'Age',
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
  downloadcv: {
    id: `${scope}.downloadcv`,
    defaultMessage: 'Download Resume',
  },
  introduction: {
    id: `${scope}.introduction`,
    defaultMessage: '',
  }
});
