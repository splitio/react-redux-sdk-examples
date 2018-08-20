import { combineReducers } from 'redux';
import FeaturesReducer from './features';

export default combineReducers({
  features: FeaturesReducer
 });