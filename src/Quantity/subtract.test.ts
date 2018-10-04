import subtract from "./subtract";

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

test("subtract", () => {
  expect(subtract(quantityA2, quantityA1)).toEqual({
    symbol: "TKNA",
    address: "0x0",
    decimals: 3,
    quantity: BigInt(1000)
  });

  expect(() => subtract(quantityA1, quantityB1)).toThrow();
});
