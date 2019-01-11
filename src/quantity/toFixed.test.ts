import createQuantity from "./createQuantity";
import toFixed from "./toFixed";
import createToken from "../token/createToken";

test("toFixed", () => {
  const q1 = createQuantity("TEST", 1.2);
  expect(toFixed(q1)).toBe("1.200000");
  expect(toFixed(q1, 0)).toBe("1");
  expect(toFixed(q1, 3)).toBe("1.200");

  const q2 = createQuantity("TEST2", "10");
  expect(toFixed(q2)).toBe("0.000000");
  expect(toFixed(q2, 18)).toBe("0.000000000000000010");

  const q3 = createQuantity(createToken("USD", null, 2), "100");
  expect(toFixed(q3)).toBe("1.00");
});
