import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import { default as greaterThanBigInteger } from "../bigInteger/greaterThan";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as greaterThanQuantity } from "../quantity/greaterThan";

export type GreaterThan = {
  (a: ConvertableBigInteger, b: ConvertableBigInteger): boolean;
  (a: QuantityInterface, b: QuantityInterface): boolean;
};

const greaterThan: GreaterThan = (a: any, b: any): boolean => {
  if (isQuantity(a) && isQuantity(b)) {
    return greaterThanQuantity(a, b);
  }    
  
  return greaterThanBigInteger(a, b);
};

export default greaterThan;
