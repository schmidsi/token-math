import BigInteger from "../bigInteger/BigInteger";
import isEqual from "../quantity/isEqual";
import valueIn from "./valueIn";
import { createToken } from "../token";
import { createPrice } from "../price";
import { createQuantity, toFixed } from "../quantity";

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

it("Returns zero for zero prices", () => {
  const mln = createToken("MLN");
  const eth = createToken("ETH");

  const zeroPrice = createPrice(createQuantity(mln, 0), createQuantity(eth, 0));

  expect(valueIn(zeroPrice, createQuantity(mln, 10))).toEqual(
    createQuantity(eth, 0)
  );

  expect(valueIn(zeroPrice, createQuantity(eth, 10))).toEqual(
    createQuantity(mln, 0)
  );
});

it("Reversed value in with decimals", () => {
  const mln = createToken("MLN");
  const eth = createToken("ETH");

  const price = createPrice(createQuantity(mln, 1), createQuantity(eth, 10));

  expect(toFixed(valueIn(price, createQuantity(eth, 2)))).toBe("0.200000");
});
