const Air = require('../models/AirMo');
const { fetchEpisodeData } = require('../utils/fetchTheData');


class AirService {

  static async getAllAirDates(){
    const info = await fetchEpisodeData();
    return info.results.map((AirInfo) => {
      return{
        id: AirInfo.id,
        name: AirInfo.air_date
      };
    });
  }


  //POSTS A NEW EPISODE IN THE SQL TABLE
  static async postAirDate(id){
    const airDates = await this.getAllAirDates();
    const numberID = Number(id);
    const desiredAirdate = [];

    for(const air of airDates){
      if(air.id === numberID){
        desiredAirdate.push(air.name);
      }
    }
    const episode = await Air.insert({ air_date: desiredAirdate[0] });
    return episode;
  }

  //GETS ALL AIRDATES FROM DATABSE
  static async getAllStoredAirDates(){
    const airDates = await Air.allAirDates();
    return airDates;
  }


  //GETS AIRDATE BY ID  FROM DATABSE
  static async getStoredAirDateById(id){
    const airDate = await Air.getAirDateById(id);
    return airDate;
  }

  //UPDATE AIRDAT BY ID FROM DATABASE
  static async updateStoredAirDate(id, date){
    const airDate = await Air.updateAirDateById(id, date);
    return airDate;
  }

  //DELETE AIRDAT BY ID FROM DATABASE
  static async deleteStoredAirDate(id){
    const airDate = await Air.deleteAirDateById(id);
    return airDate;
  }
    


}

module.exports = AirService;
