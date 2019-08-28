import React from 'react';
import PropTypes from 'prop-types';
import { WithSwapiService } from '../hoc-helpers';
import './random-item.css';
import { WithNetwork } from '../hoc-helpers';
import { DetailRecord, ItemDescription } from '../item-details';


const PlanetRecord = ({ item }) => (
  <ItemDescription item={item}>
    <DetailRecord item={item} label="Population" field="population" />
    <DetailRecord item={item} label="Rotation Period" field="rotationPeriod" />
    <DetailRecord item={item} label="Diameter" field="diameter" />
  </ItemDescription>
);

const StarshipRecord = ({ item }) => (
  <ItemDescription item={item}>
    <DetailRecord item={item} label='Model' field='model' />
    <DetailRecord item={item} label='Cost' field='costInCredits' />
    <DetailRecord item={item} label='Capacity' field='cargoCapacity' />
  </ItemDescription>
);

const PersonRecord = ({ item }) => (
  <ItemDescription item={item}>
    <DetailRecord item={item} label='Gender' field='gender' />
    <DetailRecord item={item} label='Birth Year' field='birthYear' />
    <DetailRecord item={item} label='Eye Color' field='eyeColor' />
  </ItemDescription>
);

const RandomItemView = ({ data: item = {} }) => {
  const Record = item.gender ? PersonRecord : item.model ? StarshipRecord : PlanetRecord;
  return <Record item={item} />
};

RandomItemView.propTypes = {
  data: PropTypes.object,
}

const RandomItem_ = ({ getRandomItem }) => {
  const Item = WithNetwork(RandomItemView);
  return (
    <div className="random-item jumbotron rounded">
      <Item getData={getRandomItem} options={{ iterate: true, delay: 7500, showSpinner: false }} />
    </div>
  );
}

RandomItem_.propTypes = {
  getRandomItem: PropTypes.func,
}

const mapMathodsToPropsRandomItem = (swapiService) => ({ getRandomItem: swapiService.getRandomItem });

const RandomItem = WithSwapiService(RandomItem_, mapMathodsToPropsRandomItem)

export default RandomItem;
