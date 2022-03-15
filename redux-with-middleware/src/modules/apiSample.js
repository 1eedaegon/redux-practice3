import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
// POST
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// USER
const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

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

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_POST: true },
    }),
    [GET_POST_SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
      post: payload,
    }),
    [GET_POST_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: true },
    }),
    [GET_USERS_SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
      users: payload,
    }),
    [GET_USERS_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
    }),
  },
  initialState,
);

export default sample;
