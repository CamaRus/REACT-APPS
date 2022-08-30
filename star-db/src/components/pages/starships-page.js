import React, {Component} from "react";
import { StarshipDetails, StarshipList } from "../sw-components";
// import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import {withRouter} from "react-router";

const StarshipPage = ({history}) => {
        return(
            <StarshipList
            onItemSelected = {(itemId) => {
                history.push(`/starships/${itemId}`);
            }}/>
        );
};

export default withRouter(StarshipPage);


// export default class StarshipPage extends Component{
    
//     state = {
//         selectedItem: null
//     };

//     onItemSelected = (selectedItem) => {
//         this.setState({selectedItem});
//     };

//     render(){
        
//         const {selectedItem} = this.state;

//         return(
//             <Row
//               left={<StarshipList onItemSelected={this.onItemSelected}/>}
//               right={<StarshipDetails itemId={selectedItem}/>}
//             />
//         );
//     };
// }