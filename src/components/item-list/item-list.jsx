import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import { withRouter } from 'react-router-dom';
import './item-list.css';

class ItemList_ extends Component {

  state = {
    items: [],
    isLoad: true,
    isError: false,
  }

  onitemsLoad = (items) => {
    this.setState({
      items,
      isLoad: false
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoad: false,
    });
  }

  componentDidMount() {
    this.props.getItems()
      .then(this.onitemsLoad)
      .catch(this.onError);
  }

  getItemsElements() {
    const { items } = this.state;
    return items.map((item) => {
      const { id } = item;
      const { label } = this.props.getItemData(item);
      return (<li
        className="list-group-item item-list__item"
        key={id}
        onClick={
          () => this.props.history.push(id)
        }
      >
        {label}
      </li>
    )});
  }

  render() {
    const { isLoad, isError } = this.state;
    const error = isError ? <ErrorIndicator /> : null;
    const spinner = isLoad ? <Spinner /> : null;
    const listItems = !isLoad && !isError ? this.getItemsElements() : null;
    return (
      <ul className="list-group item-list">
        {error}
        {spinner}
        {listItems}
      </ul>
    );
  }
}

const ItemList = withRouter(ItemList_);

export default ItemList;
