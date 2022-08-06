import React, { useState, useEffect } from "react";
import Player from "../Player/Player";

import gamePhase from "../../Data/Side/gamePhase";

const Side = ({ typeOfPlayer, typeOfDeck, typeOfHand }) => {

  // TODO: add phases; draw, place, attack

  const [phase, setPhase] = useState('');

  const [lp, setLp] = useState(8000);


  let newPhase = gamePhase.attackPhase;

  // TODO: build the game play loop
  const gameLoop = () => {

  };

  useEffect(() => {


  }, [phase]);


  return (
    <div className="side">
      <Player player={typeOfPlayer} playerDeck={typeOfDeck} playerHand={typeOfHand} playerLp={lp} />
      {/* Phase Testing button */}
      {/* <button onClick={() => setPhase(newPhase)} style={{ margin: "1rem auto", display: "block", background: "teal", padding: ".5rem 1.5rem", color: "white" }}>set phase</button> */}
    </div>
  );
};

export default Side;
