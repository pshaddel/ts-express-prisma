import request from "supertest";
import { app } from "./app";
describe("App", () => {
	it("should get pong in result of ping", async () => {
		const result = await request(app).get("/ping");
		expect(result.text).toBe("pong");
	});
	it("should get 404 for not found", async () => {
		const result = await request(app).get("/not-found");
		expect(result.status).toBe(404);
	});
});
