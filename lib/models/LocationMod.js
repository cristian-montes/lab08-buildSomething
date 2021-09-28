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






};
