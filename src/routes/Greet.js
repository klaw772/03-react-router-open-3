import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Greet() {
  const params = useParams();
  const navigate = useNavigate();

  function handleClick() {
    //processing
    //console.log    
    navigate('/');
  }
  return (
    <div>
      <h1>Hello, {params.name}</h1>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}

export { Greet };