import React, { useState } from 'react';
import Card from '../Card/Card';

const Side = ({ typeOfPlayer }) => {

 // The deck is an array of Card Components
 const [deck, setDeck] = useState([<Card />]);

 // The hand is an array of Card Components
 const [hand, setHand] = useState([]);

 const [lp, setLp] = useState(8000);

 // The fieldCards is an array of Card Components
 const [fieldCards, setFieldCards] = useState([]);

 // The graveYard is an array of Card Components
 const [graveYard, setGraveYard] = useState([]);

 return (
  <div className=' my-5'>
   <h1><span className='font-bold'>User:</span> {typeOfPlayer}</h1>
   <p><span className='font-bold'>LP:</span> {lp}</p>
   <p><span className='font-bold'>Deck:</span> {deck}</p>
   <p><span className='font-bold'>Field:</span> {fieldCards}</p>
   <p><span className='font-bold'>Hand:</span> {hand}</p>
   <p><span className='font-bold'>Graveyard:</span> {graveYard}</p>
  </div>
 );
};

export default Side;