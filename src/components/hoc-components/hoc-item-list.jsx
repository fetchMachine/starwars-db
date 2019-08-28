import React from 'react';
import ItemList from '../item-list';
import { withSwapiService } from '../hoc-helpers';

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

const PersonItemList = withSwapiService(withRenderData(renderPersonData), mapMathodsToPropsPersons);
const PlanetItemList = withSwapiService(withRenderData(renderItemData), mapMathodsToPropsPlanets);
const StarshipItemList = withSwapiService(withRenderData(renderItemData), mapMathodsToPropsStarships);

export {
  PersonItemList,
  PlanetItemList,
  StarshipItemList,
};
