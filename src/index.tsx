import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './modules/Root/Root';

import thunk from 'redux-thunk';
import allReducers from './redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'

import './index.css';
import './common/styles/globals.scss';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;
const store = createStore(
  allReducers, composeEnhancer(applyMiddleware(thunk)),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
