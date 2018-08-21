type BigInt = number;
declare const BigInt: typeof Number;

import {
  add,
  subtract,
  toBigInt,
  Token,
  createQuantity,
  Quantity,
  Price
} from "./index";

const tokenA: Token = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3
};

const tokenB: Token = {
  symbol: "TKNB",
  address: "0x1",
  decimals: 4
};

const tokenC: Token = {
  symbol: "TKNC",
  address: "0x2",
  decimals: 2
};

const quantityA1 = createQuantity(tokenA, toBigInt(2000));
const quantityA2 = createQuantity(tokenA, toBigInt(3000));

test("toBigInt", () => {
  expect(toBigInt(10)).toBe(BigInt(10));
  expect(toBigInt("10")).toBe(BigInt("10"));
  expect(toBigInt("109234859234590872039845709823475098723489057")).not.toBe(
    BigInt(10)
  );
  expect(toBigInt("0x123")).toBe(BigInt(291));
});

test("add", () => {
  expect(add(quantityA1, quantityA2)).toEqual(
    createQuantity(tokenA, toBigInt(5000))
  );
});

test("subtract", () => {
  expect(subtract(quantityA2, quantityA1)).toEqual(
    createQuantity(tokenA, toBigInt(1000))
  );
});
