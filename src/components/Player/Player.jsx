import React, { useState, useEffect } from 'react';

// data
import characters from '../../data/rick-and-morty-characters.json';

// components
import Card from '../Card/Card';

const Player = ({ player }) => {

 // The deck is an array of Card Components
 const [deck, setDeck] = useState([]);

 // The hand is an array of Card Components
 const [hand, setHand] = useState([]);

 const [lp, setLp] = useState(8000);

 // The fieldCards is an array of Card Components
 const [fieldCards, setFieldCards] = useState([]);

 // The graveYard is an array of Card Components
 const [graveYard, setGraveYard] = useState([]);

 let amountToCutForDeck = 5;
 let amountToCutForHand = 2;

 const createADeck = (deck, amountToCutForDeck) => {
  let cutDeck = deck.splice(0, amountToCutForDeck);
  return cutDeck;
 };

 const createAHand = (deck, amountToCutForHand) => {
  let cutDeck = deck.splice(0, amountToCutForHand);
  return cutDeck;
 };


 // useEffect(() => {
 //  let amountOfCardsToGenerate = 120;
 //  let randomNumber;
 //  let randomNumbersArr = [];
 //  let deck = [];
 //  let apiEndpoint = 'https://rickandmortyapi.com/api/character/';


 //  for (let i = 0; i < amountOfCardsToGenerate; i++) {
 //   randomNumber = Math.floor(Math.random() * 826);
 //   randomNumbersArr.push(randomNumber);
 //  }


 //  fetch(`${apiEndpoint}${randomNumbersArr}`)
 //   .then(res => res.json())
 //   .then(jsonData => {
 //    const amountOfCardsToAddToDeck = 80;

 //    for (let i = 0; i < amountOfCardsToAddToDeck; i++) {
 //     let newCharacterCard = {
 //      id: jsonData[i].id,
 //      name: jsonData[i].name,
 //      species: jsonData[i].species,
 //      status: jsonData[i].status,
 //      image: jsonData[i].image,
 //      gender: jsonData[i].gender,
 //      location: {
 //       name: jsonData[i].location.name,
 //       id: jsonData[i].location.id,
 //       dimension: jsonData[i].location.dimension
 //      }
 //     };
 //     deck.push(newCharacterCard);
 //    }
 //    setGameDeck(deck);
 //   });
 // }, [setGameDeck]);

 /*
TODO: create phases
 - draw phase
 - place card phase
 - attack phase
 - end turn

 TODO: Create actions/methods
  - drawFromDeck
   - pull the first card from deck
   - place the card into hand
  - placeCardOnField
   - let the user cycle through the hand array and select a card at an index
   - place the card on the fieldCards
    - 'faceDown' or 'faceUp' (setFaceDown in the Card component)
    - 'attackMode' or 'defenseMode' (setCardPosition in the Card component)
  - attack
   - check which fieldCards are 'faceUp' and in 'attackMode'
   - add them to a, attackCards array
   - the user selects a card at index in attackCards array
   - the user selects a card at index in the opponent's fieldCards

 */


 useEffect(() => {

  let newDeck = createADeck(characters, amountToCutForDeck);
  let newHand = createAHand(newDeck, amountToCutForHand);

  setDeck(newDeck);
  setHand(newHand);
 }, []);

 return (
  <div>
   <h1>{player}</h1>
   <p><span className='font-bold'>LP:</span> {lp}</p>
   <div><span className='font-bold'>Deck:</span> <Card generatedCard={deck} /></div>
   <div><span className='font-bold'>Field:</span> <Card generatedCard={fieldCards} /></div>
   <div><span className='font-bold'>Hand:</span> <Card generatedCard={hand} /> </div>
   <div><span className='font-bold'>Graveyard:</span> {graveYard.length}</div>
  </div>

 );
};

export default Player;