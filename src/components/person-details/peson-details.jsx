import React, { Component } from 'react';
import SwapiBD from '../../services/swapi-service';
import Spinner from '../spinner';
import './person-details.css';

export default class PersonDetails extends Component {

  state = {
    person: {},
    isLoad: true,
  };

  swapiBD = new SwapiBD();

  udpdatePerson = () => {
    this.setState({ isLoad: true });
    const { personID } = this.props;
    this.swapiBD.getPerson(personID)
      .then(person => {
        this.setState({
          person: {...person},
          isLoad: false,
        });
      });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.personID !== this.props.personID) {
      this.udpdatePerson();
    }
  }

  componentDidMount() {
    this.udpdatePerson();
  }

  render() {
    const { imgUrl, name, birthDay, eyeColor, gender } = this.state.person;
    const detail = (
      <React.Fragment>
        <img
          className="person-details__image"
          src={imgUrl}
          alt="person"
        />
        <div className="card-body">
          <h2>{name}</h2>
          <ul className="list-group list-group-flush person-details__description">
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Birth Year:</span>
              <span>{birthDay}</span>
            </li>
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
    return (
      <div className="person-details card">
        {this.state.isLoad ? <Spinner /> : detail}
      </div>
    );
  }
}
