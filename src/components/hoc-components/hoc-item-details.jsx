import React from 'react';
import ItemDetails, { DetailRecord } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const _PersonItemDetails = ({ itemID, swapiService, ...restProps }) => {
  return (
    <ItemDetails itemID={itemID} getData={swapiService.getPerson} {...restProps}>
      <DetailRecord label='Gender' field='gender' />
      <DetailRecord label='Birth Year' field='birthYear' />
      <DetailRecord label='Eye Color' field='eyeColor' />
    </ItemDetails>
  );
};

const PersonItemDetails = withSwapiService(_PersonItemDetails);

export {
  PersonItemDetails,
};
