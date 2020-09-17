import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

const initialState = {};

var thunk = require('redux-thunk');

const configureStore = (initialState) => {
    const store = createStore( initialState);

    return { store };
  };

const {store} = configureStore(
           reducers,
    initialState,
    applyMiddleware(
        thunk,
        logger)

);

export default store;