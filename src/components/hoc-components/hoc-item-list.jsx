import React from 'react';
import ItemList from '../item-list';
import { withSwapiService } from '../hoc-helpers';

const renderPersonData = (item) => {
  const gender = item.gender === 'n/a' ? 'robot' : item.gender;
  return {
    label: `${item.name} (${gender})`,
  }
};

const renderPlanetData = item => ({ label: item.name });
const renderStarshipData = item => ({ label: item.name });

const withRenderData = (renderData) => {
  return (props) => (
    <ItemList
      getItemData={renderData}
      {...props}
    />
  );
}

const mapMathodsToPropsPersons = (swapiservice) => ({
  getItems: swapiservice.getAllPersons,
});

const mapMathodsToPropsPlanets = (swapiservice) => ({
  getItems: swapiservice.getAllPlanets,
});

const mapMathodsToPropsStarships = (swapiservice) => ({
  getItems: swapiservice.getAllStarships,
});

const PersonItemList = withSwapiService(withRenderData(renderPersonData), mapMathodsToPropsPersons);
const PlanetItemList = withSwapiService(withRenderData(renderPlanetData), mapMathodsToPropsPlanets);
const StarshipItemList = withSwapiService(withRenderData(renderStarshipData), mapMathodsToPropsStarships);

export {
  PersonItemList,
  PlanetItemList,
  StarshipItemList,
};
