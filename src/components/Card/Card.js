import React from 'react';

import './Card.css';
import femaleImage from '../../assets/imgs/female-avatar-girl-face-woman-user-6-svgrepo-com.svg';
import maleImage from '../../assets/imgs/male-avatar-boy-face-man-user-8-svgrepo-com.svg';

function Card({ id, image, name, species, status, gender, location }) {

 // randomly generate stats for each card
 let generateNumber = (number) => {
  return Math.floor(Math.random() * number) + 50;
 };

 // theme colors
 const typeColor = {
  Human: "#26de81",
  Humanoid: "#fed330",
  Robot: "#FF0069",
  Animal: "#5D2E8C",
  Poopybutthole: "#242325",
  "Mythological Creature": "#E4572E",
  Cronenberg: "#2DF1FC",
  Alien: "#2708A0",
  unknown: "#A3A3A3",
 };

 // change card's bg-color based on the species
 const speciesBGColor = typeColor[species];

 // Todo: create different stat bonuses based on species and status

 // Todo: create an algorithm that randomizes hits and misses based off of the cards speed stat. ex: if the defensive players speed stat is greater then the speed stat of the attack card, add the difference of the two speed stats into a randomizer function and if the number is greater then 35 pick a number between 0 and 1, if 1 the attack misses else it hits and the points are subtracted from the HP


 return (
  // design the card
  <div className="card" style={{ background: `radial-gradient(circle at 50% 0%, ${speciesBGColor} 36%, #ffffff 36%) ` }} key={id}>
   <div className="card__inner">
    <div className="card__face card__face--front">
     <p className="hp">
      <span>HP </span>
      <span>{generateNumber(250)}</span>
     </p>
     <img className='character-image' src={image} alt="A Rick and Morty character" />
     <h2 className="character-name">{name}</h2>
     <div className="types">
      <span className='gender'>{gender === 'Male' ? <img className='w-8' src={maleImage} /> : <img className='w-8' src={femaleImage} />}</span>
      <span>{species}</span>
     </div>
     <div className="stats">
      <div>
       <h3>{generateNumber(50)}</h3>
       <p>Atk</p>
      </div>
      <div>
       <h3>{generateNumber(100)}</h3>
       <p>Def</p>
      </div>
      <div>
       <h3>{generateNumber(150)}</h3>
       <p>Spd</p>
      </div>
     </div>
    </div>
   </div>
   <div className="card__face card__face--back">
    <h2>Battle Ricks</h2>
   </div>
  </div>
 );
}

export default Card;
