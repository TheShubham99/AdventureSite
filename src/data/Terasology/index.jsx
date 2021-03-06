import About from './About';
import Player from './Player';
import Contributor from './Contributor';

export default {
  'user-responses': [
    {
      name: 'What is Terasology? 🧐',
      child: About,
    },
    {
      name: '🎮 Just tell me about playing Terasology. 🎮',
      child: Player,
    },
    {
      name: 'I am here to report a bug.',
      link:
        'https://discord.com/channels/270264625419911192/713903952764207164',
    },
    {
      name: '💻 I wish to Contribute / Fix bugs. 💻',
      child: Contributor,
    },
  ],
  'gooey-response': {
    gooey: 'What about Terasology?',
  },
};
