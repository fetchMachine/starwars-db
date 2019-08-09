import React from 'react';
import { PersonItemList } from './hoc-item-list';
import { PersonItemDetails } from './hoc-item-details';
import RowCol2 from '../row-col2';

import { HocNetwortkRecwest } from '../hoc-helpers';

const PersonItemCard = ({ data, setData }) => {
  const itemID = data;
  const onItemSwap = setData;

  const list = <PersonItemList onItemClick={onItemSwap} />
  const details = <PersonItemDetails itemID={itemID} />

  return <RowCol2
    left={list}
    right={details}
  />
}

const PersonCard = HocNetwortkRecwest(PersonItemCard);

export {
  PersonCard,
}
