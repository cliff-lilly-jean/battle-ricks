import React, { useState } from 'react';

const Card = ({ generatedCards }) => {

 // const [name, setName] = useState();
 // const [id, setId] = useState();
 // const [species, setSpecies] = useState();
 // const [attack, setAttack] = useState();
 // const [defense, setDefense] = useState();
 // const [gender, setGender] = useState();
 // const [location, setLocation] = useState();
 // const [status, setStatus] = useState();

 const [faceDown, setFaceDown] = useState(true);
 const [attackPosition, setAttackPosition] = useState(false);

 return (
  <div className='character-card ml-8'>
   {generatedCards.map(character => (
    <div className=' my-4 bg-orange-200' key={character.id}>
     <div></div>
     <div>{`Name: ${character.name}`}</div>
     <div>{`Species: ${character.species}`}</div>
     <div>{`Attack: ${character.attack}`}</div>
     <div>{`Defense: ${character.defense}`}</div>
     <div>{`Status: ${character.status}`}</div>
     <div>{`Gender: ${character.gender}`}</div>
     <div>{`Location: ${character.location}`}</div>
    </div>
   ))}
  </div>
 );
};

export default Card;