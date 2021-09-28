const Location = require('../models/LocationMod');
const { updateLocationById } = require('../models/LocationMod');
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
    
    const newLocation = await LocationMod.insert({ 
      location_name:desiredLocation[0],
      kind_of: desiredLocation[1],
      dimension: desiredLocation[2],
    });
    return newLocation;
  }


  //GETS ALL LOCATIONS FROM TABLE
  static async getStoredLocations(){
    const allLocations = await LocationMod.allLocations();
    return allLocations;
  }

  //GETS LOCATION BY ID FROM TABLE  
  static async getStoredById(id){
    const location = await LocationMod.getLocationById(id);
    return location;
  }

  //UPDATES LOCATION BY ID FROM TABLE
  static async updateStoredById(id, bodyObj){
    const updatedLocation = await LocationMod.updateLocationById(id, bodyObj);
    console.log(updatedLocation);
    return updatedLocation;
  }





}

module.exports = LocationService;
