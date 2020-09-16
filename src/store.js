import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import loggerMiddleware from 'redux-logger';


const initialState = {};

var thunkMiddleware = require('redux-thunk');

const configureStore = (initialState) => {
    const store = createStore( initialState);

    return { store };
  };

const {store} = configureStore(
           reducers,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware)

);
    

export default store;
