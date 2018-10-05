import * as BN from "bn.js";

/**
 * This is a super small helper class just to enable type safety
 * It stores its value as a string.
 *
 * This class is not intended to be enhanced or anything (since we are still strictly functional here)
 *
 * TODO: Remove dependency on BN.js.
 */
class BigInteger {
  readonly value: string;

  constructor(value: number | string | BigInteger) {
    if (value instanceof BigInteger) {
      this.value = value.value;
    } else if (typeof value === "string" && value.indexOf("0x") === 0) {
      const bn = new BN(value.slice(2), 16);
      this.value = bn.toString();
    } else {
      const bn = new BN(value);
      this.value = bn.toString();
    }
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this.value;
  }
}

export default BigInteger;
