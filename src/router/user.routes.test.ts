import request from "supertest";
import { app } from "./app/app";
describe("Testing user routes", () => {
  test("Test endpoint", async () => {
    const { body } = await request(app).get("/users");

    expect(body).toEqual({
      interestingUsers: ["Carlos", "Luiz", "Fernando", "Cláudio", "Karine"],
    });
  });
});
