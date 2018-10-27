import * as actionTypes from '../actions/actionTypes';

const initialState = {
  notes: [],
  notification: false
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

const showNotification = (state, action) => {
  return {
    ...state,
    notification: true
  }
};

const closeNotification = (state, action) => {
  return {
    ...state,
    notification: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTES:
      return setNotes(state, action);
    case (actionTypes.UPDATE_NOTE):
      return updateNote(state, action);
    case (actionTypes.SHOW_NOTIFICATION):
      return showNotification(state, action);
    case (actionTypes.CLOSE_NOTIFICATION):
      return closeNotification(state, action);
    default:
      return state;
  }
}