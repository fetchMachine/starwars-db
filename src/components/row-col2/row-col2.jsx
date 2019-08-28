import React from 'react';
import PropTypes from 'prop-types';
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

RowCol2.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default RowCol2;
