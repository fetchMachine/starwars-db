import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
  render() {
    return (
      <ul className="list-group item-list">
        <li className="list-group-item item-list__item">
          Luke Skywalker
        </li>
        <li className="list-group-item item-list__item">
          Darth Vader
        </li>
        <li className="list-group-item item-list__item">
          R2-D2
        </li>
      </ul>
    );
  }
}
