import { useEffect, useState } from "react";
import './App.css';

function App() {

 const [characterNames, setCharacterNames] = useState(null);

 useEffect(() => {
  // generate 10 random numbers
  let endNumber = 10;
  let randomNum;
  // add them to an array
  let allNumbers = [];
  for (let i = 0; i < endNumber; i++) {
   randomNum = Math.floor(Math.random() * 826);
   allNumbers.push(randomNum);
  }
  console.log(allNumbers);
  // use the array to get those characters from the api
  // fetch the character names
  fetch(`https://rickandmortyapi.com/api/character/${allNumbers}`).then(res => console.log(res.json()));
  // add them to the json file
 }, []);

 return (
  <div className="App bg-[#f8f8f8] h-screen">
   <h1>Battle Ricks</h1>
  </div>
 );
}

export default App;

/*
Data needed to be tracked:
  * winner
     -- the player or cpu string name
  * turn
     -- whose turn it is currently, player or cpu
  * player's deck
     -- array of the cards left to be used
  * player's hand
     -- array of cards that can be placed onto the board
  * player's health
     -- starting at 8000
  * player's field cards
     -- an array of max 8 cards
     -- each card can be in attack or defense
     -- each card can be face down or face up
  * player's graveyard
     -- an array of cards that have been destroyed
  * cpu's deck
     -- array of the cards left to be used
  * cpu's hand
     -- array of cards that can be placed onto the board
  * cpu's health
     -- starting at 8000
  * cpu's field cards
     -- an array of max 8 cards
     -- each card can be in attack or defense
     -- each card can be face down or face up
  * cpu's graveyard
     -- an array of cards that have been destroyed



Game process (Game play loop)
  * drawing cards
    -- pull from deck into hand
  * placing cards
    -- push from hand to field cards
      -- the card is placed face down, and can be in attack or defense
  * attacking cards
    -- choose one card from field cards
      -- if the card is facedown, flip it
    -- choose one card from opponent's field cards
      -- if the card is in defense, those points are used
      -- if the card is in attack, those points are used
    -- subtract the attack points of the attacker from either the defense or attack points of the opponent
      -- if the amount is negative, subtract the points from the attackers health
        -- remove the attackers card from the filed and place in the graveyard
      -- if the amount is positive, subtract the points from the opponent
        -- remove the opponents card from the filed and place in the graveyard
  * ending the game
    -- when a player's health reaches 0
      -- game over











*/
