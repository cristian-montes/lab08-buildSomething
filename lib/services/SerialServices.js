const Seriall = require('../models/SerialMo');
const { fetchEpisodeData } = require('../utils/fetchTheData');

class SerialService {

  static async getAllSerialNumbers(){
    const info = await fetchEpisodeData();
    return info.results.map((episodeInfo) => {
      return{
        id: episodeInfo.id,
        name: episodeInfo.episode
      };
    });
  }

  //POSTS A NEW SERIAL NUMBER IN THE SQL TABLE
  static async postSerialNumber(id){
    const serialNumbers  = await this.getAllSerialNumbers();
    
    const numberID = Number(id);

    const desiredSerialNumber = [];

    for(const serialNumber of serialNumbers){
      if(serialNumber.id === numberID){
        desiredSerialNumber.push(serialNumber.name);
      }
    }
    const serial = await Seriall.insert({ serial_number: desiredSerialNumber[0] });
    return serial;

  }


  //GETS SERIAL NUMBERS FROM DATABSE
  static async getStoredSerialNumbers(){
    const serialNums = await Seriall.allSerialNumbers();
    return serialNums;
  }

  //GETS SERIAL NUMBERS BY ID FROM DATABSE
  static async getStoredSerialNumberById(id){
    const serialNum = await Seriall.getSerialNumberById(id);
    return serialNum;
  }

  //UPDATES SERIAL NUMBERS BY ID FROM DATABSE
  static async updatesStoredSerialNumberById(id, objBody){
    const serialNum = await Seriall.updateSerialNumberById(id, objBody);
    return serialNum;
  }
  






}

module.exports = SerialService;
