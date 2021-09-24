const Message =  require('../models/Message');
// const sendSms = require('../utils/twilio');
const { fetchData } = require('../utils/fetchTheData');

class MessageService {


  // CREATES A NEW QUOTE AND SEND TEXT MSG NOTIFICATION
  static async createQuote(id){
    const theID = await fetchData(id);
    
    
    const characterData = `${theID.name} is ${theID.species} and is ${theID.status}`;
    

    const mensaje = await Message.insert({ quote: characterData });

    console.log('HEREEEE', mensaje);

    return mensaje;

  }

}


module.exports = MessageService;
