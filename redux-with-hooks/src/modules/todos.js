import { createAction } from 'redux-actions';

// Actions
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// Action generator
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3; // Initial state of action generator
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id + 1,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// Action generator(redux actions)
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 4;
export const insert = createAction(INSERT, (text) => ({
  id: id + 1,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// Initial state
const initialState = {
  input: '',
  todos: [
    { id: 1, text: 'Practice pure redux', done: true },
    { id: 2, text: 'redux hook 같이 하기', done: false },
    { id: 3, text: 'redux middlewares', done: false },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    case INSERT:
      return { ...state, todos: state.todos.concat(action.todo) };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
