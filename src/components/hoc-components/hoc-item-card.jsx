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

import { withNetwortkRequest } from '../hoc-helpers';

const withCard = (List, Details) => {
  return ({ data, setData }) => {
    const itemID = data;
    const onItemSwap = setData;

    const list = <List onItemClick={onItemSwap} />
    const details = <Details itemID={itemID} />

    return <RowCol2
      left={list}
      right={details}
    />
  }
}

const PersonCard = withNetwortkRequest(withCard(PersonItemList, PersonItemDetails));
const StarshipCard = withNetwortkRequest(withCard(StarshipItemList, StarshipItemDetails));
const PlanetCard = withNetwortkRequest(withCard(PlanetItemList, PlanetItemDetails));

export {
  PersonCard,
  StarshipCard,
  PlanetCard,
}
