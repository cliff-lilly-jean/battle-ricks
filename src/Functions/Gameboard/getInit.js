import determineInitialTurn from '../../Functions/Gameboard/determineInitialTurn';

// Used to begin/populate the game and it's data
const init = (gameState, turn) => {
    gameState(false);
    determineInitialTurn(turn);
    // TODO: Call a function to get the data from the API
};

export default init;