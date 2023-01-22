import React from 'react';
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';
import { reducer } from './reducer';
import * as actions from './actions';
import { Provider } from 'react-redux';
import App from './components/app';

// import Counter from './counter';

const store = createStore(reducer);
// const {dispatch} = store;

// const {inc, dec, rnd} = 
//   bindActionCreators(actions ,dispatch);

// const update = () => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


// update();
// store.subscribe(update);



