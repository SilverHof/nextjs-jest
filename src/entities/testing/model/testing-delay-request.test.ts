import { testingDelayRequest } from "./testing-delay-request"

describe("", () => {
  test("should call callback", async () => {
    const sum = await testingDelayRequest(() => 10 + 10, 2000);
    expect(sum).toEqual(20)
  })
})