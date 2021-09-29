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

  // GET ALL EPISODES FROM DATABASE
  it('grabs all of the episodes from database', () => {

    return request(app)
      .get('/api/v1/episodename/')
      .then(res => {
        expect(res.body).toEqual([{
          id: '1',
          episode_name:'Pilot'
        }]);
      });
  });

  // GETS  LOCATION BY ID
  it('grabs episodes by it from database', () => {
    return request(app)
      .get('/api/v1/episodename/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          episode_name:'Pilot'
        });
      });
  });

  //UPDATES EPISODE BY ID
  it('grabs quote by id from the database and updates it', () => {
    return request(app)
      .put('/api/v1/episodename/1')
      .send({ episode_name: 'taco cristian!!!!' })
      .then((res) => { 
        expect (res.body).toEqual({
          id: '1',
          episode_name:'taco cristian!!!!' 
        });
      });
  });




  afterAll(() => {
    pool.end();
  });
});
