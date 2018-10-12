import * as BN from "bn.js";

/**
 * This is a super small helper class just to enable type safety
 * It stores its value as a string.
 *
 * This class is not intended to be enhanced or anything (since we are still strictly functional here)
 *
 * TODO: Remove dependency on BN.js.
 */
class BigInteger extends String {
  private readonly value: string;

  constructor(value: number | string | any) {
    if (value instanceof BigInteger || value instanceof BN) {
      super(value.toString());
      this.value = value.toString();
    } else if (typeof value === "string" && value.indexOf("0x") === 0) {
      const bn = new BN(value.slice(2), 16);
      super(bn.toString());
      this.value = bn.toString();
    } else {
      const bn = new BN(value.toString());
      super(bn.toString());
      this.value = bn.toString();
    }
  }
}

export default BigInteger;
