// Heter API Key Auth i TMDB
const API_KEY = "F14ccc76a67997b78f30a8ec932facf8"; 


const url = `https://api.themoviedb.org/3/movie/100?language=en-US&api_key=${API_KEY}`;


fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

// Heter Access Token Auth i TMDB
const BAERER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRjY2M3NmE2Nzk5N2I3OGYzMGE4ZWM5MzJmYWNmOCIsInN1YiI6IjY1ODAwNjcwMzRlMTUyMDg0NTA3YWY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ebm5lHWXtFbz0vKKelMqWXHy30N6UDAO_XuTkHJl23E';


const url = 'https://api.themoviedb.org/3/movie/100?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BAERER_KEY}`
  }
};


fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));