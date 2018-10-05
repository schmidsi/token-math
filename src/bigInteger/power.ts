import * as BN from "bn.js";
import BigInteger from "./BigInteger";

const power = (a: BigInteger, b: BigInteger): BigInteger => {
  if (typeof BigInt !== undefined) {
    return new BigInteger(BigInt(a.value) ** BigInt(b.value));
  } else {
    return new BN(a).pow(b);
  }
};

export default power;
