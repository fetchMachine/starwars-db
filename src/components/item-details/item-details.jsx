import React from 'react';
import PropTypes from 'prop-types'
import { WithNetwork } from '../hoc-helpers';
import './item-details.css';

const DetailRecord = ({ item, field, label }) => (
  <li className="item-details__description-item">
    <span className="item-details__description-term-text">{label}:</span>
    <span>{item[field]}</span>
  </li>
);

const ItemDescription = ({ item, children }) => {
  const { imgUrl, name } = item;

  return (
    <React.Fragment>
      <img className="item-details__image" src={imgUrl} alt="item" />
      <div className="card-body">
        <h2>{name}</h2>
        <ul className="list-group list-group-flush item-details__description">
          {children}
        </ul>
      </div>
    </React.Fragment>
  );

}

const ItemDetails_ = ({ data: item, children }) => {

  const detail = item.name ? (
    <ItemDescription item={item}>
      {React.Children.map(children, child => React.cloneElement(child, { item }))}
    </ItemDescription>
  ) : (
      <span>Please, Select an Element from the list.</span>
    );

  return (
    <div className="item-details card">
      {detail}
    </div>
  );
};

ItemDetails_.defaultProps = {
  data: {},
};

ItemDetails_.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const ItemDetails = WithNetwork(ItemDetails_);
export default ItemDetails;
export { DetailRecord, ItemDescription };
