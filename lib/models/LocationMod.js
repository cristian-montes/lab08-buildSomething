const locations = require('../controllers/locationCon');
const pool = require('../utils/pool');

module.exports = class Location {

  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.kind_of = row.kind_of,
    this.dimension = row.dimension;
  }

  //INSERTS LOCATION INFO
  static async insert({ name, kind_of, dimension }){
    const { rows } = await pool.query(`
    INSERT INTO locationmesa (name, kind_of, dimension) VALUES ($1,$2,$3) RETURNING *`[name, kind_of, dimension]
    );

    return new Location(rows[0]);
  }






};
