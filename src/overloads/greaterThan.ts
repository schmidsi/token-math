import BigInteger from "../bigInteger/BigInteger";
import { default as greaterThanBigInteger } from "../bigInteger/greaterThan";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as greaterThanQuantity } from "../quantity/greaterThan";

export type GreaterThan = {
  (a: BigInteger, b: BigInteger): boolean;
  (a: QuantityInterface, b: QuantityInterface): boolean;
};

const greaterThan: GreaterThan = (a: any, b: any): boolean => {
  if (a instanceof BigInteger && b instanceof BigInteger) {
    return greaterThanBigInteger(a, b);
  }

  if (isQuantity(a) && isQuantity(b)) {
    return greaterThanQuantity(a, b);
  }

  throw new TypeError(
    `"greaterThan" not implemented for ${typeof a}/${typeof b}`
  );
};

export default greaterThan;
