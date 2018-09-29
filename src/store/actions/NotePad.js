import * as actionTypes from './actionTypes';
import axios from '../../axios-notes';

export const setNotes = (notes) => {
  return {
    type: actionTypes.SET_NOTES,
    notes: notes
  };
};


export const initNotes = () => {
  return dispatch => {
    axios.get('https://note-app-c9137.firebaseio.com/notes.json')
      .then(res => {
        const fetchedNotes = [];
        for (let key in res.data) {
          fetchedNotes.push({
            header: key,
            text: res.data[key]
          });
        }
        dispatch(setNotes(fetchedNotes));
      })
      .catch(err => {
        console.log(err);
      })
  }
};