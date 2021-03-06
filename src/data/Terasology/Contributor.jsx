import ContributionResources from '../ContributionResources';
import CoreGame from './Core Game';
import Artist from './Artist';
import Documentation from './Documentation';
import UI from './UI/UI';

export default {
  'user-responses': [
    {
      name: 'Show me the prerequisites and resources. ',
      child: ContributionResources,
    },
    {
      name: 'How to find and fix bugs?',
      //temp
      child: {
        'user-responses': [{ name: 'oops.' }],
        'gooey-response': { gooey: 'Working..' },
      },
    },
    {
      name: 'I wish to explore other contribution domains.',
      child: {
        'user-responses': [
          {
            name: 'I wish to work on the core Game Dev ☕',
            child: CoreGame,
          },
          {
            name: 'I want to make mods.',
            child: Artist,
          },
          {
            name: 'I wish to contribute with Translations and Documentation.',
            child: Documentation,
          },
          {
            name: 'I wish to contribute in Game UI.',
            child: UI,
          },
        ],
        'gooey-response': {
          gooey: 'Where do you wish to contribute?',
        },
      },
    },
  ],
  'gooey-response': {
    gooey: 'Here are some contribution areas..',
  },
};
