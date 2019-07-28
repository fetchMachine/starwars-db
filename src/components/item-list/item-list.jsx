import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import './item-list.css';

export default class ItemList extends Component {

  state = {
    persons: [],
    isLoad: true,
    isError: false,
  }

  swapiService = new SwapiService();

  onPersonsLoad = (persons) => {
    this.setState({
      persons,
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
    this.swapiService.getAllPersons()
      .then(this.onPersonsLoad)
      .catch(this.onError);
  }

  getItemsElements() {
    const { persons } = this.state;
    const { onItemClick } = this.props;
    return persons.map(person => (
      <li
        className="list-group-item item-list__item"
        key={person.id}
        onClick={
          () => onItemClick(person.id)
        }
      >
        {person.name}
      </li>
    ));
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
