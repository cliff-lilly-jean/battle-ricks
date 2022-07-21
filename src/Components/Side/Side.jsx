import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import characters from "../../Data/rick-and-morty-characters.json";
import createADeck from '../../Functions/Side/createADeck';
import createAHand from '../../Functions/Side/createAHand';

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
      <h1><span className="font-bold">User:</span> {typeOfPlayer}</h1>
      <p><span className="font-bold">LP:</span> {lp}</p>
      <div><span className="font-bold">Deck:</span> <Card generatedCard={deck} /></div>
      <div><span className="font-bold">Field:</span>{" "} <Card generatedCard={fieldCards} /></div>
      <div><span className="font-bold">Hand:</span> <Card generatedCard={hand} />{" "}</div>
      <div><span className="font-bold">Graveyard:</span> {graveYard.length}</div>
    </div>
  );
};

export default Side;
