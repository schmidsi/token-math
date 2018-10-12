import BigInteger from "./BigInteger";

import * as BN from "bn.js";

export const toBool = (
  method: string,
  a: BigInteger,
  b?: BigInteger
): boolean => {
  const bna = new BN(a.toString());
  const bnb = b && new BN(b.toString());
  return bna[method](bnb);
};

export const toBigInteger = (
  method: string,
  a: BigInteger,
  b: BigInteger
): BigInteger => {
  const bna = new BN(a.toString());
  const bnb = new BN(b.toString());
  const bnResult = bna[method](bnb);
  return new BigInteger(bnResult.toString());
};

export default {
  toBool,
  toBigInteger
};
