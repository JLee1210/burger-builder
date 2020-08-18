import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-server-268c0.firebaseio.com',
});

export default instance;
