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

const updateNote = (state, action) => {
  return {
    ...state,
    notes: state.notes.map(elem => {
      if (elem.header === action.note.header) {
        return {...elem, text: action.note.text}
      } else {
        return elem
      }
    })
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTES:
      return setNotes(state, action);
    case (actionTypes.UPDATE_NOTE):
      return updateNote(state, action);
    default:
      return state;
  }
}