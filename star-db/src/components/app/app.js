import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipPage } from '../pages';
import { StarshipDetails } from '../sw-components';

import './app.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log('switched to', Service.name);

      return{
        swapiService: new Service()
      };
    })
  };

  render() {

    // const planet = this.state.showRandomPlanet ?
    //   <RandomPlanet/> :
    //   null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
        <BrowserRouter>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            
            <RandomPlanet updateInterval={5000}/>
            <Routes>

            <Route path="/" 
                  // render={<h2>Welcome to stardb</h2>}
                  // exact
                  element={<h2>Welcome to stardb</h2>}
                  />

            <Route path="/people" element={<PeoplePage/>}/>

            <Route path="/planets" element={<PlanetsPage/>}/>

            <Route path="/starships" exact element={<StarshipPage/>}/>
          
            <Route path="/starships/:id" 
                  render={({match}) => {
                  const {id} = match.params;
                  return <StarshipDetails itemId={id}/>}}/>

            {/* <PeoplePage/> */}

            {/* <PlanetsPage/> */}

            {/* <StarshipPage/> */}
          </Routes>
          </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
