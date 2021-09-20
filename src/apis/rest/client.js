import axios from 'axios';

const Client = {
  path: {
    bithumbPublicApi: process.env.REACT_APP_BITHUMB_PUBLIC_API_PATH,
  },
  credentialsInstance: axios.create({ withCredentials: true }),
  publicInstance: axios.create(),
};
export default Client;
