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
  beforeEach(() => {
    return setup(pool);
  });

  //POST A MESSAGE
  it('creates a new order in our database and sends a text message', () => {
    return request(app)
      .get('/api/v1/quotesmsg/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          quote: 'Morty Smith is Human and Alivee'
        });
      });


  });






  afterAll(() => {
    pool.end();
  });
});
