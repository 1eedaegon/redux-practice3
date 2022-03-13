import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// Root reducer
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
