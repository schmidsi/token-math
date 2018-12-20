import divide from "./divide";
import toBI from "./toBI";

test("divide", () => {
  expect(divide(toBI(4), toBI(2)).toString()).toBe("2");
  expect(divide(toBI(12), toBI(2), toBI(2)).toString()).toBe("3");
});
