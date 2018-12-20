import BigInteger from "../bigInteger/BigInteger";
import isEqual from "./isEqual";

import add from "./add";

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

const quantityA3 = {
  token: {
    symbol: "TKNA",
    address: "0x0",
    decimals: 3
  },
  quantity: new BigInteger(4000)
};

const quantityB1 = {
  token: {
    symbol: "TKNB",
    address: "0x1",
    decimals: 4
  },
  quantity: new BigInteger(20000)
};

test("add", () => {
  const result = add(quantityA1, quantityA2);
  const expected = {
    token: {
      symbol: "TKNA",
      address: "0x0",
      decimals: 3
    },
    quantity: new BigInteger(5000)
  };

  expect(isEqual(result, expected)).toBe(true);

  expect(() => add(quantityA1, quantityB1)).toThrow();
});

test("add multiple", () => {
  const result = add(quantityA1, quantityA2, quantityA3);
  const expected = {
    token: {
      symbol: "TKNA",
      address: "0x0",
      decimals: 3
    },
    quantity: new BigInteger(9000)
  };

  expect(isEqual(result, expected)).toBe(true);
});
