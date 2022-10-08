import './App.css';
import Car from './Car/Car';
import { Component, Fragment } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

// import { Redirect } from "react-router"; 
// import { BrowserRouter } from 'react-router-dom';

export const ClickedContext = React.createContext(false);

class App extends Component {

  // Второй вариант задания state
  constructor(props) {
    super(props);
    console.log('App constructor')

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2012},
      ],
      pageTitle: 'React components',
      showCars: false
    };
  };
  // Второй вариант задания state

  // Первый вариант задания state
  // state = {
  //   cars: [
  //     {name: 'Ford', year: 2018},
  //     {name: 'Audi', year: 2016},
  //     {name: 'Mazda', year: 2012},
  //   ],
  //   pageTitle: 'React components',
  //   showCars: false
  // };
  // Первый вариант задания state

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

  // componentWillMount(){
  //   console.log('App componentWillMount');
  // };

  // componentDidMount(){
  //   console.log('App componentDidMount')
  // };

  // goToHomePage = () => {
  //   this.props.history.push({
  //     pathname: '/'
  //   })
  // }


  render(){
    console.log('App render')
    const divStyle = {
    textAlign: 'center',
  };
  
  // Первый способ (в render)
  let cars = null;

  if (this.state.showCars) {
    cars = this.state.cars.map((car, index) => {
      return(
        <ErrorBoundary key={index}>
        <NavLink to='/'><button>Click</button></NavLink>
        <Car
          key={index}
          name={car.name}
          year={car.year}
          index={index}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(e) => this.onChangeName(e.target.value, index)}  
        />
        </ErrorBoundary>
      );
    })
  }
  // Первый способ (в render)
  

  // const cars = this.state.cars

  return (
    <div style={divStyle}>
      {/* <h1>{this.state.pageTitle}</h1> */}
      <h1>{this.props.title}</h1>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/counter'>Counter</NavLink>
          </li>
          <li>
            <NavLink to='/cars'>Cars</NavLink>
          </li>
          <li>
            {/* <NavLink to='/'><button>Click</button></NavLink> */}
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path='/' element={<h1>Home page</h1>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/cars' element={<button
        style={{
          margin: '10px',
          border: '2px solid',
        }} 
        onClick={this.toggleCarsHandler}>
        Toggle cars
      </button>
      }>
      </Route>
        {/* <NavLink to='/'><button>Click</button></NavLink> */}
      </Routes>
      <NavLink to='/'><button>To home</button></NavLink>
      <hr/>

      {/* <ClickedContext.Provider value={this.state.clicked}>
        <Counter/>
      </ClickedContext.Provider>  
      <Counter/> */}

      {/* <input type="text" onChange={this.handleInput}></input> */}

      {/* <button
        style={{
          margin: '10px',
          border: '2px solid',
        }} 
        onClick={this.toggleCarsHandler}>
        Toggle cars
      </button> */}

      {/* <button onClick={() => this.setState({clicked: true})}>Change clicked</button> */}

      {/* Первый способ */}
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
      {cars}
      </div>
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