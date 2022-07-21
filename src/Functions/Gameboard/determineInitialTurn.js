const determineInitialTurn = (turnState) => {
    let randomNumberToDetermineInitialTurn = Math.floor(Math.random() * 40);
    if (randomNumberToDetermineInitialTurn % 2 == 0) {
        turnState('player');
    } else {
        turnState('cpu');
    }
};

export default determineInitialTurn;