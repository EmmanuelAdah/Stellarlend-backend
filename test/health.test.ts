import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../src/app.js";

describe("GET /health", () => {
  it("returns 200 and an ok status", async () => {
    const app = createApp();

    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ status: "ok" });
    expect(typeof response.body.uptimeSeconds).toBe("number");
  });
});

describe("unknown routes", () => {
  it("returns a 404 with a stable error envelope", async () => {
    const app = createApp();

    const response = await request(app).get("/this-route-does-not-exist");

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({
      error: { code: "NOT_FOUND" },
    });
  });
});
