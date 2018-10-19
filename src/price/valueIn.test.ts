import BigInteger from "../bigInteger/BigInteger";
import isEqual from "../quantity/isEqual";

import valueIn from "./valueIn";

test("valueIn", () => {
  const ethInBtc = {
    base: {
      token: {
        symbol: "ETH",
        address: "0x234",
        decimals: 18
      },
      quantity: new BigInteger("1000000000000000000")
    },
    quote: {
      token: {
        symbol: "BTC",
        address: "0x123",
        decimals: 8
      },
      quantity: new BigInteger(4380219)
    }
  };

  const result1 = valueIn(ethInBtc, {
    token: {
      symbol: "ETH",
      address: "0x234",
      decimals: 18
    },
    quantity: new BigInteger("2000000000000000000")
  });
  const expected1 = {
    token: {
      symbol: "BTC",
      address: "0x123",
      decimals: 8
    },
    quantity: new BigInteger(8760438)
  };

  expect(isEqual(result1, expected1)).toBe(true);

  const result2 = valueIn(ethInBtc, {
    token: {
      symbol: "BTC",
      address: "0x123",
      decimals: 8
    },
    quantity: new BigInteger(8760438)
  });
  const expected2 = {
    token: {
      symbol: "ETH",
      address: "0x234",
      decimals: 18
    },
    quantity: new BigInteger("2000000000000000000")
  };

  expect(isEqual(result2, expected2)).toBe(true);
});
