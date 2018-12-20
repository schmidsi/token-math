import subtract from "./subtract";
import toBI from "./toBI";

test("subtract", () => {
  expect(subtract(toBI(5), toBI(2)).toString()).toBe("3");
  expect(subtract(toBI(10), toBI(2), toBI(3)).toString()).toBe("5");
});
