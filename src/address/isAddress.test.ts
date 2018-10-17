import Address from "./Address";
import isAddress from "./isAddress";

test("checksum string", () => {
  const checksummed = "0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1";
  expect(isAddress(checksummed)).toBe(true);
});

test("non-checksum string", () => {
  const unchecked = "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1";
  expect(isAddress(unchecked)).toBe(true);
});

test("empty address", () => {
  const checksummed = "0x0000000000000000000000000000000000000000";
  expect(isAddress(checksummed)).toBe(true);
});

test("actual Address type", () => {
  const anAddress = new Address("0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1");
  expect(isAddress(anAddress)).toBe(true);
});

test("hex but not address length", () => {
  const aHex = "0xf00d";
  expect(isAddress(aHex)).toBe(false);
});

test("not hex", () => {
  const notHex = "0xg000000000000000000000000000000000000000";
  expect(isAddress(notHex)).toBe(false);
});

