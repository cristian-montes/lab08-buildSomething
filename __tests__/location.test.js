const pool = require('../lib/utils/pool');
// const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('sends tex messages with rick an morty carackters', () => {
  beforeEach(() => {
    return setup(pool);
  });

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





});
