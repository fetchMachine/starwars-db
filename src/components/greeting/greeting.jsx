import React from 'react';
import './greeting.css';

const Greeting = () => {
  return (
    <div className="card d-flex justify-content-center align-items-center greeting">
      <span>Welcome to StarWars Data Base.</span>
      <span>Choose section in the menu above... </span>
    </div>
  )
};

export default Greeting;
