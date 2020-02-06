import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.HomePage.Interests';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Interests',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'description',
  },
  walking: {
    id: `${scope}.walking`,
    defaultMessage: 'Walking',
  },
  movie: {
    id: `${scope}.movie`,
    defaultMessage: 'Watch Movies',
  },
  reading: {
    id: `${scope}.reading`,
    defaultMessage: 'Reading',
  },
  cafe: {
    id: `${scope}.cafe`,
    defaultMessage: 'cafe',
  },
  travel: {
    id: `${scope}.travel`,
    defaultMessage: 'Traveling',
  },
  music: {
    id: `${scope}.music`,
    defaultMessage: 'Listen to Music',
  },
});
