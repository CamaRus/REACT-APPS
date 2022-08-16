import React from "react";
import ItemDetails from '../item-details';
import { Record } from '../item-details';
// import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = (props) => {
    // const {getPerson, getPersonImage} = swapiService;
    return (
        <ItemDetails {...props} >
  
        <Record field="gender" label="Gender" />
        <Record field="eye_color" label="Eye Color" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);