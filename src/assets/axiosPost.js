import axios from 'axios';
import { encode } from 'base-64';

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const auth = `${client_id}:${client_secret}`;
const authHeader = 'Basic ' + encode(auth);

const spotifyPost = (rota, body) => {
  const params = new URLSearchParams(body);
  axios.post(`https://accounts.spotify.com/${rota}`, params, {
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(function (response) {
    localStorage.setItem('token', response.data.access_token);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
  });
}

export default spotifyPost;
