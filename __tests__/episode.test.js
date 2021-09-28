const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('it get episodes from rick and morty', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POST AN EPISODE
  it('stores a new episode in SQL Table', async () => {
    return request(app)
      .post('/api/v1/episodename/1')
      .send({ episode_name:'Pilot' })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          episode_name:'Pilot'
        });
      });
  });









});
