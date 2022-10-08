import React, { Component } from "react";
import "./Car.css";
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types';

// function car() {
//     return(
//         <h2>This is car component</h2>
//     )
// };

// Первый вариант - class
class Car extends Component {

    constructor(props){
        super(props)

        // Референция
        this.inputRef = React.createRef() 
    }

    componentDidMount(){
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render(){
        console.log('Car render')

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed')
        // }

        const inputClasses = ['input']

    if (this.props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    };

    if (this.props.name.length > 4) {
        inputClasses.push('bold')
    };

    return(
        <React.Fragment>
            <h3>Car name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input
                ref={this.inputRef} 
                type="text" 
                onChange={this.props.onChangeName} 
                value={this.props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
        </React.Fragment>
    );

    }
}
// Первый вариант - class







// Второй вариант - функция
// const Car = (props) => {

//     const inputClasses = ['input']

//     if (props.name !== '') {
//         inputClasses.push('green')
//     } else {
//         inputClasses.push('red')
//     };

//     if (props.name.length > 4) {
//         inputClasses.push('bold')
//     };

//     const style = {
//         border: '1px solid #ccc',
//     };

//     return(
//         <div className="Car" style={style}>
//             <h3>Car name: {props.name}</h3>
//             <p>Year: <strong>{props.year}</strong></p>
//             <input 
//                 type="text" 
//                 onChange={props.onChangeName} 
//                 value={props.name}
//                 className={inputClasses.join(' ')}
//             />
//             <button onClick={props.onDelete}>Delete</button>
//         </div>
//     );
// };
// Второй вариант - функция

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number,
}

export default withClass(Car, 'Car');