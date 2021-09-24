const DomainPage = require('twilio/lib/rest/api/v2010/account/sip/domain');
const pool = require('../utils/pool');

module.exports = class Message {

    id;
    quote;

    constructor(row) {
        this.id = row.id
        this.quote = row.quote;
    }

    //INSERT ORDER
  static async insert({ quote }) {
    const {rows} = await pool.query(
      'INSERT INTO quotesmsg (quote) VALUES ($1) RETURNING *',
      [quote]
    );
    return new Message(rows[0]);
  }


}

