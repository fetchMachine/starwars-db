import React from 'react';
import ErrorImg from './death-star.png';
import './errorIndicator.css';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img src={ErrorImg} alt="error" />
    <p>Something go wrong...</p>
    <p>But We already sent R2-D2 to fix this...</p>
  </div>
);

export default ErrorIndicator;
