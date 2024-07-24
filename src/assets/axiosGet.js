import axios from 'axios';
 const spotifyGet = (rota) => {
 axios.get(`https://accounts.spotify.com/${rota}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    window.location.href = `https://accounts.spotify.com/${rota}`;
  });  
}
export default spotifyGet;