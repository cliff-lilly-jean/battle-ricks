import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';
import Card from '../Card/Card';
import './Player.scss';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';

const Player = ({ player, playerDeck, playerHand, playerField, playerGraveyard, playerLp }) => {

   // The deck is an array of Card Components
   const [deck, setDeck] = useState([]);

   // The hand is an array of Card Components
   const [hand, setHand] = useState([]);

   // The fieldCards is an array of Card Components
   const [fieldCards, setFieldCards] = useState([]);

   // The graveYard is an array of Card Components
   const [graveYard, setGraveYard] = useState([]);


   useEffect(() => {

      const handCards = [{ "face": "good" }, { "face": "left" }, { "face": "right" }, { "face": "a" }, { "face": "c" },];
      const fieldDeckCards = [["field", "cards", "deck"]];
      const graveYardCards = [["graveyard", "cards", "in", "deck"]];


      setDeck(playerDeck);
      setHand(playerHand);
      setFieldCards(playerField);
      setGraveYard(playerGraveyard);


   }, [deck, hand, graveYard, fieldCards]);


   return (

      <div className='player'>
         {player.type == "cpu" ? <div className='flip player-description'>{`${player.name}  ${playerLp}`}</div> : <div className='player-description'>{`${player.name}  ${playerLp}`}</div>}
         <div className="player-wrapper">
            {/* Graveyard */}
            <div className='graveyard'>
               {player.type == "cpu" ? <div className='flip'>{graveYard.length}</div> : <div className='cards-in-deck'>{graveYard.length}</div>}
               <Deck deckCards={graveYard} />
               {/* {console.log(playerDeck)} */}
            </div>
            {/* Field */}
            <div className='field'>
               {hand.map((card, index) => {
                  return <Deck key={index} deckCards={fieldCards} />;
               })}
            </div>
            {/* Deck */}
            <div className='deck'>
               {player.type == "cpu" ? <div className='flip'>{deck.length}</div> : <div className='cards-in-deck'>{deck.length}</div>}
               <Deck deckCards={deck} />
               {/*  */}
            </div>
         </div>
         {/* Hand */}
         <div className='hand'>
            {hand.map((card, index) => {
               return <Deck key={index} deckCards={hand} />;
            })}
         </div>
      </div >
   );
};

export default Player;