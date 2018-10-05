import BigInteger from "../bigInteger/BigInteger";
import isEqual from "./isEqual";

import getPrice from "./getPrice";

const quantityA1 = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3,
  quantity: new BigInteger(2000)
};

const quantityB1 = {
  symbol: "TKNB",
  address: "0x1",
  decimals: 4,
  quantity: new BigInteger(20000)
};

test("getPrice", () => {
  const result = getPrice(quantityA1, quantityB1);
  const expected = {
    base: {
      symbol: "TKNA",
      address: "0x0",
      decimals: 3,
      quantity: new BigInteger(1)
    },
    quote: {
      symbol: "TKNB",
      address: "0x1",
      decimals: 4,
      quantity: new BigInteger(10)
    }
  };

  expect(isEqual(result, expected)).toBe(true);
});
