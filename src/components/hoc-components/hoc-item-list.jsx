import React from 'react';
import ItemList from '../item-list';
import { WithSwapiService } from '../hoc-helpers';

const renderPersonData = (item) => {
  const gender = item.gender === 'n/a' ? 'robot' : item.gender;
  return {
    label: `${item.name} (${gender})`,
  }
};

const renderItemData = item => ({ label: item.name });

const withRenderData = (renderData) => {
  return (props) => (
    <ItemList
      getItemData={renderData}
      {...props}
    />
  );
}

const mapMathodsToPropsPersons = (swapiservice) => ({
  getData: swapiservice.getAllPersons,
});

const mapMathodsToPropsPlanets = (swapiservice) => ({
  getData: swapiservice.getAllPlanets,
});

const mapMathodsToPropsStarships = (swapiservice) => ({
  getData: swapiservice.getAllStarships,
});

const PersonItemList = WithSwapiService(withRenderData(renderPersonData), mapMathodsToPropsPersons);
const PlanetItemList = WithSwapiService(withRenderData(renderItemData), mapMathodsToPropsPlanets);
const StarshipItemList = WithSwapiService(withRenderData(renderItemData), mapMathodsToPropsStarships);

export {
  PersonItemList,
  PlanetItemList,
  StarshipItemList,
};
