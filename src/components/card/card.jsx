import React, { useEffect, useState } from 'react';



const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardHealthStatus, cardGenderIcon, cardImage, cardHomeLocation, cardFaceDownPosition, cardAttackPosition }) => {

 const [id, setId] = useState('');
 const [name, setName] = useState('');
 const [species, setSpecies] = useState('');
 const [attackPoints, setAttackPoints] = useState('');
 const [defensePoints, setDefensePoints] = useState('');
 const [healthStatus, setHealthStatus] = useState('');
 const [genderIcon, setGenderIcon] = useState('');
 const [image, setImage] = useState('');
 const [homeLocation, setHomeLocation] = useState('');
 const [faceDownPosition, setFaceDownPosition] = useState(true);
 const [attackPosition, setAttackPosition] = useState(false);

 let changeCardFacePosition = () => {
  setFaceDownPosition(cardFace => !cardFace);
 };

 useEffect(() => {
  setId(cardId);
  setAttackPosition(cardAttackPosition);
  setSpecies(cardSpecies);
  setFaceDownPosition(cardFaceDownPosition);
 }, [id, species, faceDownPosition, attackPosition]);

 return (
  <div>
   {cardId}
   <button onClick={() => console.log(`card id: ${id} \ncard attack ${cardAttackPoints}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Attack</button>
   {/* break */}
   <button onClick={() => console.log(`card face position: ${setFaceDownPosition(cardFaceDownPosition => !cardFaceDownPosition)}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Change Face</button>
  </div >
 );
};

export default Card;
