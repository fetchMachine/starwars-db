import React from 'react';
import { SwapiServiceConsumer } from '../ctx-swapi-service';

const getAllSwapiSerbive = (swapiService) => {
  return {
    swapiService: swapiService
  }
}

const WithSwapiService = (Wrapped, mapMethodsToProps = getAllSwapiSerbive) => {

  return (props) => (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          const swapiServiceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...swapiServiceProps} />
        }
      }
    </SwapiServiceConsumer>
  );
};

export default WithSwapiService;
