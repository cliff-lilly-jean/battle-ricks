import React, { useState, useEffect } from "react";
import Player from "../Player/Player";

import gamePhase from "../../Data/Side/gamePhase";

const Side = ({ typeOfPlayer, typeOfDeck, typeOfHand, typeOfField, typeOfGraveyard }) => {

  // phases: draw, place, ..., attack
  const [phase, setPhase] = useState('');
  const [lp, setLp] = useState(8000);

  // Set the turn and determine the winning side
  const [turn, setTurn] = useState('');
  const [winner, setWinner] = useState('');



  return (
    <div className="side">
      <Player player={typeOfPlayer} playerDeck={typeOfDeck} playerHand={typeOfHand} playerLp={lp} playerField={typeOfField} playerGraveyard={typeOfGraveyard} />

    </div>
  );
};

export default Side;
