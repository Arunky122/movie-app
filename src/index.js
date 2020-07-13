import React from 'react';
import ReactDOM from 'react-dom';
import {createStore}from 'redux';


import './index.css';
import App from './component/App';

import rootReducer from './reducers';


const store=createStore(rootReducer);
console.log("store",store);

// console.log("Before state", store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log("After  state", store.getState());

ReactDOM.render(
  
    <App store = {store}/>,
  
  document.getElementById('root')
);

