import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails, { DetailRecord } from '../item-details';
import ErrorIndocator from '../error-indicator';
import RowCol2 from '../row-col2';
import SwapiService from '../../services/swapi-service'
import './item-card.css';

export default class ItemCard extends Component {

  swapiService = new SwapiService();

  state = {
    itemID: null,
    isError: false,
  }

  onItemSwap = (itemID) => {
    this.setState({ itemID });
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

    const { itemID } = this.state;

    const list = <ItemList
      onItemClick={this.onItemSwap}
      getItems={this.swapiService.getAllPersons}
      getItemData={item => ({ label: `${item.name} (${item.gender !== 'n/a' ? `${item.gender}` : 'robot'})` })}
    />;

    const details = <ItemDetails itemID={itemID} getData={this.swapiService.getPerson}>
      <DetailRecord label='Gender' field='gender' />
      <DetailRecord label='Birth Year' field='birthYear' />
      <DetailRecord label='Eye Color' field='eyeColor' />
    </ItemDetails>;

    return <RowCol2
      left={list}
      right={details}
    />
  }

}
