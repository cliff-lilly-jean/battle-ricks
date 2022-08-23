import cpuUserNames from '../Data/cpu-player-names-list.json';
import { randomAiCharacter } from './constants';

let user = {
    name: 'Cliff', // TODO use prompt() when ready for production
    type: 'Human'
};

let ai = {
    name: cpuUserNames.names[randomAiCharacter],
    type: 'Ai'
};

export { user, ai };
