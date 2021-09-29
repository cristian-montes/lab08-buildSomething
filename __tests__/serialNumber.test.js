const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('it gets episodes serial number from rick and morty', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POST A SERIAL NUMBER
  it('creates a serial number in our database', async () => {
    return request(app)
      .post('/api/v1/episerialnumber/1')
      .send({ serial_number :'S01E01' })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          serial_number:'S01E01',
        });
      });
  });

  // GET ALL QUOTES FROM DATABASE
  it('grabs all of the serial numbers from database', () => {

    return request(app)
      .get('/api/v1/episerialnumber/')
      .then(res => {
        expect(res.body).toEqual([{
          id: '1',
          serial_number:'S01E01',
        }]);
      });
  });

  // GETS QUOTES BY ID
  it('grabs serial numbers by id from database', () => {
    return request(app)
      .get('/api/v1/episerialnumber/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          serial_number:'S01E01'
        });
      });
  });

  //IT UPDATES SERIAL NUMBER BY ID  
  it('grabs serial numbers by id from the database and updates it', () => {
    return request(app)
      .put('/api/v1/episerialnumber/1')
      .send({ serial_number:'SimonEse12' })
      .then((res) => { 
        expect (res.body).toEqual({
          id: '1',
          serial_number:'SimonEse12'
        });
      });
  });





  afterAll(() => {
    pool.end();
  });
    
});
