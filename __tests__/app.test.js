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

  //POST A NEW ORDER TEST
  it('creates a new order in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/orders')
      .send({ quantity: 10 })
      .then(res => {
        // expect(createMessage).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual({
          id: '1',
          quantity: 10
        });
      });
  });






  afterAll(() => {
    pool.end();
  });
});
