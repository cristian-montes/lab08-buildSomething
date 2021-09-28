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

  //GET ALL EPISODES
  static async allEpisodes(){
    const { rows } = await pool.query(
      'SELECT * FROM episodename'
    );
    return rows.map(row => new Episode(row));
  }

  //GET EPISODE BY ID
  static async getEpisodeById(episodeId){
    const { rows } = await pool.query(
      `SELECT * FROM episodename
      WHERE id=$1`, [episodeId]
    );
    return rows[0];

  }

  // UPDATE QUOTE BY ID
  static async updateEpisodeById(id, objBody){
    const { rows } = await pool.query(
      'UPDATE episodename SET episode_name=$2 WHERE id=$1 RETURNING *',
      [id, objBody.episode_name]);

    return rows[0];
  }
  //DELETE QUOTE BY ID
  static async deleteEpisodeById(episodeId){
    const { rows } = await pool.query(
      'DELETE FROM episodename WHERE id=$1', [episodeId]
    );
  }


};
