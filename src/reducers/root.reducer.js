import { combineReducers } from 'redux';
import app from './app.reducer';
import photo from './photo.reducer';

export default combineReducers({
  app,
  photo,
});
