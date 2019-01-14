import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import BigInteger from "../bigInteger/BigInteger";
import { default as addBigInteger } from "../bigInteger/add";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as addQuantity } from "../quantity/add";

export type Add = {
  (...summands: ConvertableBigInteger[]): BigInteger;
  (...summands: QuantityInterface[]): QuantityInterface;
};

const add: Add = (...summands: any[]): any => {
  if (isQuantity(summands[0]) && isQuantity(summands[1])) {
    return addQuantity(...summands);
  }

  return addBigInteger(...summands);
};

export default add;
