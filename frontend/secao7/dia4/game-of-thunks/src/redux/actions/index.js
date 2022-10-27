export const GET_FETCH = 'GET_FETCH';

export const RECEIVE_FETCH = 'RECEIVE_FETCH';

export const FETCH_ERROR = 'FETCH_ERROR';

export const getFetch = () => ({
  type: GET_FETCH,
});

export const receiveFetch = (data) => ({
  type: RECEIVE_FETCH,
  payload: data,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});


export const makeFetch = (name) => {
  return async (dispatch) => {
    dispatch(getFetch());
      try {
      const r = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const response = await r.json();
      return dispatch(receiveFetch(response));
    } catch (error) {
      return dispatch(fetchError(error));
    }
  }
}
