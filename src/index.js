import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

import { BrowserRouter } from 'react-router-dom';
import {Provider } from 'react-redux'
import { createStore} from 'redux'

import AppReducer from './appReducer'
=======
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './appReducer';
>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc

const appStore = createStore(AppReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
    </BrowserRouter>
    
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
        <App />
    </BrowserRouter>
  </Provider>
);

>>>>>>> 835fba4b5873ebd5e01db4bb9dde4a16aa5634fc
reportWebVitals();
