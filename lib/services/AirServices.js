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
    


}

module.exports = AirService;
