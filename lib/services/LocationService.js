const LocationMod = require('../models/LocationMod');
const { fetchLocationData } = require('../utils/fetchTheData');


class LocationService {

  // FETCH DATA
  static async getAllLocations(){
    const info = await fetchLocationData();
    return info.results.map((LocationInfo) => {
      return{
        id: LocationInfo.id,
        name: LocationInfo.name,
        kind_of: LocationInfo.type,
        dimension: LocationInfo.dimension
      };
    });
  }

  //POST NEW LOCATION INTO THE SQL TABLE
  static async postLocation(id){
    const allLocationsData = await this.getAllLocations();
  

    const numberID = Number(id);

    const desiredLocation = [];

    for(const location of allLocationsData){
      if(location.id === numberID){
        desiredLocation.push(location.name);
        desiredLocation.push(location.kind_of);
        desiredLocation.push(location.dimension);
      }
    }
    // console.log('HHHHEHEHHEHEHE', desiredLocation);
   

    const newLocation = await LocationMod.insert({ 
      location_name:desiredLocation[0],
      kind_of: desiredLocation[1],
      dimension: desiredLocation[2],
    });
    console.log(newLocation);
    return newLocation;
  }


}

module.exports = LocationService;
