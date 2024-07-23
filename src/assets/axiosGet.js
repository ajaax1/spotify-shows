import axios from 'axios';

export const api = axios.post('/user', {
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {

  });  