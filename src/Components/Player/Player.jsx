import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import Deck from '../Deck/Deck';

const Player = () => {

 // The Player component has a Deck.

 //  * Properties
 // The Player component has a health point stat.
 const [healthPoints, setHealthPoints] = useState(8000);

 // The Player component has a Deck.
 const [deck, setDeck] = useState('');

 // The Player component can be a user of computer player.
 const [isUser, setIsUser] = useState(false);

 // The Player component has a name.
 const [playerName, setPlayerName] = useState('');



 // * Methods
 // The Player can draw from the Deck
 const drawACard = () => {
  // Take a card from the top of the Deck
  // Place a card from the Deck to the Board
 };

 // The health point state can be subtracted from
 const calculateHealthPoints = () => {
  // Get ATK
 };


 return (
  <Deck />
 );
};

export default Player;