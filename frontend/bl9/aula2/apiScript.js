// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

function setJoke(joke) {
  const divJoker = document.querySelector('#jokeContainer');
  divJoker.innerHTML = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => setJoke(data.joke))
    .catch(err => console.log(err));
  
};

window.onload = () => fetchJoke();
//Esse ex é uma piada