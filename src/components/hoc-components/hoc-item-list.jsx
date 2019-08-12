import React from 'react';
import ItemList from '../item-list';
import { withSwapiService } from '../hoc-helpers';

const renderPersonData = (item) => {
  const gender = item.gender === 'n/a' ? 'robot' : item.gender;
  return {
    label: `${item.name} (${gender})`,
  }
};

const _PersonItemList = (props) => {
  return (
      <ItemList
        getItemData={renderPersonData}
        {...props}
      />
    );
}

const mapMathodsToProps = (swapiservice) => ({
  getItems: swapiservice.getAllPersons,
});

const PersonItemList = withSwapiService(_PersonItemList, mapMathodsToProps);

export {
  PersonItemList,
};
