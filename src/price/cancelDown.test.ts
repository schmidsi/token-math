import BigInteger from "../bigInteger/BigInteger";
import isEqual from "./isEqual";

import cancelDown from "./cancelDown";

const quantityA1 = {
  token: {
    symbol: "TKNA",
    address: "0x0",
    decimals: 3
  },
  quantity: new BigInteger(2000)
};

const quantityB1 = {
  token: {
    symbol: "TKNB",
    address: "0x1",
    decimals: 4
  },
  quantity: new BigInteger(20000)
};

test("cancelDown", () => {
  const result = cancelDown({ base: quantityA1, quote: quantityB1 });
  const expected = {
    base: {
      token: {
        symbol: "TKNA",
        address: "0x0",
        decimals: 3
      },
      quantity: new BigInteger(1)
    },
    quote: {
      token: {
        symbol: "TKNB",
        address: "0x1",
        decimals: 4
      },
      quantity: new BigInteger(10)
    }
  };

  expect(isEqual(result, expected)).toBe(true);
});
