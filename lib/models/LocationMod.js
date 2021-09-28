const locations = require('../controllers/locationCon');
const pool = require('../utils/pool');

module.exports = class Location {

  constructor(row) {
    this.id = row.id,
    this.location_name = row.location_name,
    this.kind_of = row.kind_of,
    this.dimension = row.dimension;
  }

  //INSERTS LOCATION INFO
  static async insert({ location_name, kind_of, dimension }){
    const { rows } = await pool.query(`
    INSERT INTO locationmesa (location_name,kind_of,dimension) VALUES ($1,$2,$3) RETURNING *`, [location_name, kind_of, dimension]
    );

    return new Location(rows[0]);
  }


  //GET ALL LOCATIONS
  static async allLocations(){
    const { rows } = await pool.query(
      'SELECT * FROM locationmesa'
    );

    return rows.map(row => new Location(row));
  }

  //GET LOCATION BY ID
  static async getLocationById(locationID){
    const { rows } = await pool.query(
      'SELECT * FROM locationmesa WHERE id=$1', [locationID]
    );
    return rows[0];
  }

  //UPDATE LOCATION BY ID 
  static async updateLocationById(locationID, bodyObj){
    const { rows } = await pool.query(
      'UPDATE locationmesa SET location_name=$2, kind_of=$3, dimension=$4 WHERE id = $1 RETURNING *', [locationID, bodyObj.location_name, bodyObj.kind_of, bodyObj.dimension]);
    return rows[0];
  }




};
