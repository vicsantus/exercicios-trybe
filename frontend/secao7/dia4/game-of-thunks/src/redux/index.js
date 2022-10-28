import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import getObjReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(getObjReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))

export default store;
