import request from 'supertest';
import { app } from '../app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User Service', () => {
  describe('Add a User', () => {
    it('when we pass name and email we should be able to create a test user', async (done) => {
      // Arrange
      const endpoint = '/users';
      await prisma.user.deleteMany({
        where: {
          name: 'testUser'
        }
      });
      //Act
      const result = await request(app).post(endpoint).send({
        name: 'testUser',
        email: 'testUser@email.com'
      });
      //Assert
      expect(result.body.name).toBe('testUser');
      done();
    });
  });
});
