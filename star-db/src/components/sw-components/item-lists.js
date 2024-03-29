import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction, compose } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
// import SwapiService from '../../services/swapi-service';


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName))
                    (ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName))
                    (ItemList);

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderName))
                        (ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};
