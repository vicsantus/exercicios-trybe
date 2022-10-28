import { FETCH_ERROR, GET_FETCH, RECEIVE_FETCH } from '../actions';

const INITIAL_STATE = {
  data: '',
  isntLoading: false,
  error: '',
};

const getObjReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FETCH:
      return ({
        ...state,
        isntLoading: false,
      });
    case RECEIVE_FETCH:
      return ({
        ...state,
        data: action.payload,
        isntLoading: true,
      });
    case FETCH_ERROR:
      return ({
        ...state,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default getObjReducer;
