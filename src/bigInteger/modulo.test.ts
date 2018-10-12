import BigInteger from "./BigInteger";

import modulo from "./modulo";

test("modulo", () => {
  expect(modulo(new BigInteger(10), new BigInteger(3)).toString()).toBe("1");
});
