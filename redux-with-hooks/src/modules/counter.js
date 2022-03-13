import { createAction, handleActions } from 'redux-actions';

// Actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action generator
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// Action generator(redux-actions)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Initial state
const initialState = {
  number: 0,
};

// Reducer
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// Reducer(redux-actions)

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
