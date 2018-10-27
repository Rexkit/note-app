import * as actionTypes from './actionTypes';
import axios from '../../axios-notes';

export const setNotes = (notes) => {
  return {
    type: actionTypes.SET_NOTES,
    notes: notes
  };
};

export const updateNoteSuccess = (note) => {
  return {
    type: actionTypes.UPDATE_NOTE,
    note: note
  }
};

export const showNotification = () => {
  return {
    type: actionTypes.SHOW_NOTIFICATION
  }
};

export const closeNotification = () => {
  return {
    type: actionTypes.CLOSE_NOTIFICATION
  }
};

export const updateNote = (note) => {
  return dispatch => {
    return axios.patch(`https://note-app-c9137.firebaseio.com/notes/${note.header}.json`, note)
      .then(res => {
        console.log(res);
        dispatch(updateNoteSuccess(note));
        dispatch(showNotification());
      })
      .catch(err => {
        console.log(err);
      })
  }
};


export const initNotes = () => {
  return dispatch => {
    axios.get('https://note-app-c9137.firebaseio.com/notes.json')
      .then(res => {
        console.log(res);
        const fetchedNotes = [];
        for (let key in res.data) {
          fetchedNotes.push({
            header: key,
            text: res.data[key].text
          });
        }
        console.log(fetchedNotes);
        dispatch(setNotes(fetchedNotes));
      })
      .catch(err => {
        console.log(err);
      })
  }
};