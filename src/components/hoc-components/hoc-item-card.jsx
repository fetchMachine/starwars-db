import React from 'react';
import {
  PersonItemList,
  StarshipItemList,
  PlanetItemList,
} from './hoc-item-list';
import {
  PersonItemDetails,
  StarshipItemDetails,
  PlanetItemDetails,
} from './hoc-item-details';
import RowCol2 from '../row-col2';


const withCard = (List, Details) => {
  return ({ itemID }) => {

    const list = <List />
    const details = <Details itemID={itemID} />

    return <RowCol2
      left={list}
      right={details}
    />
  }
}

const PersonCard = withCard(PersonItemList, PersonItemDetails);
const StarshipCard = withCard(StarshipItemList, StarshipItemDetails);
const PlanetCard = withCard(PlanetItemList, PlanetItemDetails);

export {
  PersonCard,
  StarshipCard,
  PlanetCard,
}
