import axios from 'axios';
 const spotifyGet = (rota) => {
 axios.get(`https://api.spotify.com/${rota}`, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')

    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {

  });  
}
export default spotifyGet;