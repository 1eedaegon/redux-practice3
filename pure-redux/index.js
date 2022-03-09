import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// Actions
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// Action generator
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// Initial state
const initialState = {
  toggle: false,
  counter: 0,
};

// Reducers
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + action.difference };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

// Renderer
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
};

// Render
render();
store.subscribe(render);

// Eventlistener and dispatchers
divToggle.onclick = () => store.dispatch(toggleSwitch());
btnIncrease.onclick = () => store.dispatch(increase(1));
btnDecrease.onclick = () => store.dispatch(decrease());
