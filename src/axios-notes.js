import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://note-app-c9137.firebaseio.com/'
});

export default instance;