const fetch = require('node-fetch');



async function fetchData(){

  const data = await fetch('https://rickandmortyapi.com/api/character');
  const jData = await data.json();
  return jData;
}

module.exports = { fetchData };
