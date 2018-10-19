import BigInteger from "../bigInteger/BigInteger";
import isEqual from "./isEqual";

import subtract from "./subtract";

const quantityA1 = {
  token: {
    symbol: "TKNA",
    address: "0x0",
    decimals: 3
  },
  quantity: new BigInteger(2000)
};

const quantityA2 = {
  token: {
    symbol: "TKNA",
    address: "0x0",
    decimals: 3
  },
  quantity: new BigInteger(3000)
};

const quantityB1 = {
  token: {
    symbol: "TKNB",
    address: "0x1",
    decimals: 4
  },
  quantity: new BigInteger(20000)
};

test("subtract", () => {
  const result = subtract(quantityA2, quantityA1);
  const expected = {
    token: {
      symbol: "TKNA",
      address: "0x0",
      decimals: 3
    },
    quantity: new BigInteger(1000)
  };

  expect(isEqual(result, expected)).toBe(true);

  expect(() => subtract(quantityA1, quantityB1)).toThrow();
});
