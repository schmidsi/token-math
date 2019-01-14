import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import { default as isZeroBigInteger } from "../bigInteger/isZero";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as isZeroQuantity } from "../quantity/isZero";

export type IsZero = {
  (a: ConvertableBigInteger): boolean;
  (a: QuantityInterface): boolean;
};

const isZero: IsZero = (a: any): boolean => {
  if (isQuantity(a)) {
    return isZeroQuantity(a);
  }

  return isZeroBigInteger(a);
};

export default isZero;
