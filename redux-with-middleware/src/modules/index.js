import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import sample, { sampleSagas } from './apiSample';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSagas()]);
}

export default rootReducer;
