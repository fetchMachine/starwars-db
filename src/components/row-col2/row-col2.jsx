import React from 'react';
import './row-col2.css';

const RowCol2 = ({ left, right }) => (
  <div className="row mb2">
    <div className="col-md-4">
      {left}
    </div>
    <div className="col-md-8">
      {right}
    </div>
  </div>
);

export default RowCol2;
