import React from 'react';

function Card({ id, image, name, species, status, gender, location }) {

 return (
  <div className="card p-4 bg-white rounded-lg drop-shadow-md" key={id}>
   <h2 className=' font-bold text-center mb-4 text-xl'>{name}</h2>
   <img src={image} alt="" />
   <div className="details">
    <p>{species} - {status}</p>
    <p>{gender} - {location}</p>
   </div>

  </div>
 );
}

export default Card;
