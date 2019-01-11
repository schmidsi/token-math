import BigInteger from "../bigInteger/BigInteger";
import isZero from "./isZero";
import createQuantity from "./createQuantity";

test("isZero", () => {
  expect(
    isZero({
      token: {
        symbol: "TKNB",
        address: "0x1",
        decimals: 4
      },
      quantity: new BigInteger(0)
    })
  ).toBe(true);

  expect(
    isZero({
      token: {
        symbol: "TKNA",
        address: "0x1",
        decimals: 4
      },
      quantity: new BigInteger("0")
    })
  ).toBe(true);

  expect(isZero(createQuantity("ASDF", 0))).toBe(true);
  expect(isZero(createQuantity("ASDF", "0"))).toBe(true);
  expect(isZero(createQuantity("ASDF", 0.0))).toBe(true);
});
