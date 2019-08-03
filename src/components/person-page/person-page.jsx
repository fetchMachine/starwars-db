import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndocator from '../error-indicator';
import './person-page.css';

export default class PersonPage extends Component {

  state = {
    personID: 1,
    isError: false,
  }

  onItemSwap = (personID) => {
    this.setState({ personID });
  }

  componentDidCatch() {
    this.setState({
      isError: true,
    });
  }

  render() {
    if (this.state.isError) {
      return <ErrorIndocator />
    }
    const { personID } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-4">
          <ItemList onItemClick={this.onItemSwap} />
        </div>
        <div className="col-md-8">
          <div>
            <PersonDetails personID={personID} />
          </div>
        </div>
      </React.Fragment>
    );
  }

}
