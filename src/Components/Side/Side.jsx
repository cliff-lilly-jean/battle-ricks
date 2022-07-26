import React, { useState, useEffect } from "react";
import Player from "../Player/Player";

const Side = ({ typeOfPlayer, typeOfDeck, typeOfHand }) => {

  // TODO: add phases; draw, place, attack

  const [phase, setPhase] = useState('');


  return (
    <div className=" my-5">

      <Player player={typeOfPlayer} playerDeck={typeOfDeck} playerHand={typeOfHand} />
    </div>
  );
};

export default Side;
