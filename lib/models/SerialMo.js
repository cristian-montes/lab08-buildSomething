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


  // UPDATE QUOTE BY ID
  static async updateSerialNumberById(id, objBody){
    const { rows } = await pool.query(
      'UPDATE episerialnumber SET serial_number=$2 WHERE id=$1 RETURNING *',
      [id, objBody.serial_number]);

    return rows[0];
  }
  //DELETE QUOTE BY ID
  static async deleteSerialNumberById(quoteId){
    const { rows } = await pool.query(
      'DELETE FROM episerialnumber WHERE id=$1', [quoteId]
    );
  }



};
