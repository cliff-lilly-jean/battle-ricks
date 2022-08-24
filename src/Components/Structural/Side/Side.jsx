import React, { useState, useEffect } from "react";
import Player from "../../Player/Player";

import gamePhase from "../../../Data/Side/gamePhase";
import { lifePoints } from '../../../Data/constants';

const Side = ({ typeOfPlayer, typeOfDeck, typeOfHand, typeOfField, typeOfGraveyard }) => {

  // !Properties
  // phases: draw, place, ..., attack
  const [phase, setPhase] = useState('');
  const [lp, setLp] = useState(lifePoints);

  // !State

  // Set the turn and determine the winning side
  const [turn, setTurn] = useState('');
  const [winner, setWinner] = useState('');

  // !Methods
  // const createDeck = () => {
  //   let newDeck = divideDeckInHalf(typeOfDeck, 5);
  //   setDeck((prevDeck) => newDeck);
  //   console.log(deck);
  // };

  // DECKS
  // let newUserDeck = divideDeckInHalf(gameDeck, amountToRemoveForDeck);
  // let newAiDeck = divideDeckInHalf(gameDeck, amountToRemoveForDeck);



  return (
    <div className="side">
      <Player player={typeOfPlayer} playerDeck={typeOfDeck} playerHand={typeOfHand} playerLp={lp} playerField={typeOfField} playerGraveyard={typeOfGraveyard} />

    </div>
  );
};

export default Side;
