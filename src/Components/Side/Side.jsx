import React, { useState, useEffect } from "react";
import Player from "../Player/Player";

const Side = ({ typeOfPlayer }) => {

  // TODO: add phases; draw, place, attack

  const [phase, setPhase] = useState('');




  return (
    <div className=" my-5">
      <Player player={typeOfPlayer} />
    </div>
  );
};

export default Side;
