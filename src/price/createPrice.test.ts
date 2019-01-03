import { isEqual as isEqualBigInteger, toBI } from "../bigInteger";
import { createQuantity } from "../quantity/";
import { default as isEqualPrice } from "./isEqual";
import createPrice from "./createPrice";

test("createPrice", () => {
  const p1 = createPrice(createQuantity("BASE", 1), createQuantity("QUOTE", 2));
  const p2 = createPrice(createQuantity("BASE", 2), createQuantity("QUOTE", 4));

  expect(isEqualBigInteger(p1.base.quantity, toBI("1000000000000000000"))).toBe(
    true
  );

  expect(
    isEqualBigInteger(p1.quote.quantity, toBI("2000000000000000000"))
  ).toBe(true);

  expect(isEqualPrice(p1, p2)).toBe(true);
});
