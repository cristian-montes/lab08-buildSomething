const pool = require('../lib/utils/pool');
// const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('sends tex messages with rick an morty carackters', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POSTS NEW LOCATION
  it('it posts new location in table', () => {
    return request(app)
      .post('/api/v1/locationmesa/locations/1')
      .send({
        location_name:'Earth (C-137)',
        kind_of: 'Planet',
        dimension: 'Dimension C-137' })
      .then(res => {
        expect(res.body).toEqual({ id:'1', location_name:'Earth (C-137)', kind_of: 'Planet', dimension: 'Dimension C-137' 
        });
      });
  });

  //GRABS ALL OF THE LOCATIONS
  it('it grabs all of the locations in table', () => {
    return request(app)
      .get('/api/v1/locationmesa/')
      .then(res => {
        expect(res.body).toEqual([{ id:'1', location_name:'Earth (C-137)', kind_of: 'Planet', dimension: 'Dimension C-137' 
        }]);
      });
  });

  //GETS LOCATION BY ID
  it('it grabs a location by id in the table', () => {
    return request(app)
      .get('/api/v1/locationmesa/1')
      .then(res => {
        expect(res.body).toEqual({ id:'1', location_name:'Earth (C-137)', kind_of: 'Planet', dimension: 'Dimension C-137' 
        });
      });
  });

  //UPDATES LOCATION BY ID
  it('it updates location by ud', () => {
    return request(app)
      .put('/api/v1/locationmesa/1')
      .send({ location_name:'Earth (C-137)', kind_of: 'Uranos', dimension: 'Dimension C-6969' })
      .then(res => {
        expect(res.body).toEqual({ id:'1', location_name:'Earth (C-137)', kind_of: 'Uranos', dimension: 'Dimension C-6969' });

      });
  });







  afterAll(() => {
    pool.end();
  });
});
