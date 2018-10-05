import * as BN from "bn.js";
import BigInteger from "./BigInteger";

const subtract = (a: BigInteger, b: BigInteger): BigInteger => {
  if (typeof BigInt !== undefined) {
    return new BigInteger(BigInt(a.value) - BigInt(b.value));
  } else {
    return new BN(a).sub(b);
  }
};

export default subtract;
