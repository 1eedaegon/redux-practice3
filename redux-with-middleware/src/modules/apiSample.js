import { handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// POST
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// USER
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// Create request sagas
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// Thunks
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAILURE, payload: error, error: true });
    throw error;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILURE, payload: error, error: true });
    throw error;
  }
};

// // Sagas
// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));
//   try {
//     const post = yield call(api.getPost, action.payload);
//     yield put({ type: GET_POST_SUCCESS, payload: post.data });
//   } catch (error) {
//     yield put({ type: GET_POST_FAILURE, payload: error, error: true });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga() {
//   yield put(startLoading(GET_USERS));
//   try {
//     const users = yield call(api.getUsers);
//     yield put({ type: GET_USERS_SUCCESS, payload: users.data });
//   } catch (error) {
//     yield put({ type: GET_USERS_FAILURE, payload: error, error: true });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSagas() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// const initialState = {
//   loading: {
//     GET_POST: false,
//     GET_USERS: false,
//   },
//   post: null,
//   users: null,
// };

// After applying saga
const initialState = {
  post: null,
  users: null,
};

// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: true },
//     }),
//     [GET_POST_SUCCESS]: (state, { payload }) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false },
//       post: payload,
//     }),
//     [GET_POST_FAILURE]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false },
//     }),
//     [GET_USERS]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: true },
//     }),
//     [GET_USERS_SUCCESS]: (state, { payload }) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//       users: payload,
//     }),
//     [GET_USERS_FAILURE]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//     }),
//   },
//   initialState,
// );

// After applying saga
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
