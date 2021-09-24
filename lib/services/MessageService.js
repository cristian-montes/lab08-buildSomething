const Message =  require('../models/Message');
// const sendSms = require('../utils/twilio');
const { fetchData } = require('../utils/fetchTheData');

class MessageService {


  // CREATES A NEW QUOTE 
  static async getAllInfo(){
    const info = await fetchData();
    return info.results.map((charInfo) => {
      return  {
        id: charInfo.id,
        name: charInfo.name,
        status: charInfo.status,
        species: charInfo.species
      };
    });
    
    // return `${theID.name} is ${theID.species} and is ${theID.status}`;
    

    // const mensaje = await Message.insert({ quote: characterData });

    // console.log('HEREEEE', mensaje);

    // return mensaje;

  }

  // PUTS THE NEW QUOTE IN THE SQL TABLE
  static async postQuote(id){
    const characterData = await this.getAllInfo();
    const numberID = Number(id);

    const desiredQuote = [];

    for(const character of characterData){
      if(character.id === numberID){
        desiredQuote.push(`${character.name} you are ${character.status}, because your are decedent of ${character.species}s`);
      }
    }

    const mensaje = await Message.insert({ quote: desiredQuote[0] });

    return mensaje;

  }








}


module.exports = MessageService;
