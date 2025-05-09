import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });
describe("App Visual Regression Tests", () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.setViewport({ width: 1280, height: 800 });
  });
  afterAll(async () => {
    await page.close();
  });
  it("should match the initial screen snapshot", async () => {
    await page.goto("http://localhost:5173");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
  it("should match the cart with items snapshot", async () => {
    await page.goto("http://localhost:5173");
    await page.click('[data-testid="product"] button');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
});
