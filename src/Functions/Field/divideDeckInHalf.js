const divideDeckInHalf = (deck, amountToRemove) => {
    let cutDeck = deck.splice(0, amountToRemove);
    return cutDeck;
};

export default divideDeckInHalf;