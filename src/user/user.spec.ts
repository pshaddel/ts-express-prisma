import request from "supertest";
import { app } from "../app";
import { PrismaClient } from "@prisma/client";

describe("User Service", () => {
  const prisma = new PrismaClient();
  afterAll(async () => {
    await prisma.$disconnect();
  });
  describe("Add a User", () => {
    it("when we pass name and email we should be able to create a test user", async () => {
      // Arrange
      const endpoint = "/users";
      await prisma.user.deleteMany({
        where: {
          name: "testUser"
        }
      });
      //Act
      const result = await request(app).post(endpoint).send({
        name: "testUser",
        email: "testUser@email.com"
      });
      //Assert
      expect(result.body.name).toBe("testUser");
    });
  });
});
