import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientMiddleware from './clientMiddleware';

const enhancerList = [];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(
    clientMiddleware,
  ),
  ...enhancerList,
);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

const store = initStore();

export default store;
