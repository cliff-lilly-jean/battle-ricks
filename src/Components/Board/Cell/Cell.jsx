import React from 'react';

const Cell = () => {

 // The Cell has a length and a width

 // * Properties
 // A Cell has an array of 4 Sides.
 const [length, setLength] = useState(0);
 const [width, setWidth] = useState(0);

 return (
  <div>Cell</div>
 );
};

export default Cell;