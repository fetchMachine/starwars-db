import React from 'react';
import ItemDetails, { DetailRecord } from '../item-details';
import { SwapiServiceConsumer } from '../ctx-swapi-service';


const PersonItemDetails = ({ itemID, ...restProps }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson }) => (
          <ItemDetails itemID={itemID} getData={getPerson} {...restProps}>
            <DetailRecord label='Gender' field='gender' />
            <DetailRecord label='Birth Year' field='birthYear' />
            <DetailRecord label='Eye Color' field='eyeColor' />
          </ItemDetails>
        )
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonItemDetails,
};
