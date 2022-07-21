import React, { useState, useEffect } from "react";
import characters from "../../Data/rick-and-morty-characters.json";
import createADeck from '../../Functions/Side/createADeck';
import createAHand from '../../Functions/Side/createAHand';
import Player from "../Player/Player";

const Side = ({ typeOfPlayer }) => {
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


  useEffect(() => {
    let newDeck = createADeck(characters, amountToCutForDeck);
    let newHand = createAHand(newDeck, amountToCutForHand);

    setDeck(newDeck);
    setHand(newHand);
  }, []);

  return (
    <div className=" my-5">
      <Player player={typeOfPlayer} playerDeck={deck} playerHand={hand} playerHealth={lp} playerFieldCards={fieldCards} playerGraveYard={graveYard} />
    </div>
  );
};

export default Side;
