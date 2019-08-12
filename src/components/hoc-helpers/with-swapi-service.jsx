import React from 'react';
import { SwapiServiceConsumer } from '../ctx-swapi-service';

const WithSwapiService = (Wrapped, mapMethodsToProps) => {

  return (props) => (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          const swapiServiceProps = mapMethodsToProps ? mapMethodsToProps(swapiService) : { swapiService: swapiService }
          return <Wrapped {...props} {...swapiServiceProps} />
        }
      }
    </SwapiServiceConsumer>
  );
}

export default WithSwapiService;
