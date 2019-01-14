import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";
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
  if (
    isConvertableBigInteger(summands[0]) &&
    isConvertableBigInteger(summands[1])
  ) {
    return addBigInteger(...summands);
  }

  if (isQuantity(summands[0]) && isQuantity(summands[1])) {
    return addQuantity(...summands);
  }

  throw new TypeError(`"add" not implemented for ${typeof summands[0]}`);
};

export default add;
