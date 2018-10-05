import * as BN from "bn.js";
import BigInteger from "./BigInteger";

const isEqual = (a: BigInteger, b: BigInteger): boolean => {
  if (typeof BigInt !== undefined) {
    return BigInt(a.value) === BigInt(b.value);
  } else {
    return new BN(a).eq(b);
  }
};

export default isEqual;
