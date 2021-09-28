const pool = require('../utils/pool');

module.exports = class Episode {
  constructor(row) {
    this.id = row.id,
    this.episode_name = row.episode_name;
  }

  //INSERT NEW EPISODE
  static async insert({ episode_name }) {
    const { rows } = await pool.query(
      'INSERT INTO episodename (episode_name) VALUES ($1) RETURNING *',
      [episode_name]
    );
    return new Episode(rows[0]);
  }




};
