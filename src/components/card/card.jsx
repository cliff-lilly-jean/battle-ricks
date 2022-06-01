import React, { useState } from 'react';

const Card = () => {

 const [name, setName] = useState();
 const [id, setId] = useState();
 const [species, setSpecies] = useState();
 const [attack, setAttack] = useState();
 const [defense, setDefense] = useState();
 const [gender, setGender] = useState();
 const [location, setLocation] = useState();
 const [status, setStatus] = useState();


 return (
  <div className=' ml-8'>
   <p><span className='font-bold'>Name:</span> {name}</p>
   <p><span className='font-bold'>Id:</span> {id}</p>
   <p><span className='font-bold'>Species:</span> {species}</p>
   <p><span className='font-bold'>Attack:</span> {attack}</p>
   <p><span className='font-bold'>Defense:</span> {defense}</p>
   <p><span className='font-bold'>Gender:</span> {gender}</p>
   <p><span className='font-bold'>Location:</span> {location}</p>
   <p><span className='font-bold'>Status:</span> {status}</p>
  </div>
 );
};

export default Card;