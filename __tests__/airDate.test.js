const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('it gets episodes air date from rick and morty', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POST AN EPISODE
  it('stores a new airdate in SQL Table', async () => {
    return request(app)
      .post('/api/v1/airdate/1')
      .send({ air_date: 'December 2, 2013' })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          air_date: 'December 2, 2013'
        });
      });
  });

  // GET ALL QUOTES FROM DATABASE
  it('grabs all of the airdates from database', () => {

    return request(app)
      .get('/api/v1/airdate/')
      .then(res => {
        expect(res.body).toEqual([{
          id: '1',
          air_date: 'December 2, 2013'

        }]);
      });
  });






  afterAll(() => {
    pool.end();
  });

});

