import React from 'react';
import ItemDetails, { DetailRecord } from '../item-details';
import { WithSwapiService } from '../hoc-helpers';

const _PersonItemDetails = ({ itemID, swapiService, ...restProps }) => {
  return (
    <ItemDetails dataID={itemID} getData={swapiService.getPerson} {...restProps}>
      <DetailRecord label='Gender' field='gender' />
      <DetailRecord label='Birth Year' field='birthYear' />
      <DetailRecord label='Eye Color' field='eyeColor' />
    </ItemDetails>
  );
};

const PersonItemDetails = WithSwapiService(_PersonItemDetails);

const _StarshipItemDetails = ({ itemID, swapiService, ...restProps }) => {
  return (
    <ItemDetails dataID={itemID} getData={swapiService.getStarship} {...restProps}>
      <DetailRecord label='Model' field='model' />
      <DetailRecord label='Cost' field='costInCredits' />
      <DetailRecord label='Capacity' field='cargoCapacity' />
    </ItemDetails>
  );
};

const StarshipItemDetails = WithSwapiService(_StarshipItemDetails);


const _PlanetItemDetails = ({ itemID, swapiService, ...restProps }) => {
  return (
    <ItemDetails dataID={itemID} getData={swapiService.getPlanet} {...restProps}>
      <DetailRecord label='Population' field='population' />
      <DetailRecord label='Rotation Period' field='rotationPeriod' />
      <DetailRecord label='Diameter' field='diameter' />
    </ItemDetails>
  );
};

const PlanetItemDetails = WithSwapiService(_PlanetItemDetails);


export {
  PersonItemDetails,
  StarshipItemDetails,
  PlanetItemDetails,
};
