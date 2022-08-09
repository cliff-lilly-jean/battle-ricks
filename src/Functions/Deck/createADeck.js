import cardGenderIcons from '../../Data/Card/cardGenderIcons';
import Card from '../../Components/Card/Card';

const createADeck = (deckOfCards) => {
    return deckOfCards.map(card => {

        return <Card cardId={card.id} cardName={card.name} cardSpecies={card.species} cardAttackPoints={card.attack} cardDefensePoints={card.defense} cardStatus={card.status} cardIcon={<img src={cardGenderIcons[card.gender]} alt="Gender icon" width="25" />} cardImage={<img src={card.image} alt={card.name} cardHome={card.location} />} />;

    });
};

export { createADeck, Card };