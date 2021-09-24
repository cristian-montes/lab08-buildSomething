const pool = require('../lib/utils/pool');
// const twilio = require('twilio');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn()
  }
}));


describe('sends tex messages with rick an morty carackters', () => {
  beforeAll(() => {
    return setup(pool);
  });

  //POST A QUOTE
  it('creates a new order in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/quotesmsg/6')
      .send({ quote:'Abadango Cluster Princess you are Alive, because your are decedent of Aliens' })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          quote: 'Abadango Cluster Princess you are Alive, because your are decedent of Aliens'
        });
      });
  });


  // GET ALL QUOTES FROM DATABASE
  it('grabs all of the quotes from database', async() => {

    return request(app)
      .get('/api/v1/quotesmsg')
      .then(res => {
        expect(res.body).toEqual([{
          id: '1',
          quote: 'Abadango Cluster Princess you are Alive, because your are decedent of Aliens'

        }]);
      });
  });






  afterAll(() => {
    pool.end();
  });
});
