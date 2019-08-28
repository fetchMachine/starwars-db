import React from 'react';
import { WithNetwork } from '../hoc-helpers';
import './item-details.css';

const DetailRecord = ({ item, field, label }) => (
  <li className="item-details__description-item">
    <span className="item-details__description-term-text">{label}:</span>
    <span>{item[field]}</span>
  </li>
);

const ItemDetails_ = ({ data: item, children }) => {
  const { imgUrl, name } = item;

  if (!name) {
    return <span>Please, Select an Element from the list.</span>;
  }

  const detail = (
    <React.Fragment>
      <img className="item-details__image" src={imgUrl} alt="item" />
      <div className="card-body">
        <h2>{name}</h2>
        <ul className="list-group list-group-flush item-details__description">
          {React.Children.map(children, child => React.cloneElement(child, { item }))}
        </ul>
      </div>
    </React.Fragment>
  );

  return (
    <div className="item-details card">
      {detail}
    </div>
  );
}

ItemDetails_.defaultProps = {
  data: {},
};

const ItemDetails = WithNetwork(ItemDetails_);
export default ItemDetails;
export { DetailRecord };
