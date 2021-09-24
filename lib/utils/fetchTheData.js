const fetch = require('node-fetch');



async function fetchData(charactId){

  const data = await fetch(`https://rickandmortyapi.com/api/character/${charactId}`);
  const jData = await data.json();
  return jData;
}

module.exports = { fetchData };
