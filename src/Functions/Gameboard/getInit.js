import determineInitialTurn from './determineInitialTurn';
import getGameState from './getGameState';

// Used to begin/populate the game and it's data
const init = (gameState, turn) => {
    getGameState(gameState);
    determineInitialTurn(turn);
    // TODO: Call a function to get the data from the API
};

export default init;