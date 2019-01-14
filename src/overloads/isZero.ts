import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";
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
  if (isConvertableBigInteger(a)) {
    return isZeroBigInteger(a);
  }

  if (isQuantity(a)) {
    return isZeroQuantity(a);
  }

  throw new TypeError(`"isZero" not implemented for ${typeof a}`);
};

export default isZero;
