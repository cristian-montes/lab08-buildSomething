const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api';

//GETS ALL OF THE CHARACTERS IN THE FIRST PAGE
async function fetchData(){

  const data = await fetch(`${URL}/character`);
  const jData = await data.json();
  return jData;
}

//GETS ALL OF THE LOCATIONS IN THE FIRST PAGE
async function fetchLocationData(){
  const data = await fetch(`${URL}/location`);
  const jData = await data.json();
  return jData;}


module.exports = { fetchData, fetchLocationData };
