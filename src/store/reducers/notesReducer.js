import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notes: []
};

const setNotes = (state, action) => {
  return {
    ...state,
    notes: action.notes
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTES:
      return setNotes(state, action);
    default:
      return state;
  }
}