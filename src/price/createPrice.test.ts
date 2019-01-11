import createQuantity from "../quantity/createQuantity";
import createPrice from "./createPrice";
import isEqual from "../overloads/isEqual";
import toBI from "../bigInteger/toBI";

test("createPrice", () => {
  const p1 = createPrice(createQuantity("BASE", 1), createQuantity("QUOTE", 2));
  const p2 = createPrice(createQuantity("BASE", 2), createQuantity("QUOTE", 4));

  expect(isEqual(p1.base.quantity, toBI("1000000000000000000"))).toBe(true);
  expect(isEqual(p1.quote.quantity, toBI("2000000000000000000"))).toBe(true);
  expect(isEqual(p1, p2)).toBe(true);
});
