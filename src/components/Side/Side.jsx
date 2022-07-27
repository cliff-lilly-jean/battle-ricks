import React from 'react';
import Player from '../Player/Player';

const Side = ({ typeOfPlayer }) => {

 /*

 TODO: if the typeOfPlayer is cpu, add cpu logic

 */

 return (
  <div className=' my-5'>
   <h1>
    <span className='font-bold'>User:</span>
    <Player player={typeOfPlayer} />
   </h1>
  </div>
 );
};

export default Side;