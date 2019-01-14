import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";
import { default as greaterThanBigInteger } from "../bigInteger/greaterThan";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as greaterThanQuantity } from "../quantity/greaterThan";

export type GreaterThan = {
  (a: ConvertableBigInteger, b: ConvertableBigInteger): boolean;
  (a: QuantityInterface, b: QuantityInterface): boolean;
};

const greaterThan: GreaterThan = (a: any, b: any): boolean => {
  if (isConvertableBigInteger(a) && isConvertableBigInteger(b)) {
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
