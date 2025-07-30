import { sum } from "../sum.jsx";

test("Sum Function Should Calculate the sum of two numbers", () => {
  // IMPLEMENTATION OR WHAT ARE WE TESTING

  const result = sum(3, 4);

  // ASSERTION
  expect(result).toBe(7);
});
