import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { WithNetwork } from '../hoc-helpers';
import './item-list.css';

const ItemList_ = ({ data: items, getItemData, history }) => {

  const getItemsElements = (items) => {
    return items.map((item) => {
      const { id } = item;
      const { label } = getItemData(item);
      return (<li
        className="list-group-item item-list__item"
        key={id}
        onClick={
          () => history.push(id)
        }
      >
        {label}
      </li>
    )});
  }

    const listItems = getItemsElements(items);
    return (
      <ul className="list-group item-list">
        {listItems}
      </ul>
    );
};

ItemList_.defaultProps = {
  data: [],
};

ItemList_.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  getItemData: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const ItemList = withRouter(WithNetwork(ItemList_));

export default ItemList;
