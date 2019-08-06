import React, { Component } from 'react';
import SwapiBD from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-details.css';

const DetailRecord = ({ item, field, label }) => (
  <li className="item-details__description-item">
    <span className="item-details__description-term-text">{label}:</span>
    <span>{item[field]}</span>
  </li>
);

export default class ItemDetails extends Component {

  state = {
    item: {},
    isLoad: false,
  };

  swapiBD = new SwapiBD();

  udpdateitem = () => {
    this.setState({ isLoad: true });
    const { itemID } = this.props;
    this.props.getData(itemID)
      .then(item => {
        this.setState({
          item: { ...item },
          isLoad: false,
        });
      })
      .catch(window.console.log.bind(window.console));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.itemID !== this.props.itemID) {
      this.udpdateitem();
    }
  }


  render() {
    const { item } = this.state;
    const { imgUrl, name } = item;

    const popup = <span>Please, Select an Element from the list.</span>;

    const detail = (
      <React.Fragment>
        <img
          className="item-details__image"
          src={imgUrl}
          alt="item"
        />
        <div className="card-body">
          <h2>{name}</h2>
          <ul className="list-group list-group-flush item-details__description">
            {React.Children.map(this.props.children, child => React.cloneElement(child, { item }))}
          </ul>
        </div>
      </React.Fragment>
    );

    const data = name ? detail : popup;

    return (
      <div className="item-details card">
        {this.state.isLoad ? <Spinner /> : data}
      </div>
    );
  }
}


export { DetailRecord };
