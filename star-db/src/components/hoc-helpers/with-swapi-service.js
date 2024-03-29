import React from "react";
// import SwapiService from "../../services/swapi-service";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    return(props) => {
        return(<SwapiServiceConsumer>
            {(swapiService) => {
                const serviceProps = mapMethodsToProps(swapiService);
                return(
                    <Wrapped {...props} {...serviceProps}/>
                )
            }}
        </SwapiServiceConsumer>
    )};
};

export default withSwapiService;