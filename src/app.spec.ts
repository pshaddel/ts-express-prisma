import request from 'supertest';
import { app } from './app';
describe('App', () => {
  it('should get pong in result of ping', async (done) => {
    const result = await request(app).get('/ping');
    expect(result.text).toBe('pong');
    done();
  });
});
