import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

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
      .post('/api/v1/quotesmsg')
      .send({ quote: 'Morty Smith is Human and Alivee'})
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
