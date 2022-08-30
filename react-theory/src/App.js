import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';
import { Component } from 'react';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2012},
    ],
    pageTitle: 'React components',
    showCars: false
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
  };

  handleInput = (e) => {
    // console.log('Changed!', e.target.value);
    this.setState({
      pageTitle: e.target.value
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  };

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars})
  };

  render(){
    const divStyle = {
    textAlign: 'center',
  };


  // Первый способ (в render)
  let cars = null;

  if (this.state.showCars) {
    cars = this.state.cars.map((car, index) => {
      return(
        <Car
          key={index}
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(e) => this.onChangeName(e.target.value, index)}  
        />
      );
    })
  }
  // Первый способ (в render)
  

  // const cars = this.state.cars

  return (
    <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>

      {/* <input type="text" onChange={this.handleInput}></input> */}

      <button 
        onClick={this.toggleCarsHandler}>
        Toggle cars
      </button>

      {/* Первый способ */}
      {cars}
      {/* Первый способ */}

      {/* Второй способ (в return)
      {this.state.showCars
      ? this.state.cars.map((car, index) => {
        return(
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}  
          />
        );
      }) : null      
      }
      Второй способ (в return)*/}



      {/* <Car 
        name={cars[0].name} 
        year={cars[0].year}
        onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
      <Car 
        name={cars[1].name} 
        year={cars[1].year}
        onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
      <Car 
        name={cars[2].name} 
        year={cars[2].year}
        onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        /> */}
    </div>
  );
  };
};

export default App;
