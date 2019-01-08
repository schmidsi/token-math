import { isEqual } from ".";

test("Checksummed and unchecksummed compare", () => {
  const checksummed = {
    symbol: "TKN",
    address: "0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1",
    decimals: 5
  };
  const unchecked = {
    symbol: "TKN",
    address: "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1",
    decimals: 5
  };
  const withoutAddress = {
    symbol: "TKN",
    decimals: 5
  };
  expect(isEqual(checksummed, unchecked)).toBe(true);
  expect(isEqual(checksummed, withoutAddress)).toBe(false);
});
