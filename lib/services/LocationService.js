const Location = require('../models/LocationMod');
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



}

module.exports = LocationService;
