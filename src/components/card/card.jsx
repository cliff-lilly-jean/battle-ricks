import React, { useEffect, useState } from 'react';

const Card = ({ card }) => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [status, setStatus] = useState('');
  const [genderIcon, setGenderIcon] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [cardFaceDown, setCardFaceDown] = useState(true);
  const [cardAttackPosition, setCardAttackPosition] = useState(true);


  return (
    <div className='findCard-card ml-8' >
      {card}
    </div >
  );
};

export default Card;
