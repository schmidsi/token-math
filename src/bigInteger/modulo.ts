import * as BN from "bn.js";
import BigInteger from "./BigInteger";

const modulo = (a: BigInteger, b: BigInteger): BigInteger => {
  if (typeof BigInt !== undefined) {
    return new BigInteger(BigInt(a.value) % BigInt(b.value));
  } else {
    return new BN(a).mod(b);
  }
};

export default modulo;
