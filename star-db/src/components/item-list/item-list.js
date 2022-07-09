import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peoplelist: null
  };

  componentDidMount() {
    this.swapiService
    .getAllPeople()
    .then((peoplelist) => {
      this.setState({peoplelist});
    });
  };

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className='list-group-item'
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
        {name}
        </li>
      );
    });
  };

  render() {

    const {peoplelist} = this.state;

    if (!peoplelist){
      return <Spinner/>
    };

    const items = this.renderItems(peoplelist);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
