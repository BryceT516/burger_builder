import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-d23dd.firebaseio.com/'
});

export default instance;