import add from "./add";

const quantityA1 = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3,
  quantity: BigInt(2000)
};

const quantityA2 = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3,
  quantity: BigInt(3000)
};

const quantityB1 = {
  symbol: "TKNB",
  address: "0x1",
  decimals: 4,
  quantity: BigInt(20000)
};

test("add", () => {
  expect(add(quantityA1, quantityA2)).toEqual({
    symbol: "TKNA",
    address: "0x0",
    decimals: 3,
    quantity: BigInt(5000)
  });

  expect(() => add(quantityA1, quantityB1)).toThrow();
});
