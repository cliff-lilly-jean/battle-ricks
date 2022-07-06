import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../data/cpu-player-names-list.json';

const Field = () => {

 const [gameDeck, setGameDeck] = useState([]);
 const [playerDeck, setPlayerDeck] = useState([]);
 const [cpuDeck, setCpuDeck] = useState([]);
 const [playerHand, setPlayerHand] = useState([]);
 const [cpuHand, setCpuHand] = useState();


 useEffect(() => {
  // setPlayerDeck(createADeck(characters, amountToCutForDeck));
  // setCpuDeck(createADeck(characters, amountToCutForHand));

  // Create the Hand from cards in the Deck
  // setPlayerHand(createPlayersHand, amountToCutForHand);

 }, []);


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

 // Setup Players
 // const user = prompt();
 const user = 'Cliff';

 const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
 const cpu = cpuUserNames.names[randomCharacterNumberForCpu];


 return (
  <div>
   <Side typeOfPlayer={cpu} />
   <Side typeOfPlayer={user} />
  </div>
 );
};

export default Field;