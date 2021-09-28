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

  //GET ALL QUOTES
  static async allEpisodes(){
    const { rows } = await pool.query(
      'SELECT * FROM episodename'
    );
    return rows.map(row => new Episode(row));
  }

  static async getEpisodeById(episodeId){
    const { rows } = await pool.query(
      `SELECT * FROM episodename
      WHERE id=$1`, [episodeId]
    );
    return rows[0];

  }



};
