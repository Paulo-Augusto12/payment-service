import request from "supertest";
import { app } from "../app";
describe("App tests", () => {
  test("Test if server is running", async () => {
    const { body } = await request(app).get("/");
    expect(body).toEqual({ server: "Server is running" });
  });
});
