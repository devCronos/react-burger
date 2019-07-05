import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-16a53.firebaseio.com/'
});

export default instance;