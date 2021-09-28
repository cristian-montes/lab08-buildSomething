const pool = require('../utils/pool');

module.exports = class Air {
  constructor(row) {
    this.id = row.id,
    this.air_date = row.air_date;
  }

  //INSERT NEW EPISODE
  static async insert({ air_date }) {
    const { rows } = await pool.query(
      'INSERT INTO airdate (air_date) VALUES ($1) RETURNING *',
      [air_date]
    );
    return new Air(rows[0]);

  }

  //GET ALL AIR DATES FROM DATABASE
 
  static async allAirDates(){
    const { rows } = await pool.query(
      'SELECT * FROM airdate'
    );
    return rows.map(row => new Air(row));
  }

  //GET AIRDATES BY ID
  static async getAirDateById(airDateId){
    const { rows } = await pool.query(
      `SELECT * FROM airdate
      WHERE id=$1`, [airDateId]
    );
    return rows[0];

  }

  // UPDATE AIRDATE BY ID
  static async updateAirDateById(id, date){
    const { rows } = await pool.query(
      'UPDATE airdate SET air_date=$2 WHERE id=$1 RETURNING *',
      [id, date.air_date]);

    return rows[0];
  }

  //DELETE AIRDATE BY ID
  static async deleteAirDateById(airDateId){
    const {rows} = await pool.query(
      'DELETE FROM airdate WHERE id=$1', [airDateId]
    );
  }





  

};
