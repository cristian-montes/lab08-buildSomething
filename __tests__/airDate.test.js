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

  it('grabs quotes by it from database', () => {
    return request(app)
      .get('/api/v1/airdate/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          air_date: 'December 2, 2013'
        });
      });
  });


  //UPDATES AIRDATE BY ID
  it('grabs airdate by id from the database and updates it', () => {
    return request(app)
      .put('/api/v1/airdate/1')
      .send({ air_date: 'February 2, 2012' })
      .then((res) => { 
        expect (res.body).toEqual({
          id: '1', 
          air_date: 'February 2, 2012'
        });
      });
  });

  //DELETES QUOTE BY ID
  it('deletes airdate by id from the database', async() => {
    const result = await request(app).delete('/api/v1/airdate/1');
    expect(result.body).toEqual({});
  });




  afterAll(() => {
    pool.end();
  });

});

