import { combineReducers } from 'redux';
import app from './app';
import photo from './photo';

export default combineReducers({
  app,
  photo,
});
