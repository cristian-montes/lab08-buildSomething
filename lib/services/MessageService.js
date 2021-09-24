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

  //GETS QUOTES FROM DATABSE
  static async getAllQuotes(){
    const allQuotes = await Message.allQuotes();
    return allQuotes;
  }

  //GETS QUOTE BY ID  FROM DATABSE
  static async quotesById(id){
    const quuote = await Message.getQuoteById(id);
    return quuote;
  }








}


module.exports = MessageService;
