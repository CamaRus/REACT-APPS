import React from "react";
import ItemDetails from '../item-details';
import { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
  
        <Record field="population" label="Population" />
        <Record field="rotation_period" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);