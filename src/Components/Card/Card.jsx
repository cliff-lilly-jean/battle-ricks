import React, { useState, useEffect } from 'react';

const Card = () => {


 const [name, setName] = useState('');
 const [type, setType] = useState('');
 const [species, setSpecies] = useState('');
 const [status, setStatus] = useState('');
 const [image, setImage] = useState('');
 const [gender, setGender] = useState('');
 const [location, setLocation] = useState('');
 const [atk, setAtk] = useState('');
 const [def, setDef] = useState('');
 const [cards, setCards] = useState([]);

 // Todo: pass this method up to the Deck
 const createCard = (cardName, cardType, cardSpecies, cardStatus, cardImage, cardGender, cardLocation, cardAtk, cardDef) => {
  const newCard = {
   name: setName(cardName),
   type: setType(cardType),
   species: setSpecies(cardSpecies),
   status: setStatus(cardStatus),
   image: setImage(cardImage),
   gender: setGender(cardGender),
   location: setLocation(cardLocation),
   atk: setAtk(cardAtk),
   def: setDef(cardDef)
  };

  return newCard;
 };

 useEffect(() => {
  setCards([...cards, createCard('cliff', 'magic', 'human', 'alive', 'no image', 'M', 'America', 1022, 2000)]);
 }, []);

 return (
  <div className='card'>
   {createCard('cliff', 'magic', 'human', 'alive', 'no image', 'M', 'America', 1022, 2000)}
  </div>
 );
};

export default Card;