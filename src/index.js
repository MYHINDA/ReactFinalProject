import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './appReducer';

const appStore = createStore(AppReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
