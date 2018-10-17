import BigInteger from "../bigInteger/BigInteger";
import isEqual from "../quantity/isEqual";

import valueIn from "./valueIn";

test("valueIn", () => {
  const ethInBtc = {
    base: {
      symbol: "ETH",
      address: "0x234",
      decimals: 18,
      quantity: new BigInteger("1000000000000000000")
    },
    quote: {
      symbol: "BTC",
      address: "0x123",
      decimals: 8,
      quantity: new BigInteger(4380219)
    }
  };

  const result1 = valueIn(ethInBtc, {
    symbol: "ETH",
    address: "0x234",
    decimals: 18,
    quantity: new BigInteger("2000000000000000000")
  });
  const expected1 = {
    symbol: "BTC",
    address: "0x123",
    decimals: 8,
    quantity: new BigInteger(8760438)
  };

  expect(isEqual(result1, expected1)).toBe(true);

  const result2 = valueIn(ethInBtc, {
    symbol: "BTC",
    address: "0x123",
    decimals: 8,
    quantity: new BigInteger(8760438)
  });
  const expected2 = {
    symbol: "ETH",
    address: "0x234",
    decimals: 18,
    quantity: new BigInteger("2000000000000000000")
  };

  expect(isEqual(result2, expected2)).toBe(true);
});
