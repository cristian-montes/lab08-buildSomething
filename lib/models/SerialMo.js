const pool = require('../utils/pool');

module.exports = class Serial {

  constructor(row) {
    this.id = row.id,
    this.serial_number = row.serial_number;
  }

  //INSERT ORDER
  static async insert({ serial_number }) {
    const { rows } = await pool.query(
      'INSERT INTO episerialnumber (serial_number) VALUES ($1) RETURNING *',
      [serial_number]
    );
    return new Serial(rows[0]);
  }

  //GET ALL SERIAL NUMBERS
  static async allSerialNumbers(){
    const { rows } = await pool.query(
      'SELECT * FROM episerialnumber'
    );
    return rows.map(row => new Serial(row));
  }

  //GET SERIAL NUMBERS   BY ID
  static async getSerialNumberById(serialNumId){
    const { rows } = await pool.query(
      `SELECT * FROM episerialnumber
      WHERE id=$1`, [serialNumId]
    );
    return rows[0];

  }




};
