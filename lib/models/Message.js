// const DomainPage = require('twilio/lib/rest/api/v2010/account/sip/domain');
// const quotes = require('../controllers/quotes');
const pool = require('../utils/pool');

module.exports = class Message {

   

  constructor(row) {
    this.id = row.id;
    this.quote = row.quote;
  }

  //INSERT ORDER
  static async insert({ quote }) {
    const { rows } = await pool.query(
      'INSERT INTO quotesmsg (quote) VALUES ($1) RETURNING *',
      [quote]
    );
    return new Message(rows[0]);
  }

  //GET ALL QUOTES
  static async allQuotes(){
    const { rows } = await pool.query(
      'SELECT * FROM quotesmsg'
    );
    return rows.map(row => new Message(row));
  }

  //GET QUOTES BY ID
  static async getQuoteById(quoteId){
    const { rows } = await pool.query(
      `SELECT * FROM quotesmsg
      WHERE id=$1`, [quoteId]
    );
    return rows[0];

  }

  // UPDATE QUOTE BY ID
  static async updateById(id, quote){
    const { rows } = await pool.query(
      'UPDATE quotesmsg SET quote=$2 WHERE id=$1 RETURNING *',
      [id, quote.quote]);

    return rows[0];
  }

  //DELETE QUOTE BY ID
  static async deleteById(quoteId){
    const { rows } = await pool.query(
      'DELETE FROM quotesmsg WHERE id=$1', [quoteId]
    );
  }


};

