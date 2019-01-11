import BigInteger from "../bigInteger/BigInteger";
import { default as isZeroBigInteger } from "../bigInteger/isZero";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as isZeroQuantity } from "../quantity/isZero";

export type IsZero = {
  (a: BigInteger): boolean;
  (a: QuantityInterface): boolean;
};

const isZero: IsZero = (a: any): boolean => {
  if (a instanceof BigInteger) {
    return isZeroBigInteger(a);
  }

  if (isQuantity(a)) {
    return isZeroQuantity(a);
  }

  throw new TypeError(`"isZero" not implemented for ${typeof a}`);
};

export default isZero;
