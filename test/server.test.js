const request = require("supertest");
const app = require("/Users/sethlassen/Desktop/FEC/RatingsAndReviewsService/server/app.js");

describe("GET /api/products/18/reviews", () => {
  test("It should respond with same data after getting from product #18 twice in a row", async () => {
    const response1 = await request(app).get("/api/products/18/reviews");
    const response2 = await request(app).get("/api/products/18/reviews");
    expect(response1.body).toEqual(response2.body);
  });
});

describe("GET /api/products/18/reviews ", () => {
  test("It should respond with different data after getting from two different product IDs", async () => {
    const response1 = await request(app).get("/api/products/10/reviews");
    const response2 = await request(app).get("/api/products/20/reviews");
    expect(response1.body).not.toEqual(response2.body);
  });
});