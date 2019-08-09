import React from 'react';
import ItemList from '../item-list';
import { SwapiServiceConsumer } from '../ctx-swapi-service';

const renderPersonData = (item) => {
  const gender = item.gender === 'n/a' ? 'robot' : item.gender;
  return {
    label: `${item.name} (${gender})`,
  }
};

const PersonItemList = ({ onItemClick, ...restProps }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getAllPersons }) => (
          <ItemList
            onItemClick={onItemClick}
            getItems={getAllPersons}
            getItemData={renderPersonData}
            {...restProps}
          />
        )
      }
    </SwapiServiceConsumer>
  );
}

export {
  PersonItemList,
};
