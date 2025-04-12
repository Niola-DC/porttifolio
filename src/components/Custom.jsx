import React from 'react';

const Custom = ({ buttonName, onClick }) => {
 return (
  <button onClick={onClick}>{buttonName}</button>
 )
}

export default Custom;