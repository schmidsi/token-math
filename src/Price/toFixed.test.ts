import BigInteger from "../bigInteger/BigInteger";

import toFixed from "./toFixed";

test("toFixed", () => {
  const price = {
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

  expect(toFixed(price)).toBe("1.000000");

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

  expect(toFixed(ethInBtc)).toBe("0.043802");

  const btcInUsd = {
    base: {
      symbol: "BTC",
      address: "0x123",
      decimals: 8,
      quantity: new BigInteger(100000000)
    },
    quote: {
      symbol: "USD",
      decimals: 2,
      quantity: new BigInteger(645861)
    }
  };

  expect(toFixed(btcInUsd)).toBe("6458.610000");
});
