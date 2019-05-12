import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from 'reducers/root.reducer';
import clientMiddleware from './clientMiddleware';

const enhancerList = [];

const composedEnhancer = compose(
  applyMiddleware(
    // thunkMiddleware,
    // promiseMiddleware,
    clientMiddleware,
  ),
  ...enhancerList,
);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

const store = initStore();

export default store;
