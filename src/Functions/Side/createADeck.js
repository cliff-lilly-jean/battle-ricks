const createADeck = (deck, amountToCutForDeck) => {
    let cutDeck = deck.splice(0, amountToCutForDeck);
    return cutDeck;
};

export default createADeck;