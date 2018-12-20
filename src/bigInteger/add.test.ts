import add from "./add";
import toBI from "./toBI";

test("add", () => {
  expect(add(toBI(1), toBI(2)).toString()).toBe("3");
  expect(add(toBI(1), toBI(2), toBI(3)).toString()).toBe("6");
});
