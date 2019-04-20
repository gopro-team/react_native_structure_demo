import { createStore, compose , applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from 'reducers/root';

const enhancerList = [];

const composedEnhancer = compose(applyMiddleware(thunkMiddleware, promiseMiddleware), ...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

const store = initStore();

module.exports = {
  store
};
