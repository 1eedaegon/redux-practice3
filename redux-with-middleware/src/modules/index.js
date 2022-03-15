import { combineReducers } from 'redux';
import counter from './counter';
import sample from './apiSample';
const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
