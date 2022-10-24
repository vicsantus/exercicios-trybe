import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PREVIOUS_COLOR':
      return { index: state.index !== 0 ? state.index - 1 : 5 };
    case 'NEXT_COLOR':
      return { index: state.index !== 5 ? state.index + 1 : 0 };
    default:
      return state;
  }
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const prevAction = { type: 'PREVIOUS_COLOR' };
const nextAction = { type: 'NEXT_COLOR' };

const prevBtn = document.querySelector('#previous');
prevBtn.addEventListener('click', () => {
  store.dispatch(prevAction)
});

const nextBtn = document.querySelector('#next');
nextBtn.addEventListener('click', () => {
  store.dispatch(nextAction)
});

store.subscribe(() => {
  const valor = document.querySelector('#value');
  const container = document.querySelector('#container')
  const estados = store.getState();
  valor.innerHTML = INITIAL_STATE.colors[estados.index];
  container.style.background = INITIAL_STATE.colors[estados.index];
})