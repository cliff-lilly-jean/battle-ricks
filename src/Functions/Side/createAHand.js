

const createAHand = (deck, amountToCutForHand) => {
    let cutDeck = deck.splice(0, amountToCutForHand);
    return cutDeck;
};

export default createAHand;